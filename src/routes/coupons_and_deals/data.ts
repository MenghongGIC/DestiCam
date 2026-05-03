// ===== TYPES =====
export type HotelItem = {
  id: number;
  name: string;
  location: string;
  description: string;
  price: string;
  nights: string;
  image: string;
  detailPrice: string;
  discount: string;
  address: string;
  oldPrice: string;
};

export type TransportItem = {
  id: number;
  title: string;
  company: string;
  description: string;
  price: string;
  nights: string;
  image: string;
  discountPercent: number;
  location: string;
};

export type ActivityItem = {
  id: number;
  title: string;
  company: string;
  description: string;
  price: string;
  nights: string;
  image: string;
  discountPercent: number;
  location: string;
};

export type SeasonalItem = {
  id: number;
  title: string;
  company: string;
  description: string;
  price: string;
  nights: string;
  image: string;
  discountPercent: number;
  location: string;
};

export type DealItem = HotelItem | TransportItem | ActivityItem | SeasonalItem;
export type DealType = "hotel" | "transport" | "activity" | "seasonal";

// ===== HOTELS DATA =====
export const hotels: HotelItem[] = [
  {
    id: 1,
    name: "Koulen Central Hotel",
    location: "Phnom Penh, Cambodia",
    description: "Located in Siem Reap, 1.1 km from King's Road Angkor, The Jungle provides accommodation with a garden, free private parking, a terrace and a restaurant.",
    price: "KHR 80,000",
    nights: "1 night, 2 adults",
    image: "images/photo1.jpg",
    detailPrice: "KHR 56,000",
    discount: "30% off",
    address: "92 Rukhak Vithei Daun Penh, Phnom Penh",
    oldPrice: "KHR 80,000",
  },
  {
    id: 2,
    name: "Sokha Angkor Resort",
    location: "Siem Reap, Cambodia",
    description: "Sokha Angkor Resort is located at National Road No 6, Kruos Village, Svay Dangkum Commune, Siem Reap. This luxury resort is just 5 minutes from Angkor Wat temple complex.",
    price: "KHR 70,000",
    nights: "1 night, 2 adults",
    image: "images/photo3.jpg",
    detailPrice: "KHR 49,000",
    discount: "30% off",
    address: "National Road No 6, Kruos Village, Siem Reap",
    oldPrice: "KHR 70,000",
  },
  {
    id: 3,
    name: "Independence Hotel",
    location: "Sihanoukville, Cambodia",
    description: "Independence Hotel is located on Independence Beach, Street 2 Thnou, Sangkat 4, Sihanoukville. This beachfront resort offers stunning ocean views from all rooms.",
    price: "KHR 55,000",
    nights: "1 night, 2 adults",
    image: "images/photo2.jpg",
    detailPrice: "KHR 38,500",
    discount: "30% off",
    address: "Independence Beach, Street 2 Thnou, Sihanoukville",
    oldPrice: "KHR 38,000",
  },
  {
    id: 4,
    name: "Shinta Mani Shack",
    location: "Siem Reap, Cambodia",
    description: "Shinta Mani Shack is located at Oum Khun Street, 14th Street, Siem Reap. This boutique hotel is known for its contemporary Khmer design and lush garden courtyard.",
    price: "KHR 40,000",
    nights: "1 night, 2 adults",
    image: "images/photo4.jpg",
    detailPrice: "KHR 28,000",
    discount: "30% off",
    address: "Oum Khun Street, 14th Street, Siem Reap",
    oldPrice: "KHR 40,000",
  },
  {
    id: 5,
    name: "Tara Angkor Hotel",
    location: "Siem Reap, Cambodia",
    description: "Tara Angkor Hotel is located at National Road No 6, Kaksekam Village, Sra Nge Commune, Siem Reap. This comfortable 4-star hotel is just 8 minutes from Angkor Wat.",
    price: "KHR 89,000",
    nights: "1 night, 2 adults",
    image: "images/photo5.jpg",
    detailPrice: "KHR 62,000",
    discount: "30% off",
    address: "National Road No 6, Kaksekam Village, Siem Reap",
    oldPrice: "KHR 89,000",
  },
  {
    id: 6,
    name: "Nature Lodge",
    location: "Mondulkiri, Cambodia",
    description: "Nature Lodge is located on the hill overlooking Sen Monorom, Mondulkiri Province. This eco-friendly lodge offers 12 traditional wooden bungalows surrounded by jungle.",
    price: "KHR 30,000",
    nights: "1 night, 2 adults",
    image: "images/photo6.jpg",
    detailPrice: "KHR 21,000",
    discount: "30% off",
    address: "Hilltop near Sen Monorom, Mondulkiri Province",
    oldPrice: "KHR 30,000",
  },
];

// ===== TRANSPORT DATA =====
export const transports: TransportItem[] = [
  {
    id: 1,
    title: "Giant Ibis Transport",
    company: "Giant Ibis Transport Co., Ltd.",
    description: "Giant Ibis operates luxury bus services from Phnom Penh to Siem Reap and Sihanoukville with reclining seats, free WiFi, onboard snacks, and air conditioning.",
    price: "KHR 25,000",
    nights: "1 way ticket",
    image: "images/photo7.jpg",
    discountPercent: 20,
    location: "Olympic Stadium, Phnom Penh",
  },
  {
    id: 2,
    title: "Speed Ferry Service",
    company: "GTVC Speed Ferry",
    description: "GTVC Speed Ferry operates daily ferry services from Sihanoukville Autonomous Port to Koh Rong and Koh Rong Samloem islands. Journey takes approximately 45 minutes.",
    price: "KHR 20,000",
    nights: "Round trip",
    image: "images/photo8.jpg",
    discountPercent: 50,
    location: "Sihanoukville Autonomous Port",
  },
  {
    id: 3,
    title: "Mekong Express Bus",
    company: "Mekong Express",
    description: "Mekong Express provides VIP bus services from Phnom Penh to Siem Reap with air conditioning, reclining seats, free WiFi, and snacks.",
    price: "KHR 20,000",
    nights: "1 way ticket",
    image: "images/photo9.jpg",
    discountPercent: 15,
    location: "Vattanac Capital, Phnom Penh",
  },
  {
    id: 4,
    title: "Virak Buntham Express",
    company: "Virak Buntham Express",
    description: "Virak Buntham operates overnight bus services from Phnom Penh to Sihanoukville with sleeping berths, air conditioning, blankets, and pillows.",
    price: "KHR 32,000",
    nights: "1 way ticket",
    image: "images/photo10.jpg",
    discountPercent: 20,
    location: "Central Market, Phnom Penh",
  },
  {
    id: 5,
    title: "Cambodia Taxi Service",
    company: "Cambodia Taxi",
    description: "Private taxi service from Phnom Penh International Airport to any hotel in Phnom Penh city center. Air-conditioned vehicle, English-speaking driver.",
    price: "KHR 23,000",
    nights: "One way",
    image: "images/photo11.jpg",
    discountPercent: 40,
    location: "Phnom Penh Airport",
  },
  {
    id: 6,
    title: "Battambang Bamboo Train",
    company: "Bamboo Train Battambang",
    description: "Experience riding a bamboo cart along old railway tracks through beautiful countryside, rice fields, and small villages in Battambang.",
    price: "KHR 40,000",
    nights: "45 minutes ride",
    image: "images/photo12.jpg",
    discountPercent: 20,
    location: "Wat Odom, Battambang",
  },
];

// ===== ACTIVITIES DATA =====
export const activities: ActivityItem[] = [
  {
    id: 1,
    title: "Angkor Wat Tour",
    company: "Angkor Guide Travel",
    description: "Full-day private guided tour of Angkor Archaeological Park starting at 4:30 AM to view sunrise over Angkor Wat. Includes visits to Angkor Wat, Bayon Temple, Ta Prohm.",
    price: "KHR 18,000",
    nights: "8 hours tour",
    image: "images/photo13.jpg",
    discountPercent: 33,
    location: "Angkor Wat, Siem Reap",
  },
  {
    id: 2,
    title: "Silver Eco-Adventure Tour",
    company: "Angkor Zipline",
    description: "Situated in the Rohal village within the lush rainforest of the Angkor Archaeological Park.",
    price: "KHR 20,000",
    nights: "2 hours adventure",
    image: "images/photo14.jpg",
    discountPercent: 25,
    location: "Phnom Penh City Center",
  },
  {
    id: 3,
    title: "Killing Fields & S21 Tour",
    company: "Cambodia Tours",
    description: "Half-day historical tour visiting Tuol Sleng Genocide Museum (S21) and Cheoung Ek Killing Fields. Includes audio guide and transportation.",
    price: "KHR 15,000",
    nights: "4 hours tour",
    image: "images/photo15.jpg",
    discountPercent: 30,
    location: "Phnom Penh",
  },
];

// ===== SEASONAL DEALS =====
export const seasonal: SeasonalItem[] = [
  {
    id: 1,
    title: "Cambodia Explorer",
    company: "TruTravels",
    description: "Premier 11-day group adventure tour blending cultural immersion, historical education, and social experiences across Cambodia with up to 30% off.",
    price: "KHR 280,000",
    nights: "11 days tour",
    image: "images/photo16.jpg",
    discountPercent: 30,
    location: "All Cambodia",
  },
  {
    id: 2,
    title: "Seasons for Motorcycling",
    company: "Vietnam Motorbike Tour",
    description: "Special promotion for dry season (May to October) offering 20% discount on hotel stays plus complimentary airport pickup service. A guide to the best riding conditions in Cambodia.",
    price: "KHR 30,000",
    nights: "7 days tour",
    image: "images/photo17.jpg",
    discountPercent: 20,
    location: "Phnom Penh, Siem Reap",
  },
];
