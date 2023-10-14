import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
import { RouterProvider } from "react-router-dom";
import appRouter from "./Routes/routes";

const App = () => {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
