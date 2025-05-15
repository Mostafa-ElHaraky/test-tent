import { DivSportAngary4 } from "./DivSportAngary4/DivSportAngary4";
import { DivWrapperSportAngary4 } from "./DivWrapperSportAngary4/DivWrapperSportAngary4";
import { FrameSportAngary4 } from "./FrameSportAngary4/FrameSportAngary4";
import { FrameWrapperSportAngary4 } from "./FrameWrapperSportAngary4/FrameWrapperSportAngary4";
import { GroupSportAngary4 } from "./GroupSportAngary4/GroupSportAngary4";
import { GroupWrapperSportAngary4 } from "./GroupWrapperSportAngary4/GroupWrapperSportAngary4";

export const SportAngary4 = (): JSX.Element => {
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
        <FrameSportAngary4 />
      </section>

      <section className="w-[1440px] h-[362px] relative">
        <FrameWrapperSportAngary4 />
      </section>

      <section className="w-[1342px] h-[715px] relative">
        <GroupSportAngary4 />
      </section>

      <section className="w-[1440px] h-[723px] relative">
        <GroupWrapperSportAngary4 />
      </section>

      <section className="w-[1344px] h-[491px] relative">
        <DivWrapperSportAngary4 />
      </section>

      <section className="w-[1440px] h-[1037px] relative">
        <DivSportAngary4 />
      </section>

    </main>
  );
};
