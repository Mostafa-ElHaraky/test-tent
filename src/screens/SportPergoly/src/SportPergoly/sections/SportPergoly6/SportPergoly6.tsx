import { FrameSportPergoly6 } from "./FrameSportPergoly6/FrameSportPergoly6";
import { FrameWrapperSportPergoly6 } from "./FrameWrapperSportPergoly6/FrameWrapperSportPergoly6";
import { GroupSportPergoly6 } from "./GroupSportPergoly6/GroupSportPergoly6";

export const SportPergoly6 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[25px] mt-[-110px] ">
        <FrameSportPergoly6 />
        <FrameWrapperSportPergoly6 />
        <GroupSportPergoly6 />
      </div>
    </main>
  );
};
