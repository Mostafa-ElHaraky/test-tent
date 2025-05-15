import { FrameDlyaTorgestva8 } from "./FrameDlyaTorgestva8/FrameDlyaTorgestva8";
import { OverlapWrapperDlyaTorgestva8 } from "./OverlapWrapperDlyaTorgestva8/OverlapWrapperDlyaTorgestva8";

export const DlyaTorgestva8 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[1833px] flex flex-col items-center gap-[25px] ">
        <FrameDlyaTorgestva8 />
        <OverlapWrapperDlyaTorgestva8 />
      </div>
    </main>
  );
};
