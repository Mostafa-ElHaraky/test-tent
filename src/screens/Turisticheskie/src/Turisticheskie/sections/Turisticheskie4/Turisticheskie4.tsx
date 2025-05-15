import { DivTuristicheskie4 } from "./DivTuristicheskie4/DivTuristicheskie4";
import { DivWrapperTuristicheskie4 } from "./DivWrapperTuristicheskie4/DivWrapperTuristicheskie4";
import { FrameTuristicheskie4 } from "./FrameTuristicheskie4/FrameTuristicheskie4";
import { FrameWrapperTuristicheskie4 } from "./FrameWrapperTuristicheskie4/FrameWrapperTuristicheskie4";
import { GroupTuristicheskie4 } from "./GroupTuristicheskie4/GroupTuristicheskie4";
import { GroupWrapperTuristicheskie4 } from "./GroupWrapperTuristicheskie4/GroupWrapperTuristicheskie4";

export const Turisticheskie4 = (): JSX.Element => {
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
        <FrameTuristicheskie4 />
      </section>

      <section className="w-[1440px] h-[362px] relative">
        <FrameWrapperTuristicheskie4 />
      </section>

      <section className="w-[1342px] h-[715px] relative">
        <GroupTuristicheskie4 />
      </section>

      <section className="w-[1440px] h-[723px] relative">
        <GroupWrapperTuristicheskie4 />
      </section>

      <section className="w-[1344px] h-[491px] relative">
        <DivWrapperTuristicheskie4 />
      </section>

      <section className="w-[1440px] h-[1037px] relative">
        <DivTuristicheskie4 />
      </section>

    </main>
  );
};
