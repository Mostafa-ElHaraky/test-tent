import { DivDlyaTorgestva4 } from "./DivDlyaTorgestva4/DivDlyaTorgestva4";
import { DivWrapperDlyaTorgestva4 } from "./DivWrapperDlyaTorgestva4/DivWrapperDlyaTorgestva4";
import { FrameDlyaTorgestva4 } from "./FrameDlyaTorgestva4/FrameDlyaTorgestva4";
import { FrameWrapperDlyaTorgestva4 } from "./FrameWrapperDlyaTorgestva4/FrameWrapperDlyaTorgestva4";
import { GroupDlyaTorgestva4 } from "./GroupDlyaTorgestva4/GroupDlyaTorgestva4";
import { GroupWrapperDlyaTorgestva4 } from "./GroupWrapperDlyaTorgestva4/GroupWrapperDlyaTorgestva4";

export const DlyaTorgestva4 = (): JSX.Element => {
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
        <FrameDlyaTorgestva4 />
      </section>

      <section className="w-[1440px] h-[362px] relative">
        <FrameWrapperDlyaTorgestva4 />
      </section>

      <section className="w-[1342px] h-[715px] relative">
        <GroupDlyaTorgestva4 />
      </section>

      <section className="w-[1440px] h-[723px] relative">
        <GroupWrapperDlyaTorgestva4 />
      </section>

      <section className="w-[1344px] h-[491px] relative">
        <DivWrapperDlyaTorgestva4 />
      </section>

      <section className="w-[1440px] h-[1037px] relative">
        <DivDlyaTorgestva4 />
      </section>

    </main>
  );
};
