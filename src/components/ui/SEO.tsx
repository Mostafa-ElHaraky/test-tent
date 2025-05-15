import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  h1: string;
};

export const SEO = ({ title, description, h1 }: SEOProps) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {/* Hidden SEO-only tags */}
      <h1 style={{ display: "none" }}>{h1}</h1>
    </>
  );
};
