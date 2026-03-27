import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";

import styles from "./index.module.css";

import NavigationBar from "~/components/NavigationBar";



export default function TourGuide() {
    return (
        <main>
            <Title>DestiCam - Tour Guide</Title>

            <NavigationBar />

            <button class="btn">
                TEst
            </button>
            

        </main>
    );
}
