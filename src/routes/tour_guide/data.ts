export type data_info_type = {
  id: number | string,
  profile_picture: string,
  name: string,
  languages_spoken: string[],
  short_bio: string,
  rating: number,
  price_per_day: number,
  contact: { [key: string]: string }
};

export type data_type = data_info_type[];

export const data: data_type = [
  {
    id: 1,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Sokchea Phan",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Friendly guide from Phnom Penh specializing in cultural tours.",
    rating: 4.7,
    price_per_day: 35,
    contact: {
      Telephone: "09672314",
      Telegram: "02134567",
      Email: "sokchea_phan1@gmail.com",
      Facebook: "facebook.com/sokchea_phan"
    }
  },
  {
    id: 2,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Dara Kim",
    languages_spoken: ["Khmer", "French", "English"],
    short_bio: "Expert in Angkor Wat history and architecture.",
    rating: 4.8,
    price_per_day: 40,
    contact: {
      Telephone: "09783421",
      Telegram: "02245678",
      Email: "dara_kim2@gmail.com",
      Facebook: "facebook.com/dara_kim"
    }
  },
  {
    id: 3,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Sophal Chan",
    languages_spoken: ["Khmer", "Chinese"],
    short_bio: "Specializes in culinary tours around Siem Reap.",
    rating: 4.6,
    price_per_day: 32,
    contact: {
      Telephone: "09512345",
      Telegram: "02398765",
      Email: "sophal_chan3@gmail.com",
      Facebook: "facebook.com/sophal_chan"
    }
  },
  {
    id: 4,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Vanna Ly",
    languages_spoken: ["Khmer", "Japanese", "English"],
    short_bio: "Knowledgeable guide for temple and countryside tours.",
    rating: 4.9,
    price_per_day: 50,
    contact: {
      Telephone: "09876543",
      Telegram: "02456789",
      Email: "vanna_ly4@gmail.com",
      Facebook: "facebook.com/vanna_ly"
    }
  },
  {
    id: 5,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Sreyneang Touch",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Friendly guide for Phnom Penh nightlife and local culture.",
    rating: 4.5,
    price_per_day: 30,
    contact: {
      Telephone: "09345678",
      Telegram: "02567890",
      Email: "sreyneang_touch5@gmail.com",
      Facebook: "facebook.com/sreyneang_touch"
    }
  },
  {
    id: 6,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Pisey Chum",
    languages_spoken: ["Khmer", "English", "French"],
    short_bio: "Specialist in eco-tours and rural experiences.",
    rating: 4.4,
    price_per_day: 28,
    contact: {
      Telephone: "09234567",
      Telegram: "02678901",
      Email: "pisey_chum6@gmail.com",
      Facebook: "facebook.com/pisey_chum"
    }
  },
  {
    id: 7,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Makara Heng",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Focuses on adventure tours and trekking.",
    rating: 4.6,
    price_per_day: 38,
    contact: {
      Telephone: "09123456",
      Telegram: "02789012",
      Email: "makara_heng7@gmail.com",
      Facebook: "facebook.com/makara_heng"
    }
  },
  {
    id: 8,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Chantha Ouk",
    languages_spoken: ["Khmer", "English", "Thai"],
    short_bio: "Guides visitors through Cambodia’s border regions.",
    rating: 4.3,
    price_per_day: 27,
    contact: {
      Telephone: "09098765",
      Telegram: "02890123",
      Email: "chantha_ouk8@gmail.com",
      Facebook: "facebook.com/chantha_ouk"
    }
  },
  {
    id: 9,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Rith Sok",
    languages_spoken: ["Khmer", "English", "Korean"],
    short_bio: "Specializes in modern city tours.",
    rating: 4.5,
    price_per_day: 33,
    contact: {
      Telephone: "08987654",
      Telegram: "02901234",
      Email: "rith_sok9@gmail.com",
      Facebook: "facebook.com/rith_sok"
    }
  },
  {
    id: 10,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Borey Sun",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Expert in Cambodian wildlife and eco-parks.",
    rating: 4.7,
    price_per_day: 42,
    contact: {
      Telephone: "08876543",
      Telegram: "03012345",
      Email: "borey_sun10@gmail.com",
      Facebook: "facebook.com/borey_sun"
    }
  },
  {
    id: 11,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Chenda Mao",
    languages_spoken: ["Khmer", "English", "French"],
    short_bio: "Focuses on art and museum tours.",
    rating: 4.6,
    price_per_day: 36,
    contact: {
      Telephone: "08765432",
      Telegram: "03123456",
      Email: "chenda_mao11@gmail.com",
      Facebook: "facebook.com/chenda_mao"
    }
  },
  {
    id: 12,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Sokha Yem",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Friendly countryside guide.",
    rating: 4.4,
    price_per_day: 29,
    contact: {
      Telephone: "08654321",
      Telegram: "03234567",
      Email: "sokha_yem12@gmail.com",
      Facebook: "facebook.com/sokha_yem"
    }
  },
  {
    id: 13,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Vichea Lim",
    languages_spoken: ["Khmer", "English", "Chinese"],
    short_bio: "Specializes in shopping and market tours.",
    rating: 4.5,
    price_per_day: 34,
    contact: {
      Telephone: "08543210",
      Telegram: "03345678",
      Email: "vichea_lim13@gmail.com",
      Facebook: "facebook.com/vichea_lim"
    }
  },
  {
    id: 14,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Sokny Keo",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Expert in Phnom Penh’s colonial history.",
    rating: 4.8,
    price_per_day: 45,
    contact: {
      Telephone: "08432109",
      Telegram: "03456789",
      Email: "sokny_keo14@gmail.com",
      Facebook: "facebook.com/sokny_keo"
    }
  },
  {
    id: 15,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Sophea Long",
    languages_spoken: ["Khmer", "English", "Japanese"],
    short_bio: "Specializes in temple tours for Japanese visitors.",
    rating: 4.7,
    price_per_day: 41,
    contact: {
      Telephone: "08321098",
      Telegram: "03567890",
      Email: "sophea_long15@gmail.com",
      Facebook: "facebook.com/sophea_long"
    }
  },
  {
    id: 16,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Kanha Phorn",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Friendly guide for family tours.",
    rating: 4.3,
    price_per_day: 26,
    contact: {
      Telephone: "08210987",
      Telegram: "03678901",
      Email: "kanha_phorn16@gmail.com",
      Facebook: "facebook.com/kanha_phorn"
    }
  },
  {
    id: 17,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Rina Sok",
    languages_spoken: ["Khmer", "English", "French"],
    short_bio: "Specializes in cultural heritage tours.",
    rating: 4.6,
    price_per_day: 37,
    contact: {
      Telephone: "08109876",
      Telegram: "03789012",
      Email: "rina_sok17@gmail.com",
      Facebook: "facebook.com/rina_sok"
    }
  },
  {
    id: 18,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Sokun Dara",
    languages_spoken: ["Khmer", "English", "Chinese"],
    short_bio: "Expert in temple and market tours.",
    rating: 4.5,
    price_per_day: 33,
    contact: {
      Telephone: "08098765",
      Telegram: "03890123",
      Email: "sokun_dara18@gmail.com",
      Facebook: "facebook.com/sokun_dara"
    }
  },
  {
    id: 19,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Sokhom Chhay",
    languages_spoken: ["Khmer", "English"],
    short_bio: "Focuses on eco-friendly countryside tours.",
    rating: 4.4,
    price_per_day: 30,
    contact: {
      Telephone: "07987654",
      Telegram: "03901234",
      Email: "sokhom_chhay19@gmail.com",
      Facebook: "facebook.com/sokhom_chhay"
    }
  },
  {
    id: 20,
    profile_picture: "/tour_guide_profile_picture.jpg",
    name: "Sokunthea Meas",
    languages_spoken: ["Khmer", "English", "French"],
    short_bio: "Specializes in art and cultural tours.",
    rating: 4.7,
    price_per_day: 39,
    contact: {
      Telephone: "07876543",
      Telegram: "04012345",
      Email: "sokunthea_meas20@gmail.com",
      Facebook: "facebook.com/sokunthea_meas"
    }
  }

];
