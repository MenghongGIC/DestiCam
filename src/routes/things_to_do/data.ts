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
        image: "https://imgs.search.brave.com/2RdTUBCvd5DkCETjw1LE721lpMBcQY4VC943GezKC2E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hbmdr/b3Jkb29ycy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDgvaGFsZi1kYXkt/YW5na29yLXdhdC1z/dW5yaXNlLXRvdXIt/ZmVhdHVyZS53ZWJw",
        category: "Cultural"
    },
    {
        id: 2,
        name: "Tonle Sap Lake Boat Trip",
        description: "Cruise through the floating villages on Cambodia's largest lake.",
        location: "Siem Reap",
        price: 30,
        rating: 4.6,
        image: "https://imgs.search.brave.com/2la_8OnWg9xPN_B5WzOjNjROPGLxCQOrNltRQtbvSRA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dHJhdmVsZXJzdW5p/dmVyc2UuY29tL21l/ZGlhL2Zsb2F0aW5n/LXZpbGxhZ2UtbWFu/Z3JvdmVzLWZvcmVz/dC10b25sZS1zYXAt/bGFrZS1ib2F0LXRv/dXItdDUwMzM5MS0y/LmpwZw",
        category: "Adventure"
    },
    {
        id: 3,
        name: "Phnom Penh Killing Fields Visit",
        description: "Guided tour of the historical site commemorating Cambodia's tragic past.",
        location: "Phnom Penh",
        price: 25,
        rating: 4.7,
        image: "https://imgs.search.brave.com/ZObS8XYAQ_wEkpAWjtderwQ8kpvoWFc3LKUvMBR6Xzk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Z2V0eW91cmd1aWRl/LmNvbS9pbWFnZS9m/b3JtYXQ9YXV0byxm/aXQ9Y3JvcCxncmF2/aXR5PWNlbnRlcixx/dWFsaXR5PTYwLHdp/ZHRoPTUzNSxoZWln/aHQ9NDAwLGRwcj0x/L3RvdXJfaW1nL2M1/MzI4ZDhkN2NiYTc1/MzE5Y2FmMmY4MzU1/ODc3Njg3MzFiYTJj/ZDU2YmIwZmM1N2Ri/ZWQ1NWYwZWFmMjcw/ZjMuanBn",
        category: "Historical"
    },
    {
        id: 4,
        name: "Cardamom Mountains Trek",
        description: "Hike through pristine rainforest and encounter wildlife in this remote area.",
        location: "Koh Kong",
        price: 80,
        rating: 4.9,
        image: "https://imgs.search.brave.com/k6hfr9bxqGX44e0AiVMN2Kjqr9DMxeP4FU8q_aLS1gE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXNpYWtpbmd0cmF2/ZWwuY29tL2N1cGxv/YWRzL2ltYWdlcy9C/bG9nL0NhcmRhbW9u/LzAxSDhZNE5TNTFC/QTJTRUdXTk5TRzYx/TjNKLmpwZw",
        category: "Adventure"
    },
    {
        id: 5,
        name: "Siem Reap Night Market",
        description: "Explore local crafts, street food, and souvenirs in a vibrant market setting.",
        location: "Siem Reap",
        price: 15,
        rating: 4.5,
        image: "https://imgs.search.brave.com/fPcsprx-J2CuQlWS4GQvyUg6EJYnrcfykfXXRfTR4l8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjky/MDIxODUzL3Bob3Rv/L3NpZW0tcmVhcC1u/aWdodC1tYXJrZXQt/Y2FtYm9kaWEuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVNW/ZF9PM0trcXBrRzZo/VzJTQUVtNnRHaFI4/UGQ5WFRyV3NYWUct/UXhMRjg9",
        category: "Cultural"
    },
    {
        id: 6,
        name: "Culinary Cooking Class",
        description: "Learn to prepare authentic Cambodian dishes with fresh local ingredients.",
        location: "Phnom Penh",
        price: 50,
        rating: 4.8,
        image: "https://imgs.search.brave.com/Nph2Bta9QR3v7Ok3BQ4pcepZ2M_8Xyvg0OoWRwMS_ZM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pay5p/bWFnZWtpdC5pby9j/b29rbHkvdHI6aC0y/NzAsdy00MDAscHIt/dHJ1ZS9pbWFnZXMv/a2htZXItY29va2lu/Zy1jbGFzcy1hdC1h/LWxvY2FsMzlzLWhv/bWUtd2l0aC1tYXJr/ZXQtdG91cl9XRFlV/ODZlLmpwZWc",
        category: "Food"
    },
    {
        id: 7,
        name: "Battambang Bamboo Train Ride",
        description: "Ride a unique bamboo train through rural Cambodia's countryside.",
        location: "Battambang",
        price: 20,
        rating: 4.4,
        image: "https://imgs.search.brave.com/Me3yhfw91l0XTZ9ToQ1pkFW1DNf2KMxsMUtOaFlF7C8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmNk/bi5uZXdzYnl0ZXNh/cHAuY29tL2ltYWdl/cy9sOTEzMjAyNDA4/MjkxNTQ5NDYuanBl/Zw",
        category: "Adventure"
    },
    {
        id: 8,
        name: "Royal Palace Visit",
        description: "Tour the stunning Royal Palace and Silver Pagoda in Phnom Penh.",
        location: "Phnom Penh",
        price: 35,
        rating: 4.7,
        image: "https://imgs.search.brave.com/Ft_M7bq3clWyV12X94X_DQincNYTrOa31sPygD3W9VU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91Y2Fy/ZWNkbi5jb20vNzdk/NTNjM2UtNzk2NC00/OGExLTljZTMtMDA4/NTcyMGI1NmQyLy0v/Y3JvcC80MDQzeDIx/MjIvMCwyNjUvLS9y/ZXNpemUvMTIwMHg2/MzAv",
        category: "Cultural"
    },
    {
        id: 9,
        name: "Koh Rong Island Beach Day",
        description: "Relax on pristine beaches and snorkel in crystal-clear waters.",
        location: "Koh Rong",
        price: 60,
        rating: 4.6,
        image: "https://imgs.search.brave.com/J6z6dfSNI2EVECcCMpfrqJv-2whgj8UrixJlnEUoMcI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVi/cm9hZGxpZmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzA0L2JvYXQtc2Vh/LWJlYWNoLWtvaHJv/bmctc2FtbG9lbS1s/YW5kc2NhcGUtdGhl/YnJvYWRsaWZlLXRy/YXZlbC1jYW1ib2Rp/YS5qcGc",
        category: "Relaxation"
    },
    {
        id: 10,
        name: "Mondulkiri Elephant Sanctuary",
        description: "Visit rescued elephants and learn about conservation efforts.",
        location: "Mondulkiri",
        price: 70,
        rating: 4.9,
        image: "https://imgs.search.brave.com/YbzllREU5TJVtq3JVyQD3IV2Ubn9vdPIntwWrkkkcPQ/rs:fit:860:0:0:0/g:ce/aHR0cDovL2Z1bGx0/aW1lZXhwbG9yZXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE3LzEwL0V4cGxv/cmluZy10aGUtTW9u/ZHVsa2lyaS1FbGVw/aGFudC1TYW5jdHVh/cnktMTEuanBn",
        category: "Adventure"
    },
    {
        id: 11,
        name: "Tuol Sleng Genocide Museum",
        description: "Historical museum documenting the Khmer Rouge regime's atrocities.",
        location: "Phnom Penh",
        price: 20,
        rating: 4.8,
        image: "https://imgs.search.brave.com/_LzjX4NOYN8eoXhl0a0vpMm7xd9d7NmOPDSH1sa-5vE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/NzQ4MjYwMC9waG90/by90dW9sLXNsZW5n/LWdlbm9jaWRlLW11/c2V1bS1ob3VzZWQt/aW4tYS1mb3JtZXIt/aGlnaC1zY2hvb2wt/cGhub20tcGVuaC1j/YW1ib2RpYS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9MG1k/TTlkS3JRV1RzWm9u/ZFZyMkVYak9rQVFF/QnJBbEQ1VTFCVl9K/cFZqaz0",
        category: "Historical"
    },
    {
        id: 12,
        name: "Kampot Pepper Farm Tour",
        description: "Explore the famous pepper plantations and taste world-renowned Kampot pepper.",
        location: "Kampot",
        price: 40,
        rating: 4.7,
        image: "https://imgs.search.brave.com/y053iytoYXC5gSgzcDpHtfBy2GMRbnc5bfuf43Kpvr4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rYW1w/b3QtY2FtYm9kaWEu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzEyLzE3LUlN/RzIwMjMxMTE1MDk0/ODMyLTEwMjR4NDYx/LmpwZw",
        category: "Food"
    },
    {
        id: 13,
        name: "Bayon Temple Exploration",
        description: "Discover the intricate carvings and faces of the ancient Bayon Temple in Angkor Thom.",
        location: "Siem Reap",
        price: 35,
        rating: 4.9,
        image: "https://imgs.search.brave.com/4YbhIiUM_lzbSm8pnMJlZ-1pSDtkvIXhHCZdF839Ato/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIw/NjYwOTQ1MC9waG90/by9tYWplc3RpYy1r/aG1lci10ZW1wbGUt/YmF5b24taW4tY2Ft/Ym9kaWEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPU9oZmVW/T1NzbFNIck5ieS1B/a2Q5VUJCOWJWeklr/LXBsWkFJVUpJcjFW/cE09",
        category: "Cultural"
    },
    {
        id: 14,
        name: "Ta Prohm Temple Exploration",
        description: "Explore the overgrown ruins of Ta Prohm Temple, famously featured in Tomb Raider.",
        location: "Siem Reap",
        price: 30,
        rating: 4.8,
        image: "https://imgs.search.brave.com/23LQLPWMUD5ZkZL8XtmBjIMWgwW47hM153Cz-_AbJ60/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJhdmVsYXV0aGVu/dGljYXNpYS5jb20v/cGhvdG9zL3RvdXJz/L2NhbWJvZGlhL2dh/bGxlcnkvc2lhbV9y/ZWFwL3RhX3Byb2ht/NC5qcGc",
        category: "Cultural"
    },
    {
        id: 15,
        name: "Phnom Kulen Waterfall Hike",
        description: "Hike to the sacred waterfall and enjoy a refreshing swim in the natural pools.",
        location: "Siem Reap",
        price: 25,
        rating: 4.7,
        image: "https://imgs.search.brave.com/Tcz1__CdKaNOZ6HTma5RU8LoUi-HCHCzfxc5Mgfp2zM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tb3Jl/dGhhbnRlbXBsZXMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzA5L1Bobm9t/LUt1bGVuLU5hdGlv/bmFsLVBhcmstd2F0/ZXJmYWxsLTEwMjR4/NzY4LndlYnA",
        category: "Adventure"
    },
    {
        id: 16,
        name: "Preah Vihear Temple Visit",
        description: "Visit the majestic Preah Vihear Temple perched on a cliff with stunning views.",
        location: "Preah Vihear",
        price: 50,
        rating: 4.9,
        image: "https://imgs.search.brave.com/XpyWBCEMKZvH16jSaS21T5CACHsiZNSYBFISIGUhSnI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXNpYWtpbmd0cmF2/ZWwuY29tL2N1cGxv/YWRzL2ZpbGVzL0Nh/bWJvZGlhL1ByZWFo/JTIwVmloZWFyJTIw/VGVtcGxlL1ByZWFo/LVZpaGVhci1UZW1w/bGUtMi5qcGc",
        category: "Historical"
    },
    {
        id: 17,
        name: "Fish Amok Cooking Class",
        description: "Learn to prepare Cambodia's national dish, fish amok, with fresh ingredients.",
        location: "Siem Reap",
        price: 45,
        rating: 4.8,
        image: "https://imgs.search.brave.com/gwMQMXHODAIjZRaqXzY22L53ISoAE1SbXNgACRj8gKc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mb29k/Lm5vbWFkaWNib3lz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNS8wNC8wMS1D/b29raW5nLWNsYXNz/LUFtb2stU3RlZi1j/b29raW5nLmpwZw",
        category: "Food"
    },
    {
        id: 18,
        name: "Otres Beach Relaxation",
        description: "Relax on the pristine sands of Otres Beach, away from the crowds of Sihanoukville.",
        location: "Sihanoukville",
        price: 20,
        rating: 4.6,
        image: "https://imgs.search.brave.com/bdyygpg3oevaOZH88YuXCaD-HvjQ3P3ef4XZXYOmsOM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z29jYW1ib2RpYS50/b3Vycy93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wNi9PdHJl/cy1CZWFjaC10cmF2/ZWwtZHVyaW5nLWNh/bWJvZGlhLXZhY2F0/aW9ucy01LmpwZw",
        category: "Relaxation"
    }
];