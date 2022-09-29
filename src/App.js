import React from "react";
import Card from "./components/Card";
import Food from "./components/Food";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Food />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
