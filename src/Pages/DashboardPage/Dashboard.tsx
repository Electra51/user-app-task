import DashboardLayouts from "../../components/Layouts/DashboardLayouts";
import SectionHead from "../../components/common/SectionHead";
import HeadHook from "../../components/common/HeadHook";

const Dashboard = () => {
  return (
    <>
      <HeadHook
        description="User application using typscript"
        keywords="Reactjs, Typescript, Tailwindcss"
        author="Safayet Nur"
        title="Stack-Dashboard"
      />
      <div className="px-7 mt-5">
        <SectionHead title="Dashboard" paragraph="Welcome to your Dashboard" />
        <div className="flex justify-center items-center mt-40 text-gray-400 font-bold text-3xl">
          Comming soon ...
        </div>
      </div>
    </>
  );
};

export default Dashboard;
