import styles from "../styles/TermsPrivacyDoNotSell.module.css";

function Terms() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Terms of Service for RoomaWeek.com</h1>

      <h2 className={styles.h2}>Effective Date: 10/25/2024</h2>

      <p className={styles.p}>
        <span className={styles.span}>1. Acceptance of Terms </span>
        <br />
        By using RoomaWeek.com, you agree to these Terms of Service. If you
        disagree, please do not use our services.
      </p>

      <p className={styles.p}>
        <span className={styles.span}>2. User Eligibility</span>
        <br />
        Our services are intended for individuals aged 18 or older, with a valid
        payment method and legal standing to enter rental agreements.
      </p>

      <p className={styles.p}>
        <span className={styles.span}>3. Service Scope</span>
        <br />
        RoomaWeek.com provides a platform for room rentals, facilitating
        applications, bookings, and payments. We are not liable for tenant or
        landlord conduct, nor guarantee rental availability.
      </p>

      <p className={styles.p}>
        <span className={styles.span}>4. User Responsibilities</span>
        <br />
        Users agree to provide accurate information, comply with rental
        policies, maintain property care, and adhere to applicable laws.
        Non-compliance may result in account suspension or termination.
      </p>

      <p className={styles.p}>
        <span className={styles.span}>5. Payment Terms</span>
        <br />
        By booking, you authorize charges for rental fees, deposits, and
        applicable taxes. Payments are processed through third-party providers;
        review their terms and policies.
      </p>

      <p className={styles.p}>
        <span className={styles.span}>6. Cancellations and Refunds</span>
        <br />
        Cancellation and refund policies are outlined at booking. Refunds are
        issued according to these policies and may include fees for late
        cancellations.
      </p>

      <p className={styles.p}>
        <span className={styles.span}>7. Privacy and Data Usage</span>
        <br />
        Our{" "}
        <a className={styles.a} href="/privacy">
          Privacy Policy
        </a>{" "}
        explains data collection, use, and sharing practices. Use of our
        services implies consent to our data practices.
      </p>

      <p className={styles.p}>
        <span className={styles.span}>8. Limitation of Liability</span>
        <br />
        RoomaWeek.com is not liable for indirect, incidental, or punitive
        damages arising from your use of our site, subject to applicable law.
      </p>

      <p className={styles.p}>
        <span className={styles.span}>9. Third-Party Links</span>
        <br />
        Links to third-party websites are provided for convenience. We are not
        responsible for their content, policies, or practices.
      </p>

      <p className={styles.p}>
        <span className={styles.span}>10. Modifications to Terms</span>
        <br />
        RoomaWeek.com may update these terms periodically. Users are encouraged
        to review these Terms regularly.
      </p>

      <p className={styles.p}>
        <span className={styles.span}>11. Contact</span>
        <br />
        For questions or concerns, please contact us at info@roomaweek.com
      </p>
    </div>
  );
}

export default Terms;
