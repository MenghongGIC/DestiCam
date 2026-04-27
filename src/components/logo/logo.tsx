import { Component } from "solid-js";
import styles from "./logo.module.css";

const Logo: Component = () => {
    return (
       <div class={styles.logo}>
            <a href="#" class={styles.logoLink}>
              <img src="/logo.png" alt="DestiCam Logo" class={styles.logoImg} />
            </a>
          </div>
    ); 
};
export default Logo;