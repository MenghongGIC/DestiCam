import { createSignal, onMount, onCleanup, createEffect, on, For } from "solid-js";
import { A, useLocation, useNavigate } from "@solidjs/router";
import styles from "./index.module.css";

// ---- Types ----

interface NavItemData {
  title: string;
  path: string;
}
// ---- Constants ----
const NAV_ITEM_DATA: NavItemData[] = [
  { title: "Accommodation",    path: "/accommodation"      },
  { title: "Transport",        path: "/transport"          },
  { title: "Things To Do",     path: "/things_to_do"       },
  { title: "Tour Guide",       path: "/tour_guide"         },
  { title: "Coupons & Deals",  path: "/coupons_and_deals"  },
  { title: "Travel Bundle",    path: "/travel_bundle"      },
];

const MOBILE_BREAKPOINT = 980;

// ---- NavItems ----

function NavItems() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = createSignal(location.pathname);

  // Keep currentPath in sync with navigation
  createEffect(on(useLocation, (loc) => setCurrentPath(loc.pathname)));

  const isActive = (itemPath: string): boolean => {
    const segment = `/${currentPath().split("/")[1]?.toLowerCase() ?? ""}`;
    return itemPath.toLowerCase() === segment;
  };

  return (
    <div class={styles.nav_box}>
      <For each={NAV_ITEM_DATA}>
        {(item) => (
          <A
            href={item.path}
            class={isActive(item.path) ? styles.current_nav_item : styles.nav_item}
          >
            {item.title}
          </A>
        )}
      </For>
    </div>
  );
}

// ---- NavigationBar ----

export default function NavigationBar() {
  const navigate = useNavigate();
  const [innerWidth, setInnerWidth] = createSignal(0);

  onMount(() => {
    const handler = () => setInnerWidth(window.innerWidth);
    handler();
    window.addEventListener("resize", handler);
    onCleanup(() => window.removeEventListener("resize", handler));
  });

  const isDesktop = () => innerWidth() >= MOBILE_BREAKPOINT;

  return (
    <div class={styles.container}>
      <div class={styles.frame_1}>
        <img
          class={styles.logo}
          src="/logo.png"
          width={100}
          on:click={() => navigate("/")}
        />
        {isDesktop() && <NavItems />}
        <div class={styles.account_box}>
          <button class={`btn btn-ghost ${styles.sign_in_btn}`}>Sign In</button>
          <button class={`btn btn-neutral ${styles.sign_up_btn}`}>Sign Up</button>
        </div>
      </div>
      {!isDesktop() && (
        <div class={styles.frame_2}>
          <NavItems />
        </div>
      )}
    </div>
  );
}