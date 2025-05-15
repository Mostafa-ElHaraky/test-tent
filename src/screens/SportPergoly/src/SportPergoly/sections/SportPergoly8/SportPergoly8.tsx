import { FrameSportPergoly8 } from "./FrameSportPergoly8/FrameSportPergoly8";
import { OverlapWrapperSportPergoly8 } from "./OverlapWrapperSportPergoly8/OverlapWrapperSportPergoly8";

export const SportPergoly8 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[1833px] flex flex-col items-center gap-[25px] ">
        <FrameSportPergoly8 />
        <OverlapWrapperSportPergoly8 />
      </div>
    </main>
  );
};
