import { FrameDlyaSport8 } from "./FrameDlyaSport8/FrameDlyaSport8";
import { OverlapWrapperDlyaSport8 } from "./OverlapWrapperDlyaSport8/OverlapWrapperDlyaSport8";

export const DlyaSport8 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[1833px] flex flex-col items-center gap-[25px] ">
        <FrameDlyaSport8 />
        <OverlapWrapperDlyaSport8 />
      </div>
    </main>
  );
};
