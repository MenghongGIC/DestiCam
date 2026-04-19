export type activity_info_type = {
    id: number,
    name: string,
    description: string,
    location: string,
    price: number,
    rating: number,
    image: string,
    category: string
};

export type data_type = activity_info_type[];

export const data: data_type = [
    {
        id: 1,
        name: "Angkor Wat Sunrise Tour",
        description: "Experience the majestic sunrise at the iconic Angkor Wat temple complex.",
        location: "Siem Reap",
        price: 45,
        rating: 4.8,
        image: "/activity_image.jpg",
        category: "Cultural"
    },
    {
        id: 2,
        name: "Tonle Sap Lake Boat Trip",
        description: "Cruise through the floating villages on Cambodia's largest lake.",
        location: "Siem Reap",
        price: 30,
        rating: 4.6,
        image: "/activity_image.jpg",
        category: "Adventure"
    },
    {
        id: 3,
        name: "Phnom Penh Killing Fields Visit",
        description: "Guided tour of the historical site commemorating Cambodia's tragic past.",
        location: "Phnom Penh",
        price: 25,
        rating: 4.7,
        image: "/activity_image.jpg",
        category: "Historical"
    },
    {
        id: 4,
        name: "Cardamom Mountains Trek",
        description: "Hike through pristine rainforest and encounter wildlife in this remote area.",
        location: "Koh Kong",
        price: 80,
        rating: 4.9,
        image: "/activity_image.jpg",
        category: "Adventure"
    },
    {
        id: 5,
        name: "Siem Reap Night Market",
        description: "Explore local crafts, street food, and souvenirs in a vibrant market setting.",
        location: "Siem Reap",
        price: 15,
        rating: 4.5,
        image: "/activity_image.jpg",
        category: "Cultural"
    },
    {
        id: 6,
        name: "Culinary Cooking Class",
        description: "Learn to prepare authentic Cambodian dishes with fresh local ingredients.",
        location: "Phnom Penh",
        price: 50,
        rating: 4.8,
        image: "/activity_image.jpg",
        category: "Food"
    },
    {
        id: 7,
        name: "Battambang Bamboo Train Ride",
        description: "Ride a unique bamboo train through rural Cambodia's countryside.",
        location: "Battambang",
        price: 20,
        rating: 4.4,
        image: "/activity_image.jpg",
        category: "Adventure"
    },
    {
        id: 8,
        name: "Royal Palace Visit",
        description: "Tour the stunning Royal Palace and Silver Pagoda in Phnom Penh.",
        location: "Phnom Penh",
        price: 35,
        rating: 4.7,
        image: "/activity_image.jpg",
        category: "Cultural"
    },
    {
        id: 9,
        name: "Koh Rong Island Beach Day",
        description: "Relax on pristine beaches and snorkel in crystal-clear waters.",
        location: "Koh Rong",
        price: 60,
        rating: 4.6,
        image: "/activity_image.jpg",
        category: "Relaxation"
    },
    {
        id: 10,
        name: "Mondulkiri Elephant Sanctuary",
        description: "Visit rescued elephants and learn about conservation efforts.",
        location: "Mondulkiri",
        price: 70,
        rating: 4.9,
        image: "/activity_image.jpg",
        category: "Adventure"
    },
    {
        id: 11,
        name: "Tuol Sleng Genocide Museum",
        description: "Historical museum documenting the Khmer Rouge regime's atrocities.",
        location: "Phnom Penh",
        price: 20,
        rating: 4.8,
        image: "/activity_image.jpg",
        category: "Historical"
    },
    {
        id: 12,
        name: "Kampot Pepper Farm Tour",
        description: "Explore the famous pepper plantations and taste world-renowned Kampot pepper.",
        location: "Kampot",
        price: 40,
        rating: 4.7,
        image: "/activity_image.jpg",
        category: "Food"
    }
];