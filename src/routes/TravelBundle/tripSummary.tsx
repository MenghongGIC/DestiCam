import { Component, For, createMemo } from "solid-js";
import { useNavigate } from "@solidjs/router";
import styles from "./tripSummary.module.css";
import { tripItems, removeTripItem } from "./tripState";
import NavigationBar from "~/components/NavigationBar";

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const DragIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="9" cy="5" r="1" fill="currentColor" stroke="none"/>
    <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none"/>
    <circle cx="9" cy="19" r="1" fill="currentColor" stroke="none"/>
    <circle cx="15" cy="5" r="1" fill="currentColor" stroke="none"/>
    <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none"/>
    <circle cx="15" cy="19" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

// Split items into days — 2 items per day for display
function groupIntoDays<T>(items: T[], perDay = 2): T[][] {
  const days: T[][] = [];
  for (let i = 0; i < items.length; i += perDay) {
    days.push(items.slice(i, i + perDay));
  }
  return days;
}

const TripSummary: Component = () => {
  const navigate = useNavigate();

  const days = createMemo(() => groupIntoDays(tripItems(), 2));
  const totalDays = createMemo(() => Math.max(days().length, 1));
  const activities = createMemo(() =>
    tripItems().filter((i) => i.type === "activity").length
  );
  const places = createMemo(() =>
    tripItems().filter((i) => i.type === "place").length
  );

  return (
    <>
    <NavigationBar/>
    <div class={styles.page}>

      
      <div class={styles.pageHeader}>
        <div class={styles.headerLeft}>
          <button class={styles.backBtn} onClick={() => navigate("/travelbundle/relaxBundle")}>
            ← Keep exploring
          </button>
          <h1>My trip bundle</h1>
          <span class={styles.subtitle}>
            Relax vibe · {tripItems().length} places added
          </span>
        </div>
        <div class={styles.headerActions}>
          <button class={styles.btnSave}>Save to account</button>
          <button class={styles.btnShare}>Share</button>
        </div>
      </div>

      
      <div class={styles.mainLayout}>

        
        <div>
          <For each={days()}>
            {(dayItems, dayIndex) => (
              <div class={styles.dayBlock}>
                <h2 class={styles.dayLabel}>Day {dayIndex() + 1}</h2>
                <For each={dayItems}>
                  {(item) => (
                    <div class={styles.tripItemCard}>
                      <img
                        src={item.image}
                        alt={item.title}
                        class={styles.tripItemImg}
                      />
                      <div class={styles.tripItemInfo}>
                        <div class={styles.tripItemTitle}>{item.title}</div>
                        <div class={styles.tripItemSub}>{item.location}</div>
                        <div class={styles.tripItemMeta}>
                          <StarIcon />
                          <span>4.9</span>
                          <span class={styles.muted}>· 1.2k visits</span>
                        </div>
                      </div>
                      <div class={styles.tripItemActions}>
                        <button class={styles.dragBtn} title="Reorder">
                          <DragIcon />
                        </button>
                        <button
                          class={styles.removeBtn}
                          title="Remove"
                          onClick={() => removeTripItem(item.id)}
                        >
                          <CloseIcon />
                        </button>
                      </div>
                    </div>
                  )}
                </For>
              </div>
            )}
          </For>

          
          <button
            class={styles.addMoreCard}
            onClick={() => navigate("/travelbundle/relaxBundle")}
          >
            + add a more place
          </button>
        </div>

       
        <div class={styles.summaryCard}>
          <h3>Trip Summary</h3>
          <div class={styles.summaryRow}>
            <span class={styles.summaryLabel}>Vibe</span>
            <span class={styles.summaryValue}>Relax</span>
          </div>
          <div class={styles.summaryRow}>
            <span class={styles.summaryLabel}>Places</span>
            <span class={styles.summaryValue}>{places()} places</span>
          </div>
          <div class={styles.summaryRow}>
            <span class={styles.summaryLabel}>Activities</span>
            <span class={styles.summaryValue}>{activities()} activities</span>
          </div>
          <div class={styles.summaryRow}>
            <span class={styles.summaryLabel}>Total days</span>
            <span class={styles.summaryValue}>{totalDays()} days</span>
          </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default TripSummary;