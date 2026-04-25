import PhoneMockup from "./PhoneMockup";
import styles from "./Hero.module.css";

const avatars = [
  { bg: "#d4e8a0", emoji: "👩" },
  { bg: "#f9c78a", emoji: "👨" },
  { bg: "#aad4f5", emoji: "👩" },
  { bg: "#f5aac7", emoji: "👧" },
  { bg: "#c4b5f5", emoji: "👦" },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background glow */}
      <div className={styles.bgGlow} />

      {/* Social proof */}
      <div className={`${styles.socialProof} animate-fade-up`}>
        <div className={styles.avatars}>
          {avatars.map((av, i) => (
            <div
              key={i}
              className={styles.avatar}
              style={{ background: av.bg }}
            >
              {av.emoji}
            </div>
          ))}
        </div>
        <span className={styles.socialProofText}>
          Trusted by thousands of healthy families
        </span>
      </div>

      {/* Headline */}
      <h1 className={`${styles.headline} animate-fade-up delay-1`}>
        The Safest Way to
        <br />
        Shop for Groceries
      </h1>

      {/* Subtitle */}
      <p className={`${styles.subtitle} animate-fade-up delay-2`}>
        Use the Olive Food Scanner App to Instantly Eliminate Harmful
        Ingredients from Your Family&apos;s Diet and Get Expert-Backed Food
        Insights
      </p>

      {/* CTAs */}
      <div className={`${styles.ctaRow} animate-fade-up delay-3`}>
        <button className={styles.btnIos}>
          <svg
            className={styles.appleIcon}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download for iOS
        </button>

        <button className={styles.btnCommunity}>
          Join the Olive Community →
        </button>
      </div>

      {/* Phone mockup */}
      <PhoneMockup />
    </section>
  );
}
