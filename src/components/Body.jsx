import { RouterProvider } from "react-router-dom";
import appRouter from "../Routes/routes";

const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
