export type data_info_type= {
    id: number|string,
    profile_picture: string,
    name: string
    languages_spoken: string[],
    short_bio: string,
    rating: number,
    price_per_day: number
};

export type data_type = data_info_type[];

export const data:data_type = [
  {
    id: 1,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Sokchea Phan",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Friendly guide from Phnom Penh specializing in cultural tours.",
    rating: 4.7,
    price_per_day: 35
  },
  {
    id: 2,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Dara Kim",
    languages_spoken: ["Khmer", "French", "English"],
    short_bio: "Experienced in guiding visitors through Angkor Wat and Siem Reap.",
    rating: 4.9,
    price_per_day: 50
  },
  {
    id: 3,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Sreyneang Chhun",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Specializes in food tours and local market experiences.",
    rating: 4.6,
    price_per_day: 30
  },
  {
    id: 4,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Vuthy Chan",
    languages_spoken: ["Khmer", "Chinese", "English"],
    short_bio: "Expert in Cambodian history and temple architecture.",
    rating: 4.8,
    price_per_day: 45
  },
  {
    id: 5,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Malis Sok",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Passionate about eco-tours and rural village life.",
    rating: 4.5,
    price_per_day: 28
  },
  {
    id: 6,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Rith Dara",
    languages_spoken: ["Khmer", "Japanese", "English"],
    short_bio: "Guides Japanese tourists with deep cultural insights.",
    rating: 4.9,
    price_per_day: 55
  },
  {
    id: 7,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Sophea Lim",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Specializes in Phnom Penh city tours and museums.",
    rating: 4.7,
    price_per_day: 40
  },
  {
    id: 8,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Chanthy Mao",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Focuses on adventure tours and countryside biking.",
    rating: 4.6,
    price_per_day: 33
  },
  {
    id: 9,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Sokha Heng",
    languages_spoken: ["Khmer", "English", "German"],
    short_bio: "Provides temple tours with historical storytelling.",
    rating: 4.8,
    price_per_day: 48
  },
  {
    id: 10,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Pisey Nhem",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Expert in guiding floating village tours in Tonle Sap.",
    rating: 4.7,
    price_per_day: 37
  },
  {
    id: 11,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Sokun Chea",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Nature lover guiding eco-trails in Kampot.",
    rating: 4.5,
    price_per_day: 32
  },
  {
    id: 12,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Mony Keo",
    languages_spoken: ["Khmer", "English", "Thai"],
    short_bio: "Specializes in cross-border tours and regional culture.",
    rating: 4.6,
    price_per_day: 42
  },
  {
    id: 13,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Sreymao Touch",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Focuses on art galleries and cultural performances.",
    rating: 4.7,
    price_per_day: 36
  },
  {
    id: 14,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Visal Ouk",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Adventure guide for trekking in Mondulkiri.",
    rating: 4.8,
    price_per_day: 44
  },
  {
    id: 15,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Sokny Yem",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Specializes in culinary tours and cooking classes.",
    rating: 4.6,
    price_per_day: 38
  },
  {
    id: 16,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Chetra Sun",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Expert in Angkor Wat sunrise tours.",
    rating: 4.9,
    price_per_day: 52
  },
  {
    id: 17,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Sreyroth Khiev",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Focuses on handicraft villages and local artisans.",
    rating: 4.5,
    price_per_day: 29
  },
  {
    id: 18,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Vanna Long",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Guides tours in Battambang with cultural highlights.",
    rating: 4.7,
    price_per_day: 39
  },
  {
    id: 19,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Sokheng Phou",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Specializes in wildlife tours and bird watching.",
    rating: 4.6,
    price_per_day: 34
  },
  {
    id: 20,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Chanra Ith",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Focuses on historical tours in Oudong.",
    rating: 4.7,
    price_per_day: 41
  },
  {
    id: 21,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Sokly Men",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Offers personalized family-friendly tours in Siem Reap.",
    rating: 4.8,
    price_per_day: 46
  }
];
