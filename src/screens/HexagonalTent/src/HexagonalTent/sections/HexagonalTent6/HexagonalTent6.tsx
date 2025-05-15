import { FrameHexagonalTent6 } from "./FrameHexagonalTent6/FrameHexagonalTent6";
import { FrameWrapperHexagonalTent6 } from "./FrameWrapperHexagonalTent6/FrameWrapperHexagonalTent6";
import { GroupHexagonalTent6 } from "./GroupHexagonalTent6/GroupHexagonalTent6";

export const HexagonalTent6 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[25px] mt-[-110px] ">
        <FrameHexagonalTent6 />
        <FrameWrapperHexagonalTent6 />
        <GroupHexagonalTent6 />
      </div>
    </main>
  );
};
