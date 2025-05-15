import { DlyaTorgestva1 } from "./sections/DlyaTorgestva1/DlyaTorgestva1";
import { DlyaTorgestva2 } from "./sections/DlyaTorgestva2/DlyaTorgestva2";
import { DlyaTorgestva3 } from "./sections/DlyaTorgestva3/DlyaTorgestva3";
import { DlyaTorgestva4 } from "./sections/DlyaTorgestva4/DlyaTorgestva4";
import { DlyaTorgestva5 } from "./sections/DlyaTorgestva5/DlyaTorgestva5";
import { DlyaTorgestva6 } from "./sections/DlyaTorgestva6/DlyaTorgestva6";
import { DlyaTorgestva7 } from "./sections/DlyaTorgestva7/DlyaTorgestva7";
import { DlyaTorgestva8 } from "./sections/DlyaTorgestva8/DlyaTorgestva8";
import { Element9 } from "./sections/Footer/Element9";

export const DlyaTorgestva = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <DlyaTorgestva1 />
      <DlyaTorgestva2 />
      <DlyaTorgestva3 />
      <DlyaTorgestva4 />
      <DlyaTorgestva5 />
      <DlyaTorgestva6 />
      <DlyaTorgestva7 />
      <DlyaTorgestva8 />
      <Element9 />

    </div>
  );
};
