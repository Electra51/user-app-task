import { Helmet } from "react-helmet";

type HelmetProps = {
  title: string;
  description: string;
  keywords: string;
  author: string;
};
const HeadHook = ({ title, description, keywords, author }: HelmetProps) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
    </div>
  );
};

export default HeadHook;
