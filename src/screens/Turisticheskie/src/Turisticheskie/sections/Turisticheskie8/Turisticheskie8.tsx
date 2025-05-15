import { FrameTuristicheskie8 } from "./FrameTuristicheskie8/FrameTuristicheskie8";
import { OverlapWrapperTuristicheskie8 } from "./OverlapWrapperTuristicheskie8/OverlapWrapperTuristicheskie8";

export const Turisticheskie8 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[1833px] flex flex-col items-center gap-[25px] ">
        <FrameTuristicheskie8 />
        <OverlapWrapperTuristicheskie8 />
      </div>
    </main>
  );
};
