export const categories = [
  { id: "starters", title: "Förrätter", icon: "food-variant" },
  { id: "tacos", title: "Tacos", icon: "taco" },
  { id: "burritos", title: "Burritos & Quesadillas", icon: "circle-slice-4" },
  { id: "sides", title: "Tillbehör", icon: "french-fries" },
  { id: "desserts", title: "Efterrätter", icon: "cookie-outline" },
  { id: "drinks", title: "Drycker", icon: "cup-water" },
];

// shortDescription visas på menykorten, description på produktsidan.
export const meals = [
  // ---------- Förrätter ----------
  {
    id: 1,
    name: "Nachos con Queso",
    price: 89,
    category: "starters",
    shortDescription: "Majschips med smält ost och jalapeños.",
    description:
      "Krispiga, nygräddade majschips täckta med en generös mängd smält ost. Toppas med skivade jalapeños, färsk pico de gallo och en klick gräddfil. Perfekt att dela på medan du väntar på huvudrätten.",
    vegetarian: true,
    vegan: false,
    spicy: 1,
    allergens: ["mjölk"],
  },
  {
    id: 2,
    name: "Guacamole & Totopos",
    price: 79,
    category: "starters",
    shortDescription: "Färsk guacamole med nygräddade majschips.",
    description:
      "Mosad avokado med lime, koriander, rödlök och en aning chili, gjord på beställning så att den alltid är grön och fräsch. Serveras med totopos – krispiga majschips som vi friterar själva varje dag.",
    vegetarian: true,
    vegan: true,
    spicy: 0,
    allergens: [],
  },
  {
    id: 3,
    name: "Elote",
    price: 69,
    category: "starters",
    shortDescription: "Grillad majskolv med limemajonnäs och ost.",
    description:
      "Mexikansk gatumat i sin bästa form. Majskolven grillas tills den får lite sotiga kanter och penslas sedan med krämig limemajonnäs. Strös över med smulad cotijaost, chilipulver och serveras med en limeklyfta.",
    vegetarian: true,
    vegan: false,
    spicy: 1,
    allergens: ["mjölk", "ägg"],
  },

  // ---------- Tacos (3 st per portion) ----------
  {
    id: 4,
    name: "Tacos al Pastor",
    price: 139,
    category: "tacos",
    shortDescription: "Marinerad fläsk med grillad ananas.",
    description:
      "Fläskkarré marinerad i achiote, torkad chili och kryddor, grillad och skuren i tunna skivor. Serveras på mjuka majstortillas med grillad ananas, finhackad lök och färsk koriander. Tre tacos per portion.",
    vegetarian: false,
    vegan: false,
    spicy: 2,
    allergens: [],
  },
  {
    id: 5,
    name: "Tacos de Carne Asada",
    price: 149,
    category: "tacos",
    shortDescription: "Grillad oxfilé med salsa verde.",
    description:
      "Mör oxfilé marinerad i lime, vitlök och kryddor och grillad över hög värme. Skärs i bitar och läggs på majstortillas med syrlig salsa verde, rödlök och lime. Tre tacos per portion.",
    vegetarian: false,
    vegan: false,
    spicy: 1,
    allergens: [],
  },
  {
    id: 6,
    name: "Tacos de Pollo Tinga",
    price: 135,
    category: "tacos",
    shortDescription: "Dragen kyckling i rökig chipotlesås.",
    description:
      "Kycklingen långkokas och dras isär innan den får puttra i en rökig sås på chipotle, tomat och lök. Toppas med crema och skivad avokado för en len kontrast till hettan. Tre tacos per portion.",
    vegetarian: false,
    vegan: false,
    spicy: 2,
    allergens: ["mjölk"],
  },
  {
    id: 7,
    name: "Tacos de Birria",
    price: 159,
    category: "tacos",
    shortDescription: "Långkokt högrev med consommé att doppa i.",
    description:
      "Högrev som långkokats i flera timmar med torkad chili och kryddor tills den faller isär. Läggs i tortillas med smält ost och steks krispiga. Serveras med en kopp het consommé att doppa i. Tre tacos per portion.",
    vegetarian: false,
    vegan: false,
    spicy: 2,
    allergens: ["mjölk"],
  },
  {
    id: 8,
    name: "Baja Fish Tacos",
    price: 145,
    category: "tacos",
    shortDescription: "Friterad torsk med kålsallad och lime.",
    description:
      "Inspirerade av fiskstånden i Baja California. Torsk i ett frasigt ölsmet, serverad med krispig kålsallad, chipotlemajonnäs och färsk lime. Tre tacos per portion.",
    vegetarian: false,
    vegan: false,
    spicy: 1,
    allergens: ["fisk", "gluten", "ägg"],
  },
  {
    id: 9,
    name: "Tacos de Hongos",
    price: 129,
    category: "tacos",
    shortDescription: "Stekt svamp med vitlök, chili och feta.",
    description:
      "En blandning av svamp stekt i smör med vitlök och chili tills den får fin färg. Toppas med smulad fetaost, picklad rödlök och färsk koriander. Ett mustigt vegetariskt alternativ. Tre tacos per portion.",
    vegetarian: true,
    vegan: false,
    spicy: 1,
    allergens: ["mjölk"],
  },
  {
    id: 10,
    name: "Tacos de Coliflor",
    price: 125,
    category: "tacos",
    shortDescription: "Rostad blomkål med chipotle och granatäpple.",
    description:
      "Blomkål vänd i chipotle och rostad i ugnen tills den blir gyllene och lite krispig. Serveras med krämig avokadokräm och granatäppelkärnor som ger friskhet och sötma. Helt vegansk. Tre tacos per portion.",
    vegetarian: true,
    vegan: true,
    spicy: 2,
    allergens: [],
  },

  // ---------- Burritos & Quesadillas ----------
  {
    id: 11,
    name: "Burrito de Pollo",
    price: 149,
    category: "burritos",
    shortDescription: "Kyckling, ris, bönor och ost i vetetortilla.",
    description:
      "En rejäl burrito fylld med kryddig kyckling, mexikanskt ris, svarta bönor, smält ost och pico de gallo. Rullas i en stor vetetortilla och grillas lätt så att den håller ihop. Mättande och perfekt som lunch.",
    vegetarian: false,
    vegan: false,
    spicy: 1,
    allergens: ["gluten", "mjölk"],
  },
  {
    id: 12,
    name: "Burrito Vegano",
    price: 139,
    category: "burritos",
    shortDescription: "Bönor, ris, grillade grönsaker och guacamole.",
    description:
      "Svarta bönor, mexikanskt ris, grillad paprika och majs, rullat i en vetetortilla tillsammans med en generös mängd guacamole. Helt vegansk och full av smak.",
    vegetarian: true,
    vegan: true,
    spicy: 1,
    allergens: ["gluten"],
  },
  {
    id: 13,
    name: "Quesadilla de Queso",
    price: 119,
    category: "burritos",
    shortDescription: "Grillad tortilla med smält ost och jalapeños.",
    description:
      "Vetetortilla fylld med en blandning av smältande ostar och jalapeños, grillad tills den är gyllene och krispig på utsidan. Skärs i trianglar och serveras med salsa roja att doppa i.",
    vegetarian: true,
    vegan: false,
    spicy: 1,
    allergens: ["gluten", "mjölk"],
  },

  // ---------- Tillbehör ----------
  {
    id: 14,
    name: "Arroz Mexicano",
    price: 39,
    category: "sides",
    shortDescription: "Tomatkokt ris med lök och vitlök.",
    description:
      "Riset fräses först i olja tills det får lite färg och kokas sedan i en buljong av tomat, lök och vitlök. Ett klassiskt tillbehör som passar till alla rätter på menyn.",
    vegetarian: true,
    vegan: true,
    spicy: 0,
    allergens: [],
  },
  {
    id: 15,
    name: "Frijoles Refritos",
    price: 39,
    category: "sides",
    shortDescription: "Krämiga, stekta pintobönor.",
    description:
      "Pintobönor som kokas mjuka, mosas och steks med lök och vitlök till en len och krämig konsistens. Ett självklart tillbehör till tacos och burritos.",
    vegetarian: true,
    vegan: true,
    spicy: 0,
    allergens: [],
  },
  {
    id: 16,
    name: "Pico de Gallo",
    price: 29,
    category: "sides",
    shortDescription: "Färsk salsa på tomat, lök och koriander.",
    description:
      "En frisk, grovhackad salsa på mogna tomater, rödlök, koriander, jalapeño och pressad lime. Gör sig bäst som topping på tacos eller med chips.",
    vegetarian: true,
    vegan: true,
    spicy: 1,
    allergens: [],
  },

  // ---------- Efterrätter ----------
  {
    id: 17,
    name: "Churros con Chocolate",
    price: 69,
    category: "desserts",
    shortDescription: "Churros med kanelsocker och chokladsås.",
    description:
      "Nyfriterade churros, frasiga på utsidan och mjuka inuti, vända i kanelsocker. Serveras med en kopp tjock, varm chokladsås att doppa i. En favorit som avslutning på måltiden.",
    vegetarian: true,
    vegan: false,
    spicy: 0,
    allergens: ["gluten", "mjölk", "ägg"],
  },
  {
    id: 18,
    name: "Pastel Tres Leches",
    price: 75,
    category: "desserts",
    shortDescription: "Saftig kaka dränkt i tre sorters mjölk.",
    description:
      "En luftig sockerkaka som dränks i en blandning av mjölk, kondenserad mjölk och grädde tills den är riktigt saftig. Toppas med lätt vispad grädde och en aning kanel.",
    vegetarian: true,
    vegan: false,
    spicy: 0,
    allergens: ["gluten", "mjölk", "ägg"],
  },

  // ---------- Drycker ----------
  {
    id: 19,
    name: "Jarritos Mandarina",
    price: 39,
    category: "drinks",
    shortDescription: "Mexikansk läsk med mandarinsmak.",
    description:
      "Mexikos klassiska läsk med smak av mandarin. Söt, fruktig och kolsyrad – serveras väl kyld i glasflaska.",
    vegetarian: true,
    vegan: true,
    spicy: 0,
    alcohol: false,
    allergens: [],
  },
  {
    id: 20,
    name: "Jarritos Tamarindo",
    price: 39,
    category: "drinks",
    shortDescription: "Mexikansk läsk med tamarindsmak.",
    description:
      "Läsk smaksatt med tamarind, en frukt med söt och lätt syrlig smak som är populär i hela Mexiko. Serveras väl kyld i glasflaska.",
    vegetarian: true,
    vegan: true,
    spicy: 0,
    alcohol: false,
    allergens: [],
  },
  {
    id: 21,
    name: "Horchata",
    price: 45,
    category: "drinks",
    shortDescription: "Kall risdryck med kanel och vanilj.",
    description:
      "En traditionell mexikansk dryck gjord på ris som blötläggs och mixas med kanel, vanilj och mjölk. Krämig, lätt söt och svalkande – särskilt god till starka rätter.",
    vegetarian: true,
    vegan: false,
    spicy: 0,
    alcohol: false,
    allergens: ["mjölk"],
  },
  {
    id: 22,
    name: "Sol",
    price: 69,
    category: "drinks",
    shortDescription: "Ljus mexikansk lager. 4,5 %.",
    description:
      "En ljus och lättdrucken mexikansk lager med frisk, mild smak. Serveras iskall med en limeklyfta. 4,5 % alkohol.",
    vegetarian: true,
    vegan: true,
    spicy: 0,
    alcohol: true,
    allergens: ["gluten"],
  },
  {
    id: 23,
    name: "Dos Equis Lager",
    price: 72,
    category: "drinks",
    shortDescription: "Frisk och lätt mexikansk lager. 4,2 %.",
    description:
      "En klassisk mexikansk lager med frisk och lätt maltig smak och en ren eftersmak. Passar utmärkt till tacos. 4,2 % alkohol.",
    vegetarian: true,
    vegan: true,
    spicy: 0,
    alcohol: true,
    allergens: ["gluten"],
  },
];

export const openingHours = [
  { day: "Måndag", hours: null },
  { day: "Tisdag", hours: "12-21" },
  { day: "Onsdag", hours: "12-21" },
  { day: "Torsdag", hours: "12-21" },
  { day: "Fredag", hours: "12-23" },
  { day: "Lördag", hours: "12-23" },
  { day: "Söndag", hours: "12-21" },
];

export const contactInfo = {
  address: "vasagatan 23, Valencia",
  phone: "070-1337 42 12",
  email: "hola@abuelita.se",
};
