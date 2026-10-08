import { createContext, useState } from "react";
import { AccessibilityInfo } from "react-native";

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

    AccessibilityInfo.announceForAccessibility(`${dish.name} tillagd i måltiden`);
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
  const clearMeal = () => {
    setSelectedDishes([]);
  };


  return (
    <MealCalculatorContext.Provider
      value={{
        selectedDishes,
        addDish,
        increaseQuantity,
        decreaseQuantity,
        clearMeal,
      }}
    >
      {children}
    </MealCalculatorContext.Provider>
  );
}