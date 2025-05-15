import { FrameMembrannye3 } from "./FrameMembrannye3/FrameMembrannye3";
import { FrameWrapperMembrannye3 } from "./FrameWrapperMembrannye3/FrameWrapperMembrannye3";
import { GroupWrapperMembrannye3 } from "./GroupWrapperMembrannye3/GroupWrapperMembrannye3";

export const Membrannye3 = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full-[1440px] h-[3302px] bg-white">

<section   className="flex flex-col w-[1543px] h-[576px] gap-[40px] mx-auto px-12">
        <FrameWrapperMembrannye3 />
        

        <section className="w-[1440px] h-[334px] rounded-[30px] relative">

<FrameMembrannye3 />
<img
  className="absolute w-[356px] h-[857px] right-0 bottom-0 blur-[35px] object-cover z-0"
  alt="Blue water splashing"
/>
</section>

<section className="flex flex-col w-[1440px] h-[412px] gap-[45px] mt-80 mx-auto top-[2890px]">
        <GroupWrapperMembrannye3 />
      </section>

      </section>
    </main>
  );
};

