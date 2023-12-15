import DashboardLayouts from "../../components/Layouts/DashboardLayouts";
import SectionHead from "../../components/common/SectionHead";

const Dashboard = () => {
  return (
    <DashboardLayouts>
      <div className="px-7 mt-5">
        <SectionHead title="Dashboard" paragraph="Welcome to your Dashboard" />
        <div className="flex justify-center items-center mt-40 text-gray-400 font-bold text-3xl">
          Comming soon ...
        </div>
      </div>
    </DashboardLayouts>
  );
};

export default Dashboard;
