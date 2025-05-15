import { Turisticheskie1 } from "./sections/Turisticheskie1/Turisticheskie1";
import { Turisticheskie2 } from "./sections/Turisticheskie2/Turisticheskie2";
import { Turisticheskie3 } from "./sections/Turisticheskie3/Turisticheskie3";
import { Turisticheskie4 } from "./sections/Turisticheskie4/Turisticheskie4";
import { Turisticheskie5 } from "./sections/Turisticheskie5/Turisticheskie5";
import { Turisticheskie6 } from "./sections/Turisticheskie6/Turisticheskie6";
import { Turisticheskie7 } from "./sections/Turisticheskie7/Turisticheskie7";
import { Turisticheskie8 } from "./sections/Turisticheskie8/Turisticheskie8";
import { Element9 } from "./sections/Footer/Element9";

export const Turisticheskie = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <Turisticheskie1 />
      <Turisticheskie2 />
      <Turisticheskie3 />
      <Turisticheskie4 />
      <Turisticheskie5 />
      <Turisticheskie6 />
      <Turisticheskie7 />
      <Turisticheskie8 />
      <Element9 />

    </div>
  );
};
