import SideBar from "./SideBar";

const DashboardLayouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <SideBar />
      <main className="w-full">{children}</main>
    </div>
  );
};

export default DashboardLayouts;
