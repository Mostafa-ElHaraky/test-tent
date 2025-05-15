import { FrameDlyaVremennyh6 } from "./FrameDlyaVremennyh6/FrameDlyaVremennyh6";
import { FrameWrapperDlyaVremennyh6 } from "./FrameWrapperDlyaVremennyh6/FrameWrapperDlyaVremennyh6";
import { GroupDlyaVremennyh6 } from "./GroupDlyaVremennyh6/GroupDlyaVremennyh6";

export const DlyaVremennyh6 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[25px] mt-[-110px] ">
        <FrameDlyaVremennyh6 />
        <FrameWrapperDlyaVremennyh6 />
        <GroupDlyaVremennyh6 />
      </div>
    </main>
  );
};
