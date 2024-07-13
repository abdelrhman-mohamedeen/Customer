import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "./componants/Layout/Layout";
import About from "./componants/About/About";
import Home from "./componants/Home/Home";
import Contact from "./componants/Contact/Contact";
import Portfolio from "./componants/Portfolio/Portfolio";
import Notfound from "./componants/Notfound/NotFound";
const x = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      { path: "contact", element: <Contact /> },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={x} />;
}

export default App;
