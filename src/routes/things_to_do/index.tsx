import { Title } from "@solidjs/meta";
import { For, onMount, createSignal, onCleanup, Setter } from "solid-js";
import type { Accessor } from "solid-js";

import styles from "./index.module.css";

// Components
import NavigationBar from "~/components/NavigationBar";
import Dropdown from "~/components/Dropdown";
import Datepicker from "~/components/Datepicker";

// Types
import type { activity_info_type, data_type } from "./data";

// Data
import { data } from "./data";

export default function ThingsToDo() {

    const [innerWidth, setInnerWidth] = createSignal(0);

    const [is_show_more_filter, set_is_show_more_filter] = createSignal(false);

    const [show_booking, set_show_booking] = createSignal<{state: boolean, data_info?: activity_info_type}>({state: false});

    onMount(() => {
        const handler = () => {
            setInnerWidth(window.innerWidth);
        };
        handler();

        window.addEventListener("resize", handler);
        onCleanup(() => window.removeEventListener("resize", handler));
    });

    return (
        <main class={styles.main}>
            <Title>DestiCam - Things to Do</Title>
            <NavigationBar />

            <FilterContainer1/>
            {innerWidth() < 800 &&
                <div class={styles.show_more_btn_container}>
                    <button class={`btn btn-neutral ${styles.show_more_btn}`}
                        on:click={() => {
                            set_is_show_more_filter(!is_show_more_filter());
                        }}
                    >
                        {is_show_more_filter()
                        ? <>
                            Hide Extra Filter
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                        </>
                        : <>
                            Show More Filter
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </>}

                    </button>
                </div>
            }
            {(is_show_more_filter() && innerWidth() < 800) &&
                <>
                    <div class="divider"/>
                    <FilterContainer2/>
                    <div class="divider"/>
                </>
            }

            <div class={styles.body_container}>
                {innerWidth() >= 800 && <>
                    <FilterContainer2/>
                    <div class="divider divider-horizontal"/>
                </>}


                <div class={styles.item_container}>
                    <For each={data}>
                        {(data_info) => (
                            <ItemComponent data_info={data_info} set_show_booking={set_show_booking}/>
                        )}
                    </For>
                </div>

            </div>
            <BookTour show={show_booking} set_show={set_show_booking}/>
        </main>
    );
}

function FilterContainer1(){

    return (<>
        <div class={styles.filter_container_1}>
            <Dropdown
                label="Location"
                label_class={styles.dropdown_label}
                dropdown_class={styles.dropdown}
                onChange={(e) => {
                    console.log(e)
                }}
                data={[
                    {
                        id: 1,
                        value: "Phnom Penh"
                    },
                    {
                        id: 2,
                        value: "Siem Reap"
                    },
                    {
                        id: 3,
                        value: "Koh Kong"
                    },
                    {
                        id: 4,
                        value: "Battambang"
                    },
                    {
                        id: 5,
                        value: "Kampot"
                    }
                ]}
            />

            <Dropdown
                label="Category"
                label_class={styles.dropdown_label}
                dropdown_class={styles.dropdown}
                onChange={(e) => {
                    console.log(e)
                }}
                data={[
                    {
                        id: 1,
                        value: "Cultural"
                    },
                    {
                        id: 2,
                        value: "Adventure"
                    },
                    {
                        id: 3,
                        value: "Historical"
                    },
                    {
                        id: 4,
                        value: "Food"
                    },
                    {
                        id: 5,
                        value: "Relaxation"
                    }
                ]}
            />
            <Datepicker
                label="Date"
            />

            <Dropdown
                label="Group Size"
                label_class={styles.dropdown_label}
                dropdown_class={styles.dropdown}
                onChange={(e) => {
                    console.log(e)
                }}
                data={[
                    {
                        id: 1,
                        value: "1"
                    },
                    {
                        id: 2,
                        value: "2"
                    },
                    {
                        id: 3,
                        value: "3"
                    },
                    {
                        id: 4,
                        value: "4"
                    },
                    {
                        id: 5,
                        value: "4+"
                    },
                ]}
            />

            <button
                class={`btn btn-neutral ${styles.search_btn}`}
            >Search</button>


        </div>
    </>)
}



function FilterContainer2(){

    return (<>
        <div class={styles.filter_container_2}>
            <div class={styles.box}>
                <span class={styles.section_label}>Price Range</span>
                <div class={styles.item_box}>
                    <div class={styles.input_box}>
                        <label class={styles.input_label} for="price_from">From: </label>
                        <input  name="price_from" type="text" placeholder="$0" class={`input input-neutral ${styles.input}`} />
                    </div>

                    <div class={styles.input_box}>
                        <label class={styles.input_label} for="price_to">To: </label>
                        <input name="price_to" type="text" placeholder="$200" class={`input input-neutral ${styles.input}`} />
                    </div>
                </div>
            </div>
            <div class="divider"/>

            <div class={styles.box}>
                <span class={styles.section_label}>Rating</span>

                <div class={styles.item_box}>
                    <label class="label">
                        <input name="stars" type="radio" class="radio" />
                        5 Stars
                    </label>

                    <label class="label">
                        <input name="stars" type="radio" class="radio" />
                        4 Stars & Up
                    </label>

                    <label class="label">
                        <input name="stars" type="radio" class="radio" />
                        3 Stars & Up
                    </label>
                </div>

            </div>

            <div class="divider"/>

            <div class={styles.box}>
                <span class={styles.section_label}>Duration</span>

                <div class={styles.item_box}>
                    <label class="label">
                        <input name="duration" type="radio" class="radio" />
                        Half Day
                    </label>

                    <label class="label">
                        <input name="duration" type="radio" class="radio" />
                        Full Day
                    </label>

                    <label class="label">
                        <input name="duration" type="radio" class="radio" />
                        Multi-Day
                    </label>
                </div>

            </div>

        </div>
    </>)
}


function ItemComponent({data_info, set_show_booking}: {data_info:  activity_info_type, set_show_booking: Setter<{state: boolean, data_info?: activity_info_type}>}){
    const reviewCount = Math.round(data_info.rating * 100) + data_info.id * 10;

    return (
        <div class={`${styles.item_box} animate__animated animate__fadeIn`}>
            <img class={styles.activity_image} src={data_info.image} alt={data_info.name}/>
            <div class={styles.card_content}>
                <div class={styles.tour_name}>{data_info.name}</div>
                <div class={styles.tour_location}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <span class={styles.location_text}>{data_info.location}</span>
                </div>
                <div class={styles.tour_price}>${data_info.price} per person</div>
                <button class={`btn btn-primary ${styles.book_btn}`}
                    on:click={() => set_show_booking({state: true, data_info: data_info})}
                >
                    Book Now
                </button>
            </div>
            <div class={styles.rating_container}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" stroke-width="1.5" stroke="none">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <span class={styles.rating_value}>{data_info.rating}</span>
                <span class={styles.review_count}>({reviewCount} reviews)</span>
            </div>
         </div>
     )
}

function BookTour({
    show,
    set_show,
}:{
    show:Accessor<{state: boolean, data_info?: activity_info_type}>,
    set_show: Setter<{state: boolean, data_info?: activity_info_type}>
}){
    const [travellers, set_travellers] = createSignal(1);

    const increment = () => set_travellers(t => t + 1);
    const decrement = () => set_travellers(t => Math.max(1, t - 1));

    return (<>
        {show().state &&
            <main class={styles.booking_container}
                on:click={()=>set_show({...show(), state: false,})}
            >
                <div class={styles.booking_inner_box}
                    on:click={(e: Event) => e.stopPropagation()}
                >
                    <div class={styles.booking_header}>
                        <img class={styles.booking_image}
                            src={show().data_info?.image||""}
                            alt={show().data_info?.name}
                        />
                        <div class={styles.booking_details}>
                            <h2 class={styles.booking_title}>{show().data_info?.name}</h2>
                            <p class={styles.booking_location}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                {show().data_info?.location}
                            </p>
                            <p class={styles.booking_price}>${show().data_info?.price} per person</p>
                        </div>
                    </div>

                    <div class="divider"/>

                    <div class={styles.booking_form}>
                        <div class={styles.form_group}>
                            <label class={styles.form_label}>Travel Date</label>
                            <Datepicker />
                        </div>

                        <div class={styles.form_group}>
                            <label class={styles.form_label}>Number of Travellers</label>
                            <div class={styles.traveller_selector}>
                                <button class={styles.traveller_btn} 
                                    on:click={decrement}
                                >-</button>
                                <span class={styles.traveller_count}>{travellers()}</span>
                                <button class={styles.traveller_btn} 
                                    on:click={increment}
                                >+</button>
                            </div>
                        </div>

                        <div class={styles.form_group}>
                            <label class={styles.form_label}>Special Requests</label>
                            <textarea class={`textarea textarea-bordered ${styles.textarea}`} 
                                placeholder="Any special requirements..."
                                rows="3"
                            ></textarea>
                        </div>

                        <div class={styles.booking_summary}>
                            <div class={styles.summary_row}>
                                <span>Price per person</span>
                                <span>${show().data_info?.price}</span>
                            </div>
                            <div class={styles.summary_row}>
                                <span>Travellers</span>
                                <span>x {travellers()}</span>
                            </div>
                            <div class="divider"/>
                            <div class={styles.summary_total}>
                                <span>Total</span>
                                <span class={styles.total_amount}>${(show().data_info?.price || 0) * travellers()}</span>
                            </div>
                        </div>

                        <div class={styles.booking_actions}>
                            <button class={`btn ${styles.cancel_btn}`}
                                on:click={()=>set_show({...show(), state: false,})}
                            >Cancel</button>
                            <button class={`btn ${styles.confirm_btn}`}
                                on:click={()=>set_show({...show(), state: false,})}
                            >Confirm Booking</button>
                        </div>
                    </div>

                </div>

            </main>
        }
        
    </>)
}
