import Sidebar from "@/shared/Sidebar/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col lg:flex-row pt-10">
      <div className="sidebar flex-[1]">
        <Sidebar />
      </div>
      <div className="dashboard-content flex-[4]">{children}</div>
    </div>
  );
};

export default DashboardLayout;
