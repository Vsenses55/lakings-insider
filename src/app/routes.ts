import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import ComponentsPage from "./pages/ComponentsPage";
import ColorsPage from "./pages/ColorsPage";
import TypographyPage from "./pages/TypographyPage";
import SpacingPage from "./pages/SpacingPage";
import PrototypePage from "./pages/PrototypePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: ComponentsPage },
      { path: "colors", Component: ColorsPage },
      { path: "typography", Component: TypographyPage },
      { path: "spacing", Component: SpacingPage },
      { path: "prototype", Component: PrototypePage },
    ],
  },
]);