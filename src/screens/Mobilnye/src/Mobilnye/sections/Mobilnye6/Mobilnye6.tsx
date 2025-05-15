import { FrameMobilnye6 } from "./FrameMobilnye6/FrameMobilnye6";
import { FrameWrapperMobilnye6 } from "./FrameWrapperMobilnye6/FrameWrapperMobilnye6";
import { GroupMobilnye6 } from "./GroupMobilnye6/GroupMobilnye6";

export const Mobilnye6 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[25px] mt-[-110px] ">
        <FrameMobilnye6 />
        <FrameWrapperMobilnye6 />
        <GroupMobilnye6 />
      </div>
    </main>
  );
};
