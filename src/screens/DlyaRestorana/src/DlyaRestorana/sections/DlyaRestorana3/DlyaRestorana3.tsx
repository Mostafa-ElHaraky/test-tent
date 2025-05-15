import { DivWrapperDlyaRestorana3 } from "./DivWrapperDlyaRestorana3/DivWrapperDlyaRestorana3";
import { FrameDlyaRestorana3 } from "./FrameDlyaRestorana3/FrameDlyaRestorana3";
import { FrameWrapperDlyaRestorana3 } from "./FrameWrapperDlyaRestorana3/FrameWrapperDlyaRestorana3";
import { GroupDlyaRestorana3 } from "./GroupDlyaRestorana3/GroupDlyaRestorana3";

export const DlyaRestorana3 = (): JSX.Element => {
  return (
    <main className="relative w-full max-w-[1440px] h-[2575px] mx-auto bg-white">
      <header className="p-9">
        <h1 className="font-semibold text-4xl [font-family:'Raleway',Helvetica] tracking-[0] leading-normal">
          <span className="text-[#527dc5]">Отзыв</span>
          <span className="text-[#232c42]"> клиента</span>
        </h1>
      </header>

      <FrameDlyaRestorana3 />
      <GroupDlyaRestorana3 />
      <FrameWrapperDlyaRestorana3 />
      <DivWrapperDlyaRestorana3 />
    </main>
  );
};
 