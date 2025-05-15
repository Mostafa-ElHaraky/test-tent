import { SferaTent1 } from "./sections/SferaTent1/SferaTent1";
import { SferaTent2 } from "./sections/SferaTent2/SferaTent2";
import { SferaTent3 } from "./sections/SferaTent3/SferaTent3";
import { SferaTent4 } from "./sections/SferaTent4/SferaTent4";
import { SferaTent5 } from "./sections/SferaTent5/SferaTent5";
import { SferaTent6 } from "./sections/SferaTent6/SferaTent6";
import { SferaTent7 } from "./sections/SferaTent7/SferaTent7";
import { SferaTent8 } from "./sections/SferaTent8/SferaTent8";
import { Element9 } from "./sections/Footer/Element9";

export const SferaTent = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <SferaTent1 />
      <SferaTent2 />
      <SferaTent3 />
      <SferaTent4 />
      <SferaTent5 />
      <SferaTent6 />
      <SferaTent7 />
      <SferaTent8 />
      <Element9 />

    </div>
  );
};
