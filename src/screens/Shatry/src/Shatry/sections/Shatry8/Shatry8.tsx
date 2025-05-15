import { FrameShatry8 } from "./FrameShatry8/FrameShatry8";
import { OverlapWrapperShatry8 } from "./OverlapWrapperShatry8/OverlapWrapperShatry8";

export const Shatry8 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[1833px] flex flex-col items-center gap-[25px] ">
        <FrameShatry8 />
        <OverlapWrapperShatry8 />
      </div>
    </main>
  );
};
