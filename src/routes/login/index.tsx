import { Title, Link } from "@solidjs/meta";
import { Component, createSignal } from "solid-js";
import styles from "./index.module.css";

const LoginPage: Component = () => {
  const [showPassword, setShowPassword] = createSignal(false);

  return (<>
    <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
  
    <div class={styles.layoutContainer}>

      <header class={styles.header}>
        <div class={styles.headerBrand}>
          <span class={`material-symbols-outlined ${styles.brandIcon}`}>travel_explore</span>
          <h2 class={styles.brandName}>DestiCam</h2>
        </div>
        <div class={styles.headerRight}>
          <nav class={styles.headerNav}>
            <a href="#" class={styles.navLink}>Explore</a>
            <a href="#" class={styles.navLink}>Support</a>
          </nav>
          <button class={styles.signUpBtn}>Sign Up</button>
        </div>
      </header>

      <main class={styles.main}>
        <div class={styles.card}>
          <div class={styles.cardHeader}>
            <div class={styles.cardIconWrap}>
              <span class="material-symbols-outlined">map</span>
            </div>
            <h1 class={styles.cardTitle}>Welcome Back</h1>
            <p class={styles.cardSubtitle}>Sign in to continue your journey</p>
          </div>

          <form class={styles.form} onSubmit={(e: Event) => e.preventDefault()}>
            <div class={styles.fieldGroup}>
              <label class={styles.label}>Email Address</label>
              <input
                class={styles.input}
                type="email"
                placeholder="name@example.com"
              />
            </div>

            {/* Password */}
            <div class={styles.fieldGroup}>
              <div class={styles.passwordLabelRow}>
                <label class={styles.label}>Password</label>
                <a href="#" class={styles.forgotLink}>Forgot Password?</a>
              </div>
              <div class={styles.inputWrapper}>
                <input
                  class={`${styles.input} ${styles.inputWithIcon}`}
                  type={showPassword() ? "text" : "password"}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  class={styles.visibilityToggle}
                  onClick={() => setShowPassword((v) => !v)}
                >
                  <span class="material-symbols-outlined">
                    {showPassword() ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            <div class={styles.rememberRow}>
              <input class={styles.checkbox} id="remember" type="checkbox" />
              <label class={styles.rememberLabel} for="remember">
                Remember me for 30 days
              </label>
            </div>

            <button type="submit" class={styles.submitBtn}>
              <span>Sign In</span>
              <span class="material-symbols-outlined">login</span>
            </button>
          </form>

          {/* Divider */}
          <div class={styles.divider}>
            <div class={styles.dividerLine} />
            <span class={styles.dividerText}>Or continue with</span>
            <div class={styles.dividerLine} />
          </div>

          {/* Social Logins */}
          <div class={styles.socialGrid}>
            <button class={styles.socialBtn}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuLyOoxmRMFQoGQbpU4JqmQUQ7hT9NbpE_WTdt1gGV7Ndf8UGIYlONtgg5im7up7TizS12Z4Pwm32LbPpjTskSCI0v9D3O9hIpnDWXaTBm9Utiy8PCKuypLS23bOUB6tFOeaQC7atUPv2PsQtN26D11jMfSVDkVoqvlkTowwvKFQI66mUrkM87vl2BN6NlJnUw7nMf88LbE1HOnP5B2vnfpnHsUbWMBOwyYh95B2BxMQf-OfxS5z9-SRaontUfchkgGEv33-D_bCDt"
                alt="Google"
                class={styles.socialLogo}
              />
              <span class={styles.socialLabel}>Google</span>
            </button>

            <button class={styles.socialBtn}>
              <svg class={styles.fbIcon} fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span class={styles.socialLabel}>Facebook</span>
            </button>
          </div>

          <p class={styles.signUpFooter}>
            Don't have an account?{" "}
            <a href="#" class={styles.signUpLink}>Create Account</a>
          </p>
        </div>
      </main>

    </div>
  </>);
};

export default LoginPage;