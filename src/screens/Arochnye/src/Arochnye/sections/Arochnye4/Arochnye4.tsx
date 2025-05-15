import { DivArochnye4 } from "./DivArochnye4/DivArochnye4";
import { DivWrapperArochnye4 } from "./DivWrapperArochnye4/DivWrapperArochnye4";
import { FrameArochnye4 } from "./FrameArochnye4/FrameArochnye4";
import { FrameWrapperArochnye4 } from "./FrameWrapperArochnye4/FrameWrapperArochnye4";
import { GroupArochnye4 } from "./GroupArochnye4/GroupArochnye4";
import { GroupWrapperArochnye4 } from "./GroupWrapperArochnye4/GroupWrapperArochnye4";

export const Arochnye4 = (): JSX.Element => {
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
        <FrameArochnye4 />
      </section>

      <section className="w-[1440px] h-[362px] relative">
        <FrameWrapperArochnye4 />
      </section>

      <section className="w-[1342px] h-[715px] relative">
        <GroupArochnye4 />
      </section>

      <section className="w-[1440px] h-[723px] relative">
        <GroupWrapperArochnye4 />
      </section>

      <section className="w-[1344px] h-[491px] relative">
        <DivWrapperArochnye4 />
      </section>

      <section className="w-[1440px] h-[1037px] relative">
        <DivArochnye4 />
      </section>

    </main>
  );
};
