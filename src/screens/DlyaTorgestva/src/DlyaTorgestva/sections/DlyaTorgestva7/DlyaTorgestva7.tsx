import { FrameDlyaTorgestva7 } from "./FrameDlyaTorgestva7/FrameDlyaTorgestva7";
import { FrameWrapperDlyaTorgestva7 } from "./FrameWrapperDlyaTorgestva7/FrameWrapperDlyaTorgestva7";

export const DlyaTorgestva7 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[3478px] flex flex-col items-center gap-[25px] ">
      <FrameDlyaTorgestva7 />

      <FrameWrapperDlyaTorgestva7 />

      </div>
    </main>
  );
};
