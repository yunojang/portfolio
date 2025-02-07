"use client";

import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    const scroller = new Scroller(0.0000825, 180, 18.5);
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      scroller.reduce(e.deltaY * 0.02);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // test once
  // useEffect(() => {
  //   const scroller = new Scroller(0.01);

  //   setTimeout(() => {
  //     scroller.reduce(10);
  //   }, 1000);
  // }, []);

  return null;
};

export default SmoothScroll;

class Scroller {
  // changable value
  private _reducedAmount: number = 0;
  private _frameCounter: number = 50;

  //getter
  private get isScrolling() {
    return Math.abs(this._reducedAmount) > 0;
  }

  // setter
  private set reducedAmount(v: number) {
    if (Math.abs(this._reducedAmount + v) < 0.05) {
      this._reducedAmount = 0;
      this.initCounter();
    } else {
      this._reducedAmount = Math.min(
        this._maxValue,
        Math.max(-this._maxValue, v)
      );
    }
  }

  constructor(
    private _decreaseRatio: number = 0.001,
    private _maxFrames: number = 100,
    private _maxValue: number = 25
  ) {
    this.initCounter();
    this.logDatas("constructor");
  }

  private logDatas = (label?: string) => {
    // console.log(label, {
    //   amount: this._reducedAmount,
    //   counter: this._frameCounter,
    // });
  };

  private initCounter = () => {
    this._frameCounter = this._maxFrames;
  };

  public reduce(amount: number) {
    // 새로 reduce 될 때 카운터 초기화
    this.initCounter();

    // 방향 전환하는 경우
    if (
      // 양수로 진행 중, 음수 이동
      (this._reducedAmount > 0 && amount < 0) ||
      // 음수로 진행 중, 양수 이동
      (this._reducedAmount < 0 && amount > 0)
    ) {
      this.reducedAmount = 0;
    }

    // run animation
    if (!this.isScrolling) this.startScroll();

    // reduce value // 이미 스크롤중일때는 값만 더함
    this.reducedAmount = this._reducedAmount + amount;
    // log
    this.logDatas("reduce");
  }

  private startScroll() {
    const frame = () => {
      this.moveScrollPerFrame();

      // logs
      if (this._frameCounter % 5 == 0) {
        this.logDatas("frame");
      }

      --this._frameCounter;

      // amount가 0이상, counter가 남은 경우 반복하기
      if (Math.abs(this._reducedAmount) > 0 && this._frameCounter > 0) {
        window.requestAnimationFrame(frame);
      } else {
        this.end();
      }
    };

    window.requestAnimationFrame(frame);
  }

  private end = () => {
    this.initCounter();
    this.reducedAmount = 0;

    this.logDatas("end");
  };

  private moveScrollPerFrame() {
    // move real scroll
    Scroller.moveScroll(this._reducedAmount);
    // decrease amount
    this.decreaseAmountPerFrame();
  }

  private decreaseAmountPerFrame() {
    const progressFrame = this._maxFrames - this._frameCounter;
    // decrease
    this.reducedAmount =
      this._reducedAmount *
      Math.exp(-this._decreaseRatio * (progressFrame * 10));
  }

  public static moveScroll(amount: number) {
    window.scrollBy({
      top: amount,
      // behavior: "smooth",
    });
  }
}
