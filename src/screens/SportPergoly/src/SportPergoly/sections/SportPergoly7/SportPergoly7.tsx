import { FrameSportPergoly7 } from "./FrameSportPergoly7/FrameSportPergoly7";
import { FrameWrapperSportPergoly7 } from "./FrameWrapperSportPergoly7/FrameWrapperSportPergoly7";

export const SportPergoly7 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[3478px] flex flex-col items-center gap-[25px] ">
      <FrameSportPergoly7 />

      <FrameWrapperSportPergoly7 />

      </div>
    </main>
  );
};
