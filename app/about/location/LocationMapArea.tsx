"use client";

import { FC } from "react";

import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";

import { FaMapPin } from "react-icons/fa";
import { Circle } from "./components/Circle";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";

type LocationMapProps = Record<string, never>;

const LocationMap: FC<LocationMapProps> = () => {
  useGSAP(() => {
    gsap
      .timeline()
      .from(".map-cover", { opacity: 0, duration: 1.5 })
      .from(".location-pin", { x: "-200%" }, "-=1");
  });

  if (!process.env.NEXT_PUBLIC_MAP_APIKEY) return;

  return (
    <APIProvider
      apiKey={process.env.NEXT_PUBLIC_MAP_APIKEY ?? ""}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <div className="w-fit mx-auto">
        <div className="map-cover relative w-[50em] h-[29.5em] rounded-2xl overflow-hidden">
          <div className="inner w-full h-full">
            <Map
              defaultZoom={13.5}
              defaultCenter={{ lat: 37.48886, lng: 127.0108 }}
              disableDefaultUI
              onCameraChanged={(ev: MapCameraChangedEvent) =>
                console.log(
                  "camera changed:",
                  ev.detail.center,
                  "zoom:",
                  ev.detail.zoom
                )
              }
            >
              <Circle
                radius={900}
                center={{ lat: 37.48886, lng: 127.0108 }}
                strokeColor={"#8ce434"}
                strokeOpacity={1}
                strokeWeight={1}
                fillColor={"#84ff00"}
                fillOpacity={0.4}
              />
            </Map>
          </div>

          <div className="location-pin absolute bottom-3 left-4 px-4 py-1.5 rounded-full bg-white flex items-center gap-2 text-lg">
            {/* pin */}
            <FaMapPin color="#f75858" />
            서초구 Seoul, Korea
          </div>
        </div>
      </div>
    </APIProvider>
  );
};

export default LocationMap;
