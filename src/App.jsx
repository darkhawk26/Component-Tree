import React from "react";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";

const App = () => {
  const recipes = [
    {
      id: 1,
      name: "Pancakes",
      ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Butter"],
      instructions: "Mix all ingredients and fry in a pan until golden.",
    },
    {
      id: 2,
      name: "Spaghetti Carbonara",
      ingredients: ["Spaghetti", "Eggs", "Parmesan", "Bacon", "Garlic"],
      instructions:
        "Cook spaghetti, mix with beaten eggs, cheese, and fried bacon.",
    },
    {
      id: 3,
      name: "Greek Salad",
      ingredients: [
        "Tomatoes",
        "Cucumber",
        "Feta Cheese",
        "Olives",
        "Olive Oil",
      ],
      instructions:
        "Chop vegetables, mix with feta and olives, and drizzle with olive oil.",
    },
  ];

  return (
    <div>
      <Header />
      <Main recipes={recipes} />
      <Footer />
    </div>
  );
};

export default App;
