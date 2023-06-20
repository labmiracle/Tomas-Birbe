import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Hooks } from "./Hooks";
import { Events } from "./Events";
import { HOC } from "./HOC";
import { Props } from "./Props";
import { Context } from "./Context";
import { State } from "./State";
import { RenderizadoCondicional } from "./RenderizadoCondicional";
import { Refs } from "./Refs";
import { PaintingList } from "./PaintingLists/index.tsx";
import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/props",
        element: <Props />,
      },
      {
        path: "/state",
        element: <State />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/renderizado-condicional",
        element: <RenderizadoCondicional />,
      },
      {
        path: "/refs",
        element: <Refs />,
      },
      {
        path: "/context",
        element: <Context />,
      },
      {
        path: "/hoc",
        element: <HOC />,
      },
      {
        path: "/hooks",
        element: <Hooks />,
      },
      {
        path: "/painting-list",
        element: <PaintingList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
