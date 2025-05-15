import { FrameDlyaVremennyh3 } from "./FrameDlyaVremennyh3/FrameDlyaVremennyh3";
import { FrameWrapperDlyaVremennyh3 } from "./FrameWrapperDlyaVremennyh3/FrameWrapperDlyaVremennyh3";
import { GroupWrapperDlyaVremennyh3 } from "./GroupWrapperDlyaVremennyh3/GroupWrapperDlyaVremennyh3";

export const DlyaVremennyh3 = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full-[1440px] h-[3741px] bg-white">

<section   className="flex flex-col w-[1543px] h-[576px] gap-[40px] mx-auto px-12">
        <FrameWrapperDlyaVremennyh3 />
        

        <section className="w-[1440px] h-[334px] rounded-[30px] relative">

<FrameDlyaVremennyh3 />
<img
  className="absolute w-[356px] h-[857px] right-0 bottom-0 blur-[35px] object-cover z-0"
  alt="Blue water splashing"
/>
</section>

<section className="flex flex-col w-[1440px] h-[412px] gap-[45px] mt-80 mx-auto top-[2890px]">
        <GroupWrapperDlyaVremennyh3 />
      </section>

      </section>
    </main>
  );
};

