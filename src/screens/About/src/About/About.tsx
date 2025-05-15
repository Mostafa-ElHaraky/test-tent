import { About1 } from "./sections/About1/About1";
import { About2 } from "./sections/About2/About2";
import { Element9 } from "./sections/Footer/Element9";
import { useEffect } from "react";
import { Helmet } from "react-helmet"; // You'll need to install this

export const About = (): JSX.Element => {
  useEffect(() => {
    document.title = "О компании - Москва, Mobile Tent"; // Update page title
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* React Helmet for managing head tags */}
      <Helmet>
        <h1 className="sr-only">О компании</h1>
        <meta name="description" content="Компания MOBILE TENT - ведущий производитель шатров, тентов и навесов в Москве, предоставляет услуги аренды и монтажа конструкций, их украшения и дизайна" />
      </Helmet>

      {/* Screen-reader only headings */}
      <h1 className="sr-only">О компании</h1>
      <meta name="description" content="Компания MOBILE TENT - ведущий производитель шатров, тентов и навесов в Москве, предоставляет услуги аренды и монтажа конструкций, их украшения и дизайна" />

      <About1 />
      <About2 />
      <Element9 />
    </div>
  );
};