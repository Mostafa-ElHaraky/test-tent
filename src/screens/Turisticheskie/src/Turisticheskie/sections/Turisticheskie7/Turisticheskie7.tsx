import { FrameTuristicheskie7 } from "./FrameTuristicheskie7/FrameTuristicheskie7";
import { FrameWrapperTuristicheskie7 } from "./FrameWrapperTuristicheskie7/FrameWrapperTuristicheskie7";

export const Turisticheskie7 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[3478px] flex flex-col items-center gap-[25px] ">
      <FrameTuristicheskie7 />

      <FrameWrapperTuristicheskie7 />

      </div>
    </main>
  );
};
