import { FrameArochnye7 } from "./FrameArochnye7/FrameArochnye7";
import { FrameWrapperArochnye7 } from "./FrameWrapperArochnye7/FrameWrapperArochnye7";

export const Arochnye7 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[3478px] flex flex-col items-center gap-[25px] ">
      <FrameArochnye7 />

      <FrameWrapperArochnye7 />

      </div>
    </main>
  );
};
