export interface Destination {
  name: string;
  properties: string;
  img: string;
  description: string;
  highlights: string[];
  weather: string;
  tag: string;
}

export interface Gem {
  title: string;
  desc: string;
  price: string;
  rating: string;
  img: string;
  duration: string;
  groupSize: string;
  includes: string[];
  details: string;
}
export const destinations = [
  {
    name: "Siem Reap",
    properties: "1,240",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFumuGmkcuBH3QtwiMPtpfqRmcO_HfWPbPZNmQpQXXguTOtOp0n6tzpVlIKVomfqMpyuYGxe1U-LxIZPc4MaYY4AVIM0SDJjxChquuiWm9SbWjkLQpPrdc15wFIGmHnt3EV_mP4jTt-SMwDf6eEAns-NpsCqkSq44zQAEudEHXMS4eSu9xbPfQchdA-C5xnv6zN5mC3zyNr7YQosm6ZrcHtiUiSLCxLnt8Mzh5E7--F2jT8LhX6ppS_SYmcViMU-SlB_UvfmKTJVgd",
    description: "Home to the magnificent Angkor Wat temple complex, Siem Reap blends ancient wonders with a vibrant modern scene. Wander through night markets, enjoy riverside dining, and explore centuries of Khmer history.",
    highlights: ["Angkor Wat", "Pub Street", "Tonlé Sap Lake", "Angkor Thom"],
    weather: "26–34°C • Best Nov–Mar",
    tag: "Most Popular",
  },
  {
    name: "Phnom Penh",
    properties: "850",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQiLsuffMwL-TJPI2cppyou4T-VFqKFG6YrjWxaFkBBpyBizn19DphzoiH2-67hLcgObs9bYckENUHN5sk2rT158p-19oAmvT__aZoUc8Dhlupvf1zJ8cYLj8oDNw-sJN-Q1Urfr4lIi7YQcryU_ybwMuwI6nBSIrMeVWf677yWxXqA3V8OgjsdsowId55HqBunNDzYUhrCVTGYoITXWFyX5wosLpF03DyzqbF5XwBmeDP4D0L6PnPK-wxYKCXKb1MidUBBtM3Sx9V",
    description: "Cambodia's bustling capital sits at the confluence of the Mekong and Tonlé Sap rivers. From the glittering Royal Palace to the sobering history of the Killing Fields, Phnom Penh offers a deep and compelling experience.",
    highlights: ["Royal Palace", "Wat Phnom", "Russian Market", "Killing Fields"],
    weather: "25–35°C • Best Nov–Feb",
    tag: "Capital City",
  },
  {
    name: "Sihanoukville",
    properties: "420",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmzAnkgMKhEDPnpCUqIwkwV-8EOOBXvFbcIqnKiymzcStktNKfS9dJ7PzjIZguip3aEYLytPX89_Im9erzm1UIuyOeL48THYJ7u8wVb-8pF2PHo_ls2YwtxeJMqyGcTu9vnXGqmPT_lUIB-JlVs4lQsC8OSykQCxdaQtnT-xL5gPDfvemricmFRvXQ9WrDLdaHrsxG2J8eMTMoC782LjasWEqrb9KITzYJgmHlPZ8aA9uH6L1__SSBvI5AtBFOWO_p9ctRAFXfnkZU",
    description: "A gateway to Cambodia's tropical islands, Sihanoukville is the jumping-off point for Koh Rong and Koh Rong Sanloem. Enjoy white sandy beaches, crystal-clear waters, and laid-back island vibes.",
    highlights: ["Koh Rong Island", "Otres Beach", "Koh Rong Sanloem", "Snorkeling & Diving"],
    weather: "24–32°C • Best Nov–Apr",
    tag: "Beach & Islands",
  },
  {
    name: "Kampot",
    properties: "310",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADlsE4R2XrQPtD2547Zlu4eRSnjCpkAjf83WdVDDbDe3uqHCa46kwwVKqGObe60Gc1FFy2rvX9l4Mcifm8QG92iruJ3yrC4Iy2Sm7Br8acmYvkTm3K7AHkNTsUNlCBWwvnbVt9U5mjLRCQkYRg54Kl5Qmz-FQU0lrDU2kssG65e3lBx9jKraQz1u7olw2FuXnde2C3sT3_VEDn6sbpJTApsemLlETIQN2dSiC0bc0xwNkaxNVNP7x8W6tfZIfRYSc129XgJg2TF4NY",
    description: "A charming riverside town famous for its world-renowned Kampot pepper. Cycle through French colonial streets, kayak on the river, and watch stunning sunsets over Bokor Mountain.",
    highlights: ["Bokor Mountain", "Pepper Farms", "River Kayaking", "Colonial Old Town"],
    weather: "23–31°C • Best Oct–Mar",
    tag: "Hidden Gem",
  },
];

export const gems = [
  {
    title: "Tonlé Sap Floating Village",
    desc: "Experience the unique lifestyle of communities living on the water.",
    price: "$25 / person",
    rating: "4.9",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDit9ZW6mSU1AxuNekaPde6sR0EWQH-3YcQIvzn-31LJ_ya-CYMaugBGEXI34guqzYjeuJQY-YQitH2EWqHojBKcdil9FpE_u6a188RBHLisyslOWftAq8DY3xJjvyEu9PPwS6N0DMbWumn8HqI3Yourk62wD4tDYDudgNwt2kYx5r7rPJ_s0ehSy0QV_L6vllxy2iMGJXGZFlOJ2AEC3AHoheflrAJiQoW40Ltdm_akD7vycI17uB8VI_G1ln9DlNQBiR5ttb1_GCK",
    duration: "3–4 hours",
    groupSize: "Up to 12 people",
    includes: ["Boat ride", "Local guide", "Fish farm visit", "Sunset view"],
    details: "Glide through the vast Tonlé Sap lake and discover the daily lives of thousands of families who live entirely on water. Your local guide will take you through floating schools, markets, and fish farms, giving you an intimate glimpse of a lifestyle unlike anywhere else in the world.",
  },
  {
    title: "Mondulkiri Jungle Trek",
    desc: "Connect with wildlife and visit ethical elephant sanctuaries.",
    price: "$45 / person",
    rating: "4.8",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcse-8FsVtoYcjcL40hKFUXtDHBlZs4s5MBj9w8B2k27BURhf6j5upUbsECM-GIPzKD7jnxWb4oglAhe7HZsXSTiX_UYqGA63fDkJoeThQOJkNHvxdC0Vw-LD0MbhNbyTaDds8WkQYLlbeZ_c1Kqnc0YmXgnFmkJ4lNRKurgJpzPr22XdOhWtkU3WKlWZafhrP-EWMgjhcJfJQPTRX51Gm5P_w3MHEttrEF9fFZyitEyGPNYtEgosWHEfjGMFtOd2g-ipxL0d6xcwF",
    duration: "Full day (8 hours)",
    groupSize: "Up to 8 people",
    includes: ["Trekking guide", "Elephant sanctuary visit", "Lunch", "Waterfall swim"],
    details: "Trek deep into the lush highlands of Mondulkiri, Cambodia's most remote and beautiful province. Walk among ancient trees, swim beneath hidden waterfalls, and spend meaningful time with rescued elephants at an ethical sanctuary that prioritizes animal welfare above all else.",
  },
  {
    title: "Phnom Penh Street Food Tour",
    desc: "Taste authentic flavors from the best night markets with a local expert.",
    price: "$15 / person",
    rating: "5.0",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIGcvau4q90nUzLLSBC3ZRQ__RjaoHXR8DHDBqS1ixJ5vNC8p4lQhTbrs3xSCfYF5DxVfwYKZot7bjtEnpqH4OmOR4-trE09Ulruq2CUd9biiWZRQ9gxra-bUP6IEQGlTBmHMgkNfRJFnlTIzScYJIKQfTP4_V3cda7wEHKM-XwUsbLKbKD86AqfINE-WfavlVEEQxkJFVet8m9cD3pYWG8CPVCyZMa20_mLl9VaLEJwZOnYRqdYU7UFheqVjmReloNBOL0gtvDDzd",
    duration: "2–3 hours",
    groupSize: "Up to 15 people",
    includes: ["8+ tastings", "Local guide", "Night market visit", "Recipe card"],
    details: "Join a passionate local foodie as you zigzag through Phnom Penh's most vibrant night markets and hidden street stalls. Sample over 8 dishes — from num banh chok noodles and lok lak beef to fresh sugar cane juice and exotic fried snacks. No tourist menus, just real food and real stories.",
  },
];