// data/products.ts

export interface ProductFormat {
  title: string;
  description: string;
  image: string;
}

export interface SplitSection {
  title: string;
  description: string;
  specs: string[];
  extraParagraphs?: string[];
  image: string;
  reverse?: boolean; // If true, image goes on the right
}

export interface ProductDetail {
  image: string;
  description: string;
  quickSpecs?: string[];
  inlineParagraph?: string;
  materialsTitle?: string;
  materialsDescription?: string;
  materialsTable?: string[];
  bottomSections?: { title: string; content: string }[];
  formatGrid?: ProductFormat[]; // For the Pouches grid
  splitSections?: SplitSection[]; // For Wicket/Vacuum alternating blocks
}

export interface Product {
  id: string;
  title: string;
  shortDescription: string;
  thumbnail: string;
  detail: ProductDetail;
}

export const products: Product[] = [
  {
    id: 'roll-stock',
    title: 'Roll Stock',
    shortDescription: 'Optimised for high-speed HFFS/VFFS lines',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300',
    detail: {
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      description: 'Engineered for high-speed form-fill-seal systems, our single and multi-layer roll stock is designed for seamless integration across HFFS, VFFS, and pouch-making equipment. It delivers consistent performance across varying web widths, repeats, and machine configurations.',
      quickSpecs: ['2–4 ply laminates', 'Single & multi-track', 'Wide web widths', 'Custom repeat lengths'],
      inlineParagraph: 'Compatible with horizontal and vertical FFS, as well as horizontal bag and pouch-making equipment. Available in printed and unprinted laminations, with surface and reverse printing options.',
      materialsTitle: 'Materials:',
      materialsDescription: 'Engineered for high-speed form-fill-seal systems, our single and multi-layer roll stock is designed for seamless integration across HFFS, VFFS, and pouch-making equipment. It delivers consistent performance across varying web widths, repeats, and machine configurations.',
      materialsTable: ['PET', 'BOPP', 'PE', 'Nylon', 'Foil'],
      bottomSections: [
        { title: 'Applications & Formats :', content: 'Compatible with horizontal and vertical FFS, as well as horizontal bag and pouch-making equipment. Available in printed and unprinted laminations, with surface and reverse printing options.' },
        { title: 'Used for:', content: 'Flow wrap, Pillow packs, Lidding, Thermoforming, Stand-up pouches.' },
        { title: 'Customisation Options :', content: 'Includes coatings, perforation, slitting into smaller rolls, and zipper integration.' }
      ]
    }
  },
  {
    id: 'pouches',
    title: 'Pouches',
    shortDescription: 'Consumer-ready laminated packaging formats',
    thumbnail: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400&h=300',
    detail: {
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800',
      description: 'Laminated pouches designed for high shelf impact, structural performance, and product compatibility across food and non-food applications. Suitable for solids, liquids, powders, and granulates.',
      quickSpecs: ['Multi-layer laminates', 'Barrier layer combinations', 'Closure integration'],
      inlineParagraph: 'Available in foil, paper, polyester, and nylon structures with gloss or matte finishes.',
      formatGrid: [
        { title: 'Stand Up Pouch', description: 'Stable base with zipper and window options', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400&h=300' },
        { title: 'Spout Pouches', description: 'Integrated dispensing with tamper-evident closures', image: 'https://images.unsplash.com/photo-1626202158874-63259679139a?auto=format&fit=crop&q=80&w=400&h=300' },
        { title: 'Profile Pouches', description: 'Custom contours for differentiation and handling', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400&h=300' },
        { title: '3D Pouches', description: 'Expandable structures for higher volume and premium feel', image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&q=80&w=400&h=300' },
        { title: 'Side-Gusset Pouches', description: 'Space-efficient storage with expandable sides', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400&h=300' },
        { title: 'Reclosable Pouch', description: 'Multiple reclosure options for extended usability', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400&h=300' },
        { title: 'Flat Bottom Pouch', description: 'Box-style structure for stability and stacking', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300' }
      ]
    }
  },
  {
    id: 'barrier-films',
    title: 'Barrier Films',
    shortDescription: 'Multi-layer oxygen and moisture barrier systems',
    thumbnail: 'https://images.unsplash.com/photo-1626202158874-63259679139a?auto=format&fit=crop&q=80&w=400&h=300',
    detail: {
      image: 'https://images.unsplash.com/photo-1626202158874-63259679139a?auto=format&fit=crop&q=80&w=800',
      description: 'Co-extruded multi-layer films engineered to control oxygen and moisture transmission, extending shelf life and maintaining product integrity.',
      quickSpecs: ['Up to 9-layer structures', 'EVOH and Nylon barrier systems'],
      bottomSections: [
        { title: 'Nylon Barrier Films (Edible Oil Applications)', content: 'Designed to prevent oxygen ingress and moisture penetration, reducing rancidity and maintaining product quality. High puncture resistance with flexible performance across formats.' },
        { title: 'Recyclable Nylon Films', content: 'Developed to enable recycling of multi-layer structures by integrating barrier components into compatible streams. Suitable for replacing conventional non-recyclable laminates.' },
        { title: 'EVOH High Barrier Films', content: 'Provide advanced oxygen barrier through co-extrusion technology, supporting extended shelf life across food and non-food applications. Performance parameters include controlled Oxygen Transmission Rate (OTR) and Moisture Vapour Transmission Rate (MVTR), with tailored strength, seal, and aesthetic properties.' }
      ]
    }
  },
  {
    id: 'thermoforming',
    title: 'Thermoforming Films',
    shortDescription: 'Precision forming and lidding solutions',
    thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400&h=300',
    detail: {
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
      description: 'High-barrier forming and lidding films developed for demanding food packaging applications, ensuring durability, seal integrity, and extended shelf life.',
      quickSpecs: ['Up to 9-layer films', 'High puncture resistance', 'Seal performance control'],
      bottomSections: [
        { title: 'Forming Films', content: 'Designed for applications such as bone-in meat and fresh products, reducing leaker rates and improving pack reliability.' },
        { title: 'Lidding Films', content: 'Peel-seal functionality compatible with existing perforation systems and shelf-life technologies, including recyclable formats.' },
        { title: 'Custom Barrier Films', content: 'Multi-layer structures using advanced resins to achieve down-gauging while maintaining equivalent mechanical performance. Suitable for vacuum and modified atmosphere packaging (MAP) systems.' }
      ]
    }
  },
  {
    id: 'specialty-films',
    title: 'Specialty Films',
    shortDescription: 'UHT and shrink packaging',
    thumbnail: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=400&h=300',
    detail: {
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800',
      description: 'Specialised film solutions for high-performance and controlled packaging environments.',
      bottomSections: [
        { title: 'UHT Films', content: 'EVOH-based structures designed for extended shelf life in dairy applications, maintaining product stability for up to 90 days under ambient conditions.' },
        { title: 'Shrink Bags', content: 'Polyolefin-based, FDA-approved materials offering high clarity, odour-free performance, and strong, airtight seals.' },
        { title: 'Shrink Films', content: 'Multi-layer, high-barrier films suitable for flow wrapping, thermoforming, and lidding, with excellent machinability and strength.' }
      ]
    }
  },
  {
    id: 'woven-bopp',
    title: 'Woven (BOPP)',
    shortDescription: 'Heavy-duty industrial',
    thumbnail: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&q=80&w=400&h=300',
    detail: {
      image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&q=80&w=800',
      description: 'BOPP laminated woven bags engineered for high-load and bulk packaging applications, combining structural strength with high-quality printability.',
      quickSpecs: ['High tensile strength', 'Moisture resistance', 'Full-colour printing'],
      bottomSections: [
        { title: 'Applications:', content: 'Cat litter | Fertiliser | Chemicals & detergents | Building materials | Waste & refuse | Plastic resins | Rubber' }
      ]
    }
  },
  {
    id: 'vacuum-wicket',
    title: 'Vacuum & Wicket',
    shortDescription: 'Freshness and automation-ready',
    thumbnail: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400&h=300',
    detail: {
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
      description: '', // Main description not used for split layout
      splitSections: [
        {
          title: 'Wicket Bags',
          description: 'Custom wicketed polyethylene bags designed for high-speed automated packaging across multiple industries.',
          specs: ['Consistent sizing', 'Stackable configuration', 'Recyclable PE structures'],
          extraParagraphs: [
            'Suitable for bakery, fresh produce, frozen foods, personal care, and other applications.',
            'Sustainable options include downgauged materials, recycled content, and bio-based alternatives.'
          ],
          image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
          reverse: false
        },
        {
          title: 'Vacuum Bags & Pouches',
          description: 'Multi-layer co-extruded vacuum packaging solutions designed to extend shelf life by eliminating oxygen and reducing moisture loss.',
          specs: ['7–9 layer structures', 'High barrier properties', 'Strong seal integrity'],
          extraParagraphs: [
            'Prevents bacterial growth, freezer burn, and spoilage while maintaining freshness and product quality.',
            'Suitable for meat, seafood, dairy, and other sensitive products.'
          ],
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
          reverse: true
        }
      ]
    }
  }
];