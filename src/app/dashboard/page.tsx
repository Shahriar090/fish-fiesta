import DashboardLayout from "./layout";

const DashboardHomePage = () => {
  return (
    <section className="pt-44 h-screen">
      <div>
        <h1>welcome to dashboard</h1>
      </div>
    </section>
  );
};
DashboardHomePage.getLayout = function getLayout(page: any) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardHomePage;
