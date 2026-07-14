export const GAZETTE = '12th September, 2024 S.O. 3922(E)';

export const PRODUCTS = [
  { 
    brand: 'Swara', 
    specification: 'Ascophyllum nodosum 15% (Liquid)', 
    category: 'Sea Weed Extract',
    crops: ['Green gram'], 
    dosage: ['Two foliar applications at 1500 ml/ha.'], 
    gazette: '12th September, 2024 S.O. 3922(E)', 
    composition: [
      '(i)  Alginic Acid per cent. by weight, minimum 1.5',
      '(ii)  Mannitol per cent. by weight, minimum 1.0',
      '(iii)  pH (10 % aqueous solution) 4.7 +   1.0',
      '(iv)  Specific gravity 1.0 – 1.1',
      '(v)  Total organic carbon per cent. by weight, minimum 5'
    ] 
  },
  {
    brand: 'Go Green Seaweed',
    specification: 'Sargassum tenerrimum 2%( Granular)',
    category: 'Seaweed Extract',
    crops: ['Paddy', 'Tomato'],
    dosage: [
      '(i) Paddy One soil application at 12.5 kg/ha',
      '(ii) Tomato One soil application at 12.5 kg/ha'
    ],
    gazette: '16th February, 2026 S.O. 876(E).',
    composition: [
      '(i) Seaweed (Sargassum tenerrimum) extract per cent. by weight, minimum 2.0',
      '(ii) Phytase as adjuvant per cent. by weight, maximum 1.0',
      '(iii) Bentonite per cent. by weight, maximum 87',
      '(iv) Moisture per cent. by weight, maximum 10',
      '(v) Total (per cent.) 100'
    ]
  },
  {
    brand: 'Asali Sona',
    specification: 'Potassium Humate 49% (Powder)',
    category: 'Humic Acid and Fulvic Acid and their derivatives',
    crops: ['Paddy'],
    dosage: ['One soil application at 1 kg/ha'],
    gazette: '12th September, 2024 S.O. 3922(E).',
    composition: [
      '(i)  Humic Acid per cent. by weight minimum 21',
      '(ii)     pH (1 % aqueous solution) 6.0-8.0'
    ]
  },
  {
    brand: 'Humic 20',
    specification: 'Humates and Fulvates - 22% (Liquid)',
    category: 'Humic Acid and Fulvic Acid and their derivatives',
    crops: ['Ground nut'],
    dosage: ['Two soil applications at 1.25 l/ha.'],
    gazette: '12th September, 2024 S.O. 3922(E)',
    composition: [
      '(i) Total water soluble humates and fulvates per cent. weight by volume, minimum 22',
      '(ii) pH (1:5 aqueous solution) 9.0 (min)',
      '(iii) Specific gravity 1.05'
    ]
  },
  {
    brand: 'Go Green/Atharv',
    specification: 'Humates (12.5%) (Liquid)',
    category: 'Humic and Fulvic acid and their derivatives',
    crops: ['Green gram'],
    dosage: ['Two soil applications at 5 litre/ha'],
    gazette: '16th February, 2026 S.O. 876(E)',
    composition: [
      '(i) Humic acid (Source: American Leonardite) per cent. by weight, minimum 10.0',
      '(ii) Fulvic acid (Source: American Leonardite) per cent. by weight, minimum 2.5',
      '(iii) Tetrapotassium pyrophosphate per cent. by weight, minimum 0.9',
      '(iv) Potassium hydroxide 50% solution per cent. by weight, minimum 10.0',
      '(v) Alcoxylated fatty acid ester on vegetable base per cent. by weight, minimum 0.7',
      '(vi) Water per cent. by weight QS',
      '(vii) Total (per cent.) 100'
    ]
  },
  {
    brand: 'G Humic Power',
    specification: 'Humic Acid 1.5% (Granules)',
    category: 'Humic and Fulvic acid and their derivatives',
    crops: ['Chilli'],
    dosage: ['Two soil applications at 30 kg/ha'],
    gazette: '16th February, 2026 S.O. 876(E)',
    composition: [
      '(i) Humic acid (as Potassium humate obtained from Leonardite mineral source) per cent. by weight, minimum 1.5',
      '(ii) Bentonite per cent. by weight, maximum  98.5',
      '(iii) Total (per cent.) 100'
    ]
  },
  {
    brand: 'Giagro Granules',
    specification: 'Mixture of Humic Acid, Amino Acid, Vitamins and Bio-chemicals (powder)',
    category: 'Mixed formulation of Biostimulants',
    crops: ['Okra'],
    dosage: ['Two soil applications at 250g/ha.'],
    gazette: '16th February, 2026 S.O. 876(E)',
    composition: [
      '(i) Potassium humate per cent. by weight, minimum 39',
      '(ii) Amino acid per cent. by weight, minimum 10',
      '(iii) Vitamins per cent. by weight, minimum 22',
      '(iv) Sugar Alcohols (myo inositol) per cent. by weight, maximum 4',
      '(v) Modified starch per cent. by weight, maximum 25',
      '(vi) Total (per cent.) 100'
    ]
  },
  {
    brand: 'Giagro/Viagro/Royal/Veggidrip',
    specification: 'Kappaphycus alvarezii 24% (Liquid)',
    category: 'Sea Weed Extract',
    crops: ['Cucumber'],
    dosage: ['One foliar application at 2 ml/l'],
    gazette: '12th September, 2024 S.O. 3922(E).',
    composition: [
      '(i)  Total carbohydrate per cent. by weight, minimum 7.5',
      '(ii)  D-Galactose – 4-O- Sulphate per cent. by weight, minimum 6.0',
      '(iii)  pH (minimum) (1:2 aqueous solution) 3.0 – 5.0'
    ]
  }
];

export const SLUG_TO_BRAND = {
  'SWARA': 'Swara',
  'GO GREEN SEAWEED': 'Go Green Seaweed',
  'ASALI SONA': 'Asali Sona',
  'HUMIC 20': 'Humic 20',
  'GO GREEN/ATHARV': 'Go Green/Atharv',
  'GO GREEN ATHARV': 'Go Green/Atharv',
  'G HUMIC POWER': 'G Humic Power',
  'GIAGRO GRANULES': 'Giagro Granules',
  'GIAGRO/VIAGRO/ROYAL/VEGGIDRIP': 'Giagro/Viagro/Royal/Veggidrip',
  'GIAGRO VIAGRO ROYAL VEGGIDRIP': 'Giagro/Viagro/Royal/Veggidrip'
};

export function findProductBySlug(slug) {
  if (!slug) return PRODUCTS[0];
  
  const decoded = decodeURIComponent(slug).toUpperCase();
  const normalized = decoded.replace(/-/g, ' ').replace(/\+/g, ' ').trim();
  
  // Try direct match in SLUG_TO_BRAND
  if (SLUG_TO_BRAND[normalized]) return findProductByBrand(SLUG_TO_BRAND[normalized]);
  if (SLUG_TO_BRAND[decoded]) return findProductByBrand(SLUG_TO_BRAND[decoded]);

  // Try matching against brand names directly
  const found = PRODUCTS.find(p => 
    p.brand.toUpperCase() === normalized || 
    p.brand.toUpperCase().replace(/\s+/g, '') === normalized.replace(/\s+/g, '')
  );
  
  return found || PRODUCTS[0];
}

export function findProductByBrand(brand) {
  return PRODUCTS.find(p => p.brand.toUpperCase() === brand.toUpperCase()) || PRODUCTS[0];
}
