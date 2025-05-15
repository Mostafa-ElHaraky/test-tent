import { FrameSportAngary6 } from "./FrameSportAngary6/FrameSportAngary6";
import { FrameWrapperSportAngary6 } from "./FrameWrapperSportAngary6/FrameWrapperSportAngary6";
import { GroupSportAngary6 } from "./GroupSportAngary6/GroupSportAngary6";

export const SportAngary6 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[25px] mt-[-110px] ">
        <FrameSportAngary6 />
        <FrameWrapperSportAngary6 />
        <GroupSportAngary6 />
      </div>
    </main>
  );
};
