import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(meal) {
  
    const isFavorite = favorites.some(
  (favorite) => favorite.id === meal.id
    );
    
    if (isFavorite) {
      setFavorites(favorites.filter((favorite) => favorite.id !== meal.id));
      return;
    }

    setFavorites((prev) => [...prev, meal]);
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
    return useContext(FavoritesContext);
  }