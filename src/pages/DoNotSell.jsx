import styles from "../styles/TermsPrivacyDoNotSell.module.css";

function DoNotSell() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Do Not Sell My Personal Information</h1>
      <p className={styles.p}>
        RoomaWeek.com is committed to protecting your privacy and providing
        choices regarding your personal data. If you reside in certain regions,
        including California, you have the right to opt out of the sale of
        personal information under privacy laws like the California Consumer
        Privacy Act (CCPA).
      </p>

      <p className={styles.p}>
        <span className={styles.span}>
          What Constitutes a “Sale” of Information?
        </span>
        <br />
        <span>
          Under applicable laws, the term “sale” may include certain
          data-sharing practices, even if no money is exchanged. RoomaWeek.com
          may share personal data with certain third parties, such as
          advertising and analytics providers, to enhance user experience and
          provide personalized content. However, you can choose to opt out of
          this type of sharing.
        </span>
      </p>

      <p className={styles.p}>
        <span className={styles.span}>How to Opt Out</span>
        <br />
        <span>To exercise your right to opt out, you can:</span>
        <ul className={styles.ul}>
          <li>
            <span className={styles.span}>Email Us:</span> Contact us at
            request@roomaweek.coom with the subject line “Do Not Sell My
            Personal Information” and include your name and any relevant account
            information.
          </li>

          <li>
            <span className={styles.span}>Cookie Preferences:</span> Adjust your
            preferences using the “Cookie Settings” link on our website to limit
            the sharing of information with third-party partners.
          </li>
        </ul>
      </p>

      <p className={styles.p}>
        <span className={styles.span}>Verification of Your Request</span>
        <br />
        <span>
          Upon receiving your opt-out request, we may need to verify your
          identity to protect your information and comply with legal
          requirements. You may be asked to provide certain details, such as
          your name, email, or account details, to complete the process.
        </span>
      </p>

      <p className={styles.p}>
        <span className={styles.span}>Additional Rights</span>
        <br />
        <span>
          Depending on your location, you may have additional privacy rights,
          such as accessing, updating, or deleting your information. Please
          refer to our{" "}
          <a className={styles.a} href="/privacy">
            Privacy Policy
          </a>{" "}
          for more details.
        </span>
      </p>

      <p className={styles.p}>
        <span className={styles.span}>Updates to this Notice</span>
        <br />
        <span>
          We may update this notice as regulations change. We encourage you to
          review this page periodically for any updates.
        </span>
      </p>

      <p>For questions, please contact us at info@roomaweek.com</p>
    </div>
  );
}

export default DoNotSell;
