import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import PageFooter from "../components/Footer";
import AnimatedPage from "../components/AnimatedPage";

export default function RootLayout() {
  return (
    <>
      <AnimatedPage>
        <div className="h-[90vh] w-screen bg-tlo-strony bg-cover">
          <Menu className="" />
        </div>
        <main className="mx-32 ">
          <Outlet />
        </main>
        <PageFooter />
      </AnimatedPage>
    </>
  );
}
