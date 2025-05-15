import { DivWrapperUlichnoy3 } from "./DivWrapperUlichnoy3/DivWrapperUlichnoy3";
import { FrameUlichnoy3 } from "./FrameUlichnoy3/FrameUlichnoy3";
import { FrameWrapperUlichnoy3 } from "./FrameWrapperUlichnoy3/FrameWrapperUlichnoy3";
import { GroupUlichnoy3 } from "./GroupUlichnoy3/GroupUlichnoy3";

export const Ulichnoy3 = (): JSX.Element => {
  return (
    <main className="relative w-full max-w-[1440px] h-[2575px] mx-auto bg-white">
      <header className="p-9">
        <h1 className="font-semibold text-4xl [font-family:'Raleway',Helvetica] tracking-[0] leading-normal">
          <span className="text-[#527dc5]">Отзыв</span>
          <span className="text-[#232c42]"> клиента</span>
        </h1>
      </header>

      <FrameUlichnoy3 />
      <GroupUlichnoy3 />
      <FrameWrapperUlichnoy3 />
      <DivWrapperUlichnoy3 />
    </main>
  );
};
 