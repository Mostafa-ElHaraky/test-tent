import { FrameAngary7 } from "./FrameAngary7/FrameAngary7";
import { FrameWrapperAngary7 } from "./FrameWrapperAngary7/FrameWrapperAngary7";

export const Angary7 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[3478px] flex flex-col items-center gap-[25px] ">
      <FrameAngary7 />

      <FrameWrapperAngary7 />

      </div>
    </main>
  );
};
