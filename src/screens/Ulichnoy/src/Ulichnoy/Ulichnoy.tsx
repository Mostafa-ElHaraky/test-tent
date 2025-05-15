import { Ulichnoy1 } from "./sections/Ulichnoy1/Ulichnoy1";
import { Ulichnoy2 } from "./sections/Ulichnoy2/Ulichnoy2";
import { Ulichnoy3 } from "./sections/Ulichnoy3/Ulichnoy3";
import { Ulichnoy4 } from "./sections/Ulichnoy4/Ulichnoy4";
import { Element9 } from "./sections/Footer/Element9";

export const Ulichnoy = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <Ulichnoy1 />
      <Ulichnoy2 />
      <Ulichnoy3 />
      <Ulichnoy4 />
      <Element9 />

    </div>
  );
};
