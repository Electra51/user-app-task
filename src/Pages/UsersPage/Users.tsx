import Layout from "../../components/Layouts/Layout";
import HeadHook from "../../components/common/HeadHook";

const Users = () => {
  return (
    <Layout>
      <HeadHook
        description="User application using typscript"
        keywords="Reactjs, Typescript, Tailwindcss"
        author="Safayet Nur"
        title="Stack-Users"
      />
      <div>Users</div>
    </Layout>
  );
};

export default Users;
