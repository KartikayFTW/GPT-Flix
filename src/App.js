import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
import { RouterProvider } from "react-router-dom";
import appRouter from "./Routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <Provider store={appStore}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={appRouter} />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
