import { FrameMembrannye7 } from "./FrameMembrannye7/FrameMembrannye7";
import { FrameWrapperMembrannye7 } from "./FrameWrapperMembrannye7/FrameWrapperMembrannye7";

export const Membrannye7 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[3478px] flex flex-col items-center gap-[25px] ">
      <FrameMembrannye7 />

      <FrameWrapperMembrannye7 />

      </div>
    </main>
  );
};
