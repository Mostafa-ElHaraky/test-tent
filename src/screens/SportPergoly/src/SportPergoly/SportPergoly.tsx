import { SportPergoly1 } from "./sections/SportPergoly1/SportPergoly1";
import { SportPergoly2 } from "./sections/SportPergoly2/SportPergoly2";
import { SportPergoly3 } from "./sections/SportPergoly3/SportPergoly3";
import { SportPergoly4 } from "./sections/SportPergoly4/SportPergoly4";
import { SportPergoly5 } from "./sections/SportPergoly5/SportPergoly5";
import { SportPergoly6 } from "./sections/SportPergoly6/SportPergoly6";
import { SportPergoly7 } from "./sections/SportPergoly7/SportPergoly7";
import { SportPergoly8 } from "./sections/SportPergoly8/SportPergoly8";
import { Element9 } from "./sections/Footer/Element9";

export const SportPergoly = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <SportPergoly1 />
      <SportPergoly2 />
      <SportPergoly3 />
      <SportPergoly4 />
      <SportPergoly5 />
      <SportPergoly6 />
      <SportPergoly7 />
      <SportPergoly8 />
      <Element9 />

    </div>
  );
};
