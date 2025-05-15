import { FrameAngary6 } from "./FrameAngary6/FrameAngary6";
import { FrameWrapperAngary6 } from "./FrameWrapperAngary6/FrameWrapperAngary6";
import { GroupAngary6 } from "./GroupAngary6/GroupAngary6";

export const Angary6 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[25px] mt-[-110px] ">
        <FrameAngary6 />
        <FrameWrapperAngary6 />
        <GroupAngary6 />
      </div>
    </main>
  );
};
