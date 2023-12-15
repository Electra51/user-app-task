import Layout from "../../components/Layouts/Layout";
import HeadHook from "../../components/common/HeadHook";

const Tasks = () => {
  return (
    <Layout>
      <HeadHook
        description="User application using typscript"
        keywords="Reactjs, Typescript, Tailwindcss"
        author="Safayet Nur"
        title="Stack-Task"
      />
      <div>Task</div>
    </Layout>
  );
};

export default Tasks;
