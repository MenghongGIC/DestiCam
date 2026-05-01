import { createSignal } from "solid-js";

export type TripItem = {
  id: number;
  title: string;
  location: string;
  image: string;
  type: "place" | "activity";
  price?: number;
};

const [tripItems, setTripItems] = createSignal<TripItem[]>([]);

const isInTrip = (id: number) => tripItems().some((i) => i.id === id);

const toggleTripItem = (item: TripItem) => {
  setTripItems((prev) =>
    prev.some((i) => i.id === item.id)
      ? prev.filter((i) => i.id !== item.id)
      : [...prev, item]
  );
};

const removeTripItem = (id: number) => {
  setTripItems((prev) => prev.filter((i) => i.id !== id));
};

export { tripItems, isInTrip, toggleTripItem, removeTripItem };