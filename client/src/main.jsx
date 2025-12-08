import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// @ts-ignore
import "./index.css";
// @ts-ignore
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";


// @ts-ignore
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
