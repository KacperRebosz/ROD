import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import PageFooter from "../components/Footer";

export default function RootLayout() {
  return (
    <>
      <div className="bg-tlo-strony w-screen bg-cover h-[90vh]">
        <Menu className="" />
      </div>
      {/* h-full shadow-2xl min-h-screen */}
      <main className="mx-32 ">
        {/* bg-neutral-200 bg-opacity-60  */}
        <Outlet />
      </main>
      <PageFooter />
    </>
  );
}
