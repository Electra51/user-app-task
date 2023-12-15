import { IoMdArrowBack } from "react-icons/io";
const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28 text-[#344054]">
      <h2 className="text-[230px] font-black">404</h2>
      <p className="text-2xl">Page Not Found</p>
      <button className="flex justify-center items-center gap-1 bg-[#6941C6] rounded-[8px] text-[14px] px-4 py-3 text-white mt-5">
        <IoMdArrowBack /> back to home
      </button>
    </div>
  );
};

export default NotFoundPage;
