import { FrameDlyaTorgestva3 } from "./FrameDlyaTorgestva3/FrameDlyaTorgestva3";
import { FrameWrapperDlyaTorgestva3 } from "./FrameWrapperDlyaTorgestva3/FrameWrapperDlyaTorgestva3";
import { GroupWrapperDlyaTorgestva3 } from "./GroupWrapperDlyaTorgestva3/GroupWrapperDlyaTorgestva3";

export const DlyaTorgestva3 = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full-[1440px] h-[3302px] bg-white">

<section   className="flex flex-col w-[1543px] h-[576px] gap-[40px] mx-auto px-12">
        <FrameWrapperDlyaTorgestva3 />
        

        <section className="w-[1440px] h-[334px] rounded-[30px] relative">

<FrameDlyaTorgestva3 />
<img
  className="absolute w-[356px] h-[857px] right-0 bottom-0 blur-[35px] object-cover z-0"
  alt="Blue water splashing"
/>
</section>

<section className="flex flex-col w-[1440px] h-[412px] gap-[45px] mt-80 mx-auto top-[2890px]">
        <GroupWrapperDlyaTorgestva3 />
      </section>

      </section>
    </main>
  );
};

