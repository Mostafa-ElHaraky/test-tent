import { ClasicTent1 } from "./sections/ClasicTent1/ClasicTent1";
import { ClasicTent2 } from "./sections/ClasicTent2/ClasicTent2";
import { ClasicTent3 } from "./sections/ClasicTent3/ClasicTent3";
import { ClasicTent4 } from "./sections/ClasicTent4/ClasicTent4";
import { ClasicTent5 } from "./sections/ClasicTent5/ClasicTent5";
import { ClasicTent6 } from "./sections/ClasicTent6/ClasicTent6";
import { ClasicTent7 } from "./sections/ClasicTent7/ClasicTent7";
import { ClasicTent8 } from "./sections/ClasicTent8/ClasicTent8";
import { Element9 } from "./sections/Footer/Element9";

export const ClasicTent = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <ClasicTent1 />
      <ClasicTent2 />
      <ClasicTent3 />
      <ClasicTent4 />
      <ClasicTent5 />
      <ClasicTent6 />
      <ClasicTent7 />
      <ClasicTent8 />
      <Element9 />

    </div>
  );
};
