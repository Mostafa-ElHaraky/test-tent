import { Services1 } from "./sections/Services1/Services1";
import { Services2 } from "./sections/Services2/Services2";
import { Services3 } from "./sections/Services3/Services3";
import { Services4 } from "./sections/Services4/Services4";
import { Element9 } from "./sections/Footer/Element9";


export const Services = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <Services1 />
      <Services2 />
      <Services3 />
      <Services4 />
      <Element9 />
      
    </div>
  );
};
