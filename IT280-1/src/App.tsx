import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import HomePage from "./pages/HomePage";
import "./App.css";
import ConverterPage from "./pages/ConverterPage";


const queryClient = new QueryClient()

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="converter" element={<ConverterPage />} />
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
