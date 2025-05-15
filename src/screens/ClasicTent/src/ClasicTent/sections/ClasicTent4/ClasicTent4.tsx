import { DivClasicTent4 } from "./DivClasicTent4/DivClasicTent4";
import { DivWrapperClasicTent4 } from "./DivWrapperClasicTent4/DivWrapperClasicTent4";
import { FrameClasicTent4 } from "./FrameClasicTent4/FrameClasicTent4";
import { FrameWrapperClasicTent4 } from "./FrameWrapperClasicTent4/FrameWrapperClasicTent4";
import { GroupClasicTent4 } from "./GroupClasicTent4/GroupClasicTent4";
import { GroupWrapperClasicTent4 } from "./GroupWrapperClasicTent4/GroupWrapperClasicTent4";

export const ClasicTent4 = (): JSX.Element => {
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
        <FrameClasicTent4 />
      </section>

      <section className="w-[1440px] h-[362px] relative">
        <FrameWrapperClasicTent4 />
      </section>

      <section className="w-[1342px] h-[715px] relative">
        <GroupClasicTent4 />
      </section>

      <section className="w-[1440px] h-[723px] relative">
        <GroupWrapperClasicTent4 />
      </section>

      <section className="w-[1344px] h-[491px] relative">
        <DivWrapperClasicTent4 />
      </section>

      <section className="w-[1440px] h-[1037px] relative">
        <DivClasicTent4 />
      </section>

    </main>
  );
};
