"use client";
import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const LottieAnimation = () => {
  return (
    <DotLottiePlayer src="/animation1.lottie" autoplay loop></DotLottiePlayer>
  );
};

export default LottieAnimation;

//this is an lotte animation component that uses the @dotlottie/react-player package to render a Lottie animation.
//https://github.com/dotlottie/player-component/tree/master/packages/react-player
// see the documentation for more information on how to use it.
