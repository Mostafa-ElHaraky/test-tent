import { FrameSportAngary7 } from "./FrameSportAngary7/FrameSportAngary7";
import { FrameWrapperSportAngary7 } from "./FrameWrapperSportAngary7/FrameWrapperSportAngary7";

export const SportAngary7 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[3478px] flex flex-col items-center gap-[25px] ">
      <FrameSportAngary7 />

      <FrameWrapperSportAngary7 />

      </div>
    </main>
  );
};
