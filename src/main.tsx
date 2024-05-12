import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import { CustomThemeProvider } from "./components/theme-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CustomThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <App />
    </CustomThemeProvider>
  </React.StrictMode>
);
