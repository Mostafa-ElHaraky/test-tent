import { FrameTuristicheskie6 } from "./FrameTuristicheskie6/FrameTuristicheskie6";
import { FrameWrapperTuristicheskie6 } from "./FrameWrapperTuristicheskie6/FrameWrapperTuristicheskie6";
import { GroupTuristicheskie6 } from "./GroupTuristicheskie6/GroupTuristicheskie6";

export const Turisticheskie6 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[25px] mt-[-110px] ">
        <FrameTuristicheskie6 />
        <FrameWrapperTuristicheskie6 />
        <GroupTuristicheskie6 />
      </div>
    </main>
  );
};
