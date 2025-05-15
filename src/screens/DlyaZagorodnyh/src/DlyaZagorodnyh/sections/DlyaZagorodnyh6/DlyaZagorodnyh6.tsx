import { FrameDlyaZagorodnyh6 } from "./FrameDlyaZagorodnyh6/FrameDlyaZagorodnyh6";
import { FrameWrapperDlyaZagorodnyh6 } from "./FrameWrapperDlyaZagorodnyh6/FrameWrapperDlyaZagorodnyh6";
import { GroupDlyaZagorodnyh6 } from "./GroupDlyaZagorodnyh6/GroupDlyaZagorodnyh6";

export const DlyaZagorodnyh6 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[25px] mt-[-110px] ">
        <FrameDlyaZagorodnyh6 />
        <FrameWrapperDlyaZagorodnyh6 />
        <GroupDlyaZagorodnyh6 />
      </div>
    </main>
  );
};
