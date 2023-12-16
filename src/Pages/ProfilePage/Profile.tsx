import HeadHook from "../../components/common/HeadHook";
import SectionHead from "../../components/common/SectionHead";
import DashboardLayouts from "../../components/Layouts/DashboardLayouts";

const Profile = () => {
  return (
    <>
      <HeadHook
        description="User application using typscript"
        keywords="Reactjs, Typescript, Tailwindcss"
        author="Safayet Nur"
        title="Stack-Profile"
      />
      <div className="px-7 mt-5">
        <SectionHead title="My Profile" paragraph="Profile details here" />
        <div className="flex justify-center items-center mt-40 text-gray-400 font-bold text-3xl">
          Profile Comming soon ...
        </div>
      </div>
    </>
  );
};

export default Profile;
