import { FrameHexagonalTent7 } from "./FrameHexagonalTent7/FrameHexagonalTent7";
import { FrameWrapperHexagonalTent7 } from "./FrameWrapperHexagonalTent7/FrameWrapperHexagonalTent7";

export const HexagonalTent7 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[3478px] flex flex-col items-center gap-[25px] ">
      <FrameHexagonalTent7 />

      <FrameWrapperHexagonalTent7 />

      </div>
    </main>
  );
};
