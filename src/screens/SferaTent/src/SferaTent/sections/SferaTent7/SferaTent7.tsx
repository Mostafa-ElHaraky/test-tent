import { FrameSferaTent7 } from "./FrameSferaTent7/FrameSferaTent7";
import { FrameWrapperSferaTent7 } from "./FrameWrapperSferaTent7/FrameWrapperSferaTent7";

export const SferaTent7 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[3478px] flex flex-col items-center gap-[25px] ">
      <FrameSferaTent7 />

      <FrameWrapperSferaTent7 />

      </div>
    </main>
  );
};
