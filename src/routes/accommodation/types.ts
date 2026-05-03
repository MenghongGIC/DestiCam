export type BadgeType = "success" | "neutral" | "primary" | "info";

export interface BadgeItem {
  label: string;
  type: BadgeType;
}

export interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  ratingLabel: string;
  reviewCount: number;
  originalPrice: number | null;
  price: number;
  imageUrl: string;
  imageCount: number | null;
  badges: BadgeItem[];
}
export type SortOption =
  | "Recommended"
  | "Price (Low to High)"
  | "Rating (High to Low)";

export const SORT_OPTIONS: SortOption[] = [
  "Recommended",
  "Price (Low to High)",
  "Rating (High to Low)",
];

export interface FilterCheckboxProps {
  label: string;
  defaultChecked?: boolean;
}

export interface BadgeProps {
  label: string;
  type: BadgeType;
}

export interface HotelCardProps {
  hotel: Hotel;
}