import { FrameSportPergoly3 } from "./FrameSportPergoly3/FrameSportPergoly3";
import { FrameWrapperSportPergoly3 } from "./FrameWrapperSportPergoly3/FrameWrapperSportPergoly3";
import { GroupWrapperSportPergoly3 } from "./GroupWrapperSportPergoly3/GroupWrapperSportPergoly3";

export const SportPergoly3 = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full-[1440px] h-[3302px] bg-white">

<section   className="flex flex-col w-[1543px] h-[576px] gap-[40px] mx-auto px-12">
        <FrameWrapperSportPergoly3 />
        

        <section className="w-[1440px] h-[334px] rounded-[30px] relative">

<FrameSportPergoly3 />
<img
  className="absolute w-[356px] h-[857px] right-0 bottom-0 blur-[35px] object-cover z-0"
  alt="Blue water splashing"
/>
</section>

<section className="flex flex-col w-[1440px] h-[412px] gap-[45px] mt-80 mx-auto top-[2890px]">
        <GroupWrapperSportPergoly3 />
      </section>

      </section>
    </main>
  );
};

