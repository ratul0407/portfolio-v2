import { createBrowserRouter } from "react-router";
import App from "../App";
import BlogsPage from "../pages/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/blogs/:slug",
    Component: BlogsPage,
  },
]);
