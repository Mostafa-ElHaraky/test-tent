import { FrameDlyaZagorodnyh3 } from "./FrameDlyaZagorodnyh3/FrameDlyaZagorodnyh3";
import { FrameWrapperDlyaZagorodnyh3 } from "./FrameWrapperDlyaZagorodnyh3/FrameWrapperDlyaZagorodnyh3";
import { GroupWrapperDlyaZagorodnyh3 } from "./GroupWrapperDlyaZagorodnyh3/GroupWrapperDlyaZagorodnyh3";

export const DlyaZagorodnyh3 = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full-[1440px] h-[3302px] bg-white">

<section   className="flex flex-col w-[1543px] h-[576px] gap-[40px] mx-auto px-12">
        <FrameWrapperDlyaZagorodnyh3 />
        

        <section className="w-[1440px] h-[334px] rounded-[30px] relative">

<FrameDlyaZagorodnyh3 />
<img
  className="absolute w-[356px] h-[857px] right-0 bottom-0 blur-[35px] object-cover z-0"
  alt="Blue water splashing"
/>
</section>

<section className="flex flex-col w-[1440px] h-[412px] gap-[45px] mt-80 mx-auto top-[2890px]">
        <GroupWrapperDlyaZagorodnyh3 />
      </section>

      </section>
    </main>
  );
};

