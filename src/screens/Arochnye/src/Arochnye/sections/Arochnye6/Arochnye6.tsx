import { FrameArochnye6 } from "./FrameArochnye6/FrameArochnye6";
import { FrameWrapperArochnye6 } from "./FrameWrapperArochnye6/FrameWrapperArochnye6";
import { GroupArochnye6 } from "./GroupArochnye6/GroupArochnye6";

export const Arochnye6 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[25px] mt-[-110px] ">
        <FrameArochnye6 />
        <FrameWrapperArochnye6 />
        <GroupArochnye6 />
      </div>
    </main>
  );
};
