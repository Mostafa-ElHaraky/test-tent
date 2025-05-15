import { FrameAngary8 } from "./FrameAngary8/FrameAngary8";
import { OverlapWrapperAngary8 } from "./OverlapWrapperAngary8/OverlapWrapperAngary8";

export const Angary8 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[1833px] flex flex-col items-center gap-[25px] ">
        <FrameAngary8 />
        <OverlapWrapperAngary8 />
      </div>
    </main>
  );
};
