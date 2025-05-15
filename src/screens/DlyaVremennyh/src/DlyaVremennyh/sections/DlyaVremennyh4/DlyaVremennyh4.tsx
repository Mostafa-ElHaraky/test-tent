import { DivDlyaVremennyh4 } from "./DivDlyaVremennyh4/DivDlyaVremennyh4";
import { DivWrapperDlyaVremennyh4 } from "./DivWrapperDlyaVremennyh4/DivWrapperDlyaVremennyh4";
import { FrameDlyaVremennyh4 } from "./FrameDlyaVremennyh4/FrameDlyaVremennyh4";
import { FrameWrapperDlyaVremennyh4 } from "./FrameWrapperDlyaVremennyh4/FrameWrapperDlyaVremennyh4";
import { GroupDlyaVremennyh4 } from "./GroupDlyaVremennyh4/GroupDlyaVremennyh4";
import { GroupWrapperDlyaVremennyh4 } from "./GroupWrapperDlyaVremennyh4/GroupWrapperDlyaVremennyh4";

export const DlyaVremennyh4 = (): JSX.Element => {
  return (
    <main 
      className="flex flex-col items-center bg-white relative"
      style={{
        width: '1440px',
        height: '2917.483154296875px',
        top: '60px',
        gap: '75px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    > 
      <section className="w-[1344px] h-[326px] gap-[36px] rounded-[30px] relative">
        <FrameDlyaVremennyh4 />
      </section>

      <section className="w-[1440px] h-[362px] relative">
        <FrameWrapperDlyaVremennyh4 />
      </section>

      <section className="w-[1342px] h-[715px] relative">
        <GroupDlyaVremennyh4 />
      </section>

      <section className="w-[1440px] h-[723px] relative">
        <GroupWrapperDlyaVremennyh4 />
      </section>

      <section className="w-[1344px] h-[491px] relative">
        <DivWrapperDlyaVremennyh4 />
      </section>

      <section className="w-[1440px] h-[1037px] relative">
        <DivDlyaVremennyh4 />
      </section>

    </main>
  );
};
