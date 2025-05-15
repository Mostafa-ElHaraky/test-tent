import { FrameArochnye8 } from "./FrameArochnye8/FrameArochnye8";
import { OverlapWrapperArochnye8 } from "./OverlapWrapperArochnye8/OverlapWrapperArochnye8";

export const Arochnye8 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[1833px] flex flex-col items-center gap-[25px] ">
        <FrameArochnye8 />
        <OverlapWrapperArochnye8 />
      </div>
    </main>
  );
};
