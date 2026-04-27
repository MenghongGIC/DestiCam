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
