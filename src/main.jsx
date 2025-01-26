import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login/Login";
import MasterLayout from "./components/MasterLayout/MasterLayout";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import ModalDemo from "./components/ModalDemo";
import FormDemo from "./components/FormDemo";
import PaginationDemo from "./components/PaginationDemo";
import SearchFilter from "./components/SearchFilter";
// ...............................
import UseStateComp from "./components/All Hooks/UseStateComp";
import UseEffectComp from "./components/All Hooks/UseEffectComp";
import UseRefComp from "./components/All Hooks/UseRefComp";
import UseMemo from "./components/All Hooks/USeMemo";
import UseCallback from "./components/All Hooks/USeCallback";
import UseReducer from "./components/All Hooks/UseReducer";

const routers = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: (
      <div>Oops!! Something went wrong. Try refreshing the page.</div>
    ),
  },
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      { path: "/", element: <Counter /> },
      { path: "counter", element: <Counter /> },

      { path: "todo", element: <Todo /> },
      { path: "modal", element: <ModalDemo /> },
      { path: "search-filter", element: <SearchFilter /> },
      { path: "form", element: <FormDemo /> },
      { path: "pagination", element: <PaginationDemo /> },
      // .........................................
      { path: "use-state", element: <UseStateComp /> },
      { path: "use-effect", element: <UseEffectComp /> },
      { path: "use-ref", element: <UseRefComp /> },
      { path: "use-memo", element: <UseMemo /> },
      { path: "use-callback", element: <UseCallback /> },
      { path: "use-reducer", element: <UseReducer /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>
);
