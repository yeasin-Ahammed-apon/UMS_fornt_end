import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // don't move it over bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-loading-skeleton/dist/skeleton.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ProSidebarProvider>
          <App />
        </ProSidebarProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
