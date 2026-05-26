export type Product = {
  slug: string;
  title: string;
  country: string;
  period: string;
  category: string;
  materials: string;
  dimensions: string;
  condition: string;
  restorationPotential: string;
  interiorFit: string;
  styles: string[];
  estimatedDelivery: string;
  images: string[];
  scenario: string;
};

export const products: Product[] = [
  {
    slug: "gio-ponti-sideboard-1950",
    title: "Буфет в духе Gio Ponti",
    country: "Италия",
    period: "1950-е",
    category: "Хранение",
    materials: "Орех, латунь, стекло",
    dimensions: "Ш 180 × Г 48 × В 92 см",
    condition: "Хорошее винтажное состояние, легкая патина",
    restorationPotential: "Рекомендуется мягкая полировка фасадов и профилактика фурнитуры.",
    interiorFit: "Гостиная или столовая в проекте с акцентом на графику дерева и деликатный блеск металла.",
    styles: ["Mid-century", "Итальянский модернизм", "Тихая роскошь"],
    estimatedDelivery: "6–9 недель",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1616627561950-9f746e330187?auto=format&fit=crop&w=1800&q=80"
    ],
    scenario: "Идеален как скульптурный центр стены напротив диванной группы."
  },
  {
    slug: "danish-lounge-chair-1960",
    title: "Датское кресло для лаунж-зоны",
    country: "Дания",
    period: "1960-е",
    category: "Мягкая мебель",
    materials: "Тик, шерстяная обивка",
    dimensions: "Ш 74 × Г 78 × В 80 см",
    condition: "Каркас стабилен, ткань требует обновления",
    restorationPotential: "Перетяжка натуральной шерстью и восстановление масляного покрытия тика.",
    interiorFit: "Читальный угол в гостиной, спальне или приватной библиотеке.",
    styles: ["Scandinavian", "Organic modern", "Japandi"],
    estimatedDelivery: "5–8 недель",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1800&q=80"
    ],
    scenario: "Создает камерное место для чтения и вечернего света у торшера."
  },
  {
    slug: "french-brutalist-lamp-1970",
    title: "Французский бруталистский торшер",
    country: "Франция",
    period: "1970-е",
    category: "Освещение",
    materials: "Кованое железо, лен",
    dimensions: "В 168 см, диаметр абажура 52 см",
    condition: "Отличное состояние, электрика проверена",
    restorationPotential: "Возможна замена абажура на индивидуальную ткань проекта.",
    interiorFit: "Уместен в высоких пространствах: лобби, гостиные с коллекционным искусством.",
    styles: ["Brutalism", "Wabi-sabi", "Gallery"],
    estimatedDelivery: "4–7 недель",
    images: [
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1800&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1800&q=80"
    ],
    scenario: "Работает как вертикальная доминанта рядом с произведениями искусства."
  }
];

export const findProductBySlug = (slug: string) => products.find((item) => item.slug === slug);
