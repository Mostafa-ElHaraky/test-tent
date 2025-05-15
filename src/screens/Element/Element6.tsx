import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { FrameByAnima1 } from "./sections/FrameByAnima1";
import { FrameWrapperByAnima1 } from "./sections/FrameWrapperByAnima1/FrameWrapperByAnima1";
import { GroupByAnima1 } from "./sections/GroupByAnima1";
import { GroupWrapperByAnima1 } from "./sections/GroupWrapperByAnima1/GroupWrapperByAnima1";
import { OverlapWrapperByAnima1 } from "./sections/OverlapWrapperByAnima1";

export const Element6 = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center bg-white">
      <section className="relative w-[1440px] h-[4108px] mt-[195px]">
        <FrameByAnima1 />
        <GroupByAnima1 />
        <GroupWrapperByAnima1 />
        <FrameWrapperByAnima1 />
        <OverlapWrapperByAnima1 />
        <DivWrapperByAnima />
      </section>
    </div>
  );
};
