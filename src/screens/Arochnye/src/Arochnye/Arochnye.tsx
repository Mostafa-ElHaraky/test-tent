import { Arochnye1 } from "./sections/Arochnye1/Arochnye1";
import { Arochnye2 } from "./sections/Arochnye2/Arochnye2";
import { Arochnye3 } from "./sections/Arochnye3/Arochnye3";
import { Arochnye4 } from "./sections/Arochnye4/Arochnye4";
import { Arochnye5 } from "./sections/Arochnye5/Arochnye5";
import { Arochnye6 } from "./sections/Arochnye6/Arochnye6";
import { Arochnye7 } from "./sections/Arochnye7/Arochnye7";
import { Arochnye8 } from "./sections/Arochnye8/Arochnye8";
import { Element9 } from "./sections/Footer/Element9";

export const Arochnye = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <Arochnye1 />
      <Arochnye2 />
      <Arochnye3 />
      <Arochnye4 />
      <Arochnye5 />
      <Arochnye6 />
      <Arochnye7 />
      <Arochnye8 />
      <Element9 />

    </div>
  );
};
