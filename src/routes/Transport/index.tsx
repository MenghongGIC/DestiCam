import { createSignal, For, createMemo, Show } from "solid-js";
import { transportData, TransportItem } from "./data";
import NavigationBar from "~/components/NavigationBar";
import Dropdown from "~/components/Dropdown";
import Datepicker from "~/components/Datepicker";
import styles from "./index.module.css";

export default function TransportPage() {
  const [view, setView] = createSignal<'list' | 'booking'>('list');
  const [selectedTransport, setSelectedTransport] = createSignal<TransportItem | null>(null);

  // Filter signals
  const [fromCity, setFromCity] = createSignal('Siem Reap');
  const [toCity, setToCity] = createSignal('Phnom Penh');
  const [priceRange, setPriceRange] = createSignal({ min: 0, max: 1000 });
  const [departureDate, setDepartureDate] = createSignal('2026-03-15');
  const [travelers, setTravelers] = createSignal('1 Passenger');
  const [transportType, setTransportType] = createSignal('All');

  // Collapsible sections state
  const [showPrice, setShowPrice] = createSignal(true);
  const [showDeparture, setShowDeparture] = createSignal(true);
  const [showDuration, setShowDuration] = createSignal(true);
  const [showCompany, setShowCompany] = createSignal(true);

  const allOpen = () => showPrice() && showDeparture() && showDuration() && showCompany();

  const toggleAllFilters = () => {
    const targetState = !allOpen();
    setShowPrice(targetState);
    setShowDeparture(targetState);
    setShowDuration(targetState);
    setShowCompany(targetState);
  };

  const filteredData = createMemo(() => {
    return transportData.filter(item => {
      const matchFrom = item.from.toLowerCase().includes(fromCity().toLowerCase());
      const matchTo = item.to.toLowerCase().includes(toCity().toLowerCase());
      const matchPrice = item.price >= priceRange().min && item.price <= priceRange().max;
      const matchType = transportType() === 'All' || item.type.toLowerCase() === transportType().toLowerCase();
      return matchFrom && matchTo && matchPrice && matchType;
    });
  });

  const handleBookNow = (item: TransportItem) => {
    setSelectedTransport(item);
    setView('booking');
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setView('list');
    setSelectedTransport(null);
  };

  return (
    <div class={styles.pageContainer}>
      <NavigationBar />

      <Show when={view() === 'list'}>
        <div class={styles.searchHeader}>
          <div class={styles.searchGrid}>
            {/* Row 1 */}
            <div class={styles.inputGroup}>
              <label class={styles.formLabel}>From</label>
              <select class={styles.select} value={fromCity()} onInput={(e) => setFromCity(e.currentTarget.value)}>
                <option>Siem Reap</option>
                <option>Phnom Penh</option>
                <option>Sihanoukville</option>
                <option>Battambang</option>
                <option>Kampot</option>
              </select>
            </div>
            
            <div class={styles.inputGroup}>
              <Datepicker 
                id="departure-date"
                label="Departure Date" 
                default_date={departureDate()} 
                datepicker_class={styles.input}
                label_class={styles.formLabel}
                onChange={(val) => setDepartureDate(val)}
              />
            </div>

            <div class={styles.inputGroup}>
              <label class={styles.formLabel}>Travelers</label>
              <select class={styles.select} value={travelers()} onInput={(e) => setTravelers(e.currentTarget.value)}>
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3 Passengers</option>
                <option>4+ Passengers</option>
              </select>
            </div>

            {/* Row 2 */}
            <div class={styles.inputGroup}>
              <label class={styles.formLabel}>To</label>
              <select class={styles.select} value={toCity()} onInput={(e) => setToCity(e.currentTarget.value)}>
                <option>Phnom Penh</option>
                <option>Siem Reap</option>
                <option>Sihanoukville</option>
                <option>Battambang</option>
                <option>Kampot</option>
              </select>
            </div>

            <div class={styles.inputGroup}>
              <Datepicker 
                id="return-date"
                label="Return Date (Optional)" 
                datepicker_class={styles.input} 
                label_class={styles.formLabel}
              />
            </div>

            <div class={styles.inputGroup}>
              <label class={styles.formLabel}>Transport Type</label>
              <select class={styles.select} value={transportType()} onInput={(e) => setTransportType(e.currentTarget.value)}>
                <option>All</option>
                <option value="BUS">Bus</option>
                <option value="Flight">Flight</option>
              </select>
            </div>
          </div>
        </div>

        <div class={styles.mainContent}>
          <aside class={styles.sidebar}>
            <div class={styles.sidebarHeader}>
              <button class={styles.toggleAllBtn} onClick={toggleAllFilters}>
                {allOpen() ? "Hide all filters" : "Show all filters"}
              </button>
            </div>
            <div class={styles.filterSection}>
              <h3 onClick={() => setShowPrice(!showPrice())} class={styles.collapsibleHeader}>
                Price Range:
                <svg class={`${styles.chevron} ${showPrice() ? styles.chevronOpen : ""}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
              </h3>
              <Show when={showPrice()}>
                <div class={styles.priceInputs}>
                  <div class={styles.inputGroupFilter}>
                    <label>From:</label>
                    <input type="text" class={styles.priceInput} value={`$${priceRange().min}`} />
                  </div>
                  <div class={styles.inputGroupFilter}>
                    <label>To:</label>
                    <input type="text" class={styles.priceInput} value={`$${priceRange().max}`} />
                  </div>
                </div>
              </Show>
            </div>

            <div class={styles.filterSection}>
              <h3 onClick={() => setShowDeparture(!showDeparture())} class={styles.collapsibleHeader}>
                Departure Time
                <svg class={`${styles.chevron} ${showDeparture() ? styles.chevronOpen : ""}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
              </h3>
              <Show when={showDeparture()}>
                <div class={styles.checkboxGroup}>
                  <label class={styles.checkboxLabel}><input type="checkbox" /> Morning (06:00 - 12:00)</label>
                  <label class={styles.checkboxLabel}><input type="checkbox" /> Afternoon (12:00 - 18:00)</label>
                  <label class={styles.checkboxLabel}><input type="checkbox" /> Evening (18:00 - 00:00)</label>
                </div>
              </Show>
            </div>

            <div class={styles.filterSection}>
              <h3 onClick={() => setShowDuration(!showDuration())} class={styles.collapsibleHeader}>
                Duration
                <svg class={`${styles.chevron} ${showDuration() ? styles.chevronOpen : ""}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
              </h3>
              <Show when={showDuration()}>
                <div class={styles.checkboxGroup}>
                  <label class={styles.checkboxLabel}><input type="checkbox" /> 0 - 2 hours</label>
                  <label class={styles.checkboxLabel}><input type="checkbox" /> 2 - 5 hours</label>
                  <label class={styles.checkboxLabel}><input type="checkbox" /> 5+ hours</label>
                </div>
              </Show>
            </div>

            <div class={styles.filterSection}>
              <h3 onClick={() => setShowCompany(!showCompany())} class={styles.collapsibleHeader}>
                Transport Company
                <svg class={`${styles.chevron} ${showCompany() ? styles.chevronOpen : ""}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
              </h3>
              <Show when={showCompany()}>
                <div class={styles.checkboxGroup}>
                  <label class={styles.checkboxLabel}><input type="checkbox" checked /> Giant Ibis</label>
                  <label class={styles.checkboxLabel}><input type="checkbox" checked /> Mekong Express</label>
                  <label class={styles.checkboxLabel}><input type="checkbox" checked /> Virak Buntham</label>
                  <label class={styles.checkboxLabel}><input type="checkbox" checked /> Cambodia Angkor Air</label>
                  <label class={styles.checkboxLabel}><input type="checkbox" checked/> J&T</label>
                </div>
              </Show>
            </div>
          </aside>

          <main class={styles.resultsList}>
            <div class={styles.resultsHeader}>
              <button class={styles.toggleAllBtn} onClick={toggleAllFilters}>
                {allOpen() ? "Hide all filters" : "Show all filters"}
              </button>
            </div>
            <For each={filteredData()}>
              {(item) => (
                <div class={styles.transportCard}>
                  <div class={styles.cardImageWrapper}>
                    <img src={item.image} alt={item.title} class={styles.cardImage} />
                  </div>
                  <div class={styles.cardDetails}>
                    <div class={styles.cardHeader}>
                      <h3>{item.title}</h3>
                      <span class={styles.typeTag}>{item.type.toUpperCase()}</span>
                    </div>
                    <div class={styles.journeyInfo}>
                      <div class={styles.timeBlock}>
                        <span class={styles.location}>Departure</span>
                        <span class={styles.time}>{item.departureTime}</span>
                        <span class={styles.location}>{item.from}</span>
                      </div>
                      <div class={styles.durationLine}>
                        <span class={styles.durationText}>{item.duration}</span>
                        <div class={styles.line}></div>
                      </div>
                      <div class={styles.timeBlock}>
                        <span class={styles.location}>Arrival</span>
                        <span class={styles.time}>{item.arrivalTime}</span>
                        <span class={styles.location}>{item.to}</span>
                      </div>
                    </div>
                    <Show when={item.tripsPerDay}>
                      <div class={styles.tripsInfo}>
                        Arrives on {departureDate()}. Travel time {item.duration}<br />
                        {item.tripsPerDay} departures from 12:30
                      </div>
                    </Show>
                  </div>
                  <div class={styles.cardPriceAction}>
                    <div class={styles.priceInfo}>
                      <span class={styles.priceLabel}>From</span>
                      <span class={styles.priceValue}>${item.price}</span>
                      <span class={styles.priceSub}>per person</span>
                    </div>
                    <button class={styles.bookBtn} onClick={() => handleBookNow(item)}>Book Now</button>
                  </div>
                </div>
              )}
            </For>
          </main>
        </div>
      </Show>

      <Show when={view() === 'booking' && selectedTransport()}>
        <div class={styles.bookingContainer}>
          <div class={styles.backLink} onClick={handleBackToList}>
            <span>← Back to Search Results</span>
          </div>

          <div class={styles.bookingGrid}>
            <div class={styles.paymentSection}>
              <h2 class={styles.sectionTitle}>Payment Information</h2>
              <div class={styles.formGroup}>
                <label>Payment Method</label>
                <select class={styles.formInput}>
                  <option>Credit Card</option>
                  <option>ABA Pay</option>
                  <option>Wing</option>
                </select>
              </div>

              <h3 class={styles.sectionTitle} style="margin-top: 2rem;">Card Details</h3>
              <div class={styles.formGroup}>
                <label>Cardholder Name *</label>
                <input type="text" class={styles.formInput} placeholder="John Doe" />
              </div>
              <div class={styles.formGroup}>
                <label>Card Number *</label>
                <input type="text" class={styles.formInput} placeholder="xxxx xxxx xxxx xxxx" />
              </div>
              <div class={styles.formRow}>
                <div class={styles.formGroup}>
                  <label>Expiry Date *</label>
                  <input type="text" class={styles.formInput} placeholder="mm/yy" />
                </div>
                <div class={styles.formGroup}>
                  <label>CVV *</label>
                  <input type="text" class={styles.formInput} placeholder="123" />
                </div>
              </div>

              <div class={styles.actionBtns}>
                <button class={styles.backBtnLarge} onClick={handleBackToList}>Back</button>
                <button class={styles.confirmBtn}>Confirm Booking (${selectedTransport()?.price})</button>
              </div>
            </div>

            <div class={styles.summarySidebar}>
              <h2 class={styles.sectionTitle}>Booking Summary</h2>
              <div class={styles.bookingSummaryHeader}>
                <span class={styles.summaryTypeTag}>{selectedTransport()?.type}s</span>
                <span style="font-weight: 700;">{selectedTransport()?.company}</span>
              </div>
              
              <div class={styles.summaryDetails}>
                <div class={styles.summaryDetailItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                  </svg>
                  <span>{selectedTransport()?.from} → {selectedTransport()?.to}</span>
                </div>
                <div class={styles.summaryDetailItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                  </svg>
                  <span>{departureDate()}</span>
                </div>
                <div class={styles.summaryDetailItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                  <span>{selectedTransport()?.departureTime} - {selectedTransport()?.arrivalTime}</span>
                </div>
                <div class={styles.summaryDetailItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg>
                  <span>1 Passenger</span>
                </div>
              </div>

              <div class={styles.priceTable}>
                <div class={styles.priceRow}>
                  <span>Base Fare</span>
                  <span>${selectedTransport()?.price}</span>
                </div>
                <div class={styles.priceRow}>
                  <span>Taxes & Fees</span>
                  <span>$0</span>
                </div>
                <div class={styles.totalRow}>
                  <span>Total</span>
                  <span>${selectedTransport()?.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
}
