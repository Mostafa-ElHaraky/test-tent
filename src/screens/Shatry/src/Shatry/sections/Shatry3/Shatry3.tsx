import { FrameShatry3 } from "./FrameShatry3/FrameShatry3";
import { FrameWrapperShatry3 } from "./FrameWrapperShatry3/FrameWrapperShatry3";
import { GroupWrapperShatry3 } from "./GroupWrapperShatry3/GroupWrapperShatry3";

export const Shatry3 = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full-[1440px] h-[3741px] bg-white">

<section   className="flex flex-col w-[1543px] h-[576px] gap-[40px] mx-auto px-12">
        <FrameWrapperShatry3 />
        

        <section className="w-[1440px] h-[334px] rounded-[30px] relative">

<FrameShatry3 />
<img
  className="absolute w-[356px] h-[857px] right-0 bottom-0 blur-[35px] object-cover z-0"
  alt="Blue water splashing"
/>
</section>

<section className="flex flex-col w-[1440px] h-[412px] gap-[45px] mt-80 mx-auto top-[2890px]">
        <GroupWrapperShatry3 />
      </section>

      </section>
    </main>
  );
};

