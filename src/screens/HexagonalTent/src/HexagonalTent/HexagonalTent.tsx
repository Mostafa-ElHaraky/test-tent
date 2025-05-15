import { HexagonalTent1 } from "./sections/HexagonalTent1/HexagonalTent1";
import { HexagonalTent2 } from "./sections/HexagonalTent2/HexagonalTent2";
import { HexagonalTent3 } from "./sections/HexagonalTent3/HexagonalTent3";
import { HexagonalTent4 } from "./sections/HexagonalTent4/HexagonalTent4";
import { HexagonalTent5 } from "./sections/HexagonalTent5/HexagonalTent5";
import { HexagonalTent6 } from "./sections/HexagonalTent6/HexagonalTent6";
import { HexagonalTent7 } from "./sections/HexagonalTent7/HexagonalTent7";
import { HexagonalTent8 } from "./sections/HexagonalTent8/HexagonalTent8";
import { Element9 } from "./sections/Footer/Element9";

export const HexagonalTent = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <HexagonalTent1 />
      <HexagonalTent2 />
      <HexagonalTent3 />
      <HexagonalTent4 />
      <HexagonalTent5 />
      <HexagonalTent6 />
      <HexagonalTent7 />
      <HexagonalTent8 />
      <Element9 />

    </div>
  );
};
