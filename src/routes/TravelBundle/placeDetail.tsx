import { Component, createSignal, For } from "solid-js";
import { useNavigate } from "@solidjs/router";
import styles from "./placeDetail.module.css";
import NavigationBar from "~/components/NavigationBar";
import { tripItems, toggleTripItem, isInTrip } from "./tripState";

const TAGS = ["White sand beach", "Snorkeling", "Night market", "Bioluminescence"];

const NEARBY_PLACES = [
  { id: 20, title: "Koh Rong", location: "Sihanoukville · Beach", rating: 4.0, visits: "1.2k", image: "/public/kohrong.jpg" },
  { id: 21, title: "Koh Rong", location: "Sihanoukville · Beach", rating: 4.0, visits: "1.2k", image: "/public/beaches.jpg" },
  { id: 22, title: "Koh Rong", location: "Sihanoukville · Beach", rating: 4.2, visits: "1.2k", image: "/public/kohrong.jpg" },
];

const MAIN_PLACE = {
  id: 1,
  title: "Koh Rong island",
  location: "Sihanoukville · Beach · Relax vibe",
  image: "/public/beaches2.jpg",
  description:
    "Koh Rong – A tropical paradise with white-sand beaches, clear turquoise waters, and lush jungles. Ideal for relaxing, snorkeling, and exploring hidden waterfalls, with friendly local communities and fresh seafood.",
  bestTime: "November – April Dry season",
};

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const HeartIcon = (props: { filled: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={props.filled ? "#ef4444" : "none"}
    stroke={props.filled ? "#ef4444" : "#94a3b8"}
    stroke-width="2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const PlaceDetail: Component = () => {
  const navigate = useNavigate();
  const [wishlisted, setWishlisted] = createSignal(false);

  return (
    <>
      <NavigationBar />
      <div class={styles.page}>

        <button
          class={styles.backBtn}
          onClick={() => navigate("/travelbundle/relaxBundle")}
        >
          ← back
        </button>

        {/* Place Header */}
        <div class={styles.placeHeader}>
          <h1>{MAIN_PLACE.title}</h1>
          <div class={styles.placeMeta}>{MAIN_PLACE.location}</div>
          <div class={styles.tags}>
            <For each={TAGS}>
              {(tag) => <span class={styles.tag}>{tag}</span>}
            </For>
          </div>
        </div>

        {/* Hero Image */}
        <img
          src={MAIN_PLACE.image}
          alt={MAIN_PLACE.title}
          class={styles.heroImage}
        />

        {/* About */}
        <div class={styles.aboutSection}>
          <div class={styles.aboutHeader}>
            <h2>About this place</h2>
            <button
              class={`${styles.wishlistBtn} ${wishlisted() ? styles.wishlisted : ""}`}
              onClick={() => setWishlisted((v) => !v)}
            >
              <HeartIcon filled={wishlisted()} />
            </button>
          </div>
          <p class={styles.aboutText}>{MAIN_PLACE.description}</p>
          <p class={styles.bestTime}>
            <strong>Best time to visit:</strong> {MAIN_PLACE.bestTime}
          </p>

          <button
            class={`${styles.addBtn} ${isInTrip(MAIN_PLACE.id) ? styles.added : ""}`}
            onClick={() =>
              toggleTripItem({
                id: MAIN_PLACE.id,
                title: MAIN_PLACE.title,
                location: MAIN_PLACE.location,
                image: MAIN_PLACE.image,
                type: "place",
              })
            }
          >
            {isInTrip(MAIN_PLACE.id) ? "✓ Added to my trip" : "Add to my trip"}
          </button>
        </div>

        {/* Nearby */}
        <section class={styles.nearbySection}>
          <h2>Places nearby</h2>
          <div class={styles.nearbyGrid}>
            <For each={NEARBY_PLACES}>
              {(place) => (
                <div class={styles.nearbyCard}>
                  <img src={place.image} alt={place.title} loading="lazy" />
                  <div class={styles.nearbyBody}>
                    <div class={styles.nearbyTitle}>{place.title}</div>
                    <div class={styles.nearbyLocation}>{place.location}</div>
                    <div class={styles.nearbyMeta}>
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

        {/* Sticky Trip Bar */}
        <div class={styles.tripBar}>
          <div class={styles.tripBarLeft}>
            <span class={styles.tripBarTitle}>
              My trip · {tripItems().length} places added
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

export default PlaceDetail;