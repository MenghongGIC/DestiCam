import { Component, createSignal, For, Show } from "solid-js";
import { useNavigate } from "@solidjs/router";
import styles from "./relaxBundle.module.css";
import NavigationBar from "~/components/NavigationBar";
import { tripItems, toggleTripItem, isInTrip } from "./tripState";

type TabType = "All" | "Activities" | "Places";

const POPULAR_PLACES = [
  {
    id: 1,
    title: "Koh Rong",
    location: "Sihanoukville · Beach",
    rating: 4.6,
    visits: "1.2k",
    image: "/public/beaches2.jpg",
  },
  {
    id: 2,
    title: "Otres Beach",
    location: "Sihanoukville · Beach",
    rating: 4.5,
    visits: "1.3k",
    image: "/public/kohrong.jpg",
  },
  {
    id: 3,
    title: "Koh Rong Samloem",
    location: "Sihanoukville · Beach",
    rating: 4.7,
    visits: "1.5k",
    image: "/public/kohrong.jpg",
  },
];

const HIDDEN_GEMS = [
  {
    id: 4,
    title: "Kep Crab Market",
    location: "Kep · Coast",
    rating: 4.4,
    visits: "620",
    image: "/public/kepcrab.jpg",
  },
  {
    id: 5,
    title: "Rabbit Island",
    location: "Kep · Island",
    rating: 4.3,
    visits: "480",
    image: "/public/rabbit.jpg",
  },
  {
    id: 6,
    title: "Ream National Park",
    location: "Sihanoukville · Park",
    rating: 4.5,
    visits: "710",
    image: "/public/ream.jpg",
  },
];

const ACTIVITIES = [
  {
    id: 10,
    title: "Angkor Wat Sunrise Tour",
    location: "Siem Reap, Cambodia",
    price: 50,
    rating: 4.8,
    reviews: 120,
    image: "/public/angkorwat.jpg",
  },
  {
    id: 11,
    title: "Mekong Sunset River Cruise",
    location: "Phnom Penh, Cambodia",
    price: 35,
    rating: 4.7,
    reviews: 98,
    image: "/public/mekongcruise.webp",
  },
  {
    id: 12,
    title: "Island Spa Day",
    location: "Koh Rong, Cambodia",
    price: 45,
    rating: 4.9,
    reviews: 143,
    image: "/public/spa.jpg",
  },
];

const StarIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="#f59e0b"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const BundleRelaxing: Component = () => {
  const navigate = useNavigate();
  const [tab, setTab] = createSignal<TabType>("All");

  const showPlaces = () => tab() === "All" || tab() === "Places";
  const showActivities = () => tab() === "All" || tab() === "Activities";

  return (
    <>
      <NavigationBar />
      <div class={styles.page}>
        <div class={styles.header}>
          <button class={styles.backBtn} onClick={() => navigate("/travelbundle")}>
            ← back
          </button>
          <h1>Relaxing in Cambodia</h1>
          <p>Add hotels, activities and dining to your trip</p>

          <div class={styles.tabs}>
            <For each={["All", "Activities", "Places"] as TabType[]}>
              {(t) => (
                <button
                  class={`${styles.tab} ${tab() === t ? styles.active : ""}`}
                  onClick={() => setTab(t)}
                >
                  {t}
                </button>
              )}
            </For>
          </div>
        </div>

        <Show when={showPlaces()}>
          {/* Popular Destinations */}
          <section class={styles.section}>
            <h2 class={styles.sectionTitle}>Popular Destinations</h2>
            <div class={styles.cardGrid}>
              <For each={POPULAR_PLACES}>
                {(place) => (
                  <div
                    class={styles.placeCard}
                    style={{ cursor: place.id === 1 ? "pointer" : "default" }}
                    onClick={() => {
                      if (place.id === 1) navigate("/travelbundle/placeDetail");
                    }}
                  >
                    <img src={place.image} alt={place.title} loading="lazy" />
                    <div class={styles.placeBody}>
                      <div class={styles.placeTitle}>{place.title}</div>
                      <div class={styles.placeLocation}>{place.location}</div>
                      <div class={styles.placeMeta}>
                        <StarIcon />
                        <span>{place.rating}</span>
                        <span class={styles.muted}>· {place.visits} visits</span>
                      </div>
                      <button
                        class={`${styles.btnAdd} ${isInTrip(place.id) ? styles.added : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleTripItem({
                            id: place.id,
                            title: place.title,
                            location: place.location,
                            image: place.image,
                            type: "place",
                          });
                        }}
                      >
                        {isInTrip(place.id) ? "✓ Added" : "Add"}
                      </button>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </section>

          {/* Hidden Gems */}
          <section class={styles.section}>
            <h2 class={styles.sectionTitle}>Hidden gems – underrated spots.</h2>
            <div class={styles.cardGrid}>
              <For each={HIDDEN_GEMS}>
                {(place) => (
                  <div class={styles.placeCard}>
                    <img src={place.image} alt={place.title} loading="lazy" />
                    <div class={styles.placeBody}>
                      <div class={styles.placeTitle}>{place.title}</div>
                      <div class={styles.placeLocation}>{place.location}</div>
                      <div class={styles.placeMeta}>
                        <StarIcon />
                        <span>{place.rating}</span>
                        <span class={styles.muted}>· {place.visits} visits</span>
                      </div>
                      <button
                        class={`${styles.btnAdd} ${isInTrip(place.id) ? styles.added : ""}`}
                        onClick={() =>
                          toggleTripItem({
                            id: place.id,
                            title: place.title,
                            location: place.location,
                            image: place.image,
                            type: "place",
                          })
                        }
                      >
                        {isInTrip(place.id) ? "✓ Added" : "Add"}
                      </button>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </section>
        </Show>

        
        <Show when={showActivities()}>
          <section class={styles.section}>
            <h2 class={styles.sectionTitle}>Activities</h2>
            <div class={styles.cardGrid}>
              <For each={ACTIVITIES}>
                {(act) => (
                  <div class={styles.activityCard}>
                    <img src={act.image} alt={act.title} loading="lazy" />
                    <div class={styles.activityBody}>
                      <div class={styles.activityTitle}>{act.title}</div>
                      <div class={styles.activityLocation}>{act.location}</div>
                      <div class={styles.activityPrice}>
                        From ${act.price} per person
                      </div>
                      <div class={styles.activityFooter}>
                        <button
                          class={`${styles.btnSelect} ${isInTrip(act.id) ? styles.added : ""}`}
                          onClick={() =>
                            toggleTripItem({
                              id: act.id,
                              title: act.title,
                              location: act.location,
                              image: act.image,
                              type: "activity",
                              price: act.price,
                            })
                          }
                        >
                          {isInTrip(act.id) ? "✓ Added" : "Select"}
                        </button>
                        <div class={styles.activityRating}>
                          <StarIcon />
                          <span>{act.rating}</span>
                          <span class={styles.muted}>({act.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </section>
        </Show>

       
        <div class={styles.tripBar}>
          <div class={styles.tripBarLeft}>
            <span class={styles.tripBarTitle}>
              My Trip · {tripItems().length} places added
            </span>
            <span class={styles.tripBarSub}>
              {tripItems().length === 0
                ? "Add places above to start building"
                : "Keep adding or view your trip"}
            </span>
          </div>
          <button
            class={styles.btnViewTrip}
            onClick={() => navigate("/travelbundle/tripSummary")}
          >
            View my trip
          </button>
        </div>
      </div>
    </>
  );
};

export default BundleRelaxing;