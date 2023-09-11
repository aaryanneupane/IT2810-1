import { useState } from "react";
import Header from "../components/Header/Header";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../api"; // Adjust the path accordingly
import Currency from "../components/Currency/Currency";

const HomePage = () => {
  

  return (
    <div>
      <Header />
    </div>
  );
};

export default HomePage;
