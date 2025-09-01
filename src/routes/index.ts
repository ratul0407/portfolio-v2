import { createBrowserRouter } from "react-router";
import App from "../App";
import BlogsPage from "../pages/Blogs";
import ProjectDetails from "../pages/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/blogs/:slug",
    Component: BlogsPage,
  },
  {
    path: "/projects/:id",
    Component: ProjectDetails,
  },
]);
