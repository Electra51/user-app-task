import DashboardLayouts from "../../components/Layouts/DashboardLayouts";
import SectionHead from "../../components/common/SectionHead";

const Profile = () => {
  return (
    <DashboardLayouts>
      <div className="px-7 mt-5">
        <SectionHead title="My Profile" paragraph="Profile details here" />
        <div className="flex justify-center items-center mt-20 text-gray-700 font-bold text-2xl">
          Name: ... Email:...
        </div>
      </div>
    </DashboardLayouts>
  );
};

export default Profile;
