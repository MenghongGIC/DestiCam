import type { Hotel } from "./types";

export const hotels: Hotel[] = [
  {
    id: 1,
    name: "Temple Boutique & Spa",
    location: "Siem Reap, 500m from Old Market",
    rating: 9.2,
    ratingLabel: "Exceptional",
    reviewCount: 1248,
    originalPrice: 145,
    price: 112,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3dZxsO05NNlPvoJFxIXXvIC8NvVWCD9rjUljs-Ienwo3Y5AyMZ8ejer77DvAB7twhd9H3Oe_-NmU-T_h0s4dY9Ix3eN1tjyFnMVIpQHJr7XCUWk_p2zvWUoQSZkogOkKO7OOM79PEi_KKan9TSmm12oH0q7Zm1xFjXv749cUyBfzNekmiwU9HXk-PruNKTJeoeHAdvnUzz3hHdFF2ePDVxxFQ3zkVSzop4c67TVPzbuzT9DsUuz1nepRvKZjytNAtxKJ7ohDfW28Y",
    imageCount: 12,
    badges: [
      { label: "Free Cancellation", type: "success" },
      { label: "No prepay needed", type: "neutral" },
      { label: "Great Value", type: "primary" },
    ],
  },
  {
    id: 2,
    name: "Anjali by Syphon",
    location: "Salakamreuk, Siem Reap",
    rating: 8.9,
    ratingLabel: "Superb",
    reviewCount: 856,
    originalPrice: null,
    price: 89,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzaCq3OdiZrTQ-7uwur5tuZEtOc8FJaA6XMefJgK1N6WgACbgiXBV-q97ujHDt5xjt8EobY4NzXlUCOTQq70vxXyv49cOeITu2F6pw6Q-NORlwI28RIieS2bwGyQJj-Pkuhwenleq1lGPjG_eviPEOFZJwczgsqB4Gk_GId2yuPBlGtc9w47OLtIRNlbJ-4A3Ox5vOlk4yvZw53Bvi9LdMON-djk8kPFYwDb2KawEvz1AX-kmtzQ6DhO2-SuRHyST4kwTUMe18sxOG",
    imageCount: 24,
    badges: [
      { label: "Free Cancellation", type: "success" },
      { label: "Breakfast Included", type: "info" },
    ],
  },
  {
    id: 3,
    name: "Siem Reap River Home",
    location: "River Side, Siem Reap",
    rating: 9.4,
    ratingLabel: "Excellent",
    reviewCount: 312,
    originalPrice: null,
    price: 45,
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAlu1yuXGSRdCwL-GrSCD4oAPGwf8ZweC2hhGZqTDv6EIz3-888lnOAoM8QWfJ3S4Hv5jXpSp7Macn9YxL4pEnU4UjoDQzkEH2xYKuKaeKDy9WW5mLjWq6y5_vVrej8Ezfc9ceANeH41d2syZzCkkUI4hIhboji1We3F8uk8ESokMIInIgzCXZKsFyBMSCShJhQVo-sSAD0DkJRg6G6MshcQV18833KdGml6zJX4hOvuMMDI0Z887oc_zl1cvmBIM-HPZVQ-s0B-75T",
    imageCount: null,
    badges: [
      { label: "Homestay", type: "neutral" },
      { label: "Free Cancellation", type: "success" },
    ],
  },
];