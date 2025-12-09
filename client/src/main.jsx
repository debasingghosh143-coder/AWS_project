import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// @ts-ignore
import "./index.css";
// @ts-ignore
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import AppProvider from "./context/appProvider.jsx";

// @ts-ignore
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>
);
