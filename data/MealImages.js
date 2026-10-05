// Bilder per maträtt, nycklade på meal.id i Data.js.
// thumb  = 240x240 (kvadrat) – för menykorten
// detail = 1200x800 (3:2)    – för produktsidan
const mealImages = {
  1: { thumb: require("../assets/images/meals/nachos-con-queso-thumb.webp"), detail: require("../assets/images/meals/nachos-con-queso.webp") },
  2: { thumb: require("../assets/images/meals/guacamole-totopos-thumb.webp"), detail: require("../assets/images/meals/guacamole-totopos.webp") },
  3: { thumb: require("../assets/images/meals/elote-thumb.webp"), detail: require("../assets/images/meals/elote.webp") },
  4: { thumb: require("../assets/images/meals/tacos-al-pastor-thumb.webp"), detail: require("../assets/images/meals/tacos-al-pastor.webp") },
  5: { thumb: require("../assets/images/meals/tacos-carne-asada-thumb.webp"), detail: require("../assets/images/meals/tacos-carne-asada.webp") },
  6: { thumb: require("../assets/images/meals/tacos-pollo-tinga-thumb.webp"), detail: require("../assets/images/meals/tacos-pollo-tinga.webp") },
  7: { thumb: require("../assets/images/meals/tacos-birria-thumb.webp"), detail: require("../assets/images/meals/tacos-birria.webp") },
  8: { thumb: require("../assets/images/meals/baja-fish-tacos-thumb.webp"), detail: require("../assets/images/meals/baja-fish-tacos.webp") },
  9: { thumb: require("../assets/images/meals/tacos-hongos-thumb.webp"), detail: require("../assets/images/meals/tacos-hongos.webp") },
  10: { thumb: require("../assets/images/meals/tacos-coliflor-thumb.webp"), detail: require("../assets/images/meals/tacos-coliflor.webp") },
  11: { thumb: require("../assets/images/meals/burrito-pollo-thumb.webp"), detail: require("../assets/images/meals/burrito-pollo.webp") },
  12: { thumb: require("../assets/images/meals/burrito-vegano-thumb.webp"), detail: require("../assets/images/meals/burrito-vegano.webp") },
  13: { thumb: require("../assets/images/meals/quesadilla-queso-thumb.webp"), detail: require("../assets/images/meals/quesadilla-queso.webp") },
  14: { thumb: require("../assets/images/meals/arroz-mexicano-thumb.webp"), detail: require("../assets/images/meals/arroz-mexicano.webp") },
  15: { thumb: require("../assets/images/meals/frijoles-refritos-thumb.webp"), detail: require("../assets/images/meals/frijoles-refritos.webp") },
  16: { thumb: require("../assets/images/meals/pico-de-gallo-thumb.webp"), detail: require("../assets/images/meals/pico-de-gallo.webp") },
  17: { thumb: require("../assets/images/meals/churros-chocolate-thumb.webp"), detail: require("../assets/images/meals/churros-chocolate.webp") },
  18: { thumb: require("../assets/images/meals/tres-leches-thumb.webp"), detail: require("../assets/images/meals/tres-leches.webp") },
  19: { thumb: require("../assets/images/meals/jarritos-mandarina-thumb.webp"), detail: require("../assets/images/meals/jarritos-mandarina.webp") },
  20: { thumb: require("../assets/images/meals/jarritos-tamarindo-thumb.webp"), detail: require("../assets/images/meals/jarritos-tamarindo.webp") },
  21: { thumb: require("../assets/images/meals/horchata-thumb.webp"), detail: require("../assets/images/meals/horchata.webp") },
  22: { thumb: require("../assets/images/meals/sol-thumb.webp"), detail: require("../assets/images/meals/sol.webp") },
  23: { thumb: require("../assets/images/meals/dos-equis-thumb.webp"), detail: require("../assets/images/meals/dos-equis.webp") },
};

// Användning: <Image source={getMealImage(item.id, "thumb")} />
export function getMealImage(id, size = "thumb") {
  return mealImages[id]?.[size];
}

export default mealImages;
