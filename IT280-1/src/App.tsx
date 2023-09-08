import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import HomePage from "./pages/HomePage";
import FavouritePage from "./pages/FavouritePage";
import "./App.css";


const queryClient = new QueryClient()

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="favourite" element={<FavouritePage />} />
      </>,
    ),
  );




  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
    
  );
}

export default App;
