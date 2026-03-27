import { createSignal, onMount, onCleanup  } from "solid-js";

import { A } from "@solidjs/router";

import styles from "./index.module.css";



function NavItems(){
    return (<>
        <div class={styles.nav_box}>
            <A href="/">Accommodation</A>
            <A href="/">Transport</A>
            <A href="/">Things To Do</A>
            <A href="/">Tour Guide</A>
            <A href="/">Coupons & Deals</A>
            <A href="/">Travel Bundle</A>
        </div>
    </>)
}

export default function NavigationBar() {
    const [innerHeight, setInnerHeight] = createSignal(0);
    const [innerWidth, setInnerWidth] = createSignal(0);


    onMount(() => {
        const handler = () => {
            setInnerWidth(window.innerWidth);
            setInnerHeight(window.innerHeight);
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
                />
                {(innerWidth() >= 980) &&
                    <NavItems />
                }
                <div class={styles.account_box}>
                    <A href=""
                        class={styles.sign_in_btn}
                    >
                        Sign In
                    </A>
                    <A href=""
                        class={styles.sign_up_btn}
                    >
                        Sign Up
                    </A>
                </div>
            </div>
            {(innerWidth() < 980) &&
                <div class={styles.frame_2}>
                <NavItems />
                </div>
            }
        </div>
        
    );
}
