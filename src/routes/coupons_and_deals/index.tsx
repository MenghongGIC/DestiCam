import { Title } from "@solidjs/meta";
import { For } from "solid-js";

import styles from "./index.module.css";

// Components
import NavigationBar from "~/components/NavigationBar";

// Types & Data
import type { coupon_info_type } from "./data";
import { data } from "./data";

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CouponsAndDeals() {
  // ref for toast DOM manipulation
  let toastRef!: HTMLDivElement;
  let toastTimer: ReturnType<typeof setTimeout>;

  function showToast(message: string) {
    clearTimeout(toastTimer);

    toastRef.innerHTML = `<i class="fas fa-gift" style="margin-right:8px"></i>${message}`;
    toastRef.style.opacity = "1";
    toastRef.style.pointerEvents = "none";

    toastTimer = setTimeout(() => {
      toastRef.style.opacity = "0";
    }, 2500);
  }

  function copyCode(code: string) {
    navigator.clipboard
      .writeText(code)
      .then(() => showToast(`✅ Coupon "${code}" copied! Apply at checkout.`))
      .catch(() => showToast(`✨ Coupon code: ${code} — use at payment step.`));
  }

  return (
    <>
      <Title>DestiCam - Coupons &amp; Exclusive Deals</Title>

      <main class={styles.main}>
        <div class={styles.container}>
          {/* ── NAVBAR ─────────────────────────────────────────────────────── */}
          <NavigationBar />

          {/* ── HERO ───────────────────────────────────────────────────────── */}
          <HeroSection
            onHeroBadgeClick={() =>
              showToast("🎁 New deals every week! Check back for KHQR payment promo.")
            }
          />

          {/* ── SECTION HEADER ─────────────────────────────────────────────── */}
          <div class={styles.section_header}>
            <div class={styles.section_title}>
              🔥 Today's Hot Coupons
              <span class={styles.new_badge}>new</span>
            </div>
            <div class={styles.update_text}>
              <i class="fas fa-sync-alt" /> Updated daily
            </div>
          </div>

          {/* ── COUPONS GRID ───────────────────────────────────────────────── */}
          <div class={styles.coupons_grid}>
            <For each={data}>
              {(coupon_info) => (
                <CouponCard
                  coupon_info={coupon_info}
                  onCopy={() => copyCode(coupon_info.code)}
                  onCardClick={() =>
                    showToast(`🎫 ${coupon_info.title}: use code ${coupon_info.code}`)
                  }
                />
              )}
            </For>
          </div>

          {/* ── EXCLUSIVE BANNER ───────────────────────────────────────────── */}
          <div class={styles.exclusive_banner}>
            <h3>
              <i class="fas fa-map-marked-alt" /> Hidden Local Gem Card
            </h3>
            <div>
              <p>
                ✨ Unlock 20% off on secret waterfall tours &amp; local homestay
                experiences. Use code:{" "}
                <strong class={styles.secret_code}>SECRET20</strong>
              </p>
            </div>
            <button
              class={styles.btn_claim}
              on:click={() => copyCode("SECRET20")}
            >
              Claim now →
            </button>
          </div>

          {/* ── BUNDLE SECTION ─────────────────────────────────────────────── */}
          <div class={styles.bundle_section}>
            <div>
              <span class={styles.bundle_badge}>⭐ Bundle &amp; Save</span>
              <h3>Plan your Cambodia Trip with Travel Bundle</h3>
              <p>Accommodation + Transport + Activities → extra 12% OFF</p>
            </div>
            <button
              class={styles.btn_bundle}
              on:click={() =>
                showToast(
                  '🎒 Travel Bundle: custom trip with extra 12% off! Head to "Bundle" page'
                )
              }
            >
              Create your bundle
            </button>
          </div>

          {/* ── FOOTER ─────────────────────────────────────────────────────── */}
          <div class={styles.footer}>
            <i class="fas fa-credit-card" /> Pay with KHQR / Bakong • Local
            support • Verified by DestiCam team{" "}
            <i class="fas fa-location-dot" /> Cambodia trusted platform
          </div>
        </div>

        {/* ── TOAST (ref-controlled) ─────────────────────────────────────── */}
        <div ref={toastRef} class={styles.toast} style={{ opacity: "0" }} />
      </main>
    </>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection({ onHeroBadgeClick }: { onHeroBadgeClick: () => void }) {
  return (
    <div class={styles.hero}>
      <div class={styles.hero_left}>
        <h1>
          <i class="fas fa-ticket-alt" /> Coupons &amp; Exclusive Deals
        </h1>
        <p>
          Unlock secret discounts on stays, tours &amp; activities. Verified
          offers for Angkor Wat, Koh Rong, Phnom Penh and hidden gems.
        </p>
      </div>
      <div class={styles.hero_badge} on:click={onHeroBadgeClick}>
        <i class="fas fa-gem" />
        <span>Limited time · Up to 40% OFF</span>
      </div>
    </div>
  );
}

// ─── Coupon Card ──────────────────────────────────────────────────────────────
function CouponCard({
  coupon_info,
  onCopy,
  onCardClick,
}: {
  coupon_info: coupon_info_type;
  onCopy: () => void;
  onCardClick: () => void;
}) {
  let cardRef!: HTMLDivElement;

  return (
    <div
      ref={cardRef}
      class={styles.coupon_card}
      on:click={(e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest(`.${styles.btn_copy}`)) {
          onCardClick();
        }
      }}
    >
      {/* Card image */}
      <div
        class={styles.card_image}
        style={{ "background-image": `url(${coupon_info.image})` }}
      >
        <div class={styles.discount_tag}>{coupon_info.discount}</div>
      </div>

      {/* Card content */}
      <div class={styles.card_content}>
        <div class={styles.card_title}>{coupon_info.title}</div>
        <div class={styles.card_desc}>{coupon_info.description}</div>
        <div class={styles.coupon_code}>
          <i class="fas fa-tag" /> {coupon_info.code}
        </div>
        <div class={styles.valid_date}>
          <i class="far fa-clock" /> {coupon_info.validTill}
        </div>
        <button
          class={styles.btn_copy}
          on:click={(e: MouseEvent) => {
            e.stopPropagation();
            onCopy();
          }}
        >
          <i class="fas fa-copy" /> Get Code / Copy
        </button>
      </div>
    </div>
  );
}
