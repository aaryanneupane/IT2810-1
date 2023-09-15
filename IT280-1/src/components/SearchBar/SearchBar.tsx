import React, { useState, useEffect } from 'react';
import * as cc from 'currency-codes';
import './SearchBar.css';

  
interface SearchBarProps {
  currenciesToDisplay: [string, number][];
  onCurrencySelect: (index: number) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ currenciesToDisplay, onCurrencySelect }) => {
  const [search, setSearch] = useState('');
  const [filteredCurrencies, setFilteredCurrencies] = useState<[string, number][]>([]);

  useEffect(() => {
    if (search !== '') {
        const filtered = currenciesToDisplay
            .filter(([code]) =>
                cc.code(code)
                    ?.currency.split(' ') // Breaks the currency into individual words
                    .some((word) => word.toLowerCase().startsWith(search.toLowerCase())) // Checks if any word starts with the search string
            )
            
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
              setSearch('');
            }}
            role="button"
            tabIndex={0}
            onKeyPress={() => {}}
            className="dropdown-option"
          >
            {cc.code(code)?.currency ?? code} - {(rate).toFixed(2)} 
          </div>
        ))}
      </div>
    </div>
  );
};














/* import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar() {
      const [searchInput, setSearchInput] = useState("");

    const countries = [
        { name: "china", population: 1439323776 },
        { name: "india", population: 1380004385 },
        { name: "usa", population: 331002651 },
        { name: "indonesia", population: 273523615 },
        { name: "pakistan", population: 220892340 },
        { name: "canada", population: 37742154 },
        { name: "new zealand", population: 4822233 },
        { name: "italy", population: 60461826 },
        { name: "south africa", population: 59308690 },
        { name: "rusia", population: 154934462 },
        { name: "egypt", population: 102334404 },
        { name: "iran", population: 83992949 },
        { name: "france", population: 65273511 },
        { name: "mexico", population: 128932753 },
        { name: "spain", population: 46754778 },
        { name: "senegal", population: 16743927 },
        { name: "brazil", population: 212559417 },
        { name: "denmark", population: 5792202 },
        { name: "sudan", population: 43849260 },
        { name: "iraq", population: 40222493 },
        { name: "peru", population: 32971854 },
        { name: "bangladesh",},
        { name: "portugal"},
     ];

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    function SearchList() {

        const filteredCountries = countries.filter((country) => {
            if (searchInput === "") {
               return "";
            }
            return country.name.toLowerCase().includes(searchInput.toLowerCase());
        });

        const filtered = filteredCountries?.map((country) => (
            <div>
               {country.name}
            </div>
         ));

        return searchInput.length>0? <div className='dropdown'> {filtered} </div> : null; 
    
      }
  

      return (
        <div className="search-container">
          <input
            className="searchbar"
            type="search"
            placeholder="Search here"
             onChange={handleChange}
            value={searchInput}
          />
            {SearchList()}
        </div>
      );

  
}
 */