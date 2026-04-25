"use client";

import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Solutions", hasDropdown: true },
  { label: "Features", hasDropdown: false },
  { label: "Pricing", hasDropdown: false },
  { label: "Blog", hasDropdown: true },
  { label: "Restaurants", hasDropdown: false },
  { label: "Food", hasDropdown: true },
];

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      {/* Logo */}
      <a href="#" className={styles.logo}>
        <span className={styles.logoIcon}>🫒</span>
        olive
      </a>

      {/* Center links */}
      <ul className={styles.navLinks}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href="#" className={styles.navLink}>
              {link.label}
              {link.hasDropdown && <span className={styles.chevron}>▾</span>}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div className={styles.navRight}>
        <button className={styles.btnGhost}>Sign in</button>
        <button className={styles.btnPrimary}>
          Get Olive
          <span className={styles.arrow}>→</span>
        </button>
      </div>
    </nav>
  );
}
