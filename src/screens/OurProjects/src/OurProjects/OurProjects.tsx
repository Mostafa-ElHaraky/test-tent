import { OurProjects1 } from "./sections/OurProjects1/OurProjects1";
import { OurProjects2 } from "./sections/OurProjects2/OurProjects2";
import { OurProjects3 } from "./sections/OurProjects3/OurProjects3";
import { OurProjects4 } from "./sections/OurProjects4/OurProjects4";
import { Element9 } from "./sections/Footer/Element9";

export const OurProjects = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <OurProjects1 />
      <OurProjects2 />
      <OurProjects3 />
      <OurProjects4 />
      <Element9 />

    </div>
  );
};
