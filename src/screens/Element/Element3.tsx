import { FrameByAnima } from "./sections/FrameByAnima";
import { FrameWrapperByAnima } from "./sections/FrameWrapperByAnima";
import { GroupByAnima } from "./sections/GroupByAnima";
import { GroupWrapperByAnima } from "./sections/GroupWrapperByAnima";
import { OverlapGroupWrapperByAnima } from "./sections/OverlapGroupWrapperByAnima";
import { OverlapWrapperByAnima } from "./sections/OverlapWrapperByAnima";

export const Element3 = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full max-w-[1440px] h-[3810px] bg-white mx-auto overflow-hidden">
      <section className="relative h-[3810px] rounded-[0px_0px_30px_30px] w-full">
        <section className="w-full">
          <GroupByAnima />
        </section>

        <section className="w-full">
          <FrameByAnima />
        </section>

        <section className="w-full">
          <FrameWrapperByAnima />
        </section>

        <section className="w-full relative">
          <div className="absolute w-[356px] h-[857px] top-28 right-0 blur-[35px] z-0">
            <img
              className="w-full h-full object-cover"
              alt="Blue water splashing"
              src="/blue-water-splashing-alone--9-------2.png"
            />
          </div>

          <GroupWrapperByAnima />
          <OverlapWrapperByAnima />

          <div className="relative">
            <div className="absolute w-[1440px] h-[488px] bottom-0 left-0 blur-[25px] z-0">
              <img
                className="w-full h-full object-cover"
                alt="Blue water splashing"
                src="/blue-water-splashing-alone--9-------2.png"
              />
            </div>
            <OverlapGroupWrapperByAnima />
          </div>
        </section>
      </section>
    </main>
  );
};
