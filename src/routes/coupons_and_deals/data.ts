export type coupon_info_type = {
  id: number;
  title: string;
  description: string;
  discount: string;
  image: string;
  code: string;
  validTill: string;
};

export type coupon_data_type = coupon_info_type[];

export const data: coupon_data_type = [
  {
    id: 1,
    title: "🏨 Angkor Paradise Escape",
    description:
      "20% off on 3+ nights at selected Siem Reap hotels, including breakfast & airport pickup.",
    discount: "-20%",
    image: "https://images.unsplash.com/photo-1589308078059-9bb7f0a91b7d?w=500&auto=format",
    code: "DESTIANGKOR20",
    validTill: "Valid until Aug 30, 2026",
  },
  {
    id: 2,
    title: "🚐 Koh Rong Speed Ferry",
    description: "Buy 1 get 1 free for round-trip ferry tickets to Koh Rong islands.",
    discount: "BOGO",
    image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=500&auto=format",
    code: "KOHRONGBOGO",
    validTill: "Limited seats - Sep 15",
  },
  {
    id: 3,
    title: "🗿 Angkor Wat Guided Tour",
    description: "$10 off any full-day private guide (English/Chinese/Khmer).",
    discount: "$10 OFF",
    image: "https://images.unsplash.com/photo-1563357989-6a2c54ce7bf7?w=500&auto=format",
    code: "GUIDE10",
    validTill: "Use by Dec 2026",
  },
  {
    id: 4,
    title: "🍜 Phnom Penh Foodie Trail",
    description: "Street food & rooftop experience. 25% discount on evening food tour.",
    discount: "-25%",
    image: "https://images.unsplash.com/photo-1528181304801-259140e1a702?w=500&auto=format",
    code: "FOODIE25",
    validTill: "Every Fri/Sat",
  },
  {
    id: 5,
    title: "🏞️ Hidden Gem Waterfall",
    description: "Discover secret waterfalls in Mondulkiri. Eco-trek + picnic.",
    discount: "15% OFF",
    image: "https://images.unsplash.com/photo-1547407139-3c921a66005d?w=500&auto=format",
    code: "HIDDENGEM15",
    validTill: "Valid for groups 2+",
  },
  {
    id: 6,
    title: "🚌 Bus Pass Cambodia",
    description:
      "20% off on intercity bus routes (Phnom Penh → Siem Reap → Sihanoukville).",
    discount: "FLAT 20%",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&auto=format",
    code: "BUS20CAMB",
    validTill: "Unlimited until 2026",
  },
];
