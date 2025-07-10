"use client";
import React from "react";
import { DotLottiePlayer } from "@lottiefiles/dotlottie-react";

const LottieAnimation = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <DotLottiePlayer
        src="/animation1.lottie"
        autoplay
        loop
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default LottieAnimation;

//this is an lotte animation component that uses the @dotlottie/react-player package to render a Lottie animation.
//https://github.com/dotlottie/player-component/tree/master/packages/react-player
// see the documentation for more information on how to use it.
