import { Membrannye1 } from "./sections/Membrannye1/Membrannye1";
import { Membrannye2 } from "./sections/Membrannye2/Membrannye2";
import { Membrannye3 } from "./sections/Membrannye3/Membrannye3";
import { Membrannye4 } from "./sections/Membrannye4/Membrannye4";
import { Membrannye5 } from "./sections/Membrannye5/Membrannye5";
import { Membrannye6 } from "./sections/Membrannye6/Membrannye6";
import { Membrannye7 } from "./sections/Membrannye7/Membrannye7";
import { Membrannye8 } from "./sections/Membrannye8/Membrannye8";
import { Element9 } from "./sections/Footer/Element9";

export const Membrannye = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <Membrannye1 />
      <Membrannye2 />
      <Membrannye3 />
      <Membrannye4 />
      <Membrannye5 />
      <Membrannye6 />
      <Membrannye7 />
      <Membrannye8 />
      <Element9 />

    </div>
  );
};
