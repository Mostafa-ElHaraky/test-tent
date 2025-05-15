import { DivAngary4 } from "./DivAngary4/DivAngary4";
import { DivWrapperAngary4 } from "./DivWrapperAngary4/DivWrapperAngary4";
import { FrameAngary4 } from "./FrameAngary4/FrameAngary4";
import { FrameWrapperAngary4 } from "./FrameWrapperAngary4/FrameWrapperAngary4";
import { GroupAngary4 } from "./GroupAngary4/GroupAngary4";
import { GroupWrapperAngary4 } from "./GroupWrapperAngary4/GroupWrapperAngary4";

export const Angary4 = (): JSX.Element => {
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
        <FrameAngary4 />
      </section>

      <section className="w-[1440px] h-[362px] relative">
        <FrameWrapperAngary4 />
      </section>

      <section className="w-[1342px] h-[715px] relative">
        <GroupAngary4 />
      </section>

      <section className="w-[1440px] h-[723px] relative">
        <GroupWrapperAngary4 />
      </section>

      <section className="w-[1344px] h-[491px] relative">
        <DivWrapperAngary4 />
      </section>

      <section className="w-[1440px] h-[1037px] relative">
        <DivAngary4 />
      </section>

    </main>
  );
};
