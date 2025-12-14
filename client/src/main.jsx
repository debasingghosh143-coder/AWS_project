import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// @ts-ignore
import "./index.css";
// @ts-ignore
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import AppProvider from "./context/appProvider.jsx";
import { ClerkProvider } from '@clerk/clerk-react'
import { PUBLISHABLE_KEY } from "./utils/helper.mjs";


if (!PUBLISHABLE_KEY) {
    throw new Error('Add your Clerk Publishable Key to the .env file')
  }
// @ts-ignore
createRoot(document.getElementById("root")).render(
 <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>
</ClerkProvider>

);
