import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";

import styles from "./index.module.css";

// Components
import NavigationBar from "~/components/NavigationBar";
import Dropdown from "~/components/Dropdown";
import Datepicker from "~/components/Datepicker";

function FilterContainer1(){

    return (<>
        <div class={styles.filter_container_1}>
            <Dropdown
                label="Location"
                default_id={1}
                label_class={styles.dropdown_label}
                dropdown_class={styles.dropdown}
                onChange={(e) => {
                    console.log(e)
                }}
                data={[
                    {
                        id: 1,
                        value: "Cambodia"
                    },
                    {
                        id: 2,
                        value: "Vietnam"
                    }
                ]}
            />

            <Dropdown
                label="Language"
                default_id={3}
                label_class={styles.dropdown_label}
                dropdown_class={styles.dropdown}
                onChange={(e) => {
                    console.log(e)
                }}
                data={[
                    {
                        id: 1,
                        value: "English"
                    },
                    {
                        id: 2,
                        value: "French"
                    },
                    {
                        id: 3,
                        value: "Khmer"
                    },
                ]}
            />
            <Datepicker/>
        </div>
    </>)

}


export default function TourGuide() {
    return (
        <main>
            <Title>DestiCam - Tour Guide</Title>
            <NavigationBar />

            <FilterContainer1/>
            
        </main>
    );
}
