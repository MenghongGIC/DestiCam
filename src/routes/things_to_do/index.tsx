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
