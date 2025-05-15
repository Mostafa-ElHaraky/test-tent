import { DivSportPergoly4 } from "./DivSportPergoly4/DivSportPergoly4";
import { DivWrapperSportPergoly4 } from "./DivWrapperSportPergoly4/DivWrapperSportPergoly4";
import { FrameSportPergoly4 } from "./FrameSportPergoly4/FrameSportPergoly4";
import { FrameWrapperSportPergoly4 } from "./FrameWrapperSportPergoly4/FrameWrapperSportPergoly4";
import { GroupSportPergoly4 } from "./GroupSportPergoly4/GroupSportPergoly4";
import { GroupWrapperSportPergoly4 } from "./GroupWrapperSportPergoly4/GroupWrapperSportPergoly4";

export const SportPergoly4 = (): JSX.Element => {
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
        <FrameSportPergoly4 />
      </section>

      <section className="w-[1440px] h-[362px] relative">
        <FrameWrapperSportPergoly4 />
      </section>

      <section className="w-[1342px] h-[715px] relative">
        <GroupSportPergoly4 />
      </section>

      <section className="w-[1440px] h-[723px] relative">
        <GroupWrapperSportPergoly4 />
      </section>

      <section className="w-[1344px] h-[491px] relative">
        <DivWrapperSportPergoly4 />
      </section>

      <section className="w-[1440px] h-[1037px] relative">
        <DivSportPergoly4 />
      </section>

    </main>
  );
};
