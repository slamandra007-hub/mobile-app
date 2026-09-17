export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'hot-drinks' | 'cold-drinks' | 'pizza';
  image: string;
}

export const menuItems: MenuItem[] = [
  // Гарячі напої
  {
    id: 'hot-1',
    name: 'Еспресо',
    description: 'Класичний італійський еспресо з свіжообсмажених зерен арабіки',
    price: 45,
    category: 'hot-drinks',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400'
  },
  {
    id: 'hot-2',
    name: 'Капучіно',
    description: 'Еспресо з молочною піною та корицею',
    price: 55,
    category: 'hot-drinks',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400'
  },
  {
    id: 'hot-3',
    name: 'Лате',
    description: 'М\'який кавовий напій з великою кількістю молока',
    price: 60,
    category: 'hot-drinks',
    image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400'
  },
  {
    id: 'hot-4',
    name: 'Американо',
    description: 'Еспресо з додаванням гарячої води',
    price: 50,
    category: 'hot-drinks',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400'
  },
  {
    id: 'hot-5',
    name: 'Мокко',
    description: 'Кава з шоколадним сиропом та вершками',
    price: 70,
    category: 'hot-drinks',
    image: 'https://images.unsplash.com/photo-1607681034540-2c46cc71896d?w=400'
  },
  {
    id: 'hot-6',
    name: 'Какао',
    description: 'Класичне гаряче какао з маршмелоу',
    price: 55,
    category: 'hot-drinks',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400'
  },
  {
    id: 'hot-7',
    name: 'Чай чорний',
    description: 'Ароматний чорний чай з лимоном',
    price: 40,
    category: 'hot-drinks',
    image: 'https://images.unsplash.com/photo-1597318120750-e824a91e8f90?w=400'
  },
  {
    id: 'hot-8',
    name: 'Чай зелений',
    description: 'Зелений чай з м\'ятою',
    price: 40,
    category: 'hot-drinks',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400'
  },
  {
    id: 'hot-9',
    name: 'Імбирний чай',
    description: 'Імбир, лимон, мед та спеції',
    price: 50,
    category: 'hot-drinks',
    image: 'https://images.unsplash.com/photo-1597318120750-e824a91e8f90?w=400'
  },
  {
    id: 'hot-10',
    name: 'Раф кава',
    description: 'Кава з вершками та ванільним цукром',
    price: 65,
    category: 'hot-drinks',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400'
  },

  // Холодні напої
  {
    id: 'cold-1',
    name: 'Айс лате',
    description: 'Холодна кава з молоком та льодом',
    price: 65,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400'
  },
  {
    id: 'cold-2',
    name: 'Фраппе',
    description: 'Збита холодна кава з льодом',
    price: 70,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400'
  },
  {
    id: 'cold-3',
    name: 'Лимонад класичний',
    description: 'Свіжий лимон, цукор, газована вода',
    price: 55,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=400'
  },
  {
    id: 'cold-4',
    name: 'Лимонад малиновий',
    description: 'Малина, лимон, м\'ята, газована вода',
    price: 60,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=400'
  },
  {
    id: 'cold-5',
    name: 'Смузі полуничне',
    description: 'Полуниця, банан, йогурт',
    price: 75,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400'
  },
  {
    id: 'cold-6',
    name: 'Смузі манго',
    description: 'Манго, ананас, апельсиновий сік',
    price: 80,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400'
  },
  {
    id: 'cold-7',
    name: 'Мохіто безалкогольний',
    description: 'М\'ята, лайм, цукор, содова',
    price: 65,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400'
  },
  {
    id: 'cold-8',
    name: 'Свіжовичавлений сік',
    description: 'Апельсин, яблуко або морква',
    price: 70,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400'
  },
  {
    id: 'cold-9',
    name: 'Мілкшейк шоколадний',
    description: 'Морозиво, молоко, шоколад',
    price: 75,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400'
  },
  {
    id: 'cold-10',
    name: 'Мілкшейк ванільний',
    description: 'Морозиво, молоко, ваніль',
    price: 75,
    category: 'cold-drinks',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400'
  },

  // Піца
  {
    id: 'pizza-1',
    name: 'Маргарита',
    description: 'Томатний соус, моцарела, базилік, оливкова олія',
    price: 180,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400'
  },
  {
    id: 'pizza-2',
    name: '4 сири',
    description: 'Моцарела, пармезан, дор блю, чеддер',
    price: 220,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400'
  },
  {
    id: 'pizza-3',
    name: 'Пепероні',
    description: 'Томатний соус, моцарела, ковбаса пепероні',
    price: 200,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400'
  },
  {
    id: 'pizza-4',
    name: 'Гавайська',
    description: 'Курка, ананас, моцарела, томатний соус',
    price: 210,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400'
  },
  {
    id: 'pizza-5',
    name: 'М\'ясна',
    description: 'Салямі, шинка, курка, бекон, моцарела',
    price: 250,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400'
  },
  {
    id: 'pizza-6',
    name: 'Вегетаріанська',
    description: 'Помідори, перець, цибуля, гриби, оливки',
    price: 190,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400'
  },
  {
    id: 'pizza-7',
    name: 'Барбекю',
    description: 'Курка, бекон, цибуля, моцарела, соус барбекю',
    price: 230,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400'
  },
  {
    id: 'pizza-8',
    name: 'Діабола',
    description: 'Гостра салямі, перець чілі, моцарела',
    price: 210,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400'
  },
  {
    id: 'pizza-9',
    name: 'Морська',
    description: 'Креветки, кальмари, мідії, моцарела, часник',
    price: 270,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=400'
  },
  {
    id: 'pizza-10',
    name: 'Цезар',
    description: 'Курка, бекон, помідори черрі, пармезан, соус цезар',
    price: 240,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96c47?w=400'
  },
];

export const categories = [
  { id: 'hot-drinks', name: 'Гарячі напої' },
  { id: 'cold-drinks', name: 'Холодні напої' },
  { id: 'pizza', name: 'Піца' },
] as const;
