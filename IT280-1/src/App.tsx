import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import FavouritesPage from "./pages/FavouritesPage";
import { fetchData } from "./api"; // Adjust the path accordingly

const queryClient = new QueryClient();

function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // Fetch API data and store it in session storage when the app initializes
    const fetchAndStoreApiData = async () => {
      try {
        const data = await fetchData(); // Fetch your API data here
        sessionStorage.setItem("apiData", JSON.stringify(data));
        setApiData(data); // Set the data in state
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    const sessionData = sessionStorage.getItem("apiData");
    if (!sessionData) {
      fetchAndStoreApiData();
    } else {
      // If data is already available in session storage, set it in state
      setApiData(JSON.parse(sessionData));
    }
  }, []);

  if (!apiData) {
    return <p>Loading...</p>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage apiData={apiData} />} />
          <Route
            path="favourites"
            element={<FavouritesPage apiData={apiData} />}
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
