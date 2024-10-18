// nutritionMap.js

const nutritionMap = new Map([
    ['Gold Potatoes', {
        calories: 73,
        sugar: 0.65,
        protein: 1.81,
        fat: 0.26,
        fiber: 13.8,
        sodium: 2,
        potassium: 446,
        calcium: 6,
        iron: 0.37,
        vitamin_a: 0,
        vitamin_b1: 0.051,
        vitamin_b2: 0,
        vitamin_b3: 1.58,
        vitamin_b5: 0,
        vitamin_b6: 0.145,
        vitamin_b7: 0,
        vitamin_b9: 0,
        vitamin_b12: 0,
        vitamin_c: 23.3,
        vitamin_d: 0,
        vitamin_e: 0,
        vitamin_k: 0.8,
    }],
    ['Red Potatoes', {
        calories: 76,
        sugar: 0.66,
        protein: 2.06,
        fat: 0.25,
        fiber: 13.8,
        sodium: 3,
        potassium: 472,
        calcium: 5,
        iron: 0.39,
        vitamin_a: 0,
        vitamin_b1: 0.066,
        vitamin_b2: 0,
        vitamin_b3: 1.48,
        vitamin_b5: 0,
        vitamin_b6: 0.144,
        vitamin_b7: 0,
        vitamin_b9: 0,
        vitamin_b12: 0,
        vitamin_c: 21.3,
        vitamin_d: 0,
        vitamin_e: 0,
        vitamin_k: 1.1,
    }],
    ['Roma Tomato', {
        calories: 22,
        sugar: 3.84,
        protein: 0.7,
        fat: 0.42,
        fiber: 1,
        sodium: 2.5,
        potassium: 193,
        calcium: 10,
        iron: 0.1,
        vitamin_a: 24,
        vitamin_b1: 0.056,
        vitamin_b2: 0,
        vitamin_b3: 0.533,
        vitamin_b5: 0,
        vitamin_b6: 0.079,
        vitamin_b7: 0.469,
        vitamin_b9: 10,
        vitamin_b12: 0,
        vitamin_c: 17.8,
        vitamin_d: 0,
        vitamin_e: 0,
        vitamin_k: 0,
    }],
    ['Yellow Onion', {
        calories: 38,
        sugar: 5.82,
        protein: 0.83,
        fat: 0.05,
        fiber: 1.9,
        sodium: 1,
        potassium: 182,
        calcium: 15,
        iron: 0.28,
        vitamin_a: 0,
        vitamin_b1: 0.144,
        vitamin_b2: 0,
        vitamin_b3: 0,
        vitamin_b5: 0,
        vitamin_b6: 0.144,
        vitamin_b7: 0.004,
        vitamin_b9: 0,
        vitamin_b12: 0,
        vitamin_c: 8.2,
        vitamin_d: 0,
        vitamin_e: 0,
        vitamin_k: 0,
    }],
    ['Red Onion', {
        calories: 44,
        sugar: 5.76,
        protein: 0.94,
        fat: 0.1,
        fiber: 2.2,
        sodium: 1,
        potassium: 197,
        calcium: 17,
        iron: 0.24,
        vitamin_a: 0,
        vitamin_b1: 0.119,
        vitamin_b2: 0,
        vitamin_b3: 0,
        vitamin_b5: 0,
        vitamin_b6: 0.119,
        vitamin_b7: 0,
        vitamin_b9: 0,
        vitamin_b12: 0,
        vitamin_c: 8.1,
        vitamin_d: 0,
        vitamin_e: 0,
        vitamin_k: 0,
    }],
    ['Beef', {
        calories: 310,
        sugar: 1.26,
        protein: 11.7,
        fat: 28,
        fiber: 0,
        sodium: 872,
        potassium: 343,
        calcium: 15,
        iron: 1.14,
        vitamin_a: 3,
        vitamin_b1: 0.033,
        vitamin_b2: 0.154,
        vitamin_b3: 2.25,
        vitamin_b5: 0.263,
        vitamin_b6: 0.13,
        vitamin_b7: 0,
        vitamin_b9: 0,
        vitamin_b12: 0.97,
        vitamin_c: 0,
        vitamin_d: 0,
        vitamin_e: 0.51,
        vitamin_k: 0,
    }],
    ['Egg', {
        calories: 52,
        sugar: 2.36,        // Carbohydrate by difference
        protein: 10.7,
        fat: 0.08,          // Total lipid (fat)
        fiber: 0,           // No data for fiber
        sodium: 0,          // Sodium not reported
        potassium: 0,       // Potassium not reported
        calcium: 0,         // Calcium not reported
        iron: 0,            // Iron not reported
        vitamin_a: 0,       // Vitamin A not reported
        vitamin_b1: 0.065,  // Thiamin
        vitamin_b2: 0.391,  // Riboflavin
        vitamin_b3: 1.43,   // Niacin
        vitamin_b5: 0,      // Not reported
        vitamin_b6: 0.058,  // Vitamin B6
        vitamin_b7: 0,      // Biotin not reported
        vitamin_b9: 0,      // Folate not reported
        vitamin_b12: 0,     // Not reported
        vitamin_c: 0,       // Not reported
        vitamin_d: 0,       // Not reported
        vitamin_e: 0,       // Not reported
        vitamin_k: 0        // Not reported
    }],
    ['Rice', {
        calories: 359,
        sugar: 80.3,        // Carbohydrate by difference
        protein: 7.04,
        fat: 1.03,
        fiber: 0.1,         // Total dietary fiber
        sodium: 0,          // Sodium
        potassium: 82,      // Potassium
        calcium: 4,         // Calcium
        iron: 0.14,         // Iron
        vitamin_a: 0,       // Not reported
        vitamin_b1: 0.065,  // Thiamin
        vitamin_b2: 0.08,   // Riboflavin
        vitamin_b3: 1.43,   // Niacin
        vitamin_b5: 0,      // Not reported
        vitamin_b6: 0.058,  // Vitamin B6
        vitamin_b7: 0,      // Not reported
        vitamin_b9: 0,      // Not reported
        vitamin_b12: 0,     // Not reported
        vitamin_c: 0,       // Not reported
        vitamin_d: 0,       // Not reported
        vitamin_e: 0,       // Not reported
        vitamin_k: 0        // Not reported
    }],
    ['Carrot', {
        calories: 48,
        sugar: 10.3,        // Carbohydrate by difference
        protein: 0.94,
        fat: 0.35,          // Total lipid (fat)
        fiber: 3.1,         // Total dietary fiber
        sodium: 87,         // Sodium
        potassium: 280,     // Potassium
        calcium: 30,        // Calcium
        iron: 0.15,         // Iron
        vitamin_a: 0,       // Not reported
        vitamin_b1: 0.065,  // Thiamin
        vitamin_b2: 0.095,  // Riboflavin
        vitamin_b3: 1.41,   // Niacin
        vitamin_b5: 0,      // Not reported
        vitamin_b6: 0.146,  // Vitamin B6
        vitamin_b7: 2.22,   // Biotin
        vitamin_b9: 37,     // Folate (µg)
        vitamin_b12: 0,     // Not reported
        vitamin_c: 0,       // Not reported
        vitamin_d: 0,       // Not reported
        vitamin_e: 0,       // Not reported
        vitamin_k: 0        // Not reported
    }],
    ['Broccoli', {
        calories: 39,
        sugar: 1.4,            // Total Sugars
        protein: 2.57,
        fat: 0.34,             // Total lipid (fat)
        fiber: 2.4,            // Fiber, total dietary
        sodium: 36,            // Sodium (Na)
        potassium: 303,        // Potassium (K)
        calcium: 46,           // Calcium (Ca)
        iron: 0.69,            // Iron (Fe)
        vitamin_a: 8,          // Vitamin A, RAE
        vitamin_b1: 0.077,     // Thiamin
        vitamin_b2: 0.114,     // Riboflavin
        vitamin_b3: 0.639,     // Niacin
        vitamin_b5: 0.61,      // Pantothenic acid
        vitamin_b6: 0.191,     // Vitamin B-6
        vitamin_b7: 0,         // Not reported
        vitamin_b9: 65,        // Folate, total (µg)
        vitamin_b12: 0,        // Not reported
        vitamin_c: 91.3,       // Vitamin C, total ascorbic acid
        vitamin_d: 0,          // Not reported
        vitamin_e: 0.15,       // Vitamin E (alpha-tocopherol)
        vitamin_k: 102         // Vitamin K (phylloquinone)
    }],
    ['Lettuce', {
        calories: 17,
        sugar: 0,              // Not reported
        protein: 0.74,
        fat: 0.07,             // Total lipid (fat)
        fiber: 0,              // Not reported
        sodium: 16,            // Sodium (Na)
        potassium: 139,        // Potassium (K)
        calcium: 14,           // Calcium (Ca)
        iron: 0.03,            // Iron (Fe)
        vitamin_a: 0,          // Not reported
        vitamin_b1: 0.056,     // Thiamin
        vitamin_b2: 0,         // Not reported
        vitamin_b3: 0.218,     // Niacin
        vitamin_b5: 0,         // Not reported
        vitamin_b6: 0.04,      // Vitamin B-6
        vitamin_b7: 0,         // Not reported
        vitamin_b9: 0,         // Not reported
        vitamin_b12: 0,        // Not reported
        vitamin_c: 0,          // Not reported
        vitamin_d: 0,          // Not reported
        vitamin_e: 0,          // Not reported
        vitamin_k: 20.5        // Vitamin K (phylloquinone)
    }],
    ['Cucumber', {
        calories: 16,
        sugar: 0,              // Not reported
        protein: 0.62,
        fat: 0.18,             // Total lipid (fat)
        fiber: 0,              // Not reported
        sodium: 2,             // Sodium (Na)
        potassium: 170,        // Potassium (K)
        calcium: 16,           // Calcium (Ca)
        iron: 0,               // Iron (Fe), below detectable level
        vitamin_a: 0,          // Not reported
        vitamin_b1: 0,         // Not reported
        vitamin_b2: 0,         // Not reported
        vitamin_b3: 0,         // Not reported
        vitamin_b5: 0,         // Not reported
        vitamin_b6: 0,         // Not reported
        vitamin_b7: 0.962,     // Biotin
        vitamin_b9: 0,         // Not reported
        vitamin_b12: 0,        // Not reported
        vitamin_c: 0,          // Not reported
        vitamin_d: 0,          // Not reported
        vitamin_e: 0,          // Not reported
        vitamin_k: 24          // Vitamin K (phylloquinone)
    }],
    ['Corn', {
        calories: 364,        // Atwater General Factors Energy
        sugar: 1.04,          // Total Sugars
        protein: 6.2,         // Protein
        fat: 1.74,            // Total lipid (fat)
        fiber: 4.3,           // Total dietary fiber
        sodium: 0,            // Sodium (Na)
        potassium: 144,       // Potassium (K)
        calcium: 0,           // Calcium (Ca)
        iron: 4.44,           // Iron (Fe)
        vitamin_a: 0,         // Not reported
        vitamin_b1: 0.662,    // Thiamin
        vitamin_b2: 0.354,    // Riboflavin
        vitamin_b3: 5.75,     // Niacin
        vitamin_b5: 0,        // Not reported
        vitamin_b6: 0.13,     // Vitamin B6
        vitamin_b7: 0,        // Not reported
        vitamin_b9: 155,      // Folate (total)
        vitamin_b12: 0,       // Not reported
        vitamin_c: 0,         // Not reported
        vitamin_d: 0,         // Not reported
        vitamin_e: 0,         // Not reported
        vitamin_k: 0,         // Not reported
    }],
    ['Salmon', {
        calories: 197,        // Atwater General Factors Energy
        sugar: 0,             // Carbohydrates by difference
        protein: 20.3,        // Protein
        fat: 13.1,            // Total lipid (fat)
        fiber: 0,             // No fiber data reported
        sodium: 49,           // Sodium (Na)
        potassium: 378,       // Potassium (K)
        calcium: 9,           // Calcium (Ca)
        iron: 0.26,           // Iron (Fe)
        vitamin_a: 2,         // Retinol (Vitamin A)
        vitamin_b1: 0,        // Not reported
        vitamin_b2: 0,        // Not reported
        vitamin_b3: 0,        // Not reported
        vitamin_b5: 0,        // Not reported
        vitamin_b6: 0,        // Not reported
        vitamin_b7: 0,        // Not reported
        vitamin_b9: 0,        // Not reported
        vitamin_b12: 5.7,     // Vitamin B12
        vitamin_c: 0,         // Not reported
        vitamin_d: 0,         // Not reported
        vitamin_e: 0,         // Not reported
        vitamin_k: 0,         // Not reported
    }],
    ['Oranges', {
        calories: 52,             // Atwater General Factors Energy
        sugar: 8.57,              // Total Sugars
        protein: 0.91,            // Protein
        fat: 0.15,                // Total lipid (fat)
        fiber: 2,                 // Total dietary fiber
        sodium: 9,                // Sodium (Na)
        potassium: 166,           // Potassium (K)
        calcium: 43,              // Calcium (Ca)
        iron: 0.33,               // Iron (Fe)
        vitamin_a: 0,             // Not reported
        vitamin_b1: 0.068,        // Thiamin
        vitamin_b2: 0.051,        // Riboflavin
        vitamin_b3: 0.425,        // Niacin
        vitamin_b5: 0.261,        // Pantothenic acid
        vitamin_b6: 0.079,        // Vitamin B6
        vitamin_b7: 0,            // Not reported
        vitamin_b9: 25,           // Folate (µg)
        vitamin_b12: 0,           // Not reported
        vitamin_c: 59.1,          // Vitamin C, total ascorbic acid
        vitamin_d: 0,             // Not reported
        vitamin_e: 0,             // Not reported
        vitamin_k: 0              // Vitamin K (phylloquinone)
    }]
]);

export default nutritionMap;
