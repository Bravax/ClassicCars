import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./src/pages/Home";
import Events from "./src/pages/Events";
import LegendaryCars from "./src/pages/LegendaryCars";
import Renovations from "./src/pages/Renovations";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Events",
    element: <Events/>
  },
  {
    path: "/LegendaryCars",
    element: <LegendaryCars/>
  },
  {
    path: "/Renovations",
    element: <Renovations/>
  },
  {
    path: "/About",
    element: <About/>
  },
  {
    path: "/Contact",
    element: <Contact/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);