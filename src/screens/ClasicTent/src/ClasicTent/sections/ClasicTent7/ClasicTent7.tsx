import { FrameClasicTent7 } from "./FrameClasicTent7/FrameClasicTent7";
import { FrameWrapperClasicTent7 } from "./FrameWrapperClasicTent7/FrameWrapperClasicTent7";

export const ClasicTent7 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[3478px] flex flex-col items-center gap-[25px] ">
      <FrameClasicTent7 />

      <FrameWrapperClasicTent7 />

      </div>
    </main>
  );
};
