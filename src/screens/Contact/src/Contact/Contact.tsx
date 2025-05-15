import { Contact1 } from "./sections/Contact1/Contact1";
import { Contact2 } from "./sections/Contact2/Contact2";
import { Footer1 } from "./sections/Footer1";

export const Contact = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <Contact1 />
      <Contact2 />
      <Footer1 />

    </div>
  );
};
