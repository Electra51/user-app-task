import Layout from "../../components/Layouts/Layout";
import HeadHook from "../../components/common/HeadHook";

const Projects = () => {
  return (
    <Layout>
      <HeadHook
        description="User application using typscript"
        keywords="Reactjs, Typescript, Tailwindcss"
        author="Safayet Nur"
        title="Stack-Projects"
      />
      <div className="flex flex-col justify-center items-center mt-48 text-gray-400 ">
        <p className="font-bold text-3xl tracking-[0.8px]">
          Welcome to Projects Page
        </p>
        <p className="tracking-[1px] text-xl leading-9">
          This is projects page of stack
        </p>
      </div>
    </Layout>
  );
};

export default Projects;
