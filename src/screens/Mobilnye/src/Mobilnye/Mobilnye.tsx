import { Mobilnye1 } from "./sections/Mobilnye1/Mobilnye1";
import { Mobilnye2 } from "./sections/Mobilnye2/Mobilnye2";
import { Mobilnye3 } from "./sections/Mobilnye3/Mobilnye3";
import { Mobilnye4 } from "./sections/Mobilnye4/Mobilnye4";
import { Mobilnye5 } from "./sections/Mobilnye5/Mobilnye5";
import { Mobilnye6 } from "./sections/Mobilnye6/Mobilnye6";
import { Mobilnye7 } from "./sections/Mobilnye7/Mobilnye7";
import { Mobilnye8 } from "./sections/Mobilnye8/Mobilnye8";
import { Element9 } from "./sections/Footer/Element9";

export const Mobilnye = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <Mobilnye1 />
      <Mobilnye2 />
      <Mobilnye3 />
      <Mobilnye4 />
      <Mobilnye5 />
      <Mobilnye6 />
      <Mobilnye7 />
      <Mobilnye8 />
      <Element9 />

    </div>
  );
};
