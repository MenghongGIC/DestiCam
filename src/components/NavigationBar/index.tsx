import { createSignal, onMount, onCleanup, For, Show  } from "solid-js";

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


// // function NavItems(){
// //     const location = useLocation();
    

// //     const [currentLocation, setCurrentLocation] = createSignal(location.pathname);

// //     createEffect(
// //         on(useLocation, (location) => {
// //             setCurrentLocation(location.pathname);
// //         })
// //     );

// //     onMount(() => {
// //         setCurrentLocation(location.pathname);
// //     })

//     return (<>
//         <div class={styles.nav_box}>
//             <For each={NAV_ITEM_DATA}>
//                 {(item)=><>
//                     <A 
//                         href={item.path}
//                         class={`${item.path.toLowerCase() === `/${currentLocation().split("/")[1]??"".toLowerCase()}` ? styles.current_nav_item : ""} ${styles.nav_item}`}
//                     >
//                         {item.title}
//                     </A>
//                 </>}
                
//             </For>
            
//         </div>
        
//     </>)
// }
function NavItems(props: { onNavigate?: () => void }) {
    const location = useLocation();
    const activeSegment = () =>
        location.pathname.split("/")[1]?.toLowerCase() ?? "";
 
    return (
        <For each={NAV_ITEM_DATA}>
            {(item) => {
                const isActive = () =>
                    item.path.toLowerCase() === `/${activeSegment()}`;
 
                return (
                    <A
                        href={item.path}
                        class={`${styles.nav_item} ${isActive() ? styles.current_nav_item : ""}`}
                        onClick={props.onNavigate}
                    >
                        {item.title}
                    </A>
                );
            }}
        </For>
    );
}

export default function NavigationBar() {
    const navigate = useNavigate();
    const [innerWidth, setInnerWidth] = createSignal(
        typeof window !== "undefined" ? window.innerWidth : 1200
    );
    const isDesktop = () => innerWidth() >= 1110;

    onMount(() => {
        const handler = () => setInnerWidth(window.innerWidth);
        window.addEventListener("resize", handler);
        onCleanup(() => window.removeEventListener("resize", handler));
    });
    // For hamburger menu
    const [menuOpen, setMenuOpen] = createSignal(false);
    const closeMenu = () => setMenuOpen(false);
    // 

    // Close menu when clicking outside
    onMount(() => {
        const handler = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest(`.${styles.container}`)) closeMenu();
        };
        document.addEventListener("click", handler);
        onCleanup(() => document.removeEventListener("click", handler));
    });
    return (
        <div class={styles.container}>
 
            {/* ── Top bar: logo · [inline nav on desktop] · buttons ── */}
            <div class={styles.frame_1}>

                {/* Logo */}
                <img
                    class={styles.logo}
                    src="/logo.png"
                    width={100}
                    alt="Logo"
                    onClick={() => navigate("/home")}
                />
 
                {/* Inline nav — desktop only */}
                <Show when={isDesktop()}>
                    <nav class={styles.nav_box}>
                        <NavItems />
                    </nav>
                </Show>
 
                {/* Right-side actions */}
                <div class={styles.account_box}>
                    <button
                        class={`btn btn-ghost ${styles.sign_in_btn}`}
                        onClick={() => navigate("/login")}
                        >
                        Sign In
                    </button>
                    <button
                        class={`btn btn-neutral ${styles.sign_up_btn}`}
                        onClick={() => navigate("/sign_up")}
                    >
                        Sign Up
                    </button>
 
                    {/* Hamburger — mobile/tablet only */}
                    <Show when={innerWidth() <= 640}>
                        <button
                            class={styles.hamburger}
                            aria-label="Toggle navigation menu"
                            aria-expanded={menuOpen()}
                            onClick={(e: MouseEvent) => {
                                e.stopPropagation();
                                setMenuOpen((v) => !v);
                            }}
                        >
                            {/* Animated three-line icon */}
                            <span class={`${styles.bar} ${menuOpen() ? styles.bar_open_1 : ""}`} />
                            <span class={`${styles.bar} ${menuOpen() ? styles.bar_open_2 : ""}`} />
                            <span class={`${styles.bar} ${menuOpen() ? styles.bar_open_3 : ""}`} />
                        </button>
                    </Show>
                </div>
            </div>
            {/* Scrollable sub-bar — medium breakpoint only */}
            <Show when={!isDesktop() && innerWidth() >= 640}>
                <div class={styles.frame_2}>
                    <nav class={styles.nav_box}>
                        <NavItems />
                    </nav>
                </div>
            </Show>
            
            {/* Dropdown menu — mobile only */}
            <Show when={!isDesktop() && innerWidth() < 640 && menuOpen()}>
                <nav class={styles.mobile_menu} onClick={closeMenu}>
                    <NavItems onNavigate={closeMenu} />
                </nav>
            </Show>
        </div>
    );
}
