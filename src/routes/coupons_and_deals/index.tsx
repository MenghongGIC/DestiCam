import { Title } from "@solidjs/meta";
import { createSignal, For, Show } from "solid-js";
import { useNavigate } from "@solidjs/router";

import styles from "./index.module.css";

import type { HotelItem, TransportItem, ActivityItem, SeasonalItem, DealItem, DealType } from "./data";
import { hotels, transports, activities, seasonal } from "./data";
import { setDetailItem, setDetailType } from "./store";
import NavigationBar from "~/components/NavigationBar";

type TabKey = "hotels" | "transport" | "activities" | "seasonal";

const TABS: { key: TabKey; label: string }[] = [
  { key: "hotels", label: "Hotels" },
  { key: "transport", label: "Transport" },
  { key: "activities", label: "Activities" },
  { key: "seasonal", label: "Seasonal Deals" },
];

export default function Coupons() {
  const [activeTab, setActiveTab] = createSignal<TabKey>("hotels");
  const navigate = useNavigate();

  function goToDetail(item: DealItem, type: DealType) {
    setDetailItem(item);
    setDetailType(type);
    navigate("/coupons_and_deals/detail");
  }

  return (
    <main class={styles.main}>
      <Title>DestiCam - Best Travel Deals & Coupons</Title>
      <NavigationBar/>

      <div class={styles.container}>
        <div class={styles.header}>
          <h1>Best Travel Deals & Coupons</h1>
        </div>

        <div class={styles.tab_menu}>
          <For each={TABS}>
            {(tab) => (
              <button
                class={`${styles.tab_btn} ${activeTab() === tab.key ? styles.active : ""}`}
                on:click={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            )}
          </For>
        </div>

        <Show when={activeTab() === "hotels"}>
          <div class={styles.deals_grid}>
            <For each={hotels}>
              {(hotel) => (
                <HotelCard hotel={hotel} onClaim={() => goToDetail(hotel, "hotel")} />
              )}
            </For>
          </div>
        </Show>

        <Show when={activeTab() === "transport"}>
          <div class={styles.deals_grid}>
            <For each={transports}>
              {(item) => (
                <SimpleCard item={item} onClaim={() => goToDetail(item, "transport")} />
              )}
            </For>
          </div>
        </Show>

        <Show when={activeTab() === "activities"}>
          <div class={styles.deals_grid}>
            <For each={activities}>
              {(item) => (
                <SimpleCard item={item} onClaim={() => goToDetail(item, "activity")} />
              )}
            </For>
          </div>
        </Show>

        <Show when={activeTab() === "seasonal"}>
          <div class={styles.deals_grid}>
            <For each={seasonal}>
              {(item) => (
                <SimpleCard item={item} onClaim={() => goToDetail(item, "seasonal")} />
              )}
            </For>
          </div>
        </Show>

        <div class={styles.footer}>
          💳 Pay with KHQR / Bakong • Local support • Verified by DestiCam team &nbsp;
          📍 Cambodia trusted platform
        </div>
      </div>
    </main>
  );
}

// ===== HOTEL CARD =====
function HotelCard({
  hotel,
  onClaim,
}: {
  hotel: HotelItem;
  onClaim: () => void;
}) {
  return (
    <div class={styles.hotel_card} on:click={onClaim}>
      <div
        class={styles.card_image}
        style={{ "background-image": `url('${hotel.image}')` }}
      />
      <div class={styles.card_content}>
        <div class={styles.hotel_name}>{hotel.name}</div>
        <div class={styles.location}>📍 {hotel.location}</div>
        <div class={styles.description}>{hotel.description.substring(0, 100)}...</div>
        <div class={styles.price_row}>
          <span class={styles.price}>{hotel.price}</span>
          <span class={styles.nights}>🗓 {hotel.nights}</span>
        </div>
        <button
          class={styles.claim_btn}
          on:click={(e: Event) => {
            e.stopPropagation();
            onClaim();
          }}
        >
          Claim Deal
        </button>
      </div>
    </div>
  );
}

// ===== SIMPLE CARD (Transport / Activities / Seasonal) =====
function SimpleCard({
  item,
  onClaim,
}: {
  item: TransportItem | ActivityItem | SeasonalItem;
  onClaim: () => void;
}) {
  return (
    <div class={styles.simple_card} on:click={onClaim}>
      <div
        class={styles.card_image}
        style={{ "background-image": `url('${item.image}')` }}
      />
      <div class={styles.card_content}>
        <h3>{item.title}</h3>
        <div class={styles.company}>🏢 {item.company}</div>
        <div class={styles.description}>{item.description.substring(0, 100)}...</div>
        <div class={styles.price}>{item.price}</div>
        <button
          class={styles.claim_btn}
          on:click={(e: Event) => {
            e.stopPropagation();
            onClaim();
          }}
        >
          Claim Deal
        </button>
      </div>
    </div>
  );
}
