import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/styles.css";

const initialMenu = [
  {
    id: 1,
    name: "Pancakes",
    category: "Breakfast",
    price: "$5.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR953o0O_ZxKFL7qPr8GY_onPRStI7cWL7L-CLt93lmxwKJaqziHyvRI-ptCrW-VJZiG2ON8OAI6tDDCNLyFlb_bLVzzrgexRxg5e5gVUM&s=10,breakfast"
  },
  {
    id: 2,
    name: "Omelette",
    category: "Breakfast",
    price: "$6.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aYXnCRQ4bAAmRurk4n3ikE1bj92Bg2PDRxLuAD6k_7SfdV4Ip1ODwAbpYfHJPRdqVWG0D1O22xazJ1Ip83hkrdEe-uIJ0K8RHGTyKuZC&s=10,eggs"
  },
  {
    id: 3,
    name: "Burger",
    category: "Lunch",
    price: "$8.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSCnOekMFMgHtfrsL52ItCflEw2eRWMhAk1A&s,fastfood"
  },
  {
    id: 4,
    name: "Salad",
    category: "Lunch",
    price: "$7.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnKGtXwf6bElV4vAn3cRrdYT-NZ-XgWrs8CdBtquZq3Vfybvhg1YT9v2I&s,healthy"
  },
  {
    id: 5,
    name: "Chocolate Shake",
    category: "Shakes",
    price: "$4.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0vZsB7k9mSOpMwh4wV2vNHe-2-vjFh_n2EQ&s,milkshake"
  },
  {
    id: 6,
    name: "Vanilla Shake",
    category: "Shakes",
    price: "$4.49",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlveFCjn4SM8bN4BybFosSRu--mitTkHDLOA&s,milkshake"
  }
];


export default function App() {
  // menuItems state holds the list of all items
  const [menuItems] = useState(initialMenu);
  // activeCategory tracks the selected filter; default is All
  const [activeCategory, setActiveCategory] = useState("All");

  const handleFilter = (category) => setActiveCategory(category);

  const filteredItems =
    activeCategory === "All" ? menuItems : menuItems.filter((i) => i.category === activeCategory);

  return (
    <main id="main">
      <section className="menu-section">
        <h1>Our Menu</h1>

        <div className="btn-container">
          <button id="filter-btn-1" onClick={() => handleFilter("Breakfast")}>Breakfast</button>
          <button id="filter-btn-2" onClick={() => handleFilter("Lunch")}>Lunch</button>
          <button id="filter-btn-3" onClick={() => handleFilter("Shakes")}>Shakes</button>
        </div>

        <Menu items={filteredItems} />
      </section>
    </main>
  );
}
