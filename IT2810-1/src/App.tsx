import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavouritesPage from "./pages/FavouritesPage";

function App() {
  return (
    <Router basename="project1">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="favourites" element={<FavouritesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
