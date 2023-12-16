import Layout from "../../components/Layouts/Layout";
import HeadHook from "../../components/common/HeadHook";
import { FiUploadCloud, FiPlus } from "react-icons/fi";
import DataTable from "react-data-table-component";
import { useEffect, useRef } from "react";
import authApi, { useGetUserQuery } from "../../redux/authApi";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";

type Row = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
};
const Users = () => {
  const { data, isLoading, isFetching, isError } = useGetUserQuery(authApi);
  console.log("data", data?.data);
  useEffect(() => {
    const element = document.querySelector(".hLjof") as HTMLElement | null;
    if (element) {
      element.insertAdjacentText("afterbegin", "Page ");
    }
    const paginationPreviousPage = document.getElementById(
      "pagination-previous-page"
    );
    if (paginationPreviousPage) {
      paginationPreviousPage.textContent = "Previous";
    }

    const paginationNextPage = document.getElementById("pagination-next-page");
    if (paginationNextPage) {
      paginationNextPage.textContent = "Next";
    }
    const paginationLastPage = document.getElementById("pagination-last-page");
    const paginationFirstPage = document.getElementById(
      "pagination-first-page"
    );

    if (paginationLastPage) {
      paginationLastPage.textContent = "";
    }

    if (paginationFirstPage) {
      paginationFirstPage.textContent = "";
    }

    // Remove content from elements with specific class names
    const elementsWithClass1 =
      document.getElementsByClassName("sc-lmoLKH lcunyj");
    for (let i = 0; i < elementsWithClass1.length; i++) {
      const element = elementsWithClass1[i];
      if (element instanceof HTMLElement) {
        element.textContent = "";
      }
    }

    const elementsWithClass2 = document.getElementsByClassName("hgMgsX");
    for (let i = 0; i < elementsWithClass2.length; i++) {
      const element = elementsWithClass2[i];
      if (element instanceof HTMLElement) {
        element.textContent = "";
      }
    }
  }, []);
  const columns = [
    {
      name: "Serial no.",
      selector: (row: Row) => row.id,
      sortable: true,
    },
    {
      name: "User Info",
      cell: (row: Row) => (
        <div className="flex gap-3 justify-normal items-center">
          <div className="avatar">
            <div className="w-[40px] rounded-full">
              <img src={row.avatar} alt="user image" />
            </div>
          </div>
          <div>
            <h3 className="text-[#101828] text-[14px] font-medium">
              {row.first_name}
              {row.last_name}
            </h3>
            <p className="text-[14px] text-[#667085] font-normal mt-0.5">
              row.email
            </p>
          </div>
        </div>
      ),
    },
    {
      name: "About",
      cell: (row: Row) => (
        <div className="py-4">
          <p className="text-[#101828] font-normal text-[14px]">
            Some dummy Content
          </p>
          <p className="text-[#667085]  font-normal text-[14px] mt-0.5">
            Brings all your news into one place
          </p>
        </div>
      ),
    },
    {
      name: "Status",
      cell: (row: Row) => (
        <div className="py-4">
          <button className="text-[#027A48] font-medium text-[12px] bg-[#ECFDF3] rounded-[16px] py-[2px] px-2">
            Customer
          </button>
        </div>
      ),
    },
    {
      name: "action",
      cell: (row: Row) => (
        <div className="py-4 flex justify-center items-center gap-5">
          <MdDeleteOutline className="text-[#667085] text-[16px]" />
          <MdOutlineEdit className="text-[#667085] text-[16px]" />
        </div>
      ),
    },
  ];

  const tableHeaderstyle = {
    headCells: {
      style: {
        fontWeight: "medium",
        fontSize: "12px",
        color: "#667085",
        backgroundColor: "#F9FAFB",
      },
    },
  };

  return (
    <Layout>
      <HeadHook
        description="User application using typscript"
        keywords="Reactjs, Typescript, Tailwindcss"
        author="Safayet Nur"
        title="Stack-Users"
      />
      <div className="max-w-[1216px] mt-[35px] mx-auto h-[40px] flex justify-between items-center">
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
      <div className="mt-[33px] w-[1216px] rounded-[8px] mx-auto border border-[#EAECF0] mb-[210px]">
        <DataTable
          columns={columns}
          data={data?.data}
          selectableRows
          pagination
          fixedHeader
          customStyles={tableHeaderstyle}
        />
      </div>
    </Layout>
  );
};

export default Users;
