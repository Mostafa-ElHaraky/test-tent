import { DlyaVremennyh1 } from "./sections/DlyaVremennyh1/DlyaVremennyh1";
import { DlyaVremennyh2 } from "./sections/DlyaVremennyh2/DlyaVremennyh2";
import { DlyaVremennyh3 } from "./sections/DlyaVremennyh3/DlyaVremennyh3";
import { DlyaVremennyh4 } from "./sections/DlyaVremennyh4/DlyaVremennyh4";
import { DlyaVremennyh5 } from "./sections/DlyaVremennyh5/DlyaVremennyh5";
import { DlyaVremennyh6 } from "./sections/DlyaVremennyh6/DlyaVremennyh6";
import { DlyaVremennyh7 } from "./sections/DlyaVremennyh7/DlyaVremennyh7";
import { DlyaVremennyh8 } from "./sections/DlyaVremennyh8/DlyaVremennyh8";
import { Element9 } from "./sections/Footer/Element9";

export const DlyaVremennyh = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <DlyaVremennyh1 />
      <DlyaVremennyh2 />
      <DlyaVremennyh3 />
      <DlyaVremennyh4 />
      <DlyaVremennyh5 />
      <DlyaVremennyh6 />
      <DlyaVremennyh7 />
      <DlyaVremennyh8 />
      <Element9 />

    </div>
  );
};
