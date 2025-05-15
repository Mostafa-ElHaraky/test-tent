import { DivMobilnye4 } from "./DivMobilnye4/DivMobilnye4";
import { DivWrapperMobilnye4 } from "./DivWrapperMobilnye4/DivWrapperMobilnye4";
import { FrameMobilnye4 } from "./FrameMobilnye4/FrameMobilnye4";
import { FrameWrapperMobilnye4 } from "./FrameWrapperMobilnye4/FrameWrapperMobilnye4";
import { GroupMobilnye4 } from "./GroupMobilnye4/GroupMobilnye4";
import { GroupWrapperMobilnye4 } from "./GroupWrapperMobilnye4/GroupWrapperMobilnye4";

export const Mobilnye4 = (): JSX.Element => {
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
        <FrameMobilnye4 />
      </section>

      <section className="w-[1440px] h-[362px] relative">
        <FrameWrapperMobilnye4 />
      </section>

      <section className="w-[1342px] h-[715px] relative">
        <GroupMobilnye4 />
      </section>

      <section className="w-[1440px] h-[723px] relative">
        <GroupWrapperMobilnye4 />
      </section>

      <section className="w-[1344px] h-[491px] relative">
        <DivWrapperMobilnye4 />
      </section>

      <section className="w-[1440px] h-[1037px] relative">
        <DivMobilnye4 />
      </section>

    </main>
  );
};
