import { FrameDlyaSport6 } from "./FrameDlyaSport6/FrameDlyaSport6";
import { FrameWrapperDlyaSport6 } from "./FrameWrapperDlyaSport6/FrameWrapperDlyaSport6";
import { GroupDlyaSport6 } from "./GroupDlyaSport6/GroupDlyaSport6";

export const DlyaSport6 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[25px] mt-[-110px] ">
        <FrameDlyaSport6 />
        <FrameWrapperDlyaSport6 />
        <GroupDlyaSport6 />
      </div>
    </main>
  );
};
