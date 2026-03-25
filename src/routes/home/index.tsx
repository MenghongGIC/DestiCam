import { Title } from "@solidjs/meta";
import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <Title>DestiCam</Title>
      <div class={styles.container}>
        <h1>DestiCam</h1>
      </div>
    </>
  );
}
