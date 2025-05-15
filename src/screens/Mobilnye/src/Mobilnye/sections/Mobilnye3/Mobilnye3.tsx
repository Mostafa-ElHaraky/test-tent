import { FrameMobilnye3 } from "./FrameMobilnye3/FrameMobilnye3";
import { FrameWrapperMobilnye3 } from "./FrameWrapperMobilnye3/FrameWrapperMobilnye3";
import { GroupWrapperMobilnye3 } from "./GroupWrapperMobilnye3/GroupWrapperMobilnye3";

export const Mobilnye3 = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full-[1440px] h-[3302px] bg-white">

<section   className="flex flex-col w-[1543px] h-[576px] gap-[40px] mx-auto px-12">
        <FrameWrapperMobilnye3 />
        

        <section className="w-[1440px] h-[334px] rounded-[30px] relative">

<FrameMobilnye3 />
<img
  className="absolute w-[356px] h-[857px] right-0 bottom-0 blur-[35px] object-cover z-0"
  alt="Blue water splashing"
/>
</section>

<section className="flex flex-col w-[1440px] h-[412px] gap-[45px] mt-80 mx-auto top-[2890px]">
        <GroupWrapperMobilnye3 />
      </section>

      </section>
    </main>
  );
};

