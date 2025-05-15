import { DlyaRestorana1 } from "./sections/DlyaRestorana1/DlyaRestorana1";
import { DlyaRestorana2 } from "./sections/DlyaRestorana2/DlyaRestorana2";
import { DlyaRestorana3 } from "./sections/DlyaRestorana3/DlyaRestorana3";
import { DlyaRestorana4 } from "./sections/DlyaRestorana4/DlyaRestorana4";
import { Element9 } from "./sections/Footer/Element9";

export const DlyaRestorana = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <DlyaRestorana1 />
      <DlyaRestorana2 />
      <DlyaRestorana3 />
      <DlyaRestorana4 />
      <Element9 />

    </div>
  );
};
