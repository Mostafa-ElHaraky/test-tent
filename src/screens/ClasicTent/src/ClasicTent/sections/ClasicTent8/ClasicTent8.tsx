import { FrameClasicTent8 } from "./FrameClasicTent8/FrameClasicTent8";
import { OverlapWrapperClasicTent8 } from "./OverlapWrapperClasicTent8/OverlapWrapperClasicTent8";

export const ClasicTent8 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[1833px] flex flex-col items-center gap-[25px] ">
        <FrameClasicTent8 />
        <OverlapWrapperClasicTent8 />
      </div>
    </main>
  );
};
