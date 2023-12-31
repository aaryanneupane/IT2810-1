import { useState, useEffect } from "react";
import * as cc from "currency-codes";
import "../styles/SearchBar.css";

interface SearchBarProps {
  currenciesToDisplay: [string, number][];
  onCurrencySelect: (index: number) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  currenciesToDisplay,
  onCurrencySelect,
}) => {
  const [search, setSearch] = useState("");
  const [filteredCurrencies, setFilteredCurrencies] = useState<
    [string, number][]
  >([]);

  // Retrieve the search query from session storage on component mount
  useEffect(() => {
    const storedSearch = sessionStorage.getItem("searchQuery");
    if (storedSearch) {
      setSearch(storedSearch);
    }
  }, []);

  // Filter the currencies to display based on the search string
  useEffect(() => {
    if (search !== "") {
      const filtered = currenciesToDisplay.filter(
        ([code]) =>
          cc
            .code(code)
            ?.currency.split(" ") // Breaks the currency into individual words
            .some((word) =>
              word.toLowerCase().startsWith(search.toLowerCase()),
            ), // Checks if any word starts with the search string
      );

      setFilteredCurrencies(filtered);
    } else {
      setFilteredCurrencies([]);
    }
  }, [search, currenciesToDisplay]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search currency..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="options">
        {filteredCurrencies.map(([code, rate]) => (
          <div
            key={code}
            onClick={() => {
              const index = currenciesToDisplay.findIndex(([c]) => c === code);
              onCurrencySelect(index);
              setSearch("");
              sessionStorage.setItem("searchQuery", search);
            }}
            role="button"
            tabIndex={0}
            className="dropdown-option"
          >
            {cc.code(code)?.currency ?? code} - {rate.toFixed(2)}
          </div>
        ))}
      </div>
    </div>
  );
};
