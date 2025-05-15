import { DivMembrannye4 } from "./DivMembrannye4/DivMembrannye4";
import { DivWrapperMembrannye4 } from "./DivWrapperMembrannye4/DivWrapperMembrannye4";
import { FrameMembrannye4 } from "./FrameMembrannye4/FrameMembrannye4";
import { FrameWrapperMembrannye4 } from "./FrameWrapperMembrannye4/FrameWrapperMembrannye4";
import { GroupMembrannye4 } from "./GroupMembrannye4/GroupMembrannye4";
import { GroupWrapperMembrannye4 } from "./GroupWrapperMembrannye4/GroupWrapperMembrannye4";

export const Membrannye4 = (): JSX.Element => {
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
        <FrameMembrannye4 />
      </section>

      <section className="w-[1440px] h-[362px] relative">
        <FrameWrapperMembrannye4 />
      </section>

      <section className="w-[1342px] h-[715px] relative">
        <GroupMembrannye4 />
      </section>

      <section className="w-[1440px] h-[723px] relative">
        <GroupWrapperMembrannye4 />
      </section>

      <section className="w-[1344px] h-[491px] relative">
        <DivWrapperMembrannye4 />
      </section>

      <section className="w-[1440px] h-[1037px] relative">
        <DivMembrannye4 />
      </section>

    </main>
  );
};
