import { FrameSferaTent8 } from "./FrameSferaTent8/FrameSferaTent8";
import { OverlapWrapperSferaTent8 } from "./OverlapWrapperSferaTent8/OverlapWrapperSferaTent8";

export const SferaTent8 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[1833px] flex flex-col items-center gap-[25px] ">
        <FrameSferaTent8 />
        <OverlapWrapperSferaTent8 />
      </div>
    </main>
  );
};
