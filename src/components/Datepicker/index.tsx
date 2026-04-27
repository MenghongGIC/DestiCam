import { createSignal, JSX, For, onMount, Show, createEffect, onCleanup} from "solid-js";
import dayjs from "dayjs";

import styles from "./index.module.css";

// -> Usages Example:
// Other arguments is optional.

{/* 
import Datepicker from "~/components/Datepicker";
<Datepicker/>

*/}
// <-

export default function Datepicker(props: {
    id?: string
    label?: string
    default_date?: string
    onChange?: (value: string) => void
    label_class?: string,
    datepicker_class?: string
}){
    const id = props.id || "cally1";
    let popver_ref!: HTMLDivElement;


    const [mounted, setMounted] = createSignal(false);
    const [toggle, setToggle] = createSignal(false);

    const [currentDate, setCurrentDate] = createSignal<string|undefined>(props.default_date);

    // Update internal signal when prop changes
    createEffect(() => {
        setCurrentDate(props.default_date);
    });

    onMount(() => {
        setMounted(true);
        const handleToggle = (e: any) => {
            setToggle(e.newState === "open");
        };
        popver_ref.addEventListener("toggle", handleToggle);
        onCleanup(() => {
            popver_ref.removeEventListener("toggle", handleToggle);
        });
    });

    return (<div class={`${styles.container}`}>
        <Show when={props.label}>
            <label for={id} class={`${styles.label} ${props.label_class}`}>
                {props.label}
            </label>
        </Show>
        <button 
            popovertarget={`${id}-popover`} 
            class={`input input-border ${styles.btn} ${props.datepicker_class}`} 
            id={id} 
            style={{ "anchor-name": `--${id}` }}
            type="button"
        >
            {currentDate() 
                ? dayjs(currentDate()).format("MM/DD/YYYY")
                : "MM/DD/YYYY"
            }
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
        </button>
        
        <div 
            ref={popver_ref} 
            popover="auto" 
            id={`${id}-popover`} 
            class={styles.popover} 
            style={{ 
                "position-anchor": `--${id}`, 
                "position-area": "bottom center"
            }}
        >
            <Show when={mounted()}>
                <calendar-date class="cally"
                    value={currentDate()}
                    on:change={(e: any) => {
                        const val = e.target?.value;
                        if (val) {
                            props.onChange?.(val);
                            setCurrentDate(val);
                        }
                        if (typeof popver_ref.hidePopover === "function") {
                            popver_ref.hidePopover();
                        }
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

