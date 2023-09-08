import { useState } from "react";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";

const HomePage = () => {
  const [count, setCount] = useState(0);
  

  return (
    <div style={{ width: "100vw" }}>
      <Header></Header>
      <div>
        <h1>valuta gutta</h1>
      </div>
      <Button></Button>
    </div>
  );
};

export default HomePage;
