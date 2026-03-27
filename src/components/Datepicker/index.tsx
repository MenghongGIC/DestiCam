import { createSignal, JSX, For, onMount, Show} from "solid-js";
import dayjs from "dayjs";

import styles from "./index.module.css";

// -> Usages Example:
// Other arguments is optional.

{/* 
import Datepicker from "~/components/Datepicker";
<Datepicker/>

*/}
// <-

export default function Dropdown({
    label,
    default_date,
    onChange=(value) => {},
    label_class,
    datepicker_class
}:{
    label?: string
    default_date?: string
    onChange?: (value: string) => void
    label_class?: string,
    datepicker_class?: string
}){
    let popver_ref!: HTMLDivElement;


    const [mounted, setMounted] = createSignal(false);
    const [toggle, setToggle] = createSignal(false);

    const [currentDate, setCurrentDate] = createSignal<string|undefined>(default_date);

    onMount(() => {
        setMounted(true);
        popver_ref.addEventListener("toggle", () => {
            console.log(popver_ref.matches(":popover-open"));
            setToggle(popver_ref.matches(":popover-open"));
        });
    });

    return (<div class={`${styles.container}`}>
        <label for="cally1" class={`${styles.label} ${label_class}`}>
            {label || "Date"}
        </label>
        <button popoverTarget="cally-popover1" class={`input input-border ${styles.btn} ${datepicker_class}`} id="cally1" style="anchorName:--cally1">
            {currentDate() 
                ? dayjs(currentDate()).format("MM/DD/YYYY")
                : "MM/DD/YYYY"

            }
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>

        </button>
        
        <div ref={popver_ref} popover id="cally-popover1" class="dropdown bg-base-100 rounded-box shadow-lg" style="positionAnchor:--cally1">
            <Show when={mounted() && toggle()}>
                <calendar-date class="cally"
                    onChange={(e: any) => {
                        onChange(e.target?.value);
                        setCurrentDate(e.target?.value);
                    }}
                >
                    <svg aria-label="Previous" class="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
                    <svg aria-label="Next" class="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
                    <calendar-month/>
                </calendar-date>
            </Show>
        </div>
    </div>)
}