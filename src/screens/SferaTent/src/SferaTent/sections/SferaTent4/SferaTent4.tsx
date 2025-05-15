import { DivSferaTent4 } from "./DivSferaTent4/DivSferaTent4";
import { DivWrapperSferaTent4 } from "./DivWrapperSferaTent4/DivWrapperSferaTent4";
import { FrameSferaTent4 } from "./FrameSferaTent4/FrameSferaTent4";
import { FrameWrapperSferaTent4 } from "./FrameWrapperSferaTent4/FrameWrapperSferaTent4";
import { GroupSferaTent4 } from "./GroupSferaTent4/GroupSferaTent4";
import { GroupWrapperSferaTent4 } from "./GroupWrapperSferaTent4/GroupWrapperSferaTent4";

export const SferaTent4 = (): JSX.Element => {
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
        <FrameSferaTent4 />
      </section>

      <section className="w-[1440px] h-[362px] relative">
        <FrameWrapperSferaTent4 />
      </section>

      <section className="w-[1342px] h-[715px] relative">
        <GroupSferaTent4 />
      </section>

      <section className="w-[1440px] h-[723px] relative">
        <GroupWrapperSferaTent4 />
      </section>

      <section className="w-[1344px] h-[491px] relative">
        <DivWrapperSferaTent4 />
      </section>

      <section className="w-[1440px] h-[1037px] relative">
        <DivSferaTent4 />
      </section>

    </main>
  );
};
