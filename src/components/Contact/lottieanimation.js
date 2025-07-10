"use client";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const LottieAnimation = () => {
  return (
    <Player
      autoplay
      loop
      src="/animation1.lottie"
      style={{ height: "300px", width: "300px" }}
    />
  );
};

export default LottieAnimation;
