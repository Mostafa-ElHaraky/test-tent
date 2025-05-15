import { FrameDlyaZagorodnyh8 } from "./FrameDlyaZagorodnyh8/FrameDlyaZagorodnyh8";
import { OverlapWrapperDlyaZagorodnyh8 } from "./OverlapWrapperDlyaZagorodnyh8/OverlapWrapperDlyaZagorodnyh8";

export const DlyaZagorodnyh8 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[1833px] flex flex-col items-center gap-[25px] ">
        <FrameDlyaZagorodnyh8 />
        <OverlapWrapperDlyaZagorodnyh8 />
      </div>
    </main>
  );
};
