import { createContext, useState } from "react";

export const MealCalculatorContext = createContext();

export function MealCalculatorProvider({ children }) {
  const [selectedDishes, setSelectedDishes] = useState([]);

  const addDish = (dish) => {
    const existingDish = selectedDishes.find(
      (selectedDish) => selectedDish.id === dish.id
    );

    if (existingDish) {
      setSelectedDishes(
        selectedDishes.map((selectedDish) =>
          selectedDish.id === dish.id
            ? {
              ...selectedDish,
              quantity: selectedDish.quantity + 1,
            }
            : selectedDish
        )
      );
    } else {
      setSelectedDishes([
        ...selectedDishes,
        { ...dish, quantity: 1 },
      ]);
    }
  };



  const increaseQuantity = (dishId) => {
    setSelectedDishes(
      selectedDishes.map((dish) =>
        dish.id === dishId
          ? { ...dish, quantity: dish.quantity + 1 }
          : dish
      )
    );
  };

  const decreaseQuantity = (dishId) => {
    setSelectedDishes(
      selectedDishes
        .map((dish) =>
          dish.id === dishId
            ? { ...dish, quantity: dish.quantity - 1 }
            : dish
        )
        .filter((dish) => dish.quantity > 0)
    );
  };



  return (
    <MealCalculatorContext.Provider
      value={{
        selectedDishes,
        addDish,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </MealCalculatorContext.Provider>
  );
}