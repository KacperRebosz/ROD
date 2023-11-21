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
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/Contact" element={<ContactPage />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/Contact",
        element: <ContactPage />,
      },
      { path: "/Documents", element: <DocumentsPage /> },
      { path: "/AboutUs", element: <AboutUsPage /> },
      { path: "/Expenses", element: <ExpensesPage /> },
      { path: "/Regulations", element: <RegulationsPage /> },
      { path: "/Renting", element: <RentingPage /> },
      { path: "/Gallery", element: <GalleryPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <div
        id="main"
        className="col-start-2 col-span-3 h-screen bg-violet-50/60 shadow-2xl"
      >
        <RouterProvider router={router} />
        {/* <h1 className="text-3xl font-bold underline">Hello World!</h1> */}
      </div>
    </>
  );
}

export default App;
