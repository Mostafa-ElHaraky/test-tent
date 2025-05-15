import { FrameSferaTent3 } from "./FrameSferaTent3/FrameSferaTent3";
import { FrameWrapperSferaTent3 } from "./FrameWrapperSferaTent3/FrameWrapperSferaTent3";
import { GroupWrapperSferaTent3 } from "./GroupWrapperSferaTent3/GroupWrapperSferaTent3";

export const SferaTent3 = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full-[1440px] h-[3302px] bg-white">

<section   className="flex flex-col w-[1543px] h-[576px] gap-[40px] mx-auto px-12">
        <FrameWrapperSferaTent3 />
        

        <section className="w-[1440px] h-[334px] rounded-[30px] relative">

<FrameSferaTent3 />
<img
  className="absolute w-[356px] h-[857px] right-0 bottom-0 blur-[35px] object-cover z-0"
  alt="Blue water splashing"
/>
</section>

<section className="flex flex-col w-[1440px] h-[412px] gap-[45px] mt-80 mx-auto top-[2890px]">
        <GroupWrapperSferaTent3 />
      </section>

      </section>
    </main>
  );
};

