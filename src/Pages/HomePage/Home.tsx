import Layout from "../../components/Layouts/Layout";
import HeadHook from "../../components/common/HeadHook";
import navLogo from "../../assets/logo/navlogo.png";
const Home = () => {
  return (
    <Layout>
      <HeadHook
        description="User application using typscript"
        keywords="Reactjs, Typescript, Tailwindcss"
        author="Safayet Nur"
        title="Stack-Home"
      />
      <div className="flex flex-col justify-center items-center mt-48 text-gray-400">
        <div className="flex justify-center tracking-[0.8px] items-center font-bold text-3xl">
          {" "}
          Welcome to
          <div className="ml-3 flex justify-start items-center !gap-[11px] cursor-pointer">
            <img src={navLogo} alt="navlogo" height={50} width={50} />
            <h2 className="font-bold text-3xl">Stack</h2>
          </div>
        </div>

        <p className="tracking-[1px] text-xl leading-9">
          This is Tasks page of stack
        </p>
      </div>
    </Layout>
  );
};

export default Home;
