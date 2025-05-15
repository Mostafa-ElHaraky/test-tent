import { FrameUlichnoy4 } from "./FrameUlichnoy4/FrameUlichnoy4";
import { OverlapWrapperUlichnoy4 } from "./OverlapWrapperUlichnoy4/OverlapWrapperUlichnoy4";

export const Ulichnoy4 = (): JSX.Element => {
  return (
    <main className="relative w-full max-w-[1440px] h-[1433px] bottom-[60px] mx-auto bg-white">
      <FrameUlichnoy4 />
      <OverlapWrapperUlichnoy4 />
    </main>
  );
};
 