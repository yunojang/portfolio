"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useMemo, useRef } from "react";
import * as echarts from "echarts";
import { Noto_Sans_KR } from "next/font/google";
import { Experience } from "./types/experience";

const noto = Noto_Sans_KR({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

interface ExperienceGraphProps {
  exps: Experience[];
}

type PinData = {
  start: number;
  end: number;
  name: string;
  type: Experience["type"];
  period: string;
  direction: "top" | "bottom";
  color: string;
};

const typeColor = (type: Experience["type"], name?: string) => {
  if (type === "event" && name === "2023 우수사원") {
    return "#0ea5e9"; // Events 별도 색상
  }
  switch (type) {
    case "career":
      return "#1d4ed8";
    case "edu":
      return "#0f766e";
    case "event":
      return "#9333ea";
    default:
      return "#475569";
  }
};

const formatPeriod = (start: Date, end: Date, type: Experience["type"]) => {
  const fmt = (d: Date) =>
    `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}`;
  if (type === "event") return fmt(start);
  return `${fmt(start)} - ${fmt(end)}`;
};

const ExperienceGraph = ({ exps }: ExperienceGraphProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const pins: PinData[] = useMemo(() => {
    const sorted = [...exps].sort(
      (a, b) => a.startDate.getTime() - b.startDate.getTime()
    );

    const MIN_GAP_RATIO = 0.03; // 3% of total span
    const minGapMs =
      sorted.length > 1
        ? (sorted[sorted.length - 1].endDate.getTime() -
            sorted[0].startDate.getTime()) *
          MIN_GAP_RATIO
        : 0;

    let lastTop = -Infinity;
    let lastBottom = -Infinity;

    return sorted.map((exp) => {
      const start = exp.startDate.getTime();
      const end = exp.endDate.getTime();
      const center = start === end ? start : (start + end) / 2;

      let direction: "top" | "bottom" = "top";
      if (center - lastTop < minGapMs) {
        direction = "bottom";
      }
      if (direction === "top") {
        lastTop = center;
      } else {
        if (center - lastBottom < minGapMs && center - lastTop >= minGapMs) {
          direction = "top";
          lastTop = center;
        } else {
          lastBottom = center;
        }
      }

      return {
        start,
        end,
        name: exp.name,
        type: exp.type,
        period: formatPeriod(exp.startDate, exp.endDate, exp.type),
        direction,
          color: typeColor(exp.type, exp.name),
        };
      });
  }, [exps]);

  const minStart = useMemo(
    () => Math.min(...pins.map((p) => p.start)),
    [pins]
  );
  const maxEnd = useMemo(() => {
    const max = Math.max(...pins.map((p) => p.end));
    const padding = 1000 * 60 * 60 * 24 * 30 * 3; // 3 months padding
    return max + padding;
  }, [pins]);

  const labelOffset = 54;
  const pinLength = 28;

  useEffect(() => {
    if (!containerRef.current) return;

    const chart = echarts.init(containerRef.current);

    const baseLine = {
      type: "custom",
      renderItem: (params: any, api: any) => {
        const startCoord = api.coord([minStart, 0]);
        const endCoord = api.coord([maxEnd, 0]);
        const h = 6;
        return {
          type: "rect",
          shape: {
            x: startCoord[0],
            y: api.coord([0, 0])[1] - h / 2,
            width: endCoord[0] - startCoord[0],
            height: h,
          },
          style: {
            fill: "#c7ccdd",
          },
        };
      },
      encode: { x: [0, 1] },
      data: [[minStart, maxEnd]],
      z: 0,
    };

    const renderBars = {
      type: "custom",
      renderItem: (params: any, api: any) => {
        const start = api.value(0);
        const end = api.value(1);
        const color = api.value(3);
        const startCoord = api.coord([start, 0]);
        const endCoord = api.coord([end, 0]);
        const barHeight = 6;
        return {
          type: "rect",
          shape: {
            x: startCoord[0],
            y: api.size([0, barHeight])[1] / -2 + api.coord([0, 0])[1],
            width: endCoord[0] - startCoord[0] || 4,
            height: barHeight,
          },
          style: {
            fill: color,
            opacity: 0.25,
          },
        };
      },
      encode: { x: [0, 1] },
      data: pins.map((p) => [p.start, p.end, 0, p.color]),
      z: 1,
    };

    const renderPins = {
      type: "custom",
      renderItem: (params: any, api: any) => {
        const start = api.value(0);
        const end = api.value(1);
        const name = api.value(2) as string;
        const period = api.value(3) as string;
        const direction = api.value(4) as "top" | "bottom";
        const color = api.value(5) as string;
        const isEvent = start === end;
        const x = api.coord([isEvent ? start : (start + end) / 2, 0])[0];
        const y = api.coord([0, 0])[1];

        const lineLen = pinLength;
        const lineStartY = y;
        const lineEndY = direction === "top" ? y - lineLen : y + lineLen;
        const labelY = direction === "top" ? y - labelOffset : y + labelOffset;

        return {
          type: "group",
          children: [
            {
              type: "line",
              shape: {
                x1: x,
                y1: lineStartY,
                x2: x,
                y2: lineEndY,
              },
              style: {
                stroke: color,
                lineWidth: 2,
              },
            },
            {
              type: "circle",
              shape: { cx: x, cy: y, r: 5 },
              style: { fill: color, stroke: "#fff", lineWidth: 1 },
            },
            {
              type: "rect",
              shape: {
                x: x - 92,
                y: labelY - 34,
                width: 184,
                height: 68,
                r: 8,
              },
              style: {
                fill: "#ffffff",
                stroke: "#e5e7eb",
                lineWidth: 1,
                shadowBlur: 6,
                shadowColor: "rgba(0,0,0,0.08)",
              },
            },
            {
              type: "text",
              style: {
                x: x,
                y: labelY - 10,
                text: typeLabel(api.value(6) as Experience["type"], name),
                textAlign: "center",
                textVerticalAlign: "middle",
                fontSize: 12,
                fontWeight: 700,
                fill: color,
              },
            },
            {
              type: "text",
              style: {
                x: x,
                y: labelY + 4,
                text: name,
                textAlign: "center",
                textVerticalAlign: "middle",
                fontSize: 12,
                fontWeight: 600,
                fill: "#0f172a",
              },
            },
            {
              type: "text",
              style: {
                x: x,
                y: labelY + 18,
                text: period,
                textAlign: "center",
                textVerticalAlign: "middle",
                fontSize: 11,
                fontWeight: 400,
                fill: "#6b7280",
              },
            },
          ],
        };
      },
      data: pins.map((p) => [
        p.start,
        p.end,
        p.name,
        p.period,
        p.direction,
        p.color,
        p.type,
      ]),
      z: 5,
    };

    chart.setOption({
      grid: { left: 20, right: 20, top: 10, bottom: 10 },
      xAxis: {
        type: "time",
        show: false,
        min: minStart,
        max: maxEnd,
      },
      yAxis: {
        type: "value",
        show: false,
        min: -1,
        max: 1,
      },
      tooltip: { show: false },
      series: [baseLine, renderBars, renderPins],
    });

    const handleResize = () => chart.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.dispose();
    };
  }, [pins, minStart, maxEnd]);

  return (
    <div className={`${noto.className} py-10`}>
      <div className="mb-6 px-4">
        <div className="text-lg font-semibold text-slate-800">Timeline</div>
        <div className="text-sm text-slate-500">Start date 기준 정렬</div>
      </div>
      <div className="h-[320px] w-full" ref={containerRef} />
    </div>
  );
};

export default ExperienceGraph;

const typeLabel = (type: Experience["type"], name?: string) => {
  if (type === "event" && name === "2023 우수사원") return "Events";
  switch (type) {
    case "career":
      return "Career";
    case "edu":
      return "Education";
    case "event":
      return "Certification";
    default:
      return type.toUpperCase();
  }
};
