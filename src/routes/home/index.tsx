import { Title, Link } from "@solidjs/meta";
import { Component, createSignal, Show } from "solid-js";
import { useNavigate } from "@solidjs/router";
import styles from "./index.module.css";
import { destinations, gems, Destination, Gem } from "./data";

import Datepicker from "~/components/Datepicker";
import Footer from "~/components/footer/footer";
import Logo from "~/components/logo/logo";
import Card from "~/components/card/card";
import Button from "~/components/button/button";
import NavigationBar from "~/components/NavigationBar";


interface TabConfig {
  label: string;
  icon: string;
}

interface SearchFormState {
  location: string;
  dateStart: string;
  dateEnd: string;
  travelers: string;
  guests?: string;
  vehicle?: string;
}

const App: Component = () => {
  const navigate = useNavigate();
  const [showCalendar, setShowCalendar] = createSignal(false);
  const [dateLabel, setDateLabel] = createSignal("Oct 05 - Oct 12");
  const [activeTab, setActiveTab] = createSignal<string>("Hotels");

  const [selectedDestination, setSelectedDestination] = createSignal<Destination | null>(null);
  const [selectedGem, setSelectedGem] = createSignal<Gem | null>(null);

  const [formState, setFormState] = createSignal<SearchFormState>({
    location: "",
    dateStart: "",
    dateEnd: "",
    travelers: "2 Adults, 1 Room",
  });
  const handleDate = (date: Date) => { 
    setDateLabel(date.toDateString());
    setShowCalendar(false);
  };

  const handleFormChange = (field: keyof SearchFormState, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
  };
  
  const tabs: TabConfig[] = [
    { label: "Hotels", icon: "hotel" },
    { label: "Transport", icon: "directions_bus" },
    { label: "Tour Guides", icon: "person_pin_circle" },
    { label: "Things To Do", icon: "local_activity" },
    { label: "Coupon & Deals", icon: "workspace_premium" },
    { label: "Travel Bundles", icon: "card_travel" },
  ];
  // Render form fields based on active tab
  const renderTabSpecificFields = () => {
    switch (activeTab()) {
      case "Hotels":
        return (
          <>
            <div class={styles.searchField}>
              <p class={styles.searchLabel}>Location</p>
              <div class={styles.inputWrapper}>
                <span class={`material-symbols-outlined ${styles.inputIcon}`}>location_on</span>
                <input 
                  class={styles.input} 
                  type="text" 
                  placeholder="Where are you going?" 
                  value={formState().location}
                  onInput={(e: InputEvent & { currentTarget: HTMLInputElement }) => handleFormChange("location", e.currentTarget.value)}
                />
              </div>
            </div>

            <div class={styles.searchField}>
              <p class={styles.searchLabel}>Dates</p>
              <div class={styles.inputWrapper}>
                <span class={`material-symbols-outlined ${styles.inputIcon}`}>calendar_month</span>
                <input
                  class={styles.input}
                  type="text"
                  placeholder="Oct 05 - Oct 12"
                  value={dateLabel()}
                  readOnly
                  onClick={() => setShowCalendar(s => !s)}
                />
              </div>
              <Show when={showCalendar()}>
                <div class={styles.datepickerWrapper}>
                  <Datepicker label_class={styles.hiddenLabel} />
                </div>
              </Show>
            </div>

            <div class={styles.searchField}>
              <p class={styles.searchLabel}>Rooms & Guests</p>
              <div class={styles.inputWrapper}>
                <span class={`material-symbols-outlined ${styles.inputIcon}`}>group</span>
                <input 
                  class={styles.input} 
                  type="text" 
                  placeholder="2 Adults, 1 Room" 
                  value={formState().travelers}
                  onInput={(e: InputEvent & { currentTarget: HTMLInputElement }) => handleFormChange("travelers", e.currentTarget.value)}
                />
              </div>
            </div>
          </>
        );

      case "Transport":
        return (
          <>
            <div class={styles.searchField}>
              <p class={styles.searchLabel}>Pickup Location</p>
              <div class={styles.inputWrapper}>
                <span class={`material-symbols-outlined ${styles.inputIcon}`}>location_on</span>
                <input 
                  class={styles.input} 
                  type="text" 
                  placeholder="Where are you going?" 
                  value={formState().location}
                  onInput={(e: InputEvent & { currentTarget: HTMLInputElement }) => handleFormChange("location", e.currentTarget.value)}
                />
              </div>
            </div>

            <div class={styles.searchField}>
              <p class={styles.searchLabel}>Vehicle Type</p>
              <div class={styles.inputWrapper}>
                <span class={`material-symbols-outlined ${styles.inputIcon}`}>two_wheeler</span>
                <input 
                  class={styles.input} 
                  type="text" 
                  placeholder="Car, Bike, Bus" 
                  value={formState().vehicle || ""}
                  onInput={(e: InputEvent & { currentTarget: HTMLInputElement }) => handleFormChange("vehicle", e.currentTarget.value)}
                />
              </div>
            </div>
          </>
        );

      case "Tour Guides":
        return (
          <>
            <div class={styles.searchField}>
              <p class={styles.searchLabel}>Destination</p>
              <div class={styles.inputWrapper}>
                <span class={`material-symbols-outlined ${styles.inputIcon}`}>location_on</span>
                <input 
                  class={styles.input} 
                  type="text" 
                  placeholder="Where are you going?" 
                  value={formState().location}
                  onInput={(e: InputEvent & { currentTarget: HTMLInputElement }) => handleFormChange("location", e.currentTarget.value)}
                />
              </div>
            </div>

            <div class={styles.searchField}>
              <p class={styles.searchLabel}>Tour Date</p>
              <div class={styles.inputWrapper}>
                <span class={`material-symbols-outlined ${styles.inputIcon}`}>calendar_month</span>
                <input
                  class={styles.input}
                  type="text"
                  placeholder="Oct 05 - Oct 12"
                  value={dateLabel()}
                  readOnly
                  onClick={() => setShowCalendar(s => !s)}
                />
              </div>
              <Show when={showCalendar()}>
                <div class={styles.datepickerWrapper}>
                  <Datepicker label_class={styles.hiddenLabel} />
                </div>
              </Show>
            </div>
          </>
        );

      case "Things To Do":
      case "Coupon & Deals":
      case "Travel Bundles":
      default:
        return (
          <div class={styles.searchField}>
            <p class={styles.searchLabel}>Search</p>
            <div class={styles.inputWrapper}>
              <span class={`material-symbols-outlined ${styles.inputIcon}`}>search</span>
              <input 
                class={styles.input} 
                type="text" 
                placeholder="What are you looking for?" 
                value={formState().location}
                onInput={(e: InputEvent & { currentTarget: HTMLInputElement }) => handleFormChange("location", e.currentTarget.value)}
              />
            </div>
          </div>
        );
    }
  };

  return (<>
    <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
    <div class={styles.wrapper}>
      {/* ── HEADER ── */}
      <NavigationBar/>

      <main class={styles.main}>
        {/* ── HERO ── */}
        <section class={styles.hero}>
          <div class={styles.heroBg}>
            <img
              src="Hero_Bg.jpg"
              alt="Sunrise over Angkor Wat"
              class={styles.heroBgImg}
            />
            <div class={styles.heroOverlay} />
          </div>

          <div class={styles.heroContent}>
            <div class={styles.heroText}>
              <h2 class={styles.heroHeading}>Discover the Magic of Cambodia</h2>
              <p class={styles.heroSubtitle}>
                Book your entire journey: From heritage hotels to local legendary guides.
              </p>
            </div>

            {/* Search Box */}
            <div class={styles.searchBox}>
              {/* Tabs */}
              <div class={styles.searchTabs}>
                {tabs.map((tab) => (
                  <button
                    class={`${styles.searchTab} ${activeTab() === tab.label ? styles.searchTabActive : ""}`}
                    onClick={() => setActiveTab(tab.label)}
                    type="button"
                  >
                    <span class="material-symbols-outlined">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Inputs - Dynamic based on tab */}
              <div class={styles.searchInputRow}>
                {renderTabSpecificFields()}

                <button type="button" class={styles.searchBtn} onClick={() => navigate("/accommodation")}>
                  <span class="material-symbols-outlined">search</span>
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── DESTINATIONS ── */}
        <section class={styles.destSection}>
          <div class={styles.destHeader}>
            <div>
              <h3 class={styles.sectionTitle}>Featured Destinations</h3>
              <p class={styles.sectionSubtitle}>Explore the most visited cities in the Kingdom of Wonder</p>
            </div>
            <a href="#" class={styles.viewAll}>
              View all <span class="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>

          <div class={styles.destGrid}>
            {destinations.map((d) => (
              <div class={styles.destCard} onClick={() => setSelectedDestination(d)} style="cursor: pointer;">
                <div class={styles.destImgWrap}>
                  <img src={d.img} alt={d.name} class={styles.destImg} />
                  <div class={styles.destGradient} />
                  <div class={styles.destInfo}>
                    <h4 class={styles.destName}>{d.name}</h4>
                    <p class={styles.destProps}>
                      <span class="material-symbols-outlined">hotel</span>
                      {d.properties} properties
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Show when={selectedDestination()}>
        {(dest) => (
          <div class={styles.modalOverlay} onClick={() => setSelectedDestination(null)}>
            <div class={styles.modalCard} onClick={(e: MouseEvent) => e.stopPropagation()}>
              <button class={styles.modalClose} onClick={() => setSelectedDestination(null)}>
                <span class="material-symbols-outlined">close</span>
              </button>
              <img src={dest().img} alt={dest().name} class={styles.modalImg} />
              <div class={styles.modalBody}>
              <div class={styles.modalTag}>{dest().tag}</div>
                <h2 class={styles.modalTitle}>{dest().name}</h2>
                  <p class={styles.modalDesc}>{dest().description}</p>
                  <p class={styles.modalWeather}>
                    <span class="material-symbols-outlined">wb_sunny</span>
                {dest().weather}
                  </p>
              <div class={styles.modalMeta}>
                <span class="material-symbols-outlined">hotel</span>
                <span>{dest().properties} properties</span>
              </div>
              <div class={styles.modalHighlights}>
                {dest().highlights.map((h) => (
                  <span class={styles.highlightChip}>{h}</span>
                ))}
              </div>
              <button class={styles.modalBookBtn}>Explore {dest().name}</button>
            </div>
            </div>
          </div>
        )}
      </Show>

        {/* ── HIDDEN GEMS ── */}
        <section class={styles.gemsSection}>
          <div class={styles.gemsInner}>
            <div class={styles.gemsHeadingRow}>
              <div class={styles.gemsAccentBar} />
              <h3 class={styles.gemsSectionTitle}>Hidden Local Gems</h3>
            </div>

            <div class={styles.gemsGrid}>
              {gems.map((g) => (
                <div class={styles.gemCard} onClick={() => setSelectedGem(g)} style="cursor: pointer;">
                  <div class={styles.gemImgWrap}>
                    <img src={g.img} alt={g.title} class={styles.gemImg} />
                  </div>
                  <div class={styles.gemBody}>
                    <h5 class={styles.gemTitle}>{g.title}</h5>
                    <p class={styles.gemDesc}>{g.desc}</p>
                    <div class={styles.gemMeta}>
                      <span class={styles.gemPrice}>{g.price}</span>
                      <span class={styles.gemRating}>
                        <span class="material-symbols-outlined">star</span>
                        {g.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>
        <Show when={selectedGem()}>
        {(gem) => (
          <div class={styles.modalOverlay} onClick={() => setSelectedGem(null)}>
            <div class={styles.modalCard} onClick={(e: MouseEvent) => e.stopPropagation()}>
              <button class={styles.modalClose} onClick={() => setSelectedGem(null)}>
                <span class="material-symbols-outlined">close</span>
              </button>
              <img src={gem().img} alt={gem().title} class={styles.modalImg} />
              <div class={styles.modalBody}>
                <h2 class={styles.modalTitle}>{gem().title}</h2>
                  <p class={styles.modalDesc}>{gem().details}</p>
                <div class={styles.modalInfoRow}>
                  <span><span class="material-symbols-outlined">schedule</span>{gem().duration}</span>
                  <span><span class="material-symbols-outlined">group</span>{gem().groupSize}</span>
                </div>
                <div class={styles.modalHighlights}>
                  {gem().includes.map((i) => (
                    <span class={styles.highlightChip}>{i}</span>
                  ))}
                </div>
                <div class={styles.modalMeta}>
                  <span class={styles.gemPrice}>{gem().price}</span>
                  <span class={styles.gemRating}>
                    <span class="material-symbols-outlined">star</span>
                    {gem().rating}
                  </span>
                </div>
                <button class={styles.modalBookBtn}>Book Now</button>
              </div>
            </div>
          </div>
        )}
      </Show>
      </main>
      <Footer />
    </div>
  </>);
};

export default App;
