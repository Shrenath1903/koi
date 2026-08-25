/**
 * the KŌI — Asian Café & Hotpot
 * Complete Menu Catalog Database & Mobile Engine
 */

'use strict';

// 1. Official Menu Catalog Database (100% complete from menu PDF)
const MENU_DATA = [
  // ================= APPETIZER =================
  {
    id: 'app-kfc',
    name: 'Korean Fried Chicken (6 pcs)',
    category: 'Appetizers',
    price: 350,
    rating: 4.9,
    prepTime: '12 mins',
    isVeg: false,
    isSpicy: true,
    calories: 460,
<<<<<<< HEAD
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80',
=======
    image: './img/Korean Fried Chicken.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Deep-fried crispy chicken glazed in authentic Korean sauce, topped with spring onions and toasted sesame.',
    tasteProfile: ['Crispy', 'Glazed Sweet-Spicy', 'Savory'],
    healthBenefits: ['High Protein'],
    nutrition: { calories: '460 kcal', protein: '32 g', carbs: '24 g', fat: '28 g' },
    ingredients: ['Deep-fried chicken', 'Korean sauce', 'Spring onion', 'Sesame'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'Medium',
    pairing: 'Sparkling Yuzu Blossom',
    freshness: 'Fried golden per order.',
    chefStory: 'Double-fried for glass-like shatter, tossed in rich fermented chili gochujang glaze.'
  },
  {
    id: 'app-yakitori',
    name: 'Yakitori Skewers',
    category: 'Appetizers',
    price: 350,
    variants: [
      { name: 'Tofu', price: 350, isVeg: true },
      { name: 'Pork', price: 450, isVeg: false }
    ],
    rating: 4.7,
    prepTime: '10 mins',
    isVeg: false,
    isSpicy: true,
    calories: 310,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    description: 'Grilled skewers with choice of protein, leek, Japanese mayo and house spicy BBQ tare sauce.',
    tasteProfile: ['Smoky', 'Charred', 'Savory'],
    healthBenefits: ['Grilled Clean Energy'],
    nutrition: { calories: '310 kcal', protein: '22 g', carbs: '14 g', fat: '18 g' },
    ingredients: ['Choice of protein', 'Leek', 'Japanese mayo', 'Spicy BBQ sauce'],
    suitableFor: 'Veg / Non-Veg Options',
    spiceLevel: 'Mild',
    pairing: 'Iced Jasmine Tea',
    freshness: 'Char-grilled over hot coals.',
    chefStory: 'Classic robata skewer glazed repeatedly with sweet-savory tare reduction.'
  },
  {
    id: 'app-dragonball',
    name: 'Dragon Ball Z',
    category: 'Appetizers',
    price: 300,
    variants: [
      { name: 'Tofu', price: 300, isVeg: true },
      { name: 'Chicken', price: 350, isVeg: false },
      { name: 'Prawn', price: 375, isVeg: false }
    ],
    rating: 4.8,
    prepTime: '10 mins',
    isVeg: true,
    isSpicy: true,
    calories: 340,
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80',
    description: 'Crispy kakiage rice balls with choice of protein, spicy house sauce, and aromatic sesame oil drizzle.',
    tasteProfile: ['Crunchy', 'Spicy', 'Toasted Sesame'],
    healthBenefits: ['Whole Grain Rice Crunch'],
    nutrition: { calories: '340 kcal', protein: '12 g', carbs: '46 g', fat: '14 g' },
    ingredients: ['Kakiage rice balls', 'Choice of protein', 'Spicy sauce', 'Sesame oil'],
    suitableFor: 'Veg / Non-Veg Options',
    spiceLevel: 'Medium',
    pairing: 'Sencha Green Tea',
    freshness: 'Pressed and flash-fried to golden crisp.',
    chefStory: 'Inspired by Japanese street snack balls with crispy edges and soft center.'
  },
  {
    id: 'app-bao',
    name: 'Steamed Bao Bun',
    category: 'Appetizers',
    price: 225,
    variants: [
      { name: 'Tofu', price: 225, isVeg: true },
      { name: 'Chicken', price: 275, isVeg: false }
    ],
    rating: 4.7,
    prepTime: '8 mins',
    isVeg: true,
    isSpicy: true,
    calories: 280,
<<<<<<< HEAD
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
=======
    image: './img/Steamed Bao Bun.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Fluffy steamed lotus bao with protein, Korean spicy sauce, crisp cucumber, onion, tomato, and bell pepper.',
    tasteProfile: ['Pillow Soft', 'Zesty', 'Fresh Crunch'],
    healthBenefits: ['Steamed Low Oil'],
    nutrition: { calories: '280 kcal', protein: '14 g', carbs: '36 g', fat: '9 g' },
    ingredients: ['Steamed Bao Bun', 'Korean spicy sauce', 'Cucumber', 'Onion', 'Tomato', 'Bell pepper'],
    suitableFor: 'Veg / Non-Veg Options',
    spiceLevel: 'Medium',
    pairing: 'Iced Oat Latte',
    freshness: 'Steamed in bamboo baskets on demand.',
    chefStory: 'Hand-kneaded milk bao buns steamed fresh to retain pillowy softness.'
  },
  {
    id: 'app-beef-bao',
    name: 'Sweet & Spicy Beef Bao',
    category: 'Appetizers',
    price: 300,
    rating: 4.9,
    prepTime: '8 mins',
    isVeg: false,
    isSpicy: true,
    calories: 360,
    image: './img/Sweet_&_Spicy_Beef_Bao.jpg',
    description: 'Tender pulled beef glazed in rich bulgogi sauce, sautéed wild mushrooms, and sliced onions.',
    tasteProfile: ['Savory-Sweet', 'Juicy', 'Earthy'],
    healthBenefits: ['High Iron', 'High Protein'],
    nutrition: { calories: '360 kcal', protein: '24 g', carbs: '34 g', fat: '16 g' },
    ingredients: ['Beef', 'Bulgogi sauce', 'Mushroom', 'Onion', 'Steamed bao'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'Mild',
    pairing: 'Sparkling Yuzu Blossom',
    freshness: 'Slow-simmered beef pulled per order.',
    chefStory: 'Korean bulgogi marinade reduced slowly into sweet caramelized beef shreds.'
  },

  // ================= RICE AND NOODLE BOWLS =================
  {
    id: 'bowl-night-market',
    name: 'Night Market Fried Rice',
    category: 'Rice & Noodles',
    price: 275,
    variants: [
      { name: 'Veg', price: 275, isVeg: true },
      { name: 'Chicken', price: 350, isVeg: false },
      { name: 'Prawn', price: 400, isVeg: false }
    ],
    rating: 4.8,
    prepTime: '12 mins',
    isVeg: true,
    isSpicy: true,
    calories: 480,
<<<<<<< HEAD
    image: './img/night_market_fried_rice.jpg',
=======
    image: './img/Night Market Fried Rice.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Wok-tossed fragrant jasmine rice with choice of protein, fresh basil leaves, onion, garlic, chili, soy & oyster sauce.',
    tasteProfile: ['Wok Hei', 'Herbaceous Basil', 'Savory'],
    healthBenefits: ['Fresh Aromatics'],
    nutrition: { calories: '480 kcal', protein: '18 g', carbs: '64 g', fat: '16 g' },
    ingredients: ['Rice', 'Choice of protein', 'Basil leaves', 'Onion', 'Garlic', 'Chilli', 'Fish sauce', 'Soy sauce', 'Oyster sauce', 'Sesame'],
    suitableFor: 'Veg / Non-Veg Options',
    spiceLevel: 'Medium',
    pairing: 'Iced Jasmine Milk Tea',
    freshness: 'Wok-charred over high heat flames.',
    chefStory: 'Inspired by the bustling night markets of Bangkok and Taipei.'
  },
  {
    id: 'bowl-kimchi-rice',
    name: 'Kimchi Fried Rice',
    category: 'Rice & Noodles',
    price: 300,
    variants: [
      { name: 'Veg', price: 300, isVeg: true },
      { name: 'Chicken', price: 350, isVeg: false },
      { name: 'Prawn', price: 400, isVeg: false }
    ],
    rating: 4.8,
    prepTime: '10 mins',
    isVeg: true,
    isSpicy: true,
    calories: 450,
<<<<<<< HEAD
    image: './img/kimchi_fried_rice.jpg',
=======
    image: './img/Kimchi Fried Rice.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Aged kimchi fried rice with choice of protein, spring onion, garlic, nori sheets, and toasted sesame. Recommended: Fried Egg (+₹30).',
    tasteProfile: ['Tangy', 'Fiery', 'Deep Umami'],
    healthBenefits: ['Probiotic Kimchi', 'Gut Healthy'],
    nutrition: { calories: '450 kcal', protein: '16 g', carbs: '62 g', fat: '14 g' },
    ingredients: ['Rice', 'Kimchi', 'Choice of protein', 'Spring onion', 'Garlic', 'Nori', 'Sesame'],
    suitableFor: 'Veg / Non-Veg Options',
    spiceLevel: 'Medium',
    pairing: 'Cold Brew Green Tea',
    freshness: 'In-house naturally fermented kimchi.',
    chefStory: 'A comfort staple layered with 30-day barrel fermented sour kimchi.'
  },
  {
    id: 'bowl-katsu-rice',
    name: 'Katsu Rice Bowl',
    category: 'Rice & Noodles',
    price: 325,
    variants: [
      { name: 'Tofu', price: 325, isVeg: true },
      { name: 'Chicken', price: 375, isVeg: false }
    ],
    rating: 4.9,
    prepTime: '12 mins',
    isVeg: true,
    isSpicy: false,
    calories: 520,
    image: './img/katsu_rice_bowl.jpg',
    description: 'Crispy panko cutlet with steamed rice, egg ribbons, onion, scallions, and traditional Japanese katsu sauce.',
    tasteProfile: ['Crispy Panko', 'Sweet-Tangy Sauce', 'Savory'],
    healthBenefits: ['High Protein'],
    nutrition: { calories: '520 kcal', protein: '24 g', carbs: '68 g', fat: '18 g' },
    ingredients: ['Rice', 'Choice of protein (Tofu/Chicken)', 'Egg', 'Onion', 'Spring onion', 'Katsu sauce', 'Sesame'],
    suitableFor: 'Veg / Non-Veg Options',
    spiceLevel: 'None',
    pairing: 'Iced Oat Latte',
    freshness: 'Panko breaded and fried fresh on order.',
    chefStory: 'Classic Japanese katsudon comfort bowl with silky egg ribbons.'
  },
  {
    id: 'bowl-bulgogi-rice',
    name: 'Bulgogi Rice Bowl',
    category: 'Rice & Noodles',
    price: 375,
    variants: [
      { name: 'Chicken', price: 375, isVeg: false },
      { name: 'Beef', price: 400, isVeg: false }
    ],
    rating: 4.8,
    prepTime: '12 mins',
    isVeg: false,
    isSpicy: false,
    calories: 490,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    description: 'Thinly sliced protein marinated in sweet pear bulgogi glaze, sautéed with scallions over steamed short grain rice.',
    tasteProfile: ['Caramelized Sweet', 'Savory Garlic', 'Tender'],
    healthBenefits: ['High Protein', 'Mineral Rich'],
    nutrition: { calories: '490 kcal', protein: '28 g', carbs: '58 g', fat: '16 g' },
    ingredients: ['Rice', 'Choice of protein', 'Spring onion', 'Bulgogi sauce', 'Sesame'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'None',
    pairing: 'Sparkling Yuzu Blossom',
    freshness: 'Marinated 24 hours in Asian pear puree.',
    chefStory: 'Traditional Korean barbecue in a balanced single bowl format.'
  },
  {
    id: 'bowl-pork-chashu',
    name: 'Pork Chashu Rice',
    category: 'Rice & Noodles',
    price: 450,
    rating: 4.9,
    prepTime: '10 mins',
    isVeg: false,
    isSpicy: false,
    calories: 560,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
    description: 'Melt-in-mouth braised pork belly chashu slices over rice with raw sweet onion, spring onions, and rich chashu reduction.',
    tasteProfile: ['Melt-in-Mouth', 'Rich Umami', 'Silky'],
    healthBenefits: ['Natural Collagen'],
    nutrition: { calories: '560 kcal', protein: '26 g', carbs: '52 g', fat: '28 g' },
    ingredients: ['Rice', 'Pork chashu', 'Raw onion', 'Spring onion', 'Chashu sauce', 'Sesame'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'None',
    pairing: 'Hot Sencha Tea',
    freshness: 'Braised slowly for 6 hours.',
    chefStory: 'Pork belly rolled and braised until gelatinous and tender.'
  },
  {
    id: 'bowl-mongolian-beef',
    name: 'Mongolian Beef Rice',
    category: 'Rice & Noodles',
    price: 375,
    rating: 4.8,
    prepTime: '12 mins',
    isVeg: false,
    isSpicy: true,
    calories: 510,
    image: './img/mongolian_beef_rice.jpg',
    description: 'Crispy flash-fried beef slices tossed with whole garlic cloves, fresh ginger root, spring onions, and sweet oyster glaze.',
    tasteProfile: ['Crisp Edges', 'Savory-Sweet', 'Ginger Aromatic'],
    healthBenefits: ['High Iron'],
    nutrition: { calories: '510 kcal', protein: '30 g', carbs: '56 g', fat: '18 g' },
    ingredients: ['Rice', 'Pan-fried beef', 'Garlic', 'Ginger', 'Spring onion', 'Oyster sauce', 'Sesame'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'Mild',
    pairing: 'Iced Jasmine Milk Tea',
    freshness: 'Wok-glazed per order.',
    chefStory: 'High-heat seared beef with intense ginger aroma.'
  },
  {
    id: 'bowl-thai-curry',
    name: 'Thai Curry with Rice',
    category: 'Rice & Noodles',
    price: 300,
    variants: [
      { name: 'Veg (Green)', price: 300, isVeg: true },
      { name: 'Veg (Red)', price: 300, isVeg: true },
      { name: 'Chicken (Green)', price: 350, isVeg: false },
      { name: 'Chicken (Red)', price: 350, isVeg: false },
      { name: 'Prawn (Green)', price: 400, isVeg: false },
      { name: 'Prawn (Red)', price: 400, isVeg: false }
    ],
    rating: 4.8,
    prepTime: '12 mins',
    isVeg: true,
    isSpicy: true,
    calories: 470,
    image: './img/thai_curry_with_rice.jpg',
    description: 'Fragrant coconut milk broth infused with kaffir lime, lemongrass, Thai basil, eggplant, mushrooms, bell peppers, baby corn.',
    tasteProfile: ['Creamy Coconut', 'Citrusy Lemongrass', 'Herbaceous'],
    healthBenefits: ['Botanical Antioxidants'],
    nutrition: { calories: '470 kcal', protein: '16 g', carbs: '48 g', fat: '24 g' },
    ingredients: ['Rice', 'Choice of protein', 'Coconut milk', 'Eggplant', 'Mushroom', 'Bell pepper', 'Baby corn', 'Basil leaves', 'Lemongrass'],
    suitableFor: 'Veg / Non-Veg Options',
    spiceLevel: 'Medium',
    pairing: 'Sparkling Yuzu Blossom',
    freshness: 'Fresh coconut milk pressed daily.',
    chefStory: 'Hand-pounded curry pastes simmered in fresh first-press coconut milk.'
  },
  {
    id: 'bowl-chowmein',
    name: 'Chowmein Noodles',
    category: 'Rice & Noodles',
    price: 275,
    variants: [
      { name: 'Veg', price: 275, isVeg: true },
      { name: 'Chicken', price: 325, isVeg: false },
      { name: 'Pork', price: 400, isVeg: false }
    ],
    rating: 4.7,
    prepTime: '10 mins',
    isVeg: true,
    isSpicy: false,
    calories: 460,
<<<<<<< HEAD
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80',
=======
    image: './img/Chowmein Noodles.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Stir-fried springy noodles tossed in light soy reduction, crunchy cabbage, bell peppers, and scallions.',
    tasteProfile: ['Springy', 'Light Soy Umami', 'Crisp Veggies'],
    healthBenefits: ['Energizing Carbohydrates'],
    nutrition: { calories: '460 kcal', protein: '14 g', carbs: '66 g', fat: '14 g' },
    ingredients: ['Stir-fried noodles', 'Choice of protein', 'Cabbage', 'Bell pepper', 'Soy sauce', 'Green onion'],
    suitableFor: 'Veg / Non-Veg Options',
    spiceLevel: 'None',
    pairing: 'Iced Oat Latte',
    freshness: 'Noodles blanched and wok-tossed instantly.',
    chefStory: 'Classic street style dry-fried noodles with distinct wok sear.'
  },
  {
    id: 'bowl-bibimbap',
    name: 'Traditional Bibimbap',
    category: 'Rice & Noodles',
    price: 300,
    variants: [
      { name: 'Veg', price: 300, isVeg: true },
      { name: 'Egg', price: 325, isVeg: true },
      { name: 'Chicken', price: 350, isVeg: false },
      { name: 'Beef', price: 400, isVeg: false }
    ],
    rating: 4.9,
    prepTime: '12 mins',
    isVeg: true,
    isSpicy: true,
    calories: 480,
<<<<<<< HEAD
    image: './img/traditional_bibimbap.jpg',
=======
    image: './img/Traditional Bibimbap.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Warm rice topped with sautéed seasoned mushrooms, zucchini ribbons, cucumber, crisp iceberg, scallions, and house gochujang bibimbap sauce.',
    tasteProfile: ['Balanced Sweet-Spicy', 'Nutty Sesame', 'Fresh Rainbow Veg'],
    healthBenefits: ['Nutrient Rich', 'High Fiber'],
    nutrition: { calories: '480 kcal', protein: '18 g', carbs: '64 g', fat: '14 g' },
    ingredients: ['Rice', 'Mushroom', 'Zucchini', 'Cucumber', 'Iceberg', 'Spring onion', 'Bibimbap sauce', 'Choice of Protein'],
    suitableFor: 'Veg / Non-Veg Options',
    spiceLevel: 'Medium',
    pairing: 'Iced Jasmine Tea',
    freshness: 'Vegetables individually seasoned on order.',
    chefStory: 'The quintessential Korean mixed bowl celebrating nutritional harmony.'
  },

  // ================= KOREAN RAMYEON =================
  {
    id: 'ram-veg',
    name: 'Veg Ramyeon',
    category: 'Korean Ramyeon',
    price: 275,
    rating: 4.7,
    prepTime: '10 mins',
    isVeg: true,
    isSpicy: true,
    calories: 420,
<<<<<<< HEAD
    image: './img/veg_ramyeon.jpg',
=======
    image: './img/Veg Ramyeon.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Springy ramyeon noodles in rich vegetable broth with bok choy, mushrooms, sweet corn, scallions, and peanut sesame sauce.',
    tasteProfile: ['Spicy Broth', 'Nutty Peanut', 'Comforting'],
    healthBenefits: ['Mineral Rich Broth'],
    nutrition: { calories: '420 kcal', protein: '12 g', carbs: '60 g', fat: '14 g' },
    ingredients: ['Ramyeon', 'Bok choy', 'Tomato', 'Mushroom', 'Sweet corn', 'Spring onion', 'Peanut sauce', 'Broth'],
    suitableFor: 'Vegetarian',
    spiceLevel: 'Medium',
    pairing: 'Iced Jasmine Milk Tea',
    freshness: 'Broth simmered fresh daily.',
    chefStory: 'Spicy Korean ramyeon softened with a hint of roasted peanut butter.'
  },
  {
    id: 'ram-egg',
    name: 'Egg Ramyeon',
    category: 'Korean Ramyeon',
    price: 300,
    rating: 4.8,
    prepTime: '10 mins',
    isVeg: true,
    isSpicy: true,
    calories: 460,
<<<<<<< HEAD
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80',
=======
    image: './img/Egg Ramyeon.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Classic ramyeon in aromatic broth with soft-cooked egg ribbons, bok choy, sweet corn, mushrooms, and sesame tare.',
    tasteProfile: ['Silky Egg', 'Spicy', 'Nutty'],
    healthBenefits: ['Protein Enriched'],
    nutrition: { calories: '460 kcal', protein: '16 g', carbs: '60 g', fat: '16 g' },
    ingredients: ['Ramyeon', 'Egg', 'Bok choy', 'Mushroom', 'Sweet corn', 'Spring onion', 'Sesame', 'Peanut sauce', 'Broth'],
    suitableFor: 'Vegetarian (Contains Egg)',
    spiceLevel: 'Medium',
    pairing: 'Sparkling Yuzu',
    freshness: 'Egg swirled in boiling broth at serving.',
    chefStory: 'The ultimate late-night Korean soul food.'
  },
  {
    id: 'ram-spicy-chicken',
    name: 'Spicy Chicken Ramyeon',
    category: 'Korean Ramyeon',
    price: 400,
    rating: 4.9,
    prepTime: '12 mins',
    isVeg: false,
    isSpicy: true,
    calories: 520,
<<<<<<< HEAD
    image: 'https://images.unsplash.com/photo-1614563637806-1d0e645e0940?auto=format&fit=crop&w=600&q=80',
=======
    image: './img/Spicy Chicken Ramyeon.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Fiery broth with tender spiced chicken, crisp bok choy, shiitake mushrooms, sweet corn, and toasted sesame.',
    tasteProfile: ['Fiery', 'Savory Chicken Umami', 'Deep Broth'],
    healthBenefits: ['High Protein', 'Immunity Boost'],
    nutrition: { calories: '520 kcal', protein: '28 g', carbs: '58 g', fat: '18 g' },
    ingredients: ['Ramyeon', 'Spicy chicken', 'Bok choy', 'Mushroom', 'Sweet corn', 'Spring onion', 'Sesame', 'Broth'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'High',
    pairing: 'Iced Oat Latte',
    freshness: 'Hand-pulled chicken simmered in chili tare.',
    chefStory: 'Layered with gochugaru flakes and roasted chili oil.'
  },
  {
    id: 'ram-katsu',
    name: 'Katsu Ramyeon',
    category: 'Korean Ramyeon',
    price: 400,
    variants: [
      { name: 'Tofu', price: 400, isVeg: true },
      { name: 'Chicken', price: 400, isVeg: false }
    ],
    rating: 4.8,
    prepTime: '12 mins',
    isVeg: true,
    isSpicy: true,
    calories: 540,
<<<<<<< HEAD
    image: './img/katsu_ramyeon.jpg',
=======
    image: './img/Katsu Ramyeon.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Crispy fried panko cutlet served on top of spicy noodle broth with sweet corn, bok choy, and mushrooms.',
    tasteProfile: ['Crunchy Cutlet', 'Rich Broth', 'Peanut Sesame'],
    healthBenefits: ['Hearty Meal'],
    nutrition: { calories: '540 kcal', protein: '24 g', carbs: '64 g', fat: '20 g' },
    ingredients: ['Ramyeon', 'Deep-fried Tofu/Chicken', 'Bok choy', 'Sweet corn', 'Mushroom', 'Spring onion', 'Broth'],
    suitableFor: 'Veg / Non-Veg Options',
    spiceLevel: 'Medium',
    pairing: 'Sparkling Yuzu Blossom',
    freshness: 'Katsu fried golden immediately before serving.',
    chefStory: 'A decadent combination of crispy cutlet and steaming noodles.'
  },
  {
    id: 'ram-pork',
    name: 'Pork Ramyeon',
    category: 'Korean Ramyeon',
    price: 450,
    rating: 4.9,
    prepTime: '12 mins',
    isVeg: false,
    isSpicy: true,
    calories: 580,
<<<<<<< HEAD
    image: './img/pork_ramyeon.jpg',
=======
    image: './img/Pork Ramyeon.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Slow-braised tender pork chashu slices in rich aromatic broth with noodles, bok choy, mushrooms, and sweet corn.',
    tasteProfile: ['Rich Gelatinous Pork', 'Savory', 'Spicy'],
    healthBenefits: ['Rich Collagen Stock'],
    nutrition: { calories: '580 kcal', protein: '30 g', carbs: '58 g', fat: '24 g' },
    ingredients: ['Ramyeon', 'Pork', 'Bok choy', 'Mushroom', 'Sweet corn', 'Spring onion', 'Sesame', 'Broth'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'Medium',
    pairing: 'Hot Sencha Tea',
    freshness: 'Pork belly braised 6 hours.',
    chefStory: 'Rich pork essence blended with classic Korean spicy ramyeon base.'
  },

  // ================= URAMAKI (INSIDE OUT SUSHI ROLLS) =================
  {
    id: 'ura-crispy-koi',
    name: 'Crispy Koi Roll',
    category: 'Uramaki',
    price: 250,
    variants: [
      { name: '4 pcs', price: 250, isVeg: true },
      { name: '8 pcs', price: 450, isVeg: true }
    ],
    rating: 4.8,
    prepTime: '8 mins',
    isVeg: true,
    isSpicy: false,
    calories: 280,
    image: './img/crispy_koi_roll.jpg',
    description: 'Crispy vegetable tempura roll topped with spring onions, sweet soya reduction, and toasted sesame.',
    tasteProfile: ['Crunchy Tempura', 'Sweet Soy', 'Savory'],
    healthBenefits: ['Low Calorie Roll'],
    nutrition: { calories: '280 kcal', protein: '6 g', carbs: '44 g', fat: '8 g' },
    ingredients: ['Tempura crisp', 'Spring onion', 'Sweet soya sauce', 'Sesame', 'Sushi rice', 'Nori'],
    suitableFor: 'Vegetarian',
    spiceLevel: 'None',
    pairing: 'Sencha Green Tea',
    freshness: 'Tempura fried hot before rolling.',
    chefStory: 'Our signature crunchy vegetarian uramaki roll.'
  },
  {
    id: 'ura-wasabi',
    name: 'Wasabi Roll',
    category: 'Uramaki',
    price: 250,
    variants: [
      { name: '4 pcs', price: 250, isVeg: true },
      { name: '8 pcs', price: 450, isVeg: true }
    ],
    rating: 4.7,
    prepTime: '8 mins',
    isVeg: true,
    isSpicy: true,
    calories: 290,
<<<<<<< HEAD
    image: './img/wasabi_roll.jpg',
=======
    image: './img/Wasabi Roll.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Smooth cream cheese, julienne carrots, crisp cucumber, and refreshing wasabi mayo glaze.',
    tasteProfile: ['Creamy', 'Pungent Wasabi Zing', 'Fresh Crunch'],
    healthBenefits: ['Digestive Wasabi'],
    nutrition: { calories: '290 kcal', protein: '7 g', carbs: '42 g', fat: '10 g' },
    ingredients: ['Cream cheese', 'Carrot', 'Cucumber', 'Wasabi mayo', 'Sushi rice', 'Nori'],
    suitableFor: 'Vegetarian',
    spiceLevel: 'Medium',
    pairing: 'Cold Brew Genmaicha',
    freshness: 'Rolled fresh with crisp garden produce.',
    chefStory: 'Velvety cream cheese balanced with real wasabi kick.'
  },
  {
    id: 'ura-sweet-potato',
    name: 'Sweet Potato Roll',
    category: 'Uramaki',
    price: 275,
    variants: [
      { name: '4 pcs', price: 275, isVeg: true },
      { name: '8 pcs', price: 500, isVeg: true }
    ],
    rating: 4.7,
    prepTime: '8 mins',
    isVeg: true,
    isSpicy: true,
    calories: 310,
    image: './img/sweet_potato_roll.jpg ',
    description: 'Tempura crisp sweet potato roll with spicy house drizzle and white sesame seeds.',
    tasteProfile: ['Naturally Sweet', 'Crispy', 'Spicy'],
    healthBenefits: ['High Fiber Sweet Potato'],
    nutrition: { calories: '310 kcal', protein: '5 g', carbs: '48 g', fat: '10 g' },
    ingredients: ['Sweet potato tempura', 'Sesame', 'Spicy sauce', 'Sushi rice', 'Nori'],
    suitableFor: 'Vegetarian',
    spiceLevel: 'Mild',
    pairing: 'Iced Jasmine Milk Tea',
    freshness: 'Sweet potato fried golden.',
    chefStory: 'Caramelized sweet potato inside seasoned vinegared sushi rice.'
  },
  {
    id: 'ura-spicy-tofu',
    name: 'Spicy Tofu Roll',
    category: 'Uramaki',
    price: 275,
    variants: [
      { name: '4 pcs', price: 275, isVeg: true },
      { name: '8 pcs', price: 500, isVeg: true }
    ],
    rating: 4.7,
    prepTime: '8 mins',
    isVeg: true,
    isSpicy: true,
    calories: 295,
<<<<<<< HEAD
    image: './img/spicy_tofu_roll.jpg',
=======
    image: './img/Spicy Tofu Roll.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Marinated spicy tofu cubes, cool cucumber batons, and spicy Japanese tare drizzle.',
    tasteProfile: ['Silky Tofu', 'Cool Cucumber', 'Spicy'],
    healthBenefits: ['Plant Protein'],
    nutrition: { calories: '295 kcal', protein: '11 g', carbs: '42 g', fat: '9 g' },
    ingredients: ['Tofu', 'Cucumber', 'Sesame', 'Spicy sauce', 'Sushi rice', 'Nori'],
    suitableFor: 'Vegetarian',
    spiceLevel: 'Medium',
    pairing: 'Sparkling Yuzu Blossom',
    freshness: 'Pressed organic soy tofu.',
    chefStory: 'A clean plant-based roll with bold chili sesame kick.'
  },
  {
    id: 'ura-shiitake',
    name: 'Shiitake Mushroom Roll',
    category: 'Uramaki',
    price: 350,
    variants: [
      { name: '4 pcs', price: 350, isVeg: true },
      { name: '8 pcs', price: 650, isVeg: true }
    ],
    rating: 4.9,
    prepTime: '8 mins',
    isVeg: true,
    isSpicy: true,
    calories: 300,
<<<<<<< HEAD
    image: './img/shiitake_mushroom_roll.jpg',
=======
    image: './img/Shiitake Mushroom Roll.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Slow-braised shiitake mushrooms, spicy chili mayo, sweet chili drizzle, and fresh cucumber.',
    tasteProfile: ['Deep Woodsy Umami', 'Spicy Sweet', 'Juicy'],
    healthBenefits: ['Shiitake Immunity Beta-Glucans'],
    nutrition: { calories: '300 kcal', protein: '7 g', carbs: '44 g', fat: '10 g' },
    ingredients: ['Shiitake mushroom', 'Spicy sauce', 'Cucumber', 'Mayo', 'Sweet chilli sauce', 'Sushi rice', 'Nori'],
    suitableFor: 'Vegetarian',
    spiceLevel: 'Medium',
    pairing: 'Hot Sencha Tea',
    freshness: 'Simmered in sweet soy mirin reduction.',
    chefStory: 'Shiitake braised until thick and packed with earthy sweetness.'
  },
  {
    id: 'ura-spicy-chicken',
    name: 'Spicy Chicken Roll',
    category: 'Uramaki',
    price: 350,
    variants: [
      { name: '4 pcs', price: 350, isVeg: false },
      { name: '8 pcs', price: 650, isVeg: false }
    ],
    rating: 4.8,
    prepTime: '8 mins',
    isVeg: false,
    isSpicy: true,
    calories: 340,
<<<<<<< HEAD
    image: './img/spicy_chicken_roll.jpg',
=======
    image: './img/Spicy Chicken Roll.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Tender chicken shreds tossed in house spicy tare with crisp cucumber and toasted sesame.',
    tasteProfile: ['Savory Chicken', 'Fiery Mayo', 'Crunchy'],
    healthBenefits: ['Lean Protein'],
    nutrition: { calories: '340 kcal', protein: '18 g', carbs: '42 g', fat: '11 g' },
    ingredients: ['Chicken', 'Cucumber', 'Spicy sauce', 'Sushi rice', 'Nori'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'Medium',
    pairing: 'Iced Oat Latte',
    freshness: 'Rolled fresh on bamboo makisu.',
    chefStory: 'A fan favorite spicy meat uramaki.'
  },
  {
    id: 'ura-california',
    name: 'California Roll',
    category: 'Uramaki',
    price: 350,
    variants: [
      { name: '4 pcs', price: 350, isVeg: false },
      { name: '8 pcs', price: 650, isVeg: false }
    ],
    rating: 4.8,
    prepTime: '8 mins',
    isVeg: false,
    isSpicy: false,
    calories: 310,
<<<<<<< HEAD
    image: './img/california_roll.jpg',
=======
    image: './img/California Roll.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Sweet crab surimi, fresh cucumber ribbons, toasted white sesame, and Japanese kewpie mayo.',
    tasteProfile: ['Delicate Sweet', 'Cool', 'Classic'],
    healthBenefits: ['Light Clean Protein'],
    nutrition: { calories: '310 kcal', protein: '12 g', carbs: '44 g', fat: '8 g' },
    ingredients: ['Surimi (Crab stick)', 'Cucumber', 'Kewpie mayo', 'Sushi rice', 'Nori'],
    suitableFor: 'Non-Vegetarian (Seafood)',
    spiceLevel: 'None',
    pairing: 'Sparkling Yuzu Blossom',
    freshness: 'Classic rolled sushi.',
    chefStory: 'The world’s most celebrated inside-out roll.'
  },
  {
    id: 'ura-dynamite',
    name: 'Dynamite Roll',
    category: 'Uramaki',
    price: 375,
    variants: [
      { name: '4 pcs', price: 375, isVeg: false },
      { name: '8 pcs', price: 700, isVeg: false }
    ],
    rating: 4.9,
    prepTime: '8 mins',
    isVeg: false,
    isSpicy: true,
    calories: 360,
<<<<<<< HEAD
    image: './img/dynamite_roll.jpg',
=======
    image: './img/dynamite roll.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Succulent prawn tempura and Atlantic salmon roll glazed with spicy sauce and eel glaze.',
    tasteProfile: ['Explosive Umami', 'Crisp Prawn', 'Sweet Eel Tare'],
    healthBenefits: ['Omega-3 Rich'],
    nutrition: { calories: '360 kcal', protein: '20 g', carbs: '44 g', fat: '12 g' },
    ingredients: ['Prawn tempura', 'Salmon', 'Cucumber', 'Sesame', 'Spicy sauce', 'Eel sauce', 'Sushi rice', 'Nori'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'Medium',
    pairing: 'Sencha Green Tea',
    freshness: 'Fresh salmon with crispy fried tiger prawn.',
    chefStory: 'A flavor bomb pairing crunchy prawn with buttery salmon.'
  },
  {
    id: 'ura-volcano',
    name: 'Volcano Roll',
    category: 'Uramaki',
    price: 375,
    variants: [
      { name: '4 pcs', price: 375, isVeg: false },
      { name: '8 pcs', price: 700, isVeg: false }
    ],
    rating: 4.9,
    prepTime: '8 mins',
    isVeg: false,
    isSpicy: true,
    calories: 370,
    image: './img/volcano_roll.jpg',
    description: 'Salmon, crab surimi, and tuna roll topped with molten spicy sauce, sweet eel reduction, and sesame.',
    tasteProfile: ['Warm Molten Glaze', 'Rich Seafood', 'Spicy-Sweet'],
    healthBenefits: ['High Protein Trio'],
    nutrition: { calories: '370 kcal', protein: '22 g', carbs: '42 g', fat: '14 g' },
    ingredients: ['Salmon', 'Surimi', 'Tuna', 'Cucumber', 'Sesame', 'Spicy sauce', 'Eel sauce', 'Sushi rice', 'Nori'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'Medium',
    pairing: 'Sparkling Yuzu Blossom',
    freshness: 'Torched with spicy lava mayo.',
    chefStory: 'Topped and aburi-torched to recreate a fiery volcanic eruption.'
  },
  {
    id: 'ura-spicy-tuna',
    name: 'Spicy Tuna Roll',
    category: 'Uramaki',
    price: 375,
    variants: [
      { name: '4 pcs', price: 375, isVeg: false },
      { name: '8 pcs', price: 700, isVeg: false }
    ],
    rating: 4.9,
    prepTime: '8 mins',
    isVeg: false,
    isSpicy: true,
    calories: 330,
    image: './img/spicy_tuna_roll.jpg',
    description: 'Sashimi-grade yellowfin tuna tossed in spicy sriracha sesame sauce, cucumber, and eel sauce drizzle.',
    tasteProfile: ['Clean Tuna Umami', 'Spicy Sriracha', 'Silky'],
    healthBenefits: ['Lean Protein', 'High Selenium'],
    nutrition: { calories: '330 kcal', protein: '24 g', carbs: '40 g', fat: '9 g' },
    ingredients: ['Tuna', 'Cucumber', 'Sesame', 'Spicy sauce', 'Eel sauce', 'Sushi rice', 'Nori'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'Medium',
    pairing: 'Cold Brew Genmaicha',
    freshness: 'Fresh yellowfin diced on order.',
    chefStory: 'Minced prime tuna with spicy chili oil and scallions.'
  },
  {
    id: 'ura-spicy-salmon',
    name: 'Spicy Salmon Roll',
    category: 'Uramaki',
    price: 375,
    variants: [
      { name: '4 pcs', price: 375, isVeg: false },
      { name: '8 pcs', price: 700, isVeg: false }
    ],
    rating: 4.9,
    prepTime: '8 mins',
    isVeg: false,
    isSpicy: true,
    calories: 340,
    image: './img/spicy_salmon_roll.jpg',
    description: 'Atlantic salmon, cool cucumber, spicy sesame sauce, and sweet unagi eel reduction.',
    tasteProfile: ['Melt-in-Mouth Fat', 'Spicy', 'Sweet Glaze'],
    healthBenefits: ['Omega-3 Rich'],
    nutrition: { calories: '340 kcal', protein: '20 g', carbs: '40 g', fat: '12 g' },
    ingredients: ['Salmon', 'Cucumber', 'Sesame', 'Spicy sauce', 'Eel sauce', 'Sushi rice', 'Nori'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'Medium',
    pairing: 'Sencha Green Tea',
    freshness: 'Fresh sashimi Atlantic salmon.',
    chefStory: 'Rich salmon balanced with delicate house spicy sauce.'
  },
  {
    id: 'ura-sumo-melt',
    name: 'Sumo Melt Roll (Tempura)',
    category: 'Uramaki',
    price: 400,
    variants: [
      { name: '4 pcs', price: 400, isVeg: false },
      { name: '8 pcs', price: 750, isVeg: false }
    ],
    rating: 5.0,
    prepTime: '10 mins',
    isVeg: false,
    isSpicy: true,
    calories: 410,
    image: './img/sumo_melt_roll.jpg',
    description: 'Tempura battered entire roll with fresh salmon, molten cream cheese, cucumber, spicy drizzle, and sweet eel glaze.',
    tasteProfile: ['Crispy Tempura Shell', 'Molten Cream Cheese', 'Warm Salmon'],
    healthBenefits: ['Decadent High Energy'],
    nutrition: { calories: '410 kcal', protein: '18 g', carbs: '46 g', fat: '18 g' },
    ingredients: ['Salmon', 'Cream cheese', 'Cucumber', 'Spicy sauce', 'Eel sauce', 'Tempura batter', 'Sushi rice', 'Nori'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'Medium',
    pairing: 'Sparkling Yuzu Blossom',
    freshness: 'Flash-fried whole roll for crispy exterior.',
    chefStory: 'Crispy warm exterior with cool creamy salmon core.'
  },
  {
    id: 'ura-tempura-roll',
    name: 'Tempura Roll',
    category: 'Uramaki',
    price: 250,
    variants: [
      { name: 'Veg (4 pcs)', price: 250, isVeg: true },
      { name: 'Veg (8 pcs)', price: 450, isVeg: true },
      { name: 'Chicken (4 pcs)', price: 350, isVeg: false },
      { name: 'Chicken (8 pcs)', price: 650, isVeg: false },
      { name: 'Prawn (4 pcs)', price: 375, isVeg: false },
      { name: 'Prawn (8 pcs)', price: 700, isVeg: false }
    ],
    rating: 4.8,
    prepTime: '8 mins',
    isVeg: true,
    isSpicy: false,
    calories: 320,
<<<<<<< HEAD
    image: './img/tempura_roll.jpg',
=======
    image: './img/Tempura Roll.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Choice of protein tempura, sesame seeds, and sweet eel tare reduction over vinegared sushi rice.',
    tasteProfile: ['Crunchy', 'Light Sweet Soy', 'Savory'],
    healthBenefits: ['Clean Fried Crunch'],
    nutrition: { calories: '320 kcal', protein: '14 g', carbs: '44 g', fat: '10 g' },
    ingredients: ['Choice of protein tempura', 'Sesame', 'Eel sauce', 'Sushi rice', 'Nori'],
    suitableFor: 'Veg / Non-Veg Options',
    spiceLevel: 'None',
    pairing: 'Iced Jasmine Milk Tea',
    freshness: 'Tempura fried to order.',
    chefStory: 'Crisp airy tempura wrapped tightly inside sushi rice.'
  },

  // ================= MAKI (6 PCS TRADITIONAL ROLLS) =================
  {
    id: 'maki-cucumber',
    name: 'Cucumber Maki (6 pcs)',
    category: 'Maki',
    price: 300,
    rating: 4.7,
    prepTime: '6 mins',
    isVeg: true,
    isSpicy: false,
    calories: 180,
    image: './img/cucumber_maki.jpg',
    description: 'Crisp Japanese cucumber with Kewpie mayo wrapped inside premium nori seaweed and seasoned rice.',
    tasteProfile: ['Cool', 'Refreshing', 'Pure'],
    healthBenefits: ['Low Calorie', 'Hydrating'],
    nutrition: { calories: '180 kcal', protein: '4 g', carbs: '36 g', fat: '2 g' },
    ingredients: ['Cucumber', 'Japanese mayo', 'Sushi rice', 'Nori'],
    suitableFor: 'Vegetarian',
    spiceLevel: 'None',
    pairing: 'Sencha Green Tea',
    freshness: 'Rolled fresh with cold cucumber core.',
    chefStory: 'The traditional Japanese kappamaki.'
  },
  {
    id: 'maki-tofu-teriyaki',
    name: 'Tofu Teriyaki Maki (6 pcs)',
    category: 'Maki',
    price: 300,
    rating: 4.7,
    prepTime: '6 mins',
    isVeg: true,
    isSpicy: false,
    calories: 220,
<<<<<<< HEAD
    image: './img/tofu_teriyaki_maki.jpg',
=======
    image: './img/Tofu Teriyaki Maki.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Pan-seared tofu glazed in sweet teriyaki sauce, tightly rolled with nori and sushi rice.',
    tasteProfile: ['Sweet Teriyaki', 'Silky Tofu', 'Umami'],
    healthBenefits: ['Plant Protein'],
    nutrition: { calories: '220 kcal', protein: '8 g', carbs: '38 g', fat: '4 g' },
    ingredients: ['Tofu', 'Teriyaki sauce', 'Sushi rice', 'Nori'],
    suitableFor: 'Vegetarian',
    spiceLevel: 'None',
    pairing: 'Iced Oat Latte',
    freshness: 'Tofu glazed fresh before rolling.',
    chefStory: 'Sweet house-simmered teriyaki reduction.'
  },
  {
    id: 'maki-pumpkin',
    name: 'Fried Pumpkin Maki (6 pcs)',
    category: 'Maki',
    price: 300,
    rating: 4.8,
    prepTime: '6 mins',
    isVeg: true,
    isSpicy: false,
    calories: 240,
    image: './img/fried_pumpkin_maki.jpg',
    description: 'Golden crispy Japanese kabocha pumpkin tempura rolled inside toasted nori.',
    tasteProfile: ['Naturally Sweet', 'Crispy', 'Earthy'],
    healthBenefits: ['Vitamin A Rich'],
    nutrition: { calories: '240 kcal', protein: '5 g', carbs: '42 g', fat: '6 g' },
    ingredients: ['Fried kabocha pumpkin', 'Sushi rice', 'Nori'],
    suitableFor: 'Vegetarian',
    spiceLevel: 'None',
    pairing: 'Hot Sencha Tea',
    freshness: 'Kabocha pumpkin fried crisp.',
    chefStory: 'A delightful autumn specialty showcasing Japanese pumpkin.'
  },
  {
    id: 'maki-eggplant',
    name: 'Chashu Eggplant Maki (6 pcs)',
    category: 'Maki',
    price: 300,
    rating: 4.7,
    prepTime: '6 mins',
    isVeg: true,
    isSpicy: false,
    calories: 210,
    image: './img/chashu_eggplant_maki.jpg',
    description: 'Slow-braised eggplant simmered in sweet chashu tare sauce rolled in nori.',
    tasteProfile: ['Melt-in-Mouth Eggplant', 'Sweet-Savory', 'Earthy'],
    healthBenefits: ['High Antioxidants'],
    nutrition: { calories: '210 kcal', protein: '4 g', carbs: '38 g', fat: '4 g' },
    ingredients: ['Chashu braised eggplant', 'Sushi rice', 'Nori'],
    suitableFor: 'Vegetarian',
    spiceLevel: 'None',
    pairing: 'Cold Brew Genmaicha',
    freshness: 'Braised until tender.',
    chefStory: 'Vegetarian adaptation of chashu cooking technique.'
  },
  {
    id: 'maki-tuna',
    name: 'Tuna Maki (6 pcs)',
    category: 'Maki',
    price: 475,
    rating: 4.9,
    prepTime: '6 mins',
    isVeg: false,
    isSpicy: false,
    calories: 230,
    image: './img/tuna_maki.jpg',
    description: 'Classic tekka maki with fresh sashimi-grade yellowfin tuna center.',
    tasteProfile: ['Pure Raw Tuna', 'Clean', 'Ocean Fresh'],
    healthBenefits: ['Lean Protein', 'Zero Added Fat'],
    nutrition: { calories: '230 kcal', protein: '18 g', carbs: '34 g', fat: '2 g' },
    ingredients: ['Fresh yellowfin tuna', 'Sushi rice', 'Nori'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'None',
    pairing: 'Sencha Green Tea',
    freshness: 'Sashimi grade tuna sliced on order.',
    chefStory: 'The traditional Japanese Tekka Maki in its purest form.'
  },
  {
    id: 'maki-crab',
    name: 'Crab Maki (6 pcs)',
    category: 'Maki',
    price: 475,
    rating: 4.8,
    prepTime: '6 mins',
    isVeg: false,
    isSpicy: false,
    calories: 220,
    image: './img/crab_mak.jpg',
    description: 'Sweet crab surimi wrapped in seasoned sushi rice and crisp nori.',
    tasteProfile: ['Sweet Crab', 'Clean', 'Delicate'],
    healthBenefits: ['Light Protein'],
    nutrition: { calories: '220 kcal', protein: '10 g', carbs: '36 g', fat: '3 g' },
    ingredients: ['Crab surimi', 'Sushi rice', 'Nori'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'None',
    pairing: 'Sparkling Yuzu Blossom',
    freshness: 'Rolled fresh on bamboo mat.',
    chefStory: 'Simple, delicate seafood maki.'
  },
  {
    id: 'maki-salmon',
    name: 'Salmon Maki (6 pcs)',
    category: 'Maki',
    price: 475,
    rating: 4.9,
    prepTime: '6 mins',
    isVeg: false,
    isSpicy: false,
    calories: 250,
<<<<<<< HEAD
    image: './img/salmon_maki.jpg',
=======
    image: './img/Salmon Maki.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Fresh Atlantic salmon wrapped simply with sushi rice and nori.',
    tasteProfile: ['Buttery Salmon', 'Clean', 'Melting'],
    healthBenefits: ['Omega-3 Rich'],
    nutrition: { calories: '250 kcal', protein: '16 g', carbs: '34 g', fat: '6 g' },
    ingredients: ['Atlantic salmon', 'Sushi rice', 'Nori'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'None',
    pairing: 'Cold Brew Genmaicha',
    freshness: 'Sashimi salmon sliced per order.',
    chefStory: 'The purest expression of Atlantic salmon.'
  },

  // ================= GIMBAP (6 PCS KOREAN ROLLS) =================
  {
    id: 'gim-tofu',
    name: 'Tofu Gimbap (6 pcs)',
    category: 'Gimbap',
    price: 350,
    rating: 4.8,
    prepTime: '8 mins',
    isVeg: true,
    isSpicy: false,
    calories: 270,
<<<<<<< HEAD
    image: './img/tofu_gimbap.jpg',
=======
    image: './img/Tofu Gimbap.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Korean roll filled with seasoned tofu, house pickled vegetables, sesame oil, and toasted sesame.',
    tasteProfile: ['Sesame Aromatic', 'Crunchy Pickles', 'Nutty Tofu'],
    healthBenefits: ['Probiotic Pickles', 'High Fiber'],
    nutrition: { calories: '270 kcal', protein: '10 g', carbs: '44 g', fat: '7 g' },
    ingredients: ['Pickled veggies (Danmuji)', 'Tofu', 'Sesame oil', 'Rice', 'Nori'],
    suitableFor: 'Vegetarian',
    spiceLevel: 'None',
    pairing: 'Iced Jasmine Tea',
    freshness: 'Brushed with toasted sesame oil.',
    chefStory: 'Korean picnic staple made with traditional yellow pickled radish.'
  },
  {
    id: 'gim-eggplant',
    name: 'Eggplant Gimbap (6 pcs)',
    category: 'Gimbap',
    price: 350,
    rating: 4.7,
    prepTime: '8 mins',
    isVeg: true,
    isSpicy: false,
    calories: 260,
    image: './img/eggplant_gimbap.jpg',
    description: 'Sweet braised eggplant chashu, pickled vegetables, and sesame seeds rolled in seaweed.',
    tasteProfile: ['Savory-Sweet', 'Crunchy', 'Aromatic'],
    healthBenefits: ['Antioxidant Rich'],
    nutrition: { calories: '260 kcal', protein: '6 g', carbs: '44 g', fat: '6 g' },
    ingredients: ['Pickled veggies', 'Eggplant chashu', 'Sesame oil', 'Rice', 'Nori'],
    suitableFor: 'Vegetarian',
    spiceLevel: 'None',
    pairing: 'Hot Sencha Tea',
    freshness: 'Eggplant cooked in sweet soy reduction.',
    chefStory: 'Vegetable-forward Korean gimbap.'
  },
  {
    id: 'gim-kimchi',
    name: 'Kimchi Gimbap (6 pcs)',
    category: 'Gimbap',
    price: 350,
    rating: 4.8,
    prepTime: '8 mins',
    isVeg: true,
    isSpicy: true,
    calories: 280,
    image: './img/kimchi_gimbap.jpg',
    description: 'Spicy fermented kimchi, pickled daikon radish, fresh vegetables, and sesame oil.',
    tasteProfile: ['Zesty Kimchi', 'Tangy', 'Savory'],
    healthBenefits: ['Gut Friendly Ferments'],
    nutrition: { calories: '280 kcal', protein: '7 g', carbs: '46 g', fat: '6 g' },
    ingredients: ['Pickled veggies', 'Kimchi', 'Sesame oil', 'Rice', 'Nori'],
    suitableFor: 'Vegetarian',
    spiceLevel: 'Medium',
    pairing: 'Sparkling Yuzu Blossom',
    freshness: 'Naturally aged in-house kimchi.',
    chefStory: 'Spicy fermented kimchi with fragrant toasted sesame oil.'
  },
  {
    id: 'gim-sausage',
    name: 'Chicken Sausage Gimbap (6 pcs)',
    category: 'Gimbap',
    price: 375,
    rating: 4.8,
    prepTime: '8 mins',
    isVeg: false,
    isSpicy: false,
    calories: 340,
<<<<<<< HEAD
    image: './img/chicken_sausage_gimbap.jpg',
=======
    image: './img/Chicken Sausage Gimbap.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Juicy chicken sausage, melted cheese slice, pickled vegetables, and sesame oil.',
    tasteProfile: ['Cheesy', 'Savory Sausage', 'Crunchy'],
    healthBenefits: ['High Protein Snack'],
    nutrition: { calories: '340 kcal', protein: '16 g', carbs: '42 g', fat: '12 g' },
    ingredients: ['Pickled veggies', 'Chicken sausage', 'Cheese slice', 'Sesame oil', 'Rice', 'Nori'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'None',
    pairing: 'Iced Oat Latte',
    freshness: 'Sausage seared warm on flat-top.',
    chefStory: 'Modern Korean street food twist with melting cheese.'
  },
  {
    id: 'gim-bulgogi',
    name: 'Bulgogi Gimbap (6 pcs)',
    category: 'Gimbap',
    price: 375,
    variants: [
      { name: 'Chicken', price: 375, isVeg: false },
      { name: 'Beef', price: 400, isVeg: false }
    ],
    rating: 4.9,
    prepTime: '8 mins',
    isVeg: false,
    isSpicy: false,
    calories: 360,
<<<<<<< HEAD
    image: './img/bulgogi_gimbap.jpg',
=======
    image: './img/Bulgogi Gimbap.jpg',
>>>>>>> 4bd8815 (message)
    description: 'Sweet soy bulgogi marinated meat, mushrooms, onions, pickled radish, and sesame oil.',
    tasteProfile: ['Caramelized Sweet Bulgogi', 'Savory', 'Nutty'],
    healthBenefits: ['High Iron & Protein'],
    nutrition: { calories: '360 kcal', protein: '20 g', carbs: '44 g', fat: '11 g' },
    ingredients: ['Pickled veggies', 'Mushroom', 'Onion', 'Bulgogi sauce', 'Sesame oil', 'Choice of Meat', 'Rice', 'Nori'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'None',
    pairing: 'Iced Jasmine Milk Tea',
    freshness: 'Bulgogi sautéed hot before rolling.',
    chefStory: 'The king of Korean gimbaps filled with savory beef or chicken.'
  },
  {
    id: 'gim-pork-chashu',
    name: 'Pork Chashu Gimbap (6 pcs)',
    category: 'Gimbap',
    price: 450,
    rating: 4.9,
    prepTime: '8 mins',
    isVeg: false,
    isSpicy: false,
    calories: 390,
    image: './img/pork_chashu_gimbap.jpg',
    description: 'Melt-in-mouth braised pork belly, chashu tare sauce, pickled daikon, and toasted sesame.',
    tasteProfile: ['Melted Pork Belly', 'Sweet-Savory Tare', 'Aromatic'],
    healthBenefits: ['Rich Protein'],
    nutrition: { calories: '390 kcal', protein: '18 g', carbs: '42 g', fat: '16 g' },
    ingredients: ['Pickled veggies', 'Pork', 'Chashu sauce', 'Sesame oil', 'Rice', 'Nori'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'None',
    pairing: 'Hot Sencha Tea',
    freshness: 'Braised pork belly cut into thick strips.',
    chefStory: 'Decadent Japanese chashu pork rolled in Korean gimbap format.'
  },

  // ================= NIGIRI (2 PCS HAND-PRESSED SUSHI) =================
  {
    id: 'nig-tofu',
    name: 'Tofu Nigiri (2 pcs)',
    category: 'Nigiri',
    price: 200,
    rating: 4.7,
    prepTime: '5 mins',
    isVeg: true,
    isSpicy: false,
    calories: 140,
    image: './img/tofu_nigiri.jpg',
    description: 'Hand-pressed sushi rice pillow topped with seasoned fried inari tofu pouch and sweet soy reduction.',
    tasteProfile: ['Sweet Inari', 'Vinegared Rice', 'Delicate'],
    healthBenefits: ['Plant Protein'],
    nutrition: { calories: '140 kcal', protein: '5 g', carbs: '24 g', fat: '3 g' },
    ingredients: ['Inari Tofu', 'Seasoned sushi rice'],
    suitableFor: 'Vegetarian',
    spiceLevel: 'None',
    pairing: 'Sencha Green Tea',
    freshness: 'Hand-formed per order.',
    chefStory: 'Classic sweet Japanese inari sushi.'
  },
  {
    id: 'nig-surimi',
    name: 'Surimi Nigiri (2 pcs)',
    category: 'Nigiri',
    price: 200,
    rating: 4.7,
    prepTime: '5 mins',
    isVeg: false,
    isSpicy: false,
    calories: 150,
    image: './img/surimi_nigiri.jpg',
    description: 'Sweet crab surimi draped over hand-pressed sushi rice, bound with delicate nori ribbon.',
    tasteProfile: ['Sweet Crab', 'Clean', 'Tender'],
    healthBenefits: ['Low Fat Seafood'],
    nutrition: { calories: '150 kcal', protein: '6 g', carbs: '26 g', fat: '2 g' },
    ingredients: ['Surimi', 'Sushi rice', 'Nori ribbon'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'None',
    pairing: 'Sparkling Yuzu Blossom',
    freshness: 'Hand-formed per ticket.',
    chefStory: 'Delicate seafood nigiri.'
  },
  {
    id: 'nig-tuna',
    name: 'Tuna Nigiri (2 pcs)',
    category: 'Nigiri',
    price: 250,
    rating: 4.9,
    prepTime: '5 mins',
    isVeg: false,
    isSpicy: false,
    calories: 160,
    image: './img/tuna_nigiri.jpg',
    description: 'Sashimi slice of prime yellowfin tuna draped over warm hand-pressed sushi rice with nikiri soy brush.',
    tasteProfile: ['Silky Clean Tuna', 'Vinegared Rice', 'Pure Umami'],
    healthBenefits: ['High Protein', 'Lean Omega-3'],
    nutrition: { calories: '160 kcal', protein: '12 g', carbs: '22 g', fat: '2 g' },
    ingredients: ['Fresh yellowfin tuna', 'Sushi rice', 'Nikiri soy'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'None',
    pairing: 'Cold Brew Genmaicha',
    freshness: 'Sliced directly from chilled tuna loin.',
    chefStory: 'The epitome of sushi master craftsmanship.'
  },
  {
    id: 'nig-salmon',
    name: 'Salmon Nigiri (2 pcs)',
    category: 'Nigiri',
    price: 250,
    rating: 4.9,
    prepTime: '5 mins',
    isVeg: false,
    isSpicy: false,
    calories: 180,
    image: './img/salmon_nigiri.jpg',
    description: 'Fresh Atlantic salmon sashimi draped over hand-pressed vinegared sushi rice.',
    tasteProfile: ['Buttery Fat', 'Melting Texture', 'Sweet Soy'],
    healthBenefits: ['High EPA/DHA Omega-3'],
    nutrition: { calories: '180 kcal', protein: '10 g', carbs: '22 g', fat: '5 g' },
    ingredients: ['Atlantic salmon sashimi', 'Sushi rice', 'Nikiri soy'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'None',
    pairing: 'Sencha Green Tea',
    freshness: 'Pristine fresh Atlantic salmon.',
    chefStory: 'Simple, unadorned perfection.'
  },

  // ================= ONIGIRI (1 PC TRIANGULAR RICE BALL) =================
  {
    id: 'oni-kimchi',
    name: 'Kimchi Onigiri (1 pc)',
    category: 'Onigiri',
    price: 200,
    rating: 4.7,
    prepTime: '5 mins',
    isVeg: true,
    isSpicy: true,
    calories: 190,
    image: './img/kimchi_onigiri.jpg',
    description: 'Triangular rice ball stuffed with spicy seasoned kimchi, wrapped in crisp nori sheet.',
    tasteProfile: ['Spicy Kimchi Core', 'Steamed Rice', 'Crisp Seaweed'],
    healthBenefits: ['Convenient Healthy Fuel'],
    nutrition: { calories: '190 kcal', protein: '4 g', carbs: '38 g', fat: '2 g' },
    ingredients: ['Kimchi', 'Sushi rice', 'Nori wrapper'],
    suitableFor: 'Vegetarian',
    spiceLevel: 'Medium',
    pairing: 'Iced Jasmine Tea',
    freshness: 'Hand-pressed into traditional triangular mold.',
    chefStory: 'The beloved Japanese convenience snack filled with Korean kimchi.'
  },
  {
    id: 'oni-tofu',
    name: 'Teriyaki Tofu Onigiri (1 pc)',
    category: 'Onigiri',
    price: 200,
    rating: 4.7,
    prepTime: '5 mins',
    isVeg: true,
    isSpicy: false,
    calories: 195,
    image: './img/teriyaki_tofu_onigiri.jpg',
    description: 'Rice triangle filled with sweet teriyaki glazed tofu, wrapped in toasted nori seaweed.',
    tasteProfile: ['Sweet Teriyaki Core', 'Wholesome Rice'],
    healthBenefits: ['Clean Energy'],
    nutrition: { calories: '195 kcal', protein: '6 g', carbs: '38 g', fat: '3 g' },
    ingredients: ['Teriyaki glazed tofu', 'Sushi rice', 'Nori wrapper'],
    suitableFor: 'Vegetarian',
    spiceLevel: 'None',
    pairing: 'Cold Brew Genmaicha',
    freshness: 'Pressed fresh with warm rice.',
    chefStory: 'Hearty plant-based onigiri.'
  },
  {
    id: 'oni-tuna-mayo',
    name: 'Tuna Mayo Onigiri (1 pc)',
    category: 'Onigiri',
    price: 300,
    rating: 4.9,
    prepTime: '5 mins',
    isVeg: false,
    isSpicy: false,
    calories: 240,
    image: './img/tuna_mayo_onigiri.jpg',
    description: 'Seasoned yellowfin tuna flaked in creamy Japanese Kewpie mayo and scallions inside crisp nori wrapped rice triangle.',
    tasteProfile: ['Rich Creamy Tuna', 'Savory', 'Crisp Nori'],
    healthBenefits: ['High Protein Fuel'],
    nutrition: { calories: '240 kcal', protein: '14 g', carbs: '36 g', fat: '6 g' },
    ingredients: ['Tuna', 'Kewpie mayo', 'Spring onion', 'Sushi rice', 'Nori'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'None',
    pairing: 'Sparkling Yuzu Blossom',
    freshness: 'Japan’s #1 favorite onigiri flavor.',
    chefStory: 'The legendary Japanese kombini comfort staple.'
  },
  {
    id: 'oni-salmon-cheese',
    name: 'Cream Cheese Salmon Onigiri (1 pc)',
    category: 'Onigiri',
    price: 300,
    rating: 4.9,
    prepTime: '5 mins',
    isVeg: false,
    isSpicy: false,
    calories: 260,
    image: './img/cream_cheese_salmon_onigiri.jpg',
    description: 'Flaked Atlantic salmon and rich cream cheese core wrapped in sushi rice and crunchy seaweed.',
    tasteProfile: ['Silky Cheese', 'Savory Salmon', 'Warm Rice'],
    healthBenefits: ['Omega-3 + Calcium'],
    nutrition: { calories: '260 kcal', protein: '12 g', carbs: '36 g', fat: '8 g' },
    ingredients: ['Atlantic salmon', 'Cream cheese', 'Sushi rice', 'Nori'],
    suitableFor: 'Non-Vegetarian',
    spiceLevel: 'None',
    pairing: 'Hot Sencha Tea',
    freshness: 'Rolled and hand wrapped to order.',
    chefStory: 'Velvety cream cheese married with roasted salmon flakes.'
  },

  // ================= PLATTERS =================
  {
    id: 'plat-sushi-reg',
    name: 'Sushi Platter (Regular 12 pcs)',
    category: 'Platters',
    price: 800,
    variants: [
      { name: 'Veg (12 pcs)', price: 800, isVeg: true },
      { name: 'Non-Veg (12 pcs)', price: 1000, isVeg: false }
    ],
    rating: 5.0,
    prepTime: '15 mins',
    isVeg: true,
    isSpicy: false,
    calories: 580,
    image: './img/sushi_platter.jpg',
    description: 'Chef selection of 1 Maki (6 pcs), 1 Uramaki (4 pcs), and 1 Nigiri (2 pcs) served with gari ginger and wasabi.',
    tasteProfile: ['Diverse Textures', 'Fresh Raw & Cooked', 'Grand Feast'],
    healthBenefits: ['Complete Balanced Feast'],
    nutrition: { calories: '580 kcal', protein: '28 g', carbs: '84 g', fat: '14 g' },
    ingredients: ['1 Maki', '1 Uramaki', '1 Nigiri', 'Pickled ginger', 'Wasabi', 'Nikiri soy'],
    suitableFor: 'Veg / Non-Veg Options',
    spiceLevel: 'None',
    pairing: 'Ceremonial Matcha Tea',
    freshness: 'Arranged fresh on Japanese cedar geta board.',
    chefStory: 'Curated by head sushi chef to balance crisp, buttery, and vinegared notes.'
  },
  {
    id: 'plat-sushi-large',
    name: 'Sushi Platter (Large 24 pcs)',
    category: 'Platters',
    price: 1500,
    variants: [
      { name: 'Veg (24 pcs)', price: 1500, isVeg: true },
      { name: 'Non-Veg (24 pcs)', price: 1900, isVeg: false }
    ],
    rating: 5.0,
    prepTime: '20 mins',
    isVeg: true,
    isSpicy: false,
    calories: 1100,
    image: './img/sushi_platter_large.jpg',
    description: 'Grand dining feast including 2 Makis (12 pcs), 2 Uramakis (8 pcs), and 2 Nigiris (4 pcs) with wasabi and soy.',
    tasteProfile: ['Lavish Variety', 'Crisp & Melty', 'Umami Rich'],
    healthBenefits: ['Sharing Platter'],
    nutrition: { calories: '1100 kcal', protein: '56 g', carbs: '160 g', fat: '28 g' },
    ingredients: ['2 Makis', '2 Uramakis', '2 Nigiris', 'Pickled ginger', 'Wasabi'],
    suitableFor: 'Veg / Non-Veg Options',
    spiceLevel: 'None',
    pairing: 'Sparkling Yuzu Pitcher',
    freshness: 'Handcrafted sequentially for optimal temperature.',
    chefStory: 'Our grand banquet platter designed for communal dining.'
  },
  {
    id: 'plat-sashimi',
    name: 'Sashimi Platter (Regular)',
    category: 'Platters',
    price: 1200,
    rating: 5.0,
    prepTime: '10 mins',
    isVeg: false,
    isSpicy: false,
    calories: 320,
    image: './img/sashimi_platter.jpg',
    description: 'Pristine raw slices of 3 pcs Atlantic Salmon and 3 pcs Yellowfin Tuna served over crushed ice with wasabi and aged soy.',
    tasteProfile: ['Pure Melting Fish', 'Clean Ocean', 'Wasabi Kick'],
    healthBenefits: ['Pure Protein', 'High Omega-3 Fatty Acids'],
    nutrition: { calories: '320 kcal', protein: '38 g', carbs: '2 g', fat: '14 g' },
    ingredients: ['3 pcs salmon sashimi', '3 pcs tuna sashimi', 'Wasabi', 'Soy sauce', 'Daikon garnish'],
    suitableFor: 'Non-Vegetarian (Raw Fish)',
    spiceLevel: 'None',
    pairing: 'Sencha Green Tea',
    freshness: 'Sliced from sashimi grade blocks with yanagiba blade.',
    chefStory: 'The purest demonstration of fresh seafood and precision knife skills.'
  },

  // ================= ADD ONS =================
  {
    id: 'addon-egg',
    name: 'Egg Add-on (Soft-boiled / Boiled / Fried)',
    category: 'Add-ons',
    price: 30,
    variants: [
      { name: 'Soft-boiled (Ajitsuke)', price: 30, isVeg: true },
      { name: 'Boiled', price: 30, isVeg: true },
      { name: 'Fried Egg', price: 30, isVeg: true }
    ],
    rating: 4.9,
    prepTime: '3 mins',
    isVeg: true,
    isSpicy: false,
    calories: 75,
    image:'./img/egg.jpg',
    description: 'Add a perfectly prepared egg to your ramyeon, fried rice, or rice bowl.',
    tasteProfile: ['Custardy Yolk', 'Savory Soy Marinated'],
    healthBenefits: ['High Protein'],
    nutrition: { calories: '75 kcal', protein: '6 g', carbs: '1 g', fat: '5 g' },
    ingredients: ['Egg', 'Soy mirin marinade'],
    suitableFor: 'Vegetarian (Egg)',
    spiceLevel: 'None',
    pairing: 'Any Ramyeon / Rice Bowl',
    freshness: 'Prepared fresh daily.',
    chefStory: 'Marinated in sweet soy reduction for jammy yolk.'
  },
  {
    id: 'addon-cheese',
    name: 'Cheese Slice Add-on',
    category: 'Add-ons',
    price: 30,
    rating: 4.8,
    prepTime: '1 min',
    isVeg: true,
    isSpicy: false,
    calories: 80,
    image: './img/cheese_slice.jpg',
    description: 'Rich melting cheese slice to melt directly into hot ramyeon broth or rice.',
    tasteProfile: ['Creamy', 'Melted', 'Savory'],
    healthBenefits: ['Calcium'],
    nutrition: { calories: '80 kcal', protein: '5 g', carbs: '1 g', fat: '7 g' },
    ingredients: ['Processed cheese slice'],
    suitableFor: 'Vegetarian',
    spiceLevel: 'None',
    pairing: 'Spicy Chicken Ramyeon',
    freshness: 'Melted over piping hot dishes.',
    chefStory: 'The secret to silky Korean ramyeon broth.'
  },
  {
    id: 'addon-kimchi',
    name: 'Kimchi Side Add-on',
    category: 'Add-ons',
    price: 30,
    rating: 4.9,
    prepTime: '1 min',
    isVeg: true,
    isSpicy: true,
    calories: 25,
    image: './img/kimchi_side.jpg',
    description: 'Portion of our signature 30-day naturally fermented house Napa cabbage kimchi.',
    tasteProfile: ['Spicy', 'Sour', 'Probiotic Crunch'],
    healthBenefits: ['Gut Probiotics'],
    nutrition: { calories: '25 kcal', protein: '2 g', carbs: '4 g', fat: '0 g' },
    ingredients: ['Fermented Napa cabbage', 'Korean chili powder', 'Garlic', 'Ginger'],
    suitableFor: 'Vegetarian',
    spiceLevel: 'Medium',
    pairing: 'Katsu Rice / Ramyeon',
    freshness: 'Aged in traditional earthen pots.',
    chefStory: 'Handmade following traditional temple fermentation recipes.'
  },
  {
    id: 'addon-tofu',
    name: 'Tofu Cubes Add-on',
    category: 'Add-ons',
    price: 50,
    rating: 4.8,
    prepTime: '2 mins',
    isVeg: true,
    isSpicy: false,
    calories: 90,
    image: './img/tofu_cubes.jpg',
    description: 'Extra portion of organic silken fried tofu cubes to enrich any bowl.',
    tasteProfile: ['Silky', 'Nutty Soy'],
    healthBenefits: ['Clean Plant Protein'],
    nutrition: { calories: '90 kcal', protein: '9 g', carbs: '2 g', fat: '5 g' },
    ingredients: ['Organic soy tofu'],
    suitableFor: 'Vegetarian',
    spiceLevel: 'None',
    pairing: 'Veg Ramyeon / Thai Curry',
    freshness: 'Pressed fresh daily.',
    chefStory: 'Lightly fried for golden skin and soft center.'
  }
];

// All Menu Categories from PDF
const CATEGORIES = [
  'All',
  'Appetizers',
  'Rice & Noodles',
  'Korean Ramyeon',
  'Uramaki',
  'Maki',
  'Gimbap',
  'Nigiri',
  'Onigiri',
  'Platters',
  'Add-ons'
];

// 2. Application State
const State = {
  activeCategory: 'All',
  activeFilter: 'all',
  searchQuery: '',
  cart: JSON.parse(localStorage.getItem('koi_m_cart') || '[]'),
  favs: JSON.parse(localStorage.getItem('koi_m_favs') || '["app-kfc", "ram-spicy-chicken", "ura-dynamite", "plat-sushi-reg"]'),
  currentDish: null,
  selectedVariantIndex: 0,
  sheetQty: 1,
<<<<<<< HEAD
=======
  currentInvoiceNo: null,
>>>>>>> 4bd8815 (message)
  theme: localStorage.getItem('koi_m_theme') || 'light'
};

// 3. UI Element References
const UI = {
  themeToggle: document.getElementById('theme-toggle'),
  categoryChips: document.getElementById('category-chips-wrapper'),
  activeCatName: document.getElementById('active-category-name'),
  foodCards: document.getElementById('food-cards-list'),
  feedHeading: document.getElementById('feed-heading-text'),
  feedBadge: document.getElementById('feed-count-badge'),
  emptyState: document.getElementById('empty-state-view'),
  btnReset: document.getElementById('btn-reset-filters'),
  searchInput: document.getElementById('mobile-search-input'),
  clearSearch: document.getElementById('clear-search-btn'),
  filterPills: document.querySelectorAll('.pill-chip'),
  
  floatingPill: document.getElementById('floating-cart-pill'),
  pillCount: document.getElementById('pill-cart-count'),
  pillTotal: document.getElementById('pill-cart-total'),

  detailSheet: document.getElementById('dish-detail-sheet'),
  detailBody: document.getElementById('detail-sheet-content'),
  cartSheet: document.getElementById('cart-drawer-sheet'),
  cartFeed: document.getElementById('cart-items-feed'),
  cartSubtotal: document.getElementById('cart-subtotal-val'),
<<<<<<< HEAD
  cartGrand: document.getElementById('cart-grand-val'),
=======
  cartGst: document.getElementById('cart-gst-val'),
  cartGrand: document.getElementById('cart-grand-val'),
  
  // Bill / Receipt Modal Elements
  billSheet: document.getElementById('bill-sheet-modal'),
  receiptBillNo: document.getElementById('receipt-bill-no'),
  receiptBillDate: document.getElementById('receipt-bill-date'),
  receiptBillTime: document.getElementById('receipt-bill-time'),
  receiptTableBody: document.getElementById('receipt-table-body'),
  receiptItemsQtyCount: document.getElementById('receipt-items-qty-count'),
  receiptSubtotalVal: document.getElementById('receipt-subtotal-val'),
  receiptCgstVal: document.getElementById('receipt-cgst-val'),
  receiptSgstVal: document.getElementById('receipt-sgst-val'),
  receiptTotalGstVal: document.getElementById('receipt-total-gst-val'),
  receiptRoundoffVal: document.getElementById('receipt-roundoff-val'),
  receiptGrandVal: document.getElementById('receipt-grand-val'),
  receiptWordsText: document.getElementById('receipt-words-text'),

>>>>>>> 4bd8815 (message)
  checkoutSheet: document.getElementById('checkout-sheet'),
  checkoutFinalAmt: document.getElementById('checkout-final-amt'),
  successSheet: document.getElementById('order-success-sheet'),
  successReceipt: document.getElementById('success-receipt-data'),
  toast: document.getElementById('app-toast')
};

// 4. Lifecycle Boot
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.setAttribute('data-theme', State.theme);
  renderCategories();
  renderMenuGrid();
  updateCartState();
  bindListeners();
});

// 5. Category Navigation Render
function renderCategories() {
  UI.categoryChips.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `cat-btn ${cat === State.activeCategory ? 'active' : ''}`;
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      State.activeCategory = cat;
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      UI.activeCatName.textContent = cat;
      renderMenuGrid();
    });
    UI.categoryChips.appendChild(btn);
  });
}

function getFilteredMenu() {
  return MENU_DATA.filter(dish => {
    const matchesCat = (State.activeCategory === 'All') || (dish.category === State.activeCategory);
    
    const q = State.searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      dish.name.toLowerCase().includes(q) || 
      dish.description.toLowerCase().includes(q) ||
      dish.ingredients.some(i => i.toLowerCase().includes(q));

    let matchesFilter = true;
    if (State.activeFilter === 'veg') matchesFilter = dish.isVeg;
    if (State.activeFilter === 'non-veg') matchesFilter = !dish.isVeg;
    if (State.activeFilter === 'favs') matchesFilter = State.favs.includes(dish.id);

    return matchesCat && matchesSearch && matchesFilter;
  });
}

// 6. Render 2-Column Exact Cards
function renderMenuGrid() {
  const list = getFilteredMenu();
  UI.foodCards.innerHTML = '';
  UI.feedBadge.textContent = `${list.length} Items`;
  UI.feedHeading.textContent = State.activeCategory === 'All' ? 'Curated Kitchen Menu' : State.activeCategory;

  if (list.length === 0) {
    UI.emptyState.classList.remove('hidden');
  } else {
    UI.emptyState.classList.add('hidden');
    list.forEach(dish => {
      const isFav = State.favs.includes(dish.id);
      const card = document.createElement('article');
      card.className = 'grid-food-card';
      card.onclick = () => openDishDetail(dish.id);

      // Default display price
      const displayPrice = dish.price;

      card.innerHTML = `
        <div class="card-banner-wrap">
          <img src="${dish.image}" alt="${dish.name}" class="card-banner-img" loading="lazy" />
          
          <!-- Top Left Leaf Diet Icon -->
          <div class="top-left-diet-badge">
            <svg class="leaf-icon ${dish.isVeg ? '' : 'nonveg'}" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
            </svg>
          </div>

          <!-- Top Right Circular Price Badge -->
          <div class="top-right-price-circle">
            <span class="currency">₹</span>
            <span class="amt">${displayPrice}</span>
          </div>

          <!-- Translucent Favourite Capsule -->
          ${isFav ? `
            <div class="card-favourite-pill" onclick="event.stopPropagation(); toggleFav('${dish.id}')">
              <svg class="heart-icon" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              <span>Favourite</span>
            </div>
          ` : ''}
        </div>

        <div class="card-body-section">
          <h4 class="card-item-title">${dish.name}</h4>

          <div class="card-stats-row">
            <span class="rating-tag">
              <span class="star">★</span> ${dish.rating}
            </span>
            <span class="time-tag">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ${dish.prepTime}
            </span>
          </div>

          <div class="card-action-row">
            <span class="footer-price"><span class="rupee-symbol">₹</span>${displayPrice}</span>
            <button class="btn-card-add" onclick="event.stopPropagation(); quickAddFromCard('${dish.id}')">
              + Add
            </button>
          </div>
        </div>
      `;
      UI.foodCards.appendChild(card);
    });
  }
}

// 7. Product Detail Sheet with Variant Support
function openDishDetail(dishId) {
  const dish = MENU_DATA.find(d => d.id === dishId);
  if (!dish) return;

  State.currentDish = dish;
  State.selectedVariantIndex = 0;
  State.sheetQty = 1;

  const initialPrice = dish.variants ? dish.variants[0].price : dish.price;

  UI.detailBody.innerHTML = `
    <div class="detail-img-box">
      <img src="${dish.image}" alt="${dish.name}" />
    </div>
    <h3 class="detail-head-title">${dish.name}</h3>
    <div class="detail-head-price" id="detail-active-price">₹${initialPrice}</div>
    <p class="detail-head-desc">${dish.description}</p>

    <!-- Variant Selector (if item has options) -->
    ${dish.variants ? `
      <div class="variant-selector-block">
        <span class="variant-selector-label">Choose Option / Portion:</span>
        <div class="variant-pills-wrap">
          ${dish.variants.map((v, idx) => `
            <button class="variant-choice-btn ${idx === 0 ? 'active' : ''}" onclick="selectDishVariant(${idx})">
              ${v.name} (₹${v.price})
            </button>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- Taste Profile -->
    <div class="spec-box">
      <h5>Taste Profile</h5>
      <ul>${dish.tasteProfile.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>

    <!-- Health Benefits -->
    <div class="spec-box">
      <h5>Health Benefits</h5>
      <ul>${dish.healthBenefits.map(h => `<li>${h}</li>`).join('')}</ul>
    </div>

    <!-- Nutrition (Approx.) -->
    <div class="spec-box">
      <h5>Nutrition (Approx.)</h5>
      <div class="nutri-grid">
        <div class="nutri-cell"><span class="nutri-val">${dish.nutrition.calories}</span><span class="nutri-lbl">Calories</span></div>
        <div class="nutri-cell"><span class="nutri-val">${dish.nutrition.protein}</span><span class="nutri-lbl">Protein</span></div>
        <div class="nutri-cell"><span class="nutri-val">${dish.nutrition.carbs}</span><span class="nutri-lbl">Carbs</span></div>
        <div class="nutri-cell"><span class="nutri-val">${dish.nutrition.fat}</span><span class="nutri-lbl">Fat</span></div>
      </div>
    </div>

    <!-- Ingredients -->
    <div class="spec-box">
      <h5>Ingredients</h5>
      <ul>${dish.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>

    <!-- Details Specs -->
    <div class="spec-box">
      <h5>Details</h5>
      <ul>
        <li>Suitable For: ${dish.suitableFor}</li>
        <li>Spice Level: ${dish.spiceLevel}</li>
        <li>Recommended Pairing: ${dish.pairing}</li>
        <li>Preparation Time: ${dish.prepTime}</li>
        <li>Freshness: ${dish.freshness}</li>
      </ul>
    </div>

    <!-- Chef Story -->
    <div class="chef-quote-block">
      ❝ ${dish.chefStory} ❞
    </div>

    <!-- Sticky Bottom Bar -->
    <div class="sheet-sticky-footer">
      <div class="qty-stepper-ctrl">
        <button onclick="changeSheetQty(-1)">−</button>
        <span id="sheet-qty-number">1</span>
        <button onclick="changeSheetQty(1)">+</button>
      </div>
      <button class="btn-primary-action" onclick="addSheetDishToCart()">
        Add to Order • ₹<span id="sheet-btn-price">${initialPrice}</span>
      </button>
    </div>
  `;

  UI.detailSheet.classList.add('active');
}

function selectDishVariant(index) {
  State.selectedVariantIndex = index;
  const variant = State.currentDish.variants[index];
  
  document.querySelectorAll('.variant-choice-btn').forEach((btn, idx) => {
    if (idx === index) btn.classList.add('active');
    else btn.classList.remove('active');
  });

  document.getElementById('detail-active-price').textContent = `₹${variant.price}`;
  document.getElementById('sheet-btn-price').textContent = variant.price * State.sheetQty;
}

function closeDishDetail() {
  UI.detailSheet.classList.remove('active');
}

function changeSheetQty(delta) {
  const next = State.sheetQty + delta;
  if (next >= 1 && next <= 10) {
    State.sheetQty = next;
    const activePrice = State.currentDish.variants 
      ? State.currentDish.variants[State.selectedVariantIndex].price 
      : State.currentDish.price;

    document.getElementById('sheet-qty-number').textContent = next;
    document.getElementById('sheet-btn-price').textContent = activePrice * next;
  }
}

function addSheetDishToCart() {
  if (!State.currentDish) return;
  
  let variantName = null;
  let price = State.currentDish.price;

  if (State.currentDish.variants) {
    const v = State.currentDish.variants[State.selectedVariantIndex];
    variantName = v.name;
    price = v.price;
  }

  addToCart(State.currentDish.id, State.sheetQty, variantName, price);
  closeDishDetail();
}

function quickAddFromCard(dishId) {
  const dish = MENU_DATA.find(d => d.id === dishId);
  if (!dish) return;

  if (dish.variants && dish.variants.length > 0) {
    openDishDetail(dishId);
  } else {
    addToCart(dish.id, 1, null, dish.price);
  }
}

// 8. Order Cart Engine
function addToCart(dishId, quantity = 1, variantName = null, itemPrice = null) {
  const dish = MENU_DATA.find(d => d.id === dishId);
  if (!dish) return;

  const finalPrice = itemPrice || dish.price;
  const cartKey = variantName ? `${dishId}-${variantName}` : dishId;

  const existing = State.cart.find(item => item.cartKey === cartKey);
  if (existing) {
    existing.quantity += quantity;
  } else {
    State.cart.push({
      cartKey: cartKey,
      id: dish.id,
      name: dish.name,
      variantName: variantName,
      price: finalPrice,
      image: dish.image,
      quantity: quantity
    });
  }

  saveCart();
  updateCartState();
  showToast(`Added ${dish.name} ${variantName ? `(${variantName})` : ''} to order`);
}

function updateCartQty(cartKey, delta) {
  const index = State.cart.findIndex(i => i.cartKey === cartKey);
  if (index > -1) {
    State.cart[index].quantity += delta;
    if (State.cart[index].quantity <= 0) {
      State.cart.splice(index, 1);
    }
  }
  saveCart();
  updateCartState();
}

function saveCart() {
  localStorage.setItem('koi_m_cart', JSON.stringify(State.cart));
}

<<<<<<< HEAD
function updateCartState() {
  const totalCount = State.cart.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = State.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  const grand = subtotal;
=======
// Convert number to Indian currency words
function numberToWordsINR(amount) {
  const num = Math.round(amount);
  if (num === 0) return 'Rupees Zero Only';

  const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  function convertBelowThousand(n) {
    let str = '';
    if (n >= 100) {
      str += units[Math.floor(n / 100)] + ' Hundred ';
      n %= 100;
    }
    if (n >= 20) {
      str += tens[Math.floor(n / 10)] + ' ';
      n %= 10;
    }
    if (n > 0) {
      str += units[n] + ' ';
    }
    return str.trim();
  }

  let result = '';
  let crore = Math.floor(num / 10000000);
  let rem = num % 10000000;
  let lakh = Math.floor(rem / 100000);
  rem = rem % 100000;
  let thousand = Math.floor(rem / 1000);
  rem = rem % 1000;
  let hundreds = rem;

  if (crore > 0) result += convertBelowThousand(crore) + ' Crore ';
  if (lakh > 0) result += convertBelowThousand(lakh) + ' Lakh ';
  if (thousand > 0) result += convertBelowThousand(thousand) + ' Thousand ';
  if (hundreds > 0) result += convertBelowThousand(hundreds) + ' ';

  return `Rupees ${result.trim()} Only`;
}

function updateCartState() {
  const totalCount = State.cart.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = State.cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  
  // 5% GST (2.5% CGST + 2.5% SGST)
  const cgst = subtotal * 0.025;
  const sgst = subtotal * 0.025;
  const totalGst = cgst + sgst;
  const exactGrand = subtotal + totalGst;
  const grand = Math.round(exactGrand);
>>>>>>> 4bd8815 (message)

  if (totalCount > 0) {
    UI.floatingPill.classList.add('visible');
    UI.pillCount.textContent = totalCount;
<<<<<<< HEAD
    UI.pillTotal.textContent = `₹${grand}`;
  } else {
    UI.floatingPill.classList.remove('visible');
    closeCartDrawer();
  }

  UI.cartSubtotal.textContent = `₹${subtotal}`;
  UI.cartGrand.textContent = `₹${grand}`;
  UI.checkoutFinalAmt.textContent = `₹${grand}`;

  if (State.cart.length === 0) {
    UI.cartFeed.innerHTML = '<p style="text-align:center; padding:20px; font-size:0.85rem; color:var(--color-text-muted);">Your order tray is empty.</p>';
  } else {
    UI.cartFeed.innerHTML = State.cart.map(item => `
      <div class="cart-row">
        <img src="${item.image}" class="cart-thumb" />
        <div class="cart-meta">
          <div class="cart-name">${item.name}</div>
          ${item.variantName ? `<span class="cart-variant-tag">${item.variantName}</span>` : ''}
          <div class="cart-cost">₹${item.price * item.quantity}</div>
        </div>
        <div class="qty-stepper-ctrl">
          <button onclick="updateCartQty('${item.cartKey}', -1)">−</button>
          <span>${item.quantity}</span>
          <button onclick="updateCartQty('${item.cartKey}', 1)">+</button>
=======
    UI.pillTotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  } else {
    UI.floatingPill.classList.remove('visible');
    closeCartDrawer();
    closeBillModal();
  }

  if (UI.cartSubtotal) UI.cartSubtotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  if (UI.cartGst) UI.cartGst.textContent = `₹${totalGst.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  if (UI.cartGrand) UI.cartGrand.textContent = `₹${grand.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  if (UI.checkoutFinalAmt) UI.checkoutFinalAmt.textContent = `₹${grand.toLocaleString('en-IN')}`;

  if (State.cart.length === 0) {
    UI.cartFeed.innerHTML = '<p style="text-align:center; padding:24px 10px; font-size:0.85rem; color:var(--color-text-muted);">Your order tray is empty.</p>';
  } else {
    UI.cartFeed.innerHTML = State.cart.map(item => `
      <div class="cart-row">
        <img src="${item.image}" class="cart-thumb" alt="${item.name}" />
        <div class="cart-meta">
          <div class="cart-name">${item.name}</div>
          ${item.variantName ? `<span class="cart-variant-tag">${item.variantName}</span>` : ''}
          <div class="cart-cost">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
        </div>
        <div class="qty-stepper-ctrl">
          <button onclick="updateCartQty('${item.cartKey}', -1)" aria-label="Decrease quantity">−</button>
          <span>${item.quantity}</span>
          <button onclick="updateCartQty('${item.cartKey}', 1)" aria-label="Increase quantity">+</button>
>>>>>>> 4bd8815 (message)
        </div>
      </div>
    `).join('');
  }
<<<<<<< HEAD
=======

  // If bill modal is currently open, refresh its data in real-time
  if (UI.billSheet && UI.billSheet.classList.contains('active')) {
    populateBillModalData();
  }
>>>>>>> 4bd8815 (message)
}

function openCartDrawer() {
  UI.cartSheet.classList.add('active');
}

function closeCartDrawer() {
  UI.cartSheet.classList.remove('active');
}

<<<<<<< HEAD
=======
// 8. Authentic Restaurant Final Bill (Tax Invoice with 5% GST)
function openBillModal() {
  if (State.cart.length === 0) {
    showToast('Your order tray is empty');
    return;
  }

  if (!State.currentInvoiceNo) {
    State.currentInvoiceNo = 'KOI-' + Math.floor(1000 + Math.random() * 9000);
  }

  populateBillModalData();
  UI.billSheet.classList.add('active');
}

function populateBillModalData() {
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });

  if (UI.receiptBillNo) UI.receiptBillNo.textContent = State.currentInvoiceNo;
  if (UI.receiptBillDate) UI.receiptBillDate.textContent = dateStr;
  if (UI.receiptBillTime) UI.receiptBillTime.textContent = timeStr;

  let totalItemsCount = State.cart.length;
  let totalPcsCount = 0;
  let subtotal = 0;

  if (UI.receiptTableBody) {
    UI.receiptTableBody.innerHTML = State.cart.map((item, idx) => {
      const lineTotal = item.price * item.quantity;
      subtotal += lineTotal;
      totalPcsCount += item.quantity;

      const originalDish = MENU_DATA.find(d => d.id === item.id);
      const isVeg = originalDish ? originalDish.isVeg : true;

      return `
        <tr>
          <td class="col-sn">${idx + 1}</td>
          <td class="col-desc">
            <span class="receipt-item-title">
              <span class="receipt-diet-tag ${isVeg ? 'veg' : 'nonveg'}">${isVeg ? '●' : '▲'}</span>
              ${item.name}
            </span>
            ${item.variantName ? `<span class="receipt-item-sub">Option: ${item.variantName}</span>` : ''}
          </td>
          <td class="col-qty">${item.quantity}</td>
          <td class="col-rate">${item.price.toFixed(2)}</td>
          <td class="col-amt">${lineTotal.toFixed(2)}</td>
        </tr>
      `;
    }).join('');
  }

  // Calculate 5% GST (2.5% CGST + 2.5% SGST)
  const cgst = subtotal * 0.025;
  const sgst = subtotal * 0.025;
  const totalGst = cgst + sgst;
  const exactGrand = subtotal + totalGst;
  const grandTotal = Math.round(exactGrand);
  const roundOff = grandTotal - exactGrand;

  if (UI.receiptItemsQtyCount) UI.receiptItemsQtyCount.textContent = `${totalItemsCount} item${totalItemsCount > 1 ? 's' : ''} / ${totalPcsCount} pcs`;
  if (UI.receiptSubtotalVal) UI.receiptSubtotalVal.textContent = `₹${subtotal.toFixed(2)}`;
  if (UI.receiptCgstVal) UI.receiptCgstVal.textContent = `₹${cgst.toFixed(2)}`;
  if (UI.receiptSgstVal) UI.receiptSgstVal.textContent = `₹${sgst.toFixed(2)}`;
  if (UI.receiptTotalGstVal) UI.receiptTotalGstVal.textContent = `₹${totalGst.toFixed(2)}`;
  
  if (UI.receiptRoundoffVal) {
    const sign = roundOff > 0 ? '+' : '';
    UI.receiptRoundoffVal.textContent = `${sign}₹${roundOff.toFixed(2)}`;
  }
  
  if (UI.receiptGrandVal) UI.receiptGrandVal.textContent = `₹${grandTotal.toFixed(2)}`;
  if (UI.receiptWordsText) UI.receiptWordsText.textContent = numberToWordsINR(grandTotal);
}

function closeBillModal() {
  if (UI.billSheet) UI.billSheet.classList.remove('active');
}

function printBill() {
  window.print();
}

function copyBillText() {
  if (State.cart.length === 0) return;

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });

  let subtotal = 0;
  let itemsText = State.cart.map((item, idx) => {
    const lineTotal = item.price * item.quantity;
    subtotal += lineTotal;
    const variant = item.variantName ? ` (${item.variantName})` : '';
    return `${idx + 1}. ${item.name}${variant}\n   Qty: ${item.quantity} x ₹${item.price} = ₹${lineTotal}`;
  }).join('\n');

  const cgst = subtotal * 0.025;
  const sgst = subtotal * 0.025;
  const totalGst = cgst + sgst;
  const grandTotal = Math.round(subtotal + totalGst);

  const receiptSummary = 
`═════════════════════════════════════
         the KŌI — Asian Café
      Heritage French Quarter, Puducherry
      GSTIN: 33AAACK4821M1Z4
═════════════════════════════════════
Bill No: ${State.currentInvoiceNo || 'KOI-2026'}
Date: ${dateStr}  ${timeStr}
─────────────────────────────────────
ITEMS ORDERED:
${itemsText}
─────────────────────────────────────
Items Subtotal:        ₹${subtotal.toFixed(2)}
CGST (2.50%):          ₹${cgst.toFixed(2)}
SGST (2.50%):          ₹${sgst.toFixed(2)}
Total GST (5.00%):     ₹${totalGst.toFixed(2)}
─────────────────────────────────────
NET PAYABLE AMOUNT:    ₹${grandTotal.toFixed(2)}
(${numberToWordsINR(grandTotal)})
═════════════════════════════════════`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(receiptSummary)
      .then(() => showToast('Bill summary copied to clipboard!'))
      .catch(() => showToast('Summary ready to copy'));
  } else {
    showToast('Summary generated');
  }
}

>>>>>>> 4bd8815 (message)
function openCheckoutModal() {
  closeCartDrawer();
  UI.checkoutSheet.classList.add('active');
}

function closeCheckoutModal() {
  UI.checkoutSheet.classList.remove('active');
}

function submitFinalOrder() {
  const name = document.getElementById('guest-name').value.trim();
  const phone = document.getElementById('guest-phone').value.trim();
  const table = document.getElementById('guest-table').value;
  const kitchenNote = document.getElementById('order-kitchen-note').value.trim();

  if (!name || !phone || !table) {
    showToast('Please complete all required fields');
    return;
  }

  const orderNum = 'KOI-' + Math.floor(1000 + Math.random() * 9000);
  const total = UI.cartGrand.textContent;

  UI.successReceipt.innerHTML = `
    <strong>Ticket:</strong> ${orderNum}<br/>
    <strong>Guest:</strong> ${name} (${phone})<br/>
    <strong>Table:</strong> ${table}<br/>
    ${kitchenNote ? `<strong>Kitchen Note:</strong> ${kitchenNote}<br/>` : ''}
<<<<<<< HEAD
    <strong>Total Payable:</strong> ${total}
=======
    <strong>Total Payable (incl 5% GST):</strong> ${total}
>>>>>>> 4bd8815 (message)
  `;

  State.cart = [];
  saveCart();
  updateCartState();
  closeCheckoutModal();
  UI.successSheet.classList.add('active');
}

function closeSuccessSheet() {
  UI.successSheet.classList.remove('active');
}

function toggleFav(dishId) {
  const idx = State.favs.indexOf(dishId);
  if (idx > -1) {
    State.favs.splice(idx, 1);
    showToast('Removed from favorites');
  } else {
    State.favs.push(dishId);
    showToast('Saved to favorites');
  }
  localStorage.setItem('koi_m_favs', JSON.stringify(State.favs));
  renderMenuGrid();
}

function showToast(msg) {
  UI.toast.textContent = msg;
  UI.toast.classList.add('show');
  setTimeout(() => UI.toast.classList.remove('show'), 2200);
}

// 9. Event Listeners
function bindListeners() {
  UI.themeToggle.addEventListener('click', () => {
    State.theme = State.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', State.theme);
    localStorage.setItem('koi_m_theme', State.theme);
  });

  UI.searchInput.addEventListener('input', (e) => {
    State.searchQuery = e.target.value;
    UI.clearSearch.style.display = e.target.value ? 'block' : 'none';
    renderMenuGrid();
  });

  UI.clearSearch.addEventListener('click', () => {
    UI.searchInput.value = '';
    State.searchQuery = '';
    UI.clearSearch.style.display = 'none';
    renderMenuGrid();
  });

  UI.filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      UI.filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      State.activeFilter = pill.dataset.filter;
      renderMenuGrid();
    });
  });

  UI.btnReset.addEventListener('click', () => {
    State.activeCategory = 'All';
    State.activeFilter = 'all';
    State.searchQuery = '';
    UI.searchInput.value = '';
    UI.clearSearch.style.display = 'none';
    UI.filterPills.forEach(p => p.classList.remove('active'));
    document.querySelector('.pill-chip[data-filter="all"]').classList.add('active');
    renderCategories();
    renderMenuGrid();
  });

<<<<<<< HEAD
  [UI.detailSheet, UI.cartSheet, UI.checkoutSheet, UI.successSheet].forEach(sheet => {
    sheet.addEventListener('click', (e) => {
      if (e.target === sheet) sheet.classList.remove('active');
    });
=======
  [UI.detailSheet, UI.cartSheet, UI.checkoutSheet, UI.successSheet, UI.billSheet].forEach(sheet => {
    if (sheet) {
      sheet.addEventListener('click', (e) => {
        if (e.target === sheet) sheet.classList.remove('active');
      });
    }
>>>>>>> 4bd8815 (message)
  });
}