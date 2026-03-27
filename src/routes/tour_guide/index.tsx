import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";

import styles from "./index.module.css";

import NavigationBar from "~/components/NavigationBar";

export default function TourGuide() {
    return (
        <main>
            <Title>Hello World</Title>

            <NavigationBar />
            <p class="text-green-600">Hello</p>

        </main>
    );
}
