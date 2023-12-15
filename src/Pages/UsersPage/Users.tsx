import Layout from "../../components/Layouts/Layout";
import HeadHook from "../../components/common/HeadHook";
import { FiUploadCloud, FiPlus } from "react-icons/fi";

const Users = () => {
  return (
    <Layout>
      <HeadHook
        description="User application using typscript"
        keywords="Reactjs, Typescript, Tailwindcss"
        author="Safayet Nur"
        title="Stack-Users"
      />
      <div className="max-w-[1216px] mt-[35px] mx-auto max-h-[40px] flex justify-between items-center">
        <p className="font-medium text-[24px] text-[#101828]">Users</p>
        <div className="flex justify-center items-center gap-3">
          <button className="flex justify-center items-center gap-2 px-4 py-[10px] border border-[#D0D5DD] rounded-[8px] text-[#344054]">
            <FiUploadCloud className="text-xl" />
            <p className="font-semibold text-[14px]"> Import</p>
          </button>
          <button className="flex justify-center items-center gap-2 px-4 py-[10px] bg-[#7F56D9] text-white rounded-[8px]">
            <FiPlus className="text-xl" />
            <p className="font-semibold text-[14px]"> Add User</p>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
