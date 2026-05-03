import { createSignal, For, Show, type Component } from "solid-js";
import type {BadgeProps, FilterCheckboxProps, HotelCardProps, SortOption } from "./types";
import { SORT_OPTIONS } from "./types";
import { hotels } from "./data";
import styles from "./index.module.css";
import NavigationBar from "~/components/NavigationBar";

const Badge: Component<BadgeProps> = (props) => (
  <span class={`${styles.badge} ${styles[`badge--${props.type}`]}`}>{props.label}</span>
);

const HotelCard: Component<HotelCardProps> = (props) => {
  const { hotel } = props;

  return (
    <article class={styles["hotel-card"]}>
      <div class={styles["hotel-card__image-wrap"]}>
        <img
          class={styles["hotel-card__image"]}
          src={hotel.imageUrl}
          alt={hotel.name}
        />
        <Show when={hotel.imageCount !== null}>
          <div class={styles["hotel-card__image-counter"]}>
            <span class={`${styles.icon} ${styles["icon--sm"]}`}>image</span>
            1/{hotel.imageCount}
          </div>
        </Show>
      </div>

      {/* Body */}
      <div class={styles["hotel-card__body"]}>
        <div class={styles["hotel-card__top"]}>
          {/* Title row */}
          <div class={styles["hotel-card__title-row"]}>
            <h3 class={styles["hotel-card__name"]}>{hotel.name}</h3>
            <div class={styles["hotel-card__rating"]}>
              <div class={styles["hotel-card__rating-text"]}>
                <p class={styles["hotel-card__rating-label"]}>{hotel.ratingLabel}</p>
                <p class={styles["hotel-card__review-count"]}>
                  {hotel.reviewCount.toLocaleString()} reviews
                </p>
              </div>
              <div class={styles["hotel-card__score"]}>{hotel.rating}</div>
            </div>
          </div>

          {/* Location */}
          <div class={styles["hotel-card__location"]}>
            <span class={`${styles.icon} ${styles["icon--sm"]}`}>location_on</span>
            <span>{hotel.location}</span>
            <span class={styles["hotel-card__dot"]}>•</span>
            <button type="button" class={styles["hotel-card__map-link"]}>
              Show on map
            </button>
          </div>

          {/* Badges */}
          <div class={styles["hotel-card__badges"]}>
            <For each={hotel.badges}>
              {(badge) => <Badge label={badge.label} type={badge.type} />}
            </For>
          </div>
        </div>

        {/* Footer */}
        <div class={styles["hotel-card__footer"]}>
          <div class={styles["hotel-card__price"]}>
            <Show when={hotel.originalPrice !== null}>
              <p class={styles["hotel-card__original-price"]}>${hotel.originalPrice}</p>
            </Show>
            <p class={styles["hotel-card__current-price"]}>${hotel.price}</p>
            <p class={styles["hotel-card__price-note"]}>includes taxes and fees</p>
          </div>
          <button type="button" class={`${styles.btn} ${styles["btn--primary"]}`}>
            Check Availability
          </button>
        </div>
      </div>
    </article>
  );
};
const FilterCheckbox: Component<FilterCheckboxProps> = (props) => {
  const [checked, setChecked] = createSignal<boolean>(
    props.defaultChecked ?? false
  );

  return (
    <label class={styles["filter-checkbox"]}>
      <input
        type="checkbox"
        class={styles["filter-checkbox__input"]}
        checked={checked()}
        onChange={() => setChecked((prev) => !prev)}
      />
      <span class={styles["filter-checkbox__label"]}>{props.label}</span>
    </label>
  );
};
const Sidebar: Component = () => (
  <aside class={styles.sidebar}>
    <div class={styles["sidebar__card"]}>
      <div class={styles["sidebar__header"]}>
        <h2 class={styles["sidebar__title"]}>Filters</h2>
        <button type="button" class={styles["sidebar__reset"]}>
          Reset all
        </button>
      </div>

      {/* Price per night */}
      <div class={styles["filter-group"]}>
        <h3 class={styles["filter-group__title"]}>
          <span class={styles.icon}>payments</span> Price per night
        </h3>
        <div class={styles["price-range"]}>
          <div class={styles["price-range__track"]}>
            <div class={styles["price-range__fill"]} />
            <div class={`${styles["price-range__thumb"]} ${styles["price-range__thumb--left"]}`} />
            <div class={`${styles["price-range__thumb"]} ${styles["price-range__thumb--right"]}`} />
          </div>
          <div class={styles["price-range__labels"]}>
            <span>$0</span>
            <span>$500+</span>
          </div>
        </div>
      </div>

      {/* Star Rating */}
      <div class={styles["filter-group"]}>
        <h3 class={styles["filter-group__title"]}>
          <span class={styles.icon}>star</span> Star Rating
        </h3>
        <div class={styles["filter-group__options"]}>
          <FilterCheckbox label="5 Stars ★★★★★" defaultChecked={true} />
          <FilterCheckbox label="4 Stars ★★★★" />
          <FilterCheckbox label="3 Stars ★★★" />
        </div>
      </div>
      {/* Property Type */}
      <div class={styles["filter-group"]}>
        <h3 class={styles["filter-group__title"]}>
          <span class={styles.icon}>apartment</span> Property Type
        </h3>
        <div class={styles["filter-group__options"]}>
          <FilterCheckbox label="Hotel" defaultChecked={true} />
          <FilterCheckbox label="Homestay" />
          <FilterCheckbox label="Resort" />
        </div>
      </div>

      {/* Amenities */}
      <div class={styles["filter-group"]}>
        <h3 class={styles["filter-group__title"]}>
          <span class={styles.icon}>wifi</span> Amenities
        </h3>
        <div class={styles["filter-group__options"]}>
          <FilterCheckbox label="Free Wi-Fi" />
          <FilterCheckbox label="Swimming Pool" />
          <FilterCheckbox label="Breakfast Included" />
        </div>
      </div>
    </div>
  </aside>
);
const App: Component = () => {
  const [sortBy, setSortBy] = createSignal<SortOption>("Recommended");

  const handleSortChange = (e: Event): void => {
    const target = e.currentTarget as HTMLSelectElement;
    setSortBy(target.value as SortOption);
  };

  return (
    <div class={styles.app}>
      <NavigationBar />
      {/* ── Main ── */}
      <main class={styles.main}>
        <div class={styles.layout}>
          <Sidebar />

          <section class={styles.results} aria-label="Hotel results">
            <div class={styles["results__toolbar"]}>
              <h2 class={styles["results__count"]}>124 properties found in Siem Reap</h2>
              <div class={styles["results__sort"]}>
                <label class={styles["results__sort-label"]} for="sort-select">
                  Sort by:
                </label>
                <select
                  id="sort-select"
                  class={styles["results__sort-select"]}
                  value={sortBy()}
                  onChange={handleSortChange}
                >
                  <For each={SORT_OPTIONS}>
                    {(opt) => <option value={opt}>{opt}</option>}
                  </For>
                </select>
              </div>
            </div>

            <For each={hotels}>
              {(hotel) => <HotelCard hotel={hotel} />}
            </For>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;