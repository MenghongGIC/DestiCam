import { Component, createSignal, For } from "solid-js";
import { useNavigate } from "@solidjs/router";
import styles from "./index.module.css";
import NavigationBar from "~/components/NavigationBar";

const RECOMMENDED_BUNDLES = [
  {
    id: 1,
    title: "Koh Rong Escape",
    image: "/public/beaches2.jpg",
    duration: "3 days · Sihanoukville",
    highlights: ["Koh Rong beach", "Island Spa", "Sunset cruise"],
  },
  {
    id: 2,
    title: "Koh Rong Escape",
    image: "/public/beaches2.jpg",
    duration: "3 days · Sihanoukville",
    highlights: ["Koh Rong beach", "Island Spa", "Sunset cruise"],
  },
  {
    id: 3,
    title: "Koh Rong Escape",
    image: "/public/beaches2.jpg",
    duration: "3 days · Sihanoukville",
    highlights: ["Koh Rong beach", "Island Spa", "Sunset cruise"],
  },
];

const VIBES = [
  { id: "relaxing",  label: "Relaxing",  sub: "beaches · spas · sunsets",     image: "/public/beaches2.jpg" },
  { id: "cultural",  label: "Cultural",  sub: "temples · history · food",      image: "/public/cultural.jpg" },
  { id: "adventure", label: "Adventure", sub: "jungle · kayak · trek",         image: "/public/kayak.jpg" },
  { id: "foodie",    label: "Foodie",    sub: "markets · cook · restaurants",  image: "/public/foodie.jpg" },
  { id: "wellness",  label: "Wellness",  sub: "yoga · nature",                 image: "/public/wellness.jpg" },
  { id: "budget",    label: "Budget",    sub: "local · affordable",            image: "/public/budget.jpg" },
];

const index: Component = () => {
  const navigate = useNavigate();
  const [selectedBundle, setSelectedBundle] = createSignal<number | null>(null);

  return (
    <>
    <NavigationBar/>
  
    <div class={styles.page}>
      
      {/* Hero */}
      <div class={styles.hero}>
        <h1>Travel Bundles</h1>
        <p>Choose a vibe or explore ready-made experiences.</p>
      </div>

      {/* Recommended Bundles */}
      <section>
        <div class={styles.sectionHeader}>
          <h2>Our recommended bundles</h2>
          <a href="#" class={styles.viewAll}>View all →</a>
        </div>

        <div class={styles.bundleGrid}>
          <For each={RECOMMENDED_BUNDLES}>
            {(bundle) => (
              <div class={`${styles.bundleCard} ${selectedBundle() === bundle.id ? styles.selected : ""}`}>
                <img src={bundle.image} alt={bundle.title} loading="lazy" />
                <div class={styles.bundleBody}>
                  <div class={styles.bundleTitle}>{bundle.title}</div>
                  <div class={styles.bundleDuration}>{bundle.duration}</div>
                  <ul class={styles.bundleHighlights}>
                    <For each={bundle.highlights}>{(h) => <li>{h}</li>}</For>
                  </ul>
                  <div class={styles.bundleActions}>
                    <button
                      class={styles.btnOutline}
                      onClick={() => navigate(`/bundles/${bundle.id}`)}
                    >
                      View Details
                    </button>
                    <button
                      class={styles.btnPrimary}
                      onClick={() => setSelectedBundle(bundle.id)}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </section>

      {/* Vibe Picker */}
      <section class={styles.vibeSection}>
        <h2>Plan your Cambodia Trip</h2>
        <p>Start by picking the kind of experience you want.</p>

        <div class={styles.vibeGrid}>
<For each={VIBES}>
  {(vibe) => (
    <div
      class={`${styles.vibeCard} ${vibe.id !== "relaxing" ? styles.vibeCardDisabled : ""}`}
      onClick={() => {
        if (vibe.id === "relaxing") navigate("/travelbundle/relaxBundle");
      }}
    >
      <img src={vibe.image} alt={vibe.label} loading="lazy" />
      <div class={styles.vibeInfo}>
        <div class={styles.vibeLabel}>{vibe.label}</div>
        <div class={styles.vibeSub}>{vibe.sub}</div>
      </div>
    </div>
  )}
</For>
        </div>
      </section>

    </div>
  </>
  );
  
};


export default index;