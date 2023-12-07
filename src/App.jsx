import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/Contact.jsx";
import DocumentsPage from "./pages/Documents.jsx";
import AboutUsPage from "./pages/AboutUs.jsx";
import ExpensesPage from "./pages/Expenses.jsx";
import RegulationsPage from "./pages/Regulations.jsx";
import RentingPage from "./pages/Renting.jsx";
import GalleryPage from "./pages/Gallery.jsx";
import RootLayout from "./pages/Root.jsx";
import ErrorPage from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "rootPage",
    errorElement: <ErrorPage />,
    children: [
      { path: "/", id: "homePage", element: <HomePage /> },
      {
        path: "/Contact",
        element: <ContactPage />,
      },
      { path: "/Documents", element: <DocumentsPage /> },
      { path: "/AboutUs", id: "aboutUsPage", element: <AboutUsPage /> },
      { path: "/Expenses", element: <ExpensesPage /> },
      { path: "/Regulations", element: <RegulationsPage /> },
      { path: "/Renting", element: <RentingPage /> },
      { path: "/Gallery", id: "galleryPage", element: <GalleryPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <div id="main" className="">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
