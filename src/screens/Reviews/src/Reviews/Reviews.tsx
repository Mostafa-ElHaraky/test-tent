import { Reviews1 } from "./sections/Reviews1/Reviews1";
import { Reviews2 } from "./sections/Reviews2/Reviews2";
import { Footer1 } from "./sections/Footer1";

export const Reviews = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <Reviews1 />
      <Reviews2 />
      <Footer1 />

    </div>
  );
};
