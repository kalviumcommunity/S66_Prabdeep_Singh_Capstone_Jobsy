import React from "react";
import Header from "./Components/header";
import Footer from "./Components/Footer";
import Button from "./Components/Button";

const App = () => {
  const handleClick = () => alert("Button clicked!");

  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>
        <h2>Welcome to my Capstone Project!</h2>
        <Button text="Click Me" onClick={handleClick} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
