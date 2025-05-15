import { FrameMobilnye8 } from "./FrameMobilnye8/FrameMobilnye8";
import { OverlapWrapperMobilnye8 } from "./OverlapWrapperMobilnye8/OverlapWrapperMobilnye8";

export const Mobilnye8 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[1833px] flex flex-col items-center gap-[25px] ">
        <FrameMobilnye8 />
        <OverlapWrapperMobilnye8 />
      </div>
    </main>
  );
};
