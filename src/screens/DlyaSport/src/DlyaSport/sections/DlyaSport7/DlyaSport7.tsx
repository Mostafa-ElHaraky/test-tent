import { FrameDlyaSport7 } from "./FrameDlyaSport7/FrameDlyaSport7";
import { FrameWrapperDlyaSport7 } from "./FrameWrapperDlyaSport7/FrameWrapperDlyaSport7";

export const DlyaSport7 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[3478px] flex flex-col items-center gap-[25px] ">
      <FrameDlyaSport7 />

      <FrameWrapperDlyaSport7 />

      </div>
    </main>
  );
};
