<<<<<<< HEAD:src/routes/ThingToDo/index.tsx
import { Title } from "@solidjs/meta";

import styles from "./index.module.css";
import NavigationBar from "~/components/NavigationBar";

export default function ThingsToDo() {
    return (
        <main class={styles.main}>
            <Title>DestiCam - Things To Do</Title>
            <NavigationBar />

            <div class={styles.container}>
                <h1 class={styles.title}>Things To Do</h1>
                <p class={styles.description}>
                    Discover the best attractions and activities for your next adventure.
                </p>
                <div class={styles.placeholder_grid}>
                    <p>Coming Soon...</p>
                </div>
            </div>
        </main>
    );
}
=======
import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";

import styles from "./index.module.css";


export default function TourGuide() {
    return (
        <main>
            <Title>Hello World</Title>

            <h1
                class={styles.title}
            >Gour Guide Page
                <p
                    class={styles.this_p}
                >This is P</p>
            </h1>
            <p>
                Visit{" "}
                <a href="https://start.solidjs.com" target="_blank">
                start.solidjs.com
                </a>{" "}
                to learn how to build SolidStart apps.
            </p>
        </main>
    );
}
>>>>>>> origin/main:src/routes/things_to_do/index.tsx
