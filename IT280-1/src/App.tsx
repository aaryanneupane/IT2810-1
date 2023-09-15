import React, { useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import FavouritesPage from "./pages/FavouritesPage";
import { fetchData } from "./api"; // Adjust the path accordingly

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    // Fetch API data and store it in session storage when the app initializes
    const fetchAndStoreApiData = async () => {
      try {
        const apiData = await fetchData(); // Fetch your API data here
        sessionStorage.setItem("apiData", JSON.stringify(apiData));
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    if (!sessionStorage.getItem("apiData")) {
      fetchAndStoreApiData();
    }
  }, []);
  

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="favourites" element={<FavouritesPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;