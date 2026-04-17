// Allergens (matching the colored dots from the printed menu)
export const allergens = {
  gluten: { label: "Gluten", color: "#3a2418" },           // negro/marrón
  cacahuetes: { label: "Cacahuetes", color: "#c2410c" },   // naranja
  frutosCascara: { label: "Frutos de cáscara", color: "#1e40af" }, // azul
  mostaza: { label: "Mostaza", color: "#a16207" },         // mostaza
  sesamo: { label: "Sésamo", color: "#65a30d" },           // verde claro
  soja: { label: "Soja", color: "#15803d" },               // verde oscuro
  lacteos: { label: "Lácteos", color: "#a16207" },         // mostaza/cream
  pescado: { label: "Pescado", color: "#7c3aed" },         // violeta
} as const;

export type AllergenKey = keyof typeof allergens;

export type Item = {
  name: string;
  nameEn?: string;
  description?: string;
  descriptionEn?: string;
  price: string;
  priceNote?: string;
  allergens?: AllergenKey[];
};

export type Group = {
  title: string;
  items: Item[];
  inlineNote?: string;
  footerNote?: string;
};

export type Tab = {
  id: string;
  label: string;
  groups: Group[];
};

export const menu: Tab[] = [
  {
    id: "calientes",
    label: "Calientes",
    groups: [
      {
        title: "Espresso bar",
        inlineNote: "Origen I / Origen II",
        items: [
          { name: "Espresso", price: "2,2 / 2,4 €" },
          { name: "Americano", price: "2,2 €" },
          { name: "Cortado", price: "2,1 €" },
          { name: "Café con leche", price: "2,7 / 3,2 €", allergens: ["lacteos"] },
          { name: "Capuchino", price: "2,7 €", allergens: ["lacteos"] },
          { name: "Flat white", price: "2,9 €", allergens: ["lacteos"] },
          { name: "Batch brew", price: "3 €" },
          { name: "Filtro / Hand brew", price: "5 / 7 €" },
          { name: "Infusión / Té", price: "2,5 €" },
        ],
      },
      {
        title: "Lattes de autor",
        items: [
          { name: "Caramel latte", price: "3 €", allergens: ["lacteos"] },
          { name: "Vainilla latte", price: "3 €", allergens: ["lacteos"] },
          { name: "Choco latte", price: "3,5 €", allergens: ["lacteos"] },
          { name: "Mocca", price: "3,5 €", allergens: ["lacteos"] },
          { name: "Mocca mint", price: "3,5 €", allergens: ["lacteos"] },
          { name: "Pumpkin spice latte", price: "3,5 €", allergens: ["lacteos"] },
          { name: "Chai latte", price: "3,5 €", allergens: ["lacteos"] },
          { name: "Dirty chai", price: "3,8 €", allergens: ["lacteos"] },
          { name: "Golden milk", price: "3,5 €", allergens: ["lacteos"] },
        ],
      },
      {
        title: "Matcha & hojicha",
        items: [
          { name: "Matcha latte", price: "3,7 €", allergens: ["lacteos"] },
          { name: "Hojicha latte", price: "3,5 €", allergens: ["lacteos"] },
          { name: "Dirty hojicha", price: "3,8 €", allergens: ["lacteos"] },
          { name: "Ube latte", price: "3,5 €", allergens: ["lacteos"] },
          { name: "Dirty ube latte", price: "3,8 €", allergens: ["lacteos"] },
          { name: "Ube matcha latte", price: "4 €", allergens: ["lacteos"] },
        ],
      },
    ],
  },
  {
    id: "frios",
    label: "Fríos",
    groups: [
      {
        title: "Café frío",
        items: [
          { name: "Iced americano", price: "2,6 €" },
          { name: "Cold brew", price: "4 €" },
          { name: "Iced latte", price: "3,8 €", allergens: ["lacteos"] },
          { name: "Iced vainilla latte", price: "4 €", allergens: ["lacteos"] },
          { name: "Iced caramel latte", price: "4 €", allergens: ["lacteos"] },
        ],
      },
      {
        title: "Tónicos & cítricos",
        items: [
          { name: "Espresso tonic", price: "4 €" },
          { name: "Espresso fresa tonic", price: "4,5 €" },
          { name: "Espresso orange", price: "4,5 €" },
          { name: "Matcha tonic", price: "4,5 €" },
          { name: "Matcha orange", price: "4,5 €" },
        ],
      },
      {
        title: "Matcha & hojicha frío",
        items: [
          { name: "Iced matcha latte", price: "4 €", allergens: ["lacteos"] },
          { name: "Iced fresa matcha", price: "4,5 €", allergens: ["lacteos"] },
          { name: "Iced mango matcha", price: "4,5 €", allergens: ["lacteos"] },
          { name: "Iced ube matcha", price: "4,5 €", allergens: ["lacteos"] },
          { name: "Iced hojicha", price: "4 €", allergens: ["lacteos"] },
          { name: "Iced mango hojicha", price: "4,5 €", allergens: ["lacteos"] },
          { name: "Iced chai", price: "4 €", allergens: ["lacteos"] },
          { name: "Iced dirty chai", price: "4,5 €", allergens: ["lacteos"] },
        ],
      },
    ],
  },
  {
    id: "comida",
    label: "Comida",
    groups: [
      {
        title: "Tostadas",
        items: [
          {
            name: "Aguacate",
            nameEn: "Avocado",
            description: "Aguacate, tomate, rúcula, zaatar",
            descriptionEn: "Avocado, tomato, arugula, zaatar",
            price: "7 €",
            allergens: ["gluten", "sesamo", "soja"],
          },
          {
            name: "Tomate y aceite de oliva",
            nameEn: "Tomato & olive oil",
            price: "4 €",
            allergens: ["gluten"],
          },
          {
            name: "Mantequilla y mermelada",
            nameEn: "Butter & jam",
            price: "4,8 €",
            allergens: ["gluten", "lacteos"],
          },
          {
            name: "Jamón serrano y tomate",
            nameEn: "Serrano ham & tomato",
            price: "6 €",
            allergens: ["gluten", "lacteos", "frutosCascara"],
          },
          {
            name: "Salmón",
            nameEn: "Salmon",
            description: "Ricota, salmón, aguacate, rúcula, aderezo de mostaza",
            descriptionEn: "Ricotta, salmon, avocado, arugula, mustard dressing",
            price: "11 €",
            allergens: ["gluten", "lacteos", "pescado", "mostaza"],
          },
          {
            name: "Hummus",
            description: "Hummus tradicional, pimiento asado, remolacha, cebolla crocante, sweet chili, zaatar",
            descriptionEn: "Traditional hummus, roasted pepper, beetroot, crispy onion, sweet chili dressing, zaatar",
            price: "7,5 €",
            allergens: ["gluten", "sesamo", "soja"],
          },
          {
            name: "Cacahuete",
            nameEn: "Peanut butter",
            description: "Mantequilla de cacahuete, ricota, mermelada, plátano, ralladura de limón",
            descriptionEn: "Peanut butter, ricotta, jam, banana, lemon zest",
            price: "7 €",
            allergens: ["gluten", "cacahuetes", "lacteos"],
          },
        ],
      },
      {
        title: "Sándwiches",
        items: [
          {
            name: "Jamón y queso",
            nameEn: "Ham & cheese",
            description: "Jamón york, pepinillos agridulces, queso gouda, mostaza antigua",
            descriptionEn: "Ham, pickles, gouda cheese, dijon mustard",
            price: "7,5 €",
            allergens: ["gluten", "lacteos", "mostaza"],
          },
          {
            name: "Verduras grilladas",
            nameEn: "Grilled vegetables",
            description: "Salsa romesco, verduras grilladas (calabacín, pimiento, berenjena), queso gouda",
            descriptionEn: "Romesco sauce, grilled vegetables (zucchini, bell pepper, aubergine), gouda cheese",
            price: "7,8 €",
            allergens: ["gluten", "lacteos", "frutosCascara"],
          },
          {
            name: "Capresse",
            description: "Salsa pesto, mozzarella, tomate, rúcula",
            descriptionEn: "Pesto sauce, mozzarella cheese, tomato, arugula",
            price: "7,8 €",
            allergens: ["gluten", "lacteos", "frutosCascara"],
          },
          {
            name: "Bowl de granola",
            nameEn: "Granola bowl",
            description: "Yogur griego o vegano de coco, granola casera, fruta de temporada",
            descriptionEn: "Greek or vegan coconut yogurt, homemade granola, seasonal fruit",
            price: "6,5 €",
            priceNote: "Opción vegana",
            allergens: ["gluten", "frutosCascara"],
          },
        ],
        footerNote: "Extras · Aguacate 2 € · Salmón 3 € · Jamón york 2 € · Jamón serrano 2,5 € · Opción pan sin gluten",
      },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas & extras",
    groups: [
      {
        title: "Bebidas",
        items: [
          { name: "Agua", price: "2 €" },
          { name: "Agua con gas", price: "2,2 €" },
          { name: "Agua de mar", price: "2,5 €" },
          { name: "Zumo de naranja", price: "3 €" },
          { name: "Limonada", price: "3 €" },
          { name: "Kombucha", price: "3 €" },
          { name: "Fritz", price: "3 €" },
        ],
      },
      {
        title: "Extras de café",
        items: [
          { name: "Shot extra", price: "0,5 €" },
          { name: "Bebida de avena o coco", price: "0,3 €" },
        ],
      },
    ],
  },
];
