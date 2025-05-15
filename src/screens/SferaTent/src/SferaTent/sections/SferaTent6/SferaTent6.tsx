import { FrameSferaTent6 } from "./FrameSferaTent6/FrameSferaTent6";
import { FrameWrapperSferaTent6 } from "./FrameWrapperSferaTent6/FrameWrapperSferaTent6";
import { GroupSferaTent6 } from "./GroupSferaTent6/GroupSferaTent6";

export const SferaTent6 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[25px] mt-[-110px] ">
        <FrameSferaTent6 />
        <FrameWrapperSferaTent6 />
        <GroupSferaTent6 />
      </div>
    </main>
  );
};
