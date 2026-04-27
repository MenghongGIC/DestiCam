import { Component } from 'solid-js';
import styles from './footer.module.css';
import Logo from '~/components/logo/logo';
const Footer: Component = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer class={styles.footer}>
                <div class={styles.footerInner}>
                  <div class={styles.footerGrid}>
                    {/* Brand */}
                    <div class={styles.footerBrand}>
                      <div class={styles.logo}>
                       <Logo/>
                      </div>
                      <p class={styles.footerTagline}>
                        Cambodia's premium travel booking platform. We connect you with the heart of the
                        Kingdom, from ancient temples to modern comforts.
                      </p>
                      <div class={styles.footerSocial}>
                        <a href="#" class={styles.socialLink}><span class="material-symbols-outlined">public</span></a>
                        <a href="#" class={styles.socialLink}><span class="material-symbols-outlined">alternate_email</span></a>
                        <a href="#" class={styles.socialLink}><span class="material-symbols-outlined">phone_iphone</span></a>
                      </div>
                    </div>
        
                    {/* Services */}
                    <div>
                      <h5 class={styles.footerHeading}>Services</h5>
                      <ul class={styles.footerList}>
                        {["Find Hotels", "Bus & Private Cars", "Local Tour Guides", "Events & Festivals"].map(
                          (item) => (
                            <li><a href="#" class={styles.footerLink}>{item}</a></li>
                          )
                        )}
                      </ul>
                    </div>
        
                    {/* Support */}
                    <div>
                      <h5 class={styles.footerHeading}>Support</h5>
                      <ul class={styles.footerList}>
                        {["Help Center", "Terms of Service", "Privacy Policy", "Booking Guide"].map((item) => (
                          <li><a href="#" class={styles.footerLink}>{item}</a></li>
                        ))}
                      </ul>
                    </div>
        
                    {/* Newsletter */}
                    <div>
                      <h5 class={styles.footerHeading}>Newsletter</h5>
                      <p class={styles.footerNewsletterText}>Get exclusive travel deals and tips.</p>
                      <div class={styles.newsletterRow}>
                        <input
                          class={styles.newsletterInput}
                          type="email"
                          placeholder="Your email"
                        />
                        <button class={styles.newsletterBtn}>
                          <span class="material-symbols-outlined">send</span>
                        </button>
                      </div>
                    </div>
                  </div>
        
                  {/* Bottom bar */}
                  <div class={styles.footerBottom}>
                    <p class={styles.copyright}>© 2024 DestiCam Cambodia. All rights reserved.</p>
                  </div>
                </div>
              </footer>
    );
};

export default Footer;