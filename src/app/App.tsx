import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { loadFlamaFonts } from "../utils/loadFonts";

export default function App() {
  useEffect(() => {
    // Load Flama fonts from base64 files
    loadFlamaFonts();
  }, []);

  return <RouterProvider router={router} />;
}