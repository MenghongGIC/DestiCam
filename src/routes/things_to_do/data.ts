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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Angkor_Wat_from_across_the_moat.jpg/400px-Angkor_Wat_from_across_the_moat.jpg",
        category: "Cultural"
    },
    {
        id: 2,
        name: "Tonle Sap Lake Boat Trip",
        description: "Cruise through the floating villages on Cambodia's largest lake.",
        location: "Siem Reap",
        price: 30,
        rating: 4.6,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Tonle_Sap_Lake%2C_Cambodia.jpg/400px-Tonle_Sap_Lake%2C_Cambodia.jpg",
        category: "Adventure"
    },
    {
        id: 3,
        name: "Phnom Penh Killing Fields Visit",
        description: "Guided tour of the historical site commemorating Cambodia's tragic past.",
        location: "Phnom Penh",
        price: 25,
        rating: 4.7,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Killing_Fields.jpg/400px-Killing_Fields.jpg",
        category: "Historical"
    },
    {
        id: 4,
        name: "Cardamom Mountains Trek",
        description: "Hike through pristine rainforest and encounter wildlife in this remote area.",
        location: "Koh Kong",
        price: 80,
        rating: 4.9,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Cardamom_Mountains.jpg/400px-Cardamom_Mountains.jpg",
        category: "Adventure"
    },
    {
        id: 5,
        name: "Siem Reap Night Market",
        description: "Explore local crafts, street food, and souvenirs in a vibrant market setting.",
        location: "Siem Reap",
        price: 15,
        rating: 4.5,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Siem_Reap_Art_Center_Night_Market%2C_2018_(03).jpg/400px-Siem_Reap_Art_Center_Night_Market%2C_2018_(03).jpg",
        category: "Cultural"
    },
    {
        id: 6,
        name: "Culinary Cooking Class",
        description: "Learn to prepare authentic Cambodian dishes with fresh local ingredients.",
        location: "Phnom Penh",
        price: 50,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "Food"
    },
    {
        id: 7,
        name: "Battambang Bamboo Train Ride",
        description: "Ride a unique bamboo train through rural Cambodia's countryside.",
        location: "Battambang",
        price: 20,
        rating: 4.4,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Bamboo_train_Battambang.jpg/400px-Bamboo_train_Battambang.jpg",
        category: "Adventure"
    },
    {
        id: 8,
        name: "Royal Palace Visit",
        description: "Tour the stunning Royal Palace and Silver Pagoda in Phnom Penh.",
        location: "Phnom Penh",
        price: 35,
        rating: 4.7,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Royal_Palace_Phnom_Penh.jpg/400px-Royal_Palace_Phnom_Penh.jpg",
        category: "Cultural"
    },
    {
        id: 9,
        name: "Koh Rong Island Beach Day",
        description: "Relax on pristine beaches and snorkel in crystal-clear waters.",
        location: "Koh Rong",
        price: 60,
        rating: 4.6,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Koh_Rong_Island.jpg/400px-Koh_Rong_Island.jpg",
        category: "Relaxation"
    },
    {
        id: 10,
        name: "Mondulkiri Elephant Sanctuary",
        description: "Visit rescued elephants and learn about conservation efforts.",
        location: "Mondulkiri",
        price: 70,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "Adventure"
    },
    {
        id: 11,
        name: "Tuol Sleng Genocide Museum",
        description: "Historical museum documenting the Khmer Rouge regime's atrocities.",
        location: "Phnom Penh",
        price: 20,
        rating: 4.8,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tuol_Sleng_Genocide_Museum.jpg/400px-Tuol_Sleng_Genocide_Museum.jpg",
        category: "Historical"
    },
    {
        id: 12,
        name: "Kampot Pepper Farm Tour",
        description: "Explore the famous pepper plantations and taste world-renowned Kampot pepper.",
        location: "Kampot",
        price: 40,
        rating: 4.7,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Kampot_pepper.jpg/400px-Kampot_pepper.jpg",
        category: "Food"
    },
    {
        id: 13,
        name: "Bayon Temple Exploration",
        description: "Discover the intricate carvings and faces of the ancient Bayon Temple in Angkor Thom.",
        location: "Siem Reap",
        price: 35,
        rating: 4.9,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Bayon_Temple.jpg/400px-Bayon_Temple.jpg",
        category: "Cultural"
    },
    {
        id: 14,
        name: "Ta Prohm Temple Exploration",
        description: "Explore the overgrown ruins of Ta Prohm Temple, famously featured in Tomb Raider.",
        location: "Siem Reap",
        price: 30,
        rating: 4.8,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ta_Prohm.jpg/400px-Ta_Prohm.jpg",
        category: "Cultural"
    },
    {
        id: 15,
        name: "Phnom Kulen Waterfall Hike",
        description: "Hike to the sacred waterfall and enjoy a refreshing swim in the natural pools.",
        location: "Siem Reap",
        price: 25,
        rating: 4.7,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Phnom_Kulen_Waterfall.jpg/400px-Phnom_Kulen_Waterfall.jpg",
        category: "Adventure"
    },
    {
        id: 16,
        name: "Preah Vihear Temple Visit",
        description: "Visit the majestic Preah Vihear Temple perched on a cliff with stunning views.",
        location: "Preah Vihear",
        price: 50,
        rating: 4.9,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Preah_Vihear.jpg/400px-Preah_Vihear.jpg",
        category: "Historical"
    },
    {
        id: 17,
        name: "Fish Amok Cooking Class",
        description: "Learn to prepare Cambodia's national dish, fish amok, with fresh ingredients.",
        location: "Siem Reap",
        price: 45,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        category: "Food"
    },
    {
        id: 18,
        name: "Otres Beach Relaxation",
        description: "Relax on the pristine sands of Otres Beach, away from the crowds of Sihanoukville.",
        location: "Sihanoukville",
        price: 20,
        rating: 4.6,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Otres_Beach.jpg/400px-Otres_Beach.jpg",
        category: "Relaxation"
    }
];