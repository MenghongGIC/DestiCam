import { Title } from "@solidjs/meta";
import { For, onMount, createSignal, onCleanup, on, createEffect } from "solid-js";
import type { Setter, Accessor } from "solid-js";

import { Title } from "@solidjs/meta";
import { For, onMount, createSignal, onCleanup } from "solid-js";

// Components
import NavigationBar from "~/components/NavigationBar";
import Dropdown from "~/components/Dropdown";
import Datepicker from "~/components/Datepicker";

// Types
import type { data_info_type, data_type } from "./data";

// Data
import { data } from "./data";

import styles from "./index.module.css";

export default function TourGuide() {
    const [innerWidth, setInnerWidth] = createSignal(0);
    const [is_show_more_filter, set_is_show_more_filter] = createSignal(false);

    const [search, set_search] = createSignal<string>("");
    const [price, set_price] = createSignal<{from: number, to: number}>({from:0, to:0});
    const [language, set_language] = createSignal<string>("");

    const [filtered_data, set_filtered_data] = createSignal<data_type>(data);
    const [show_hire_guide, set_show_hire_guide] = createSignal<{state: boolean, data_info?: data_info_type}>({state: false});
    
    createEffect(on([search, price, language], () => {
        console.log("A", language());
        set_filtered_data(data.filter((item) => 
            (search() !== "" ? item.name.toLowerCase().includes(search().toLowerCase()) : true)
            && ((price().from < price().to) ? (((item.price_per_day >= price().from) && (item.price_per_day <= price().to))) : true)
            && (language() !== "" ? item.languages_spoken.includes(language()) : true)
        ));
    
    }));

    
    onMount(() => {
        const handler = () => {
            setInnerWidth(window.innerWidth);
        };
        handler();
    
        window.addEventListener("resize", handler);
        onCleanup(() => window.removeEventListener("resize", handler));
    });

    return (<>
        <main class={styles.main}>
            <Title>DestiCam - Tour Guide</Title>
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
                            <ItemComponent data_info={data_info} set_show_hire_guide={set_show_hire_guide}/>
                        )}
                    </For>
                </div>
                
            </div>
            <HireGuide show={show_hire_guide} set_show={set_show_hire_guide}/>
            
        </main>
    </>);
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
                    }
                ]}
            />

            <Dropdown
                label="Language"
                label_class={styles.dropdown_label}
                dropdown_class={styles.dropdown}
                onChange={(e) => {
                    console.log(e)
                }}
                data={[
                    {
                        id: 1,
                        value: "English"
                    },
                    {
                        id: 2,
                        value: "French"
                    },
                    {
                        id: 3,
                        value: "Khmer"
                    },
                ]}
            />
            <Datepicker
                label="Available Date"
            />

            <Dropdown
                label="Number of Travellers"
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


function FilterContainer2({
    price, set_price,

}:{
    price: Accessor<{from: number, to: number}>,
    set_price: Setter<{from: number, to: number}>
    
}){

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
                        <input name="price_to" type="text" placeholder="$1000" class={`input input-neutral ${styles.input}`} />
                    </div>
                </div>
            </div>
            <div class="divider"/>

            
            <div class={styles.box}>
                <span class={styles.section_label}>Years of Experience</span>
                
                <div class={styles.item_box}>
                    <label class="label">
                        <input name="experience" type="radio" class="radio" />
                        0-2 Years
                    </label>

                    <label class="label">
                        <input name="experience" type="radio" class="radio" />
                        3-5 Years
                    </label>

                    <label class="label">
                        <input name="experience" type="radio" class="radio" />
                        5+ Years
                    </label>
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
                <span class={styles.section_label}>Avaibility</span>
                
                <div class={styles.item_box}>
                    <label class="label">
                        <input name="avaibility" type="radio" class="radio" />
                        Today
                    </label>

                    <label class="label">
                        <input name="avaibility" type="radio" class="radio" />
                        Tomorrow
                    </label>

                    <label class="label">
                        <input name="avaibility" type="radio" class="radio" />
                        Next 7 Days
                    </label>
                </div>

            </div>

        </div>
    </>)
}


function ItemComponent({
    data_info,
    set_show_hire_guide
}: {
    data_info:  data_info_type,
    set_show_hire_guide: Setter<{state: boolean, data_info?: data_info_type}>
}){
    return (
        <div class={`${styles.item_box} animate__animated animate__fadeIn`}>
            <img class={styles.profile_picture} src="/tour_guide_profile_picture.jpg"/>
            <div class={styles.info_box_1}>
                <span class={styles.text_1}>{data_info.name}</span>
                <span class={styles.text_2}>
                    {data_info.languages_spoken.join(", ")}. 
                </span>
                <span class={styles.text_2}>
                    {data_info.short_bio}
                </span>
                <span class={styles.text_1}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" stroke-width="1.5" stroke="none" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg> 
                    {data_info.rating}
                </span>
            </div>
            <div class={styles.info_box_2}>
                <span>${data_info.price_per_day} per day</span>
                <button class={`btn btn-primary ${styles.hire_btn}`}
                    on:click={() => set_show_hire_guide({state: true, data_info: data_info})}
                >
                    Hire Guide
                </button>
            </div>
        </div>
    )
}

function HireGuide({
    show,
    set_show,
}:{
    show:Accessor<{state: boolean, data_info?: data_info_type}>,
    set_show: Setter<{state: boolean, data_info?: data_info_type}>
}){
    
    return (<>
        {show().state &&
            <main class={styles.hire_guide_container}
                on:click={()=>set_show({...show(), state: false,})}
            >
                <div class={styles.inner_box}
                    on:click={(e: Event) => e.stopPropagation()}
                >
                    <div class={styles.box_1}>
                        <img class={styles.profile_picture}
                            src={show().data_info?.profile_picture||""}
                        />
                        <span class={styles.text_1}>{show().data_info?.name}</span>
                        <span class={styles.text_2}>${show().data_info?.price_per_day} per day</span>
                        <span class={styles.text_2}>{show().data_info?.short_bio}</span>

                    </div>

                    <div class={styles.box_2}>
                        <For each={Object.keys(show().data_info?.contact||{})}>
                            {(key) => (
                                <div class={styles.item_box}>
                                    <span class={styles.contact_key}>{key}:&nbsp;<span class={styles.contact_value}>{show().data_info?.contact?.[key]||""}</span></span>
                                </div>
                            )}
                        </For>
                        

                        
                    </div>

                    <div class={styles.box_3}>
                        <button class={`btn btn-primary ${styles.btn}`}
                            on:click={()=>set_show({...show(), state: false,})}
                        >DONE</button>
                    </div>

                    
                </div>

            </main>
        }
        
    </>)
}