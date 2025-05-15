import { FrameSportAngary8 } from "./FrameSportAngary8/FrameSportAngary8";
import { OverlapWrapperSportAngary8 } from "./OverlapWrapperSportAngary8/OverlapWrapperSportAngary8";

export const SportAngary8 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[1833px] flex flex-col items-center gap-[25px] ">
        <FrameSportAngary8 />
        <OverlapWrapperSportAngary8 />
      </div>
    </main>
  );
};
