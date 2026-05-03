import { Title } from "@solidjs/meta";
import { createSignal, onMount, onCleanup, Show } from "solid-js";
import { useNavigate } from "@solidjs/router";

import styles from "./detail.module.css";

import type { HotelItem, DealItem } from "./data";
import { detailItem, detailType } from "./store";
import NavigationBar from "~/components/NavigationBar";

// ===== TIMER HOOK =====
function useTimer(hours: number, minutes: number, seconds: number) {
  const endTime = new Date();
  endTime.setHours(endTime.getHours() + hours);
  endTime.setMinutes(endTime.getMinutes() + minutes);
  endTime.setSeconds(endTime.getSeconds() + seconds);

  const [timerText, setTimerText] = createSignal(
    `${hours}h ${minutes}m ${seconds}s`
  );
  const [expired, setExpired] = createSignal(false);

  onMount(() => {
    const interval = setInterval(() => {
      const diff = endTime.getTime() - Date.now();
      if (diff <= 0) {
        setExpired(true);
        setTimerText("Offer Expired");
        clearInterval(interval);
        return;
      }
      const h = Math.floor(diff / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1_000);
      setTimerText(`${h}h ${m}m ${s}s`);
    }, 1000);
    onCleanup(() => clearInterval(interval));
  });

  return { timerText, expired };
}

// ===== HELPERS =====
function getItemName(item: DealItem): string {
  return "name" in item ? item.name : item.title;
}

function getItemPrice(item: DealItem): string {
  return "detailPrice" in item ? item.detailPrice : item.price;
}

function getItemOldPrice(item: DealItem): string {
  return "oldPrice" in item ? item.oldPrice : item.price;
}

function getItemDiscount(item: DealItem): string {
  return "discount" in item
    ? item.discount
    : `${(item as any).discountPercent}% off`;
}

function getItemLocation(item: DealItem): string {
  return "address" in item ? item.address : item.location;
}

function getItemCompany(item: DealItem): string {
  return "company" in item ? item.company : "DestiCam Travel Cambodia";
}

function getItemDescription(item: DealItem): string {
  return item.description;
}

function getItemImage(item: DealItem): string {
  return item.image || "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600";
}

function buildDealCode(item: DealItem, type: string): string {
  const id = item.id;
  return `${type.toUpperCase()}_${id}_2026`;
}

// ===== TOAST =====
function useToast() {
  const [toast, setToast] = createSignal<string | null>(null);

  function showToast(message: string) {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  }

  return { toast, showToast };
}

// ===== DETAIL PAGE =====
export default function Detail() {
  const navigate = useNavigate();
  const item = detailItem();
  const type = detailType();

  const { timerText, expired } = useTimer(10, 25, 14);
  const { toast, showToast } = useToast();

  function handleClaim() {
    if (!item) return;
    const code = buildDealCode(item, type);
    const name = getItemName(item);
    navigator.clipboard.writeText(code).catch(() => {});
    showToast(`✅ Coupon "${code}" copied! Your ${name} deal is ready.`);
  }

  return (
    <main class={styles.main}>
      <Title>DestiCam - Claim Deal</Title>
      <NavigationBar/>
      <div class={styles.container}>
        <button
          class={styles.back_btn}
          on:click={() => navigate("/coupons_and_deals")}
        >
          ← Back to Deals
        </button>

        <Show
          when={item !== null}
          fallback={
            <div class={styles.no_item}>
              <p>No deal selected. Please go back and pick one.</p>
              <button class={styles.back_btn} on:click={() => navigate("/coupons")}>
                ← Back to Deals
              </button>
            </div>
          }
        >
          <div class={styles.detail_card}>
            {/* Banner */}
            <div class={styles.banner}>
              <h2>CLAIM DEAL</h2>
              <h1>Best Travel Deals & Coupons</h1>
            </div>

            {/* Content */}
            <div class={styles.content}>
              {/* Image */}
              <div
                class={styles.detail_image}
                style={{ "background-image": `url('${getItemImage(item!)}')` }}
              />

              {/* Title */}
              <h3>{getItemName(item!)} — Special Deal</h3>
              <div class={styles.company_info}>
                🏢 Provided by {getItemCompany(item!)}
              </div>

              {/* Price Section */}
              <div class={styles.price_section}>
                <span class={styles.old_price}>
                  Regular Price: {getItemOldPrice(item!)}
                </span>
                <div class={styles.new_price}>{getItemPrice(item!)}</div>
                <div>Price per night, 2 adults</div>
                <div class={`${styles.timer} ${expired() ? styles.timer_expired : ""}`}>
                  🕐 {expired() ? "Offer Expired" : `End in ${timerText()}`}
                </div>
              </div>

              {/* Claim Button */}
              <button class={styles.claim_btn_large} on:click={handleClaim}>
                Claim This Deal Now
              </button>

              {/* Highlights */}
              <div class={styles.highlights}>
                <h4>⭐ Highlights</h4>
                <p>Save {getItemDiscount(item!)} on current rates</p>
                <p>Includes Breakfast for 2</p>
                <p>Valid until Dec 31, 2026</p>
                <p>Non-refundable</p>
              </div>

              {/* Hotel / Destination Info */}
              <div class={styles.hotel_info}>
                <h3>{getItemName(item!)}</h3>
                <div class={styles.hotel_location}>
                  📍 {getItemLocation(item!)}
                </div>
                <p>{getItemDescription(item!)}</p>
              </div>

              {/* Amenities */}
              <div class={styles.amenities}>
                <span>🛎️</span>
                <span>🍴</span>
                <span>🏨</span>
                <span>🚗</span>
                <span>🏠</span>
                <span>📷</span>
                <span>🌐</span>
                <span>🔍</span>
                <span>💬</span>
              </div>
            </div>
          </div>
        </Show>

        <div class={styles.footer}>
          💳 Pay with KHQR / Bakong • Local support • Verified by DestiCam team &nbsp;
          📍 Cambodia trusted platform
        </div>
      </div>

      {/* Toast */}
      <Show when={toast() !== null}>
        <div class={styles.toast}>🎁 {toast()}</div>
      </Show>
    </main>
  );
}
