import { FrameDlyaTorgestva6 } from "./FrameDlyaTorgestva6/FrameDlyaTorgestva6";
import { FrameWrapperDlyaTorgestva6 } from "./FrameWrapperDlyaTorgestva6/FrameWrapperDlyaTorgestva6";
import { GroupDlyaTorgestva6 } from "./GroupDlyaTorgestva6/GroupDlyaTorgestva6";

export const DlyaTorgestva6 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[25px] mt-[-110px] ">
        <FrameDlyaTorgestva6 />
        <FrameWrapperDlyaTorgestva6 />
        <GroupDlyaTorgestva6 />
      </div>
    </main>
  );
};
