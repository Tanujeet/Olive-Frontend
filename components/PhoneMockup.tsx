import styles from "./PhoneMockup.module.css";

interface PhoneProps {
  variant?: "main" | "side";
}

function SidePhone() {
  return (
    <div className={styles.phoneSideFrame}>
      <div className={styles.sideScreen}>🥗</div>
    </div>
  );
}

function MainPhone() {
  return (
    <div className={styles.phoneFrame}>
      <div className={styles.phoneNotch} />
      <div className={styles.phoneScreen}>
        {/* Product image area */}
        <div className={styles.productImg}>🫒</div>

        {/* Product info */}
        <div className={styles.productInfo}>
          <p className={styles.productTitle}>
            Fig and Olive Crackers, Fig
            <br />
            and Olive
          </p>
          <p className={styles.productBrand}>Lesley Stowe</p>

          <div className={styles.scoreRow}>
            <span className={styles.scoreBadge}>46/100</span>
            <span className={styles.scoreLabel}>Poor</span>
            <div className={styles.scoreIcons}>♡ ⚑</div>
          </div>
        </div>

        {/* AI insight */}
        <div className={styles.aiSays}>
          <div className={styles.aiSaysHeader}>🫒 Oliver Says:</div>
          <p className={styles.aiSaysText}>
            "This product's low score mainly comes from the processed sugars
            like honey and brown sugar, which can impact your family's health
            when consumed frequently, especially for kids who are still
            developing. Additionally, there are several additives that aren't
            ideal for your goal of avoiding processed foods, making this a
            choice to consider more carefully."
          </p>
        </div>

        <p className={styles.breakdownLabel}>Breakdown</p>
      </div>
    </div>
  );
}

export default function PhoneMockup() {
  return (
    <div className={`${styles.phoneWrapper} animate-fade-up delay-4`}>
      {/* Left blurred side phone */}
      <div className={`${styles.phoneSide} ${styles.left}`}>
        <SidePhone />
      </div>

      {/* Center main phone */}
      <div className={styles.phoneMain}>
        <MainPhone />
      </div>

      {/* Right blurred side phone */}
      <div className={`${styles.phoneSide} ${styles.right}`}>
        <SidePhone />
      </div>
    </div>
  );
}
