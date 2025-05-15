import { FrameClasicTent6 } from "./FrameClasicTent6/FrameClasicTent6";
import { FrameWrapperClasicTent6 } from "./FrameWrapperClasicTent6/FrameWrapperClasicTent6";
import { GroupClasicTent6 } from "./GroupClasicTent6/GroupClasicTent6";

export const ClasicTent6 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[25px] mt-[-110px] ">
        <FrameClasicTent6 />
        <FrameWrapperClasicTent6 />
        <GroupClasicTent6 />
      </div>
    </main>
  );
};
