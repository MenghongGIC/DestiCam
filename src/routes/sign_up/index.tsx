import { Title, Link } from "@solidjs/meta";
import { Component } from "solid-js";
import styles from "./index.module.css";

const SignUpPage: Component = () => {
  return (<>
    <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
    
    <div class={styles.layoutContainer}>      
      <header class={styles.header}>
        <div class={styles.headerBrand}>
          <span class={`material-symbols-outlined ${styles.brandIcon}`}>temple_buddhist</span>
          <h1 class={styles.brandName}>DestiCam</h1>
        </div>
        <div class={styles.headerRight}>
          <nav class={styles.headerNav}>
            <a href="#" class={styles.navLink}>Explore</a>
            <a href="#" class={styles.navLink}>Destinations</a>
          </nav>
          <button class={styles.signInBtn}>Sign In</button>
        </div>
      </header>


      <main class={styles.main}>
        <div class={styles.card}>
          {/* Hero image */}
          <div class={styles.cardHero}>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5R-ivBZL1jjVFT1CaIYVrFZVn5zLxFmwLcEOKwndusj0NtpaSauVTR7paEU_wsNSBLRhcIaVV3okvmPw8sHw9uM7RE3yW4l8ZnCl8udCR5cLkyAzvCHWHzVlJTMBrKbLUpZFuDZkoDpupTPFL_7BjTnRJJg_e-Hz6-TxGaq51LSxQkDqfd8NpM668niSikw850uSstEUPUCNyOR0blPVhsDeWg-9FAsO39LHWnKbMxQebuq5N1RV2gwsJwhZ2aIUNMoWvGp3Rxp3r"
              alt="Sunrise over Angkor Wat"
              class={styles.heroImg}
            />
            <div class={styles.heroOverlay} />
          </div>

          <div class={styles.cardBody}>

            <div class={styles.cardHeader}>
              <div class={styles.cardIconWrap}>
                <span class="material-symbols-outlined">person_add</span>
              </div>
              <h2 class={styles.cardTitle}>Create Your Account</h2>
              <p class={styles.cardSubtitle}>Join the ultimate Cambodian travel platform</p>
            </div>

            <form class={styles.form} onSubmit={(e : Event) => e.preventDefault()}>
              <div class={styles.fieldGroup}>
                <label class={styles.label}>Full Name</label>
                <div class={styles.inputWrapper}>
                  <span class={`material-symbols-outlined ${styles.inputIcon}`}>person</span>
                  <input
                    class={styles.input}
                    type="text"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
              <div class={styles.fieldGroup}>
                <label class={styles.label}>Email Address</label>
                <div class={styles.inputWrapper}>
                  <span class={`material-symbols-outlined ${styles.inputIcon}`}>mail</span>
                  <input
                    class={styles.input}
                    type="email"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div class={styles.passwordGrid}>
                <div class={styles.fieldGroup}>
                  <label class={styles.label}>Password</label>
                  <div class={styles.inputWrapper}>
                    <span class={`material-symbols-outlined ${styles.inputIcon}`}>lock</span>
                    <input
                      class={styles.input}
                      type="password"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
                <div class={styles.fieldGroup}>
                  <label class={styles.label}>Confirm Password</label>
                  <div class={styles.inputWrapper}>
                    <span class={`material-symbols-outlined ${styles.inputIcon}`}>lock_reset</span>
                    <input
                      class={styles.input}
                      type="password"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>

              <div class={styles.termsRow}>
                <input class={styles.checkbox} id="terms" type="checkbox" />
                <label class={styles.termsLabel} for="terms">
                  I agree to the{" "}
                  <a href="#" class={styles.termsLink}>Terms of Service</a>{" "}
                  and{" "}
                  <a href="#" class={styles.termsLink}>Privacy Policy</a>
                </label>
              </div>

              <button type="submit" class={styles.submitBtn}>
                Create Account
              </button>
            </form>

            {/* Sign-in footer */}
            <div class={styles.cardFooter}>
              <p class={styles.cardFooterText}>
                Already have an account?{" "}
                <a href="#" class={styles.signInLink}>Sign In</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </>);
};

export default SignUpPage;