import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";

import styles from "./index.module.css";


export default function TourGuide() {
    return (
    <main>
        <Title>Hello World</Title>

        <h1
            class={styles.title}
        >Hello world!</h1>
    </main>
    );
}
