import React, { useState, useEffect } from "react";
import * as cc from "currency-codes";
import "./SearchBar.css";

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

  useEffect(() => {
    if (search !== "") {
      const filtered = currenciesToDisplay.filter(
        ([code]) =>
          cc
            .code(code)
            ?.currency.split(" ") // Breaks the currency into individual words
            .some((word) => word.toLowerCase().startsWith(search.toLowerCase())) // Checks if any word starts with the search string
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
            }}
            role="button"
            tabIndex={0}
            onKeyPress={() => {}}
            className="dropdown-option"
          >
            {cc.code(code)?.currency ?? code} - {rate.toFixed(2)}
          </div>
        ))}
      </div>
    </div>
  );
};


/*  Put this into the homepage.tsx file
     <div>
        <SearchBar
          currenciesToDisplay={currenciesToDisplay}
          onCurrencySelect={setIterate}
        />
      </div> */