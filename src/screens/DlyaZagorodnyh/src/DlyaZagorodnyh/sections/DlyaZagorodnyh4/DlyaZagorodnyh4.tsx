import { DivDlyaZagorodnyh4 } from "./DivDlyaZagorodnyh4/DivDlyaZagorodnyh4";
import { DivWrapperDlyaZagorodnyh4 } from "./DivWrapperDlyaZagorodnyh4/DivWrapperDlyaZagorodnyh4";
import { FrameDlyaZagorodnyh4 } from "./FrameDlyaZagorodnyh4/FrameDlyaZagorodnyh4";
import { FrameWrapperDlyaZagorodnyh4 } from "./FrameWrapperDlyaZagorodnyh4/FrameWrapperDlyaZagorodnyh4";
import { GroupDlyaZagorodnyh4 } from "./GroupDlyaZagorodnyh4/GroupDlyaZagorodnyh4";
import { GroupWrapperDlyaZagorodnyh4 } from "./GroupWrapperDlyaZagorodnyh4/GroupWrapperDlyaZagorodnyh4";

export const DlyaZagorodnyh4 = (): JSX.Element => {
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
        <FrameDlyaZagorodnyh4 />
      </section>

      <section className="w-[1440px] h-[362px] relative">
        <FrameWrapperDlyaZagorodnyh4 />
      </section>

      <section className="w-[1342px] h-[715px] relative">
        <GroupDlyaZagorodnyh4 />
      </section>

      <section className="w-[1440px] h-[723px] relative">
        <GroupWrapperDlyaZagorodnyh4 />
      </section>

      <section className="w-[1344px] h-[491px] relative">
        <DivWrapperDlyaZagorodnyh4 />
      </section>

      <section className="w-[1440px] h-[1037px] relative">
        <DivDlyaZagorodnyh4 />
      </section>

    </main>
  );
};
