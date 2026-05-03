import { createSignal, onMount, onCleanup, createEffect, on, For  } from "solid-js";

import { A, useLocation, useNavigate } from "@solidjs/router";

import styles from "./index.module.css";


const NAV_ITEM_DATA:{title:string, path:string}[] = [
    {
        title:"Accommodation",
        path: "/accommodation"
    },
    {
        title:"Transport",
        path: "/transport"
    },
    {
        title:"Things To Do",
        path: "/things_to_do"
    },
    {
        title:"Tour Guide",
        path: "/tour_guide"
    },
    {
        title:"Coupons & Deals",
        path: "/coupons_and_deals"
    },
    {
        title:"Travel Bundle",
        path: "/travelbundle"
    },
];


function NavItems(){
    const location = useLocation();
    

    const [currentLocation, setCurrentLocation] = createSignal(location.pathname);

    createEffect(
        on(useLocation, (location) => {
            setCurrentLocation(location.pathname);
        })
    );

    onMount(() => {
        setCurrentLocation(location.pathname);
    })

    return (<>
        <div class={styles.nav_box}>
            <For each={NAV_ITEM_DATA}>
                {(item)=><>
                    <A 
                        href={item.path}
                        class={`${item.path.toLowerCase() === `/${currentLocation().split("/")[1]??"".toLowerCase()}` ? styles.current_nav_item : ""} ${styles.nav_item}`}
                    >
                        {item.title}
                    </A>
                </>}
                
            </For>
            
        </div>
        
    </>)
}

export default function NavigationBar() {

    const navigate = useNavigate();

    const [innerWidth, setInnerWidth] = createSignal(0);

    onMount(() => {
        const handler = () => {
            setInnerWidth(window.innerWidth);
        };
        handler();
    
        window.addEventListener("resize", handler);
        onCleanup(() => window.removeEventListener("resize", handler));
    });

    return (
        <div class={styles.container}>
            <div class={styles.frame_1}>
                <img class={styles.logo} src="/logo.png"
                    width={100}
                    on:click={()=>{
                        navigate("/")
                    }}
                />
                {(innerWidth() >= 1110) &&
                    <NavItems />
                }
                <div class={styles.account_box}>
                    <button class={`btn btn-ghost ${styles.sign_in_btn}`}
                        on:click={() => {
                            navigate("/login");
                        }}
                    >
                        Sign In
                    </button>
                    <button class={`btn btn-neutral ${styles.sign_up_btn}`}
                        on:click={() => {
                            navigate("/sign_up");
                        }}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
            {(innerWidth() < 1110) &&
                <div class={styles.frame_2}>
                <NavItems />
                </div>
            }
        </div>
        
    );
}
