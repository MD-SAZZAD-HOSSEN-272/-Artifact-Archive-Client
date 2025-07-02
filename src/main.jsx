import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { RouterProvider } from "react-router";
import { router } from "./Routers/Router.jsx";
import ContextProvider from "./Contexts/ContextProvider.jsx";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";
// import BubbleCursor from "./Components/BlubeCursor.jsx";
import CanvasCursor from "./utitli.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
      <ToastContainer></ToastContainer>
    </ContextProvider>
    <CanvasCursor></CanvasCursor>
    {/* <App /> */}
  </StrictMode>
);
