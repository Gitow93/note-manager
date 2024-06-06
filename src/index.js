import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Home, CreateNote, Note } from "./pages/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { I18nextProvider } from "react-i18next";
import "./i18n/i18n";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-note",
        element: <CreateNote />,
      },
      {
        path: "note/:id",
        element: <Note />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider>
        <RouterProvider router={router} />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
