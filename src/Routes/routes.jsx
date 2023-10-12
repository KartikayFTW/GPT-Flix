import Login from "../pages/Login";
import Browse from "../pages/Browse";
import { createBrowserRouter } from "react-router-dom";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

export default appRouter;
