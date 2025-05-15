import { FrameAngary3 } from "./FrameAngary3/FrameAngary3";
import { FrameWrapperAngary3 } from "./FrameWrapperAngary3/FrameWrapperAngary3";
import { GroupWrapperAngary3 } from "./GroupWrapperAngary3/GroupWrapperAngary3";

export const Angary3 = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full-[1440px] h-[3741px] bg-white">

<section   className="flex flex-col w-[1543px] h-[576px] gap-[40px] mx-auto px-12">
        <FrameWrapperAngary3 />
        

        <section className="w-[1440px] h-[334px] rounded-[30px] relative">

<FrameAngary3 />
<img
  className="absolute w-[356px] h-[857px] right-0 bottom-0 blur-[35px] object-cover z-0"
  alt="Blue water splashing"
/>
</section>

<section className="flex flex-col w-[1440px] h-[412px] gap-[45px] mt-80 mx-auto top-[2890px]">
        <GroupWrapperAngary3 />
      </section>

      </section>
    </main>
  );
};

