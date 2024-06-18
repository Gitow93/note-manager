import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Home, CreateNote, NoteDetail, EditNote } from "./pages/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
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
        path: "/note/:id",
        element: <NoteDetail />,
      },
      {
        path: "/edit-note/:id",
        element: <EditNote />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
