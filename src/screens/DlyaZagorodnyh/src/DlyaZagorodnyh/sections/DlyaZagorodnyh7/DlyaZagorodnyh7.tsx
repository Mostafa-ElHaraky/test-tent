import { FrameDlyaZagorodnyh7 } from "./FrameDlyaZagorodnyh7/FrameDlyaZagorodnyh7";
import { FrameWrapperDlyaZagorodnyh7 } from "./FrameWrapperDlyaZagorodnyh7/FrameWrapperDlyaZagorodnyh7";

export const DlyaZagorodnyh7 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[3478px] flex flex-col items-center gap-[25px] ">
      <FrameDlyaZagorodnyh7 />

      <FrameWrapperDlyaZagorodnyh7 />

      </div>
    </main>
  );
};
