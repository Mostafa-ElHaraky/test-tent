import { DlyaZagorodnyh1 } from "./sections/DlyaZagorodnyh1/DlyaZagorodnyh1";
import { DlyaZagorodnyh2 } from "./sections/DlyaZagorodnyh2/DlyaZagorodnyh2";
import { DlyaZagorodnyh3 } from "./sections/DlyaZagorodnyh3/DlyaZagorodnyh3";
import { DlyaZagorodnyh4 } from "./sections/DlyaZagorodnyh4/DlyaZagorodnyh4";
import { DlyaZagorodnyh5 } from "./sections/DlyaZagorodnyh5/DlyaZagorodnyh5";
import { DlyaZagorodnyh6 } from "./sections/DlyaZagorodnyh6/DlyaZagorodnyh6";
import { DlyaZagorodnyh7 } from "./sections/DlyaZagorodnyh7/DlyaZagorodnyh7";
import { DlyaZagorodnyh8 } from "./sections/DlyaZagorodnyh8/DlyaZagorodnyh8";
import { Element9 } from "./sections/Footer/Element9";

export const DlyaZagorodnyh = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <DlyaZagorodnyh1 />
      <DlyaZagorodnyh2 />
      <DlyaZagorodnyh3 />
      <DlyaZagorodnyh4 />
      <DlyaZagorodnyh5 />
      <DlyaZagorodnyh6 />
      <DlyaZagorodnyh7 />
      <DlyaZagorodnyh8 />
      <Element9 />

    </div>
  );
};
