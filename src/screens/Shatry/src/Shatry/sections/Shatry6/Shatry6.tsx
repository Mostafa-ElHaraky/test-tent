import { FrameShatry6 } from "./FrameShatry6/FrameShatry6";
import { FrameWrapperShatry6 } from "./FrameWrapperShatry6/FrameWrapperShatry6";
import { GroupShatry6 } from "./GroupShatry6/GroupShatry6";

export const Shatry6 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[25px] mt-[-110px] ">
        <FrameShatry6 />
        <FrameWrapperShatry6 />
        <GroupShatry6 />
      </div>
    </main>
  );
};
