import { createSignal, JSX, For } from "solid-js";


import styles from "./index.module.css";


// -> Usages Example:
{/* 
import Dropdown from "~/components/Dropdown";
<Dropdown
    label="Location"
    default_id={1}
    label_class={styles.dropdown_label}
    dropdown_class={styles.dropdown}
    onChange={(e) => {
        console.log(e)
    }}
    data={[
        {
            id: 1,
            value: "Cambodia"
        },
        {
            id: 2,
            value: "Vietnam"
        }
    ]}
/>

*/}
// <-

export default function Dropdown({
    label,
    data,
    default_id,
    onChange=() => {},
    allow_none = true,
    label_class,
    dropdown_class,
}:{
    label: string,
    data?: {
        id: string|number,
        value: JSX.Element
    }[],
    default_id?: string|number,
    onChange?: (e: {
        index: number,
        id: string|number, 
        value: JSX.Element
    }) => void,
    allow_none?: boolean,
    label_class?: string
    dropdown_class?: string
}){
    const [toggle, setToggle] = createSignal(false);

    const [currentIndex, setCurrentIndex] = createSignal<number>(
        data?.findIndex((item) => item.id === default_id)??-1
    );

    return (<div class={`${styles.container}`}>
        <label for={label} class={label_class}>{label}</label>
        <details name={label} class={`dropdown`}
            on:toggle={(e:any)=>{
                setToggle(e.currentTarget.open);
            }}
        >
            <summary class={`btn m-1 ${styles.dropdown} ${dropdown_class} `}>
                {currentIndex() >= 0 
                    ? data?.[currentIndex()]?.value
                    : "Select"
                }
                {toggle() 
                    ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                }
                
            </summary>
            <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                {allow_none && 
                    <li
                        style={currentIndex() === -1
                            ? {
                                background: "var(--accent)",
                            }
                            : {}
                        }
                    ><a
                        on:click={()=>{
                            setCurrentIndex(-1);
                        }}
                    >None</a></li>
                }
                <For each={data}>
                    {(item, index)=><>
                        <li
                            style={currentIndex() === index() 
                                ? {
                                    background: "var(--accent)",
                                }
                                : {}
                            }
                        >
                            <a
                                on:click={()=>{
                                    setCurrentIndex(index());
                                    onChange({index: index(), id: item.id, value: item.value});
                                }}
                            
                            >{item.value}</a>
                        </li>
                    </>}
                </For>
            </ul>
        </details>
    </div>)
}