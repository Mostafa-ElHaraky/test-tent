import { FrameDlyaVremennyh7 } from "./FrameDlyaVremennyh7/FrameDlyaVremennyh7";
import { FrameWrapperDlyaVremennyh7 } from "./FrameWrapperDlyaVremennyh7/FrameWrapperDlyaVremennyh7";

export const DlyaVremennyh7 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[3478px] flex flex-col items-center gap-[25px] ">
      <FrameDlyaVremennyh7 />

      <FrameWrapperDlyaVremennyh7 />

      </div>
    </main>
  );
};
