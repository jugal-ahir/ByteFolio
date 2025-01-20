import React from "react";
import dynamic from "next/dynamic";

type Props = {
  animationPath: string;
};

// Dynamically import react-lottie to disable server-side rendering
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const GreetingLottie = ({ animationPath }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath, // Provide the animation JSON object or path here
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div onClick={() => null}>
      {/* Lottie animation */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
