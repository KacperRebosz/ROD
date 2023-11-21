import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

export default function RootLayout() {
  return (
    <>
      <Menu className="bg-neutral-600"></Menu>
      {/* main odpowiada za kazda z poszczegolnych podstron*/}
      <main className="bg-neutral-200 bg-opacity-60 ">
        <Outlet />
      </main>
    </>
  );
}
