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
import ParentComp from "./components/ParentChildProps/ParentComp";
import ConditionalRender from "./components/ConditionalRender";
// ...............................
import TabForm from "./components/TabForm/TabForm";
import AutoSearch from "./components/AutoSearch/AutoSearch";
import FileExplorer from "./components/FileExplorer/MainFolder";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import OtpInput from "./components/OtpInput/OtpInput";
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
      { path: "parent-child", element: <ParentComp /> },
      { path: "pagination", element: <PaginationDemo /> },
      { path: "conditional-render", element: <ConditionalRender /> },
      // .........................................
      { path: "tab-form", element: <TabForm /> },
      { path: "auto-search", element: <AutoSearch /> },
      { path: "file-explorer", element: <FileExplorer /> },
      { path: "progress-bar", element: <ProgressBar /> },
      { path: "validate-otp", element: <OtpInput /> },

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
    <div id="portal"></div>
  </StrictMode>
);
