import { FrameMobilnye7 } from "./FrameMobilnye7/FrameMobilnye7";
import { FrameWrapperMobilnye7 } from "./FrameWrapperMobilnye7/FrameWrapperMobilnye7";

export const Mobilnye7 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[3478px] flex flex-col items-center gap-[25px] ">
      <FrameMobilnye7 />

      <FrameWrapperMobilnye7 />

      </div>
    </main>
  );
};
