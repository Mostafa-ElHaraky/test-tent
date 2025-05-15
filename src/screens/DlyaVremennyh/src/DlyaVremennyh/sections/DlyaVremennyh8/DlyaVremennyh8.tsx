import { FrameDlyaVremennyh8 } from "./FrameDlyaVremennyh8/FrameDlyaVremennyh8";
import { OverlapWrapperDlyaVremennyh8 } from "./OverlapWrapperDlyaVremennyh8/OverlapWrapperDlyaVremennyh8";

export const DlyaVremennyh8 = (): JSX.Element => {
  return (
    <main className="w-full bg-white flex flex-col items-center">
      <div className="w-full max-w-[1440px] h-[1833px] flex flex-col items-center gap-[25px] ">
        <FrameDlyaVremennyh8 />
        <OverlapWrapperDlyaVremennyh8 />
      </div>
    </main>
  );
};
