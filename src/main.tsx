import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import "./css/definedClasses.css";

// React Router
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

// Redux
import { store } from "./app/store";
import { Provider } from "react-redux";
import { fetchLocations } from "./features/locations/locationsSlice";

store.dispatch(fetchLocations())


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
