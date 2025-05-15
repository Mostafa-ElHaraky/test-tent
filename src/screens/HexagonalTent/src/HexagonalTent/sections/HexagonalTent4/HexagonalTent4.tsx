import { DivHexagonalTent4 } from "./DivHexagonalTent4/DivHexagonalTent4";
import { DivWrapperHexagonalTent4 } from "./DivWrapperHexagonalTent4/DivWrapperHexagonalTent4";
import { FrameHexagonalTent4 } from "./FrameHexagonalTent4/FrameHexagonalTent4";
import { FrameWrapperHexagonalTent4 } from "./FrameWrapperHexagonalTent4/FrameWrapperHexagonalTent4";
import { GroupHexagonalTent4 } from "./GroupHexagonalTent4/GroupHexagonalTent4";
import { GroupWrapperHexagonalTent4 } from "./GroupWrapperHexagonalTent4/GroupWrapperHexagonalTent4";

export const HexagonalTent4 = (): JSX.Element => {
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
        <FrameHexagonalTent4 />
      </section>

      <section className="w-[1440px] h-[362px] relative">
        <FrameWrapperHexagonalTent4 />
      </section>

      <section className="w-[1342px] h-[715px] relative">
        <GroupHexagonalTent4 />
      </section>

      <section className="w-[1440px] h-[723px] relative">
        <GroupWrapperHexagonalTent4 />
      </section>

      <section className="w-[1344px] h-[491px] relative">
        <DivWrapperHexagonalTent4 />
      </section>

      <section className="w-[1440px] h-[1037px] relative">
        <DivHexagonalTent4 />
      </section>

    </main>
  );
};
