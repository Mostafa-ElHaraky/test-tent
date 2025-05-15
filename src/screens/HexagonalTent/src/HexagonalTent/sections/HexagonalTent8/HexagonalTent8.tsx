import { FrameHexagonalTent8 } from "./FrameHexagonalTent8/FrameHexagonalTent8";
import { OverlapWrapperHexagonalTent8 } from "./OverlapWrapperHexagonalTent8/OverlapWrapperHexagonalTent8";

export const HexagonalTent8 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[1833px] flex flex-col items-center gap-[25px] ">
        <FrameHexagonalTent8 />
        <OverlapWrapperHexagonalTent8 />
      </div>
    </main>
  );
};
