import { FrameClasicTent3 } from "./FrameClasicTent3/FrameClasicTent3";
import { FrameWrapperClasicTent3 } from "./FrameWrapperClasicTent3/FrameWrapperClasicTent3";
import { GroupWrapperClasicTent3 } from "./GroupWrapperClasicTent3/GroupWrapperClasicTent3";

export const ClasicTent3 = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full-[1440px] h-[3302px] bg-white">

<section   className="flex flex-col w-[1543px] h-[576px] gap-[40px] mx-auto px-12">
        <FrameWrapperClasicTent3 />
        

        <section className="w-[1440px] h-[334px] rounded-[30px] relative">

<FrameClasicTent3 />
<img
  className="absolute w-[356px] h-[857px] right-0 bottom-0 blur-[35px] object-cover z-0"
  alt="Blue water splashing"
/>
</section>

<section className="flex flex-col w-[1440px] h-[412px] gap-[45px] mt-80 mx-auto top-[2890px]">
        <GroupWrapperClasicTent3 />
      </section>

      </section>
    </main>
  );
};

