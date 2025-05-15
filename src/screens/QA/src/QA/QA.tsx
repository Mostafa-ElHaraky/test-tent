import { QA1 } from "./sections/QA1";
import { QA2 } from "./sections/QA2";
import { Footer1 } from "./sections/Footer1";

export const QA = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <QA1 />
      <QA2 />
      <Footer1 />

    </div>
  );
};
