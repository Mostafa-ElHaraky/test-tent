import { DlyaSport1 } from "./sections/DlyaSport1/DlyaSport1";
import { DlyaSport2 } from "./sections/DlyaSport2/DlyaSport2";
import { DlyaSport3 } from "./sections/DlyaSport3/DlyaSport3";
import { DlyaSport4 } from "./sections/DlyaSport4/DlyaSport4";
import { DlyaSport5 } from "./sections/DlyaSport5/DlyaSport5";
import { DlyaSport6 } from "./sections/DlyaSport6/DlyaSport6";
import { DlyaSport7 } from "./sections/DlyaSport7/DlyaSport7";
import { DlyaSport8 } from "./sections/DlyaSport8/DlyaSport8";
import { Element9 } from "./sections/Footer/Element9";

export const DlyaSport = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <DlyaSport1 />
      <DlyaSport2 />
      <DlyaSport3 />
      <DlyaSport4 />
      <DlyaSport5 />
      <DlyaSport6 />
      <DlyaSport7 />
      <DlyaSport8 />
      <Element9 />

    </div>
  );
};
