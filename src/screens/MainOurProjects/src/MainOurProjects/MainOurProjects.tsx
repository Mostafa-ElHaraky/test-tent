import { MainOurProjects1 } from "./sections/MainOurProjects1/MainOurProjects1";
import { MainOurProjects3 } from "./sections/MainOurProjects3/MainOurProjects3";
import { MainOurProjects4 } from "./sections/MainOurProjects4/MainOurProjects4";
import { Element9 } from "./sections/Footer/Element9";

export const MainOurProjects = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <MainOurProjects1 />
      <MainOurProjects3 />
      <MainOurProjects4 />
      <Element9 />

    </div>
  );
};
