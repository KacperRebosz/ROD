import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import PageFooter from "../components/Footer";
import AnimatedPage from "../components/AnimatedPage";
import ScrollToAnchor from "../modules/ScrollTohash.jsx";

export default function RootLayout() {
  return (
    <>
      <ScrollToAnchor />
      <AnimatedPage>
        <div className="bg-tlo-strony bg-center bg-cover xl:h-[65vh] 2xl:h-[70vh] 3xl:h-[80vh] ">
          <Menu className="" />
        </div>
        <main className="">
          <Outlet />
        </main>
        <PageFooter />
      </AnimatedPage>
    </>
  );
}
