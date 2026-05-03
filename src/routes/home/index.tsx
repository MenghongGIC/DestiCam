import { Title, Link } from "@solidjs/meta";
import { Component, createSignal, Show } from "solid-js";
import styles from "./index.module.css";


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
  const [showCalendar, setShowCalendar] = createSignal(false);
  const [dateLabel, setDateLabel] = createSignal("Oct 05 - Oct 12");
  const [activeTab, setActiveTab] = createSignal<string>("Hotels");
  
  // Form state controlled based on active tab
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

  const destinations = [
    {
      name: "Siem Reap",
      properties: "1,240",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFumuGmkcuBH3QtwiMPtpfqRmcO_HfWPbPZNmQpQXXguTOtOp0n6tzpVlIKVomfqMpyuYGxe1U-LxIZPc4MaYY4AVIM0SDJjxChquuiWm9SbWjkLQpPrdc15wFIGmHnt3EV_mP4jTt-SMwDf6eEAns-NpsCqkSq44zQAEudEHXMS4eSu9xbPfQchdA-C5xnv6zN5mC3zyNr7YQosm6ZrcHtiUiSLCxLnt8Mzh5E7--F2jT8LhX6ppS_SYmcViMU-SlB_UvfmKTJVgd",
    },
    {
      name: "Phnom Penh",
      properties: "850",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQiLsuffMwL-TJPI2cppyou4T-VFqKFG6YrjWxaFkBBpyBizn19DphzoiH2-67hLcgObs9bYckENUHN5sk2rT158p-19oAmvT__aZoUc8Dhlupvf1zJ8cYLj8oDNw-sJN-Q1Urfr4lIi7YQcryU_ybwMuwI6nBSIrMeVWf677yWxXqA3V8OgjsdsowId55HqBunNDzYUhrCVTGYoITXWFyX5wosLpF03DyzqbF5XwBmeDP4D0L6PnPK-wxYKCXKb1MidUBBtM3Sx9V",
    },
    {
      name: "Sihanoukville",
      properties: "420",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmzAnkgMKhEDPnpCUqIwkwV-8EOOBXvFbcIqnKiymzcStktNKfS9dJ7PzjIZguip3aEYLytPX89_Im9erzm1UIuyOeL48THYJ7u8wVb-8pF2PHo_ls2YwtxeJMqyGcTu9vnXGqmPT_lUIB-JlVs4lQsC8OSykQCxdaQtnT-xL5gPDfvemricmFRvXQ9WrDLdaHrsxG2J8eMTMoC782LjasWEqrb9KITzYJgmHlPZ8aA9uH6L1__SSBvI5AtBFOWO_p9ctRAFXfnkZU",
    },
    {
      name: "Kampot",
      properties: "310",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADlsE4R2XrQPtD2547Zlu4eRSnjCpkAjf83WdVDDbDe3uqHCa46kwwVKqGObe60Gc1FFy2rvX9l4Mcifm8QG92iruJ3yrC4Iy2Sm7Br8acmYvkTm3K7AHkNTsUNlCBWwvnbVt9U5mjLRCQkYRg54Kl5Qmz-FQU0lrDU2kssG65e3lBx9jKraQz1u7olw2FuXnde2C3sT3_VEDn6sbpJTApsemLlETIQN2dSiC0bc0xwNkaxNVNP7x8W6tfZIfRYSc129XgJg2TF4NY",
    },
  ];

  const gems = [
    {
      title: "Tonlé Sap Floating Village",
      desc: "Experience the unique lifestyle of communities living on the water.",
      price: "$25 / person",
      rating: "4.9",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDit9ZW6mSU1AxuNekaPde6sR0EWQH-3YcQIvzn-31LJ_ya-CYMaugBGEXI34guqzYjeuJQY-YQitH2EWqHojBKcdil9FpE_u6a188RBHLisyslOWftAq8DY3xJjvyEu9PPwS6N0DMbWumn8HqI3Yourk62wD4tDYDudgNwt2kYx5r7rPJ_s0ehSy0QV_L6vllxy2iMGJXGZFlOJ2AEC3AHoheflrAJiQoW40Ltdm_akD7vycI17uB8VI_G1ln9DlNQBiR5ttb1_GCK",
    },
    {
      title: "Mondulkiri Jungle Trek",
      desc: "Connect with wildlife and visit ethical elephant sanctuaries.",
      price: "$45 / person",
      rating: "4.8",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcse-8FsVtoYcjcL40hKFUXtDHBlZs4s5MBj9w8B2k27BURhf6j5upUbsECM-GIPzKD7jnxWb4oglAhe7HZsXSTiX_UYqGA63fDkJoeThQOJkNHvxdC0Vw-LD0MbhNbyTaDds8WkQYLlbeZ_c1Kqnc0YmXgnFmkJ4lNRKurgJpzPr22XdOhWtkU3WKlWZafhrP-EWMgjhcJfJQPTRX51Gm5P_w3MHEttrEF9fFZyitEyGPNYtEgosWHEfjGMFtOd2g-ipxL0d6xcwF",
    },
    {
      title: "Phnom Penh Street Food Tour",
      desc: "Taste authentic flavors from the best night markets with a local expert.",
      price: "$15 / person",
      rating: "5.0",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIGcvau4q90nUzLLSBC3ZRQ__RjaoHXR8DHDBqS1ixJ5vNC8p4lQhTbrs3xSCfYF5DxVfwYKZot7bjtEnpqH4OmOR4-trE09Ulruq2CUd9biiWZRQ9gxra-bUP6IEQGlTBmHMgkNfRJFnlTIzScYJIKQfTP4_V3cda7wEHKM-XwUsbLKbKD86AqfINE-WfavlVEEQxkJFVet8m9cD3pYWG8CPVCyZMa20_mLl9VaLEJwZOnYRqdYU7UFheqVjmReloNBOL0gtvDDzd",
    },
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
                  <Datepicker />
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
                  <Datepicker />
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

                <button type="button" class={styles.searchBtn}>
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
              <div class={styles.destCard}>
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

        {/* ── HIDDEN GEMS ── */}
        <section class={styles.gemsSection}>
          <div class={styles.gemsInner}>
            <div class={styles.gemsHeadingRow}>
              <div class={styles.gemsAccentBar} />
              <h3 class={styles.gemsSectionTitle}>Hidden Local Gems</h3>
            </div>

            <div class={styles.gemsGrid}>
              {gems.map((g) => (
                <div class={styles.gemCard}>
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
      </main>
      <Footer />
    </div>
  </>);
};

export default App;
