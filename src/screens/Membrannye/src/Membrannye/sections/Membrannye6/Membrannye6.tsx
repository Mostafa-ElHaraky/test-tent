import { FrameMembrannye6 } from "./FrameMembrannye6/FrameMembrannye6";
import { FrameWrapperMembrannye6 } from "./FrameWrapperMembrannye6/FrameWrapperMembrannye6";
import { GroupMembrannye6 } from "./GroupMembrannye6/GroupMembrannye6";

export const Membrannye6 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[25px] mt-[-110px] ">
        <FrameMembrannye6 />
        <FrameWrapperMembrannye6 />
        <GroupMembrannye6 />
      </div>
    </main>
  );
};
