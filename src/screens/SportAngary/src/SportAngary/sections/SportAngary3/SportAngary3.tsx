import { FrameSportAngary3 } from "./FrameSportAngary3/FrameSportAngary3";
import { FrameWrapperSportAngary3 } from "./FrameWrapperSportAngary3/FrameWrapperSportAngary3";
import { GroupWrapperSportAngary3 } from "./GroupWrapperSportAngary3/GroupWrapperSportAngary3";

export const SportAngary3 = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full-[1440px] h-[3741px] bg-white">

<section   className="flex flex-col w-[1543px] h-[576px] gap-[40px] mx-auto px-12">
        <FrameWrapperSportAngary3 />
        

        <section className="w-[1440px] h-[334px] rounded-[30px] relative">

<FrameSportAngary3 />
<img
  className="absolute w-[356px] h-[857px] right-0 bottom-0 blur-[35px] object-cover z-0"
  alt="Blue water splashing"
/>
</section>

<section className="flex flex-col w-[1440px] h-[412px] gap-[45px] mt-80 mx-auto top-[2890px]">
        <GroupWrapperSportAngary3 />
      </section>

      </section>
    </main>
  );
};

