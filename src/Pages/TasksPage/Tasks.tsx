import { useEffect, useState } from "react";
import Layout from "../../components/Layouts/Layout";
import HeadHook from "../../components/common/HeadHook";

const Tasks = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/todos");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setData(result.todos);
      console.log(result.todos);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <HeadHook
        description="User application using typscript"
        keywords="Reactjs, Typescript, Tailwindcss"
        author="Safayet Nur"
        title="Stack-Tasks"
      />
      <div className="max-w-[1216px] mt-[35px] mx-auto h-[40px] flex justify-between items-center">
        <p className="font-medium text-[24px] text-[#101828]">Tasks</p>
      </div>
      <div className="max-w-[1216px] mx-auto grid grid-cols-4 justify-center items-center text-gray-400 gap-6 mt-5 pb-10">
        {data?.map((e: any, i: number) => (
          <div
            key={i}
            className="rounded-[6px] border border-[#EAECF0] bg-base-100 shadow-md relative"
          >
            <div className="card-body !px-4 !py-5 text-[#101828]">
              {e.todo?.length > 30 ? (
                <p className="text-[14px] mt-1.5">
                  {e.todo.slice(0, 30) + "..."}
                </p>
              ) : (
                <p className="text-[14px] mt-1">{e.todo}</p>
              )}
            </div>
            {e.completed == true ? (
              <div className="badge badge-primary absolute top-2 right-2 text-[10px]">
                Completed
              </div>
            ) : (
              <div className="badge badge-secondary badge-outline absolute top-2 right-2 text-[10px]">
                Due
              </div>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Tasks;
