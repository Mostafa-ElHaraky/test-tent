import { DivDlyaSport4 } from "./DivDlyaSport4/DivDlyaSport4";
import { DivWrapperDlyaSport4 } from "./DivWrapperDlyaSport4/DivWrapperDlyaSport4";
import { FrameDlyaSport4 } from "./FrameDlyaSport4/FrameDlyaSport4";
import { FrameWrapperDlyaSport4 } from "./FrameWrapperDlyaSport4/FrameWrapperDlyaSport4";
import { GroupDlyaSport4 } from "./GroupDlyaSport4/GroupDlyaSport4";
import { GroupWrapperDlyaSport4 } from "./GroupWrapperDlyaSport4/GroupWrapperDlyaSport4";

export const DlyaSport4 = (): JSX.Element => {
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
        <FrameDlyaSport4 />
      </section>

      <section className="w-[1440px] h-[362px] relative">
        <FrameWrapperDlyaSport4 />
      </section>

      <section className="w-[1342px] h-[715px] relative">
        <GroupDlyaSport4 />
      </section>

      <section className="w-[1440px] h-[723px] relative">
        <GroupWrapperDlyaSport4 />
      </section>

      <section className="w-[1344px] h-[491px] relative">
        <DivWrapperDlyaSport4 />
      </section>

      <section className="w-[1440px] h-[1037px] relative">
        <DivDlyaSport4 />
      </section>

    </main>
  );
};
