import { FrameMembrannye8 } from "./FrameMembrannye8/FrameMembrannye8";
import { OverlapWrapperMembrannye8 } from "./OverlapWrapperMembrannye8/OverlapWrapperMembrannye8";

export const Membrannye8 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[1833px] flex flex-col items-center gap-[25px] ">
        <FrameMembrannye8 />
        <OverlapWrapperMembrannye8 />
      </div>
    </main>
  );
};
