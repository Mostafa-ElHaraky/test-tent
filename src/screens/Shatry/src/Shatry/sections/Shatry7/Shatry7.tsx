import { FrameShatry7 } from "./FrameShatry7/FrameShatry7";
import { FrameWrapperShatry7 } from "./FrameWrapperShatry7/FrameWrapperShatry7";

export const Shatry7 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[3478px] flex flex-col items-center gap-[25px] ">
      <FrameShatry7 />

      <FrameWrapperShatry7 />

      </div>
    </main>
  );
};
