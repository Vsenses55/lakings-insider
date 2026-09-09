import { createBrowserRouter } from "react-router";
import PrototypePage from "./pages/PrototypePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PrototypePage,
  },
]);
