import { DivShatry4 } from "./DivShatry4/DivShatry4";
import { DivWrapperShatry4 } from "./DivWrapperShatry4/DivWrapperShatry4";
import { FrameShatry4 } from "./FrameShatry4/FrameShatry4";
import { FrameWrapperShatry4 } from "./FrameWrapperShatry4/FrameWrapperShatry4";
import { GroupShatry4 } from "./GroupShatry4/GroupShatry4";
import { GroupWrapperShatry4 } from "./GroupWrapperShatry4/GroupWrapperShatry4";

export const Shatry4 = (): JSX.Element => {
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
        <FrameShatry4 />
      </section>

      <section className="w-[1440px] h-[362px] relative">
        <FrameWrapperShatry4 />
      </section>

      <section className="w-[1342px] h-[715px] relative">
        <GroupShatry4 />
      </section>

      <section className="w-[1440px] h-[723px] relative">
        <GroupWrapperShatry4 />
      </section>

      <section className="w-[1344px] h-[491px] relative">
        <DivWrapperShatry4 />
      </section>

      <section className="w-[1440px] h-[1037px] relative">
        <DivShatry4 />
      </section>

    </main>
  );
};
