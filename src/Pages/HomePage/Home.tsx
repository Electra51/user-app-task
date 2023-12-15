import Layout from "../../components/Layouts/Layout";
import HeadHook from "../../components/common/HeadHook";

const Home = () => {
  return (
    <Layout>
      <HeadHook
        description="User application using typscript"
        keywords="Reactjs, Typescript, Tailwindcss"
        author="Safayet Nur"
        title="Stack-Home"
      />
      <div>Home</div>
    </Layout>
  );
};

export default Home;
