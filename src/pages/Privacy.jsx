import styles from "../styles/TermsPrivacyDoNotSell.module.css";

function Privacy() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Privacy Policy for RoomaWeek.com</h1>
      <h2 className={styles.h2}>Effective Date: 10/25/2004</h2>

      <p className={styles.p}>
        <span className={styles.span}>1. Information We Collect</span>
        <br />
        <span>
          We collect information when you register, apply for a rental,
          communicate with us, or engage with our services. This may include:
        </span>
        <ul className={styles.ul}>
          <li>
            <span>Personal Identification:</span> Name, address, email, phone
            number.
          </li>

          <li>
            <span>Rental Information:</span> Rental history, references,
            employment, income details.
          </li>

          <li>
            <span>Financial Information:</span> Payment details for processing
            deposits and payments.
          </li>

          <li>
            <span>Technical Data: </span> IP addresses, browser type, device
            information, and site activity via cookies.
          </li>
        </ul>
      </p>

      <p className={styles.p}>
        <span className={styles.span}>2. How We Use Your Information</span>
        <br />
        <span>We use collected data to:</span>
        <ul className={styles.ul}>
          <li>
            <span className={styles.span}>Manage Rentals:</span> Verify
            applications, process bookings, communicate important updates, and
            provide customer support.
          </li>
          <li>
            <span className={styles.span}>Marketing & Personalization:</span>{" "}
            Offer personalized recommendations, email newsletters (with your
            consent), and special offers.
          </li>
          <li>
            <span className={styles.span}>Site Analytics:</span> Improve the
            site experience through data analysis and troubleshoot any site
            issues.
          </li>
          <li>
            <span className={styles.span}>Legal Obligations:</span> Meet
            compliance requirements and assist with investigations as required
            by law.
          </li>
        </ul>
      </p>

      <p className={styles.p}>
        <span className={styles.span}>3. Data Sharing and Disclosure</span>
        <br />
        <span>We may share data with trusted third parties to:</span>
        <ul className={styles.ul}>
          <li>
            <span className={styles.span}>Process Payments:</span> Payment
            processors for secure transaction handling.
          </li>
          <li>
            <span className={styles.span}>Screening Services:</span> For rental
            applications, where permitted by law.
          </li>
          <li>
            <span className={styles.span}>Service Providers:</span> Companies
            providing IT, analytics, and other services to enhance the site and
            user experience.
          </li>
          <li>
            <span className={styles.span}>Legal Compliance:</span> When required
            to comply with legal obligations or to protect our rights and
            safety.
          </li>
        </ul>
      </p>

      <p className={styles.p}>
        <span className={styles.span}>
          4. Cookies and Tracking Technologies
        </span>
        <br />
        <span>
          Our site uses cookies and similar tracking technologies to personalize
          your experience, track site usage, and facilitate features such as
          saved login. You can manage your cookie preferences in your browser
          settings, but some features may be affected if disabled.
        </span>
      </p>

      <p className={styles.p}>
        <span className={styles.span}>5. Data Retention and Security</span>
        <br />
        <span>
          We retain personal data only as long as necessary to fulfill rental
          services, meet legal obligations, and resolve disputes. RoomaWeek.com
          uses encryption, firewalls, and access controls to protect your
          information.
        </span>
      </p>

      <p className={styles.p}>
        <span className={styles.span}>6. International Data Transfers</span>
        <br />
        <span>
          RoomaWeek.com may transfer data to servers outside your region. We
          ensure appropriate safeguards are in place to protect personal
          information during transfers.
        </span>
      </p>

      <p className={styles.p}>
        <span className={styles.span}>7. Your Privacy Rights</span>
        <br />
        <span>Depending on local laws, you may have rights to:</span>
        <ul className={styles.ul}>
          <li>Access, correct, or delete your personal data.</li>
          <li>Opt-out of data processing for marketing purposes.</li>
          <li>Restrict or object to certain data processing activities.</li>
          <li>Request data portability.</li>
        </ul>
      </p>

      <p className={styles.p}>
        <span className={styles.span}>8. Third-Party Links</span>
        <br />
        <span>
          Our website may link to third-party sites; we are not responsible for
          their privacy practices. Review their privacy policies before
          providing personal information.
        </span>
      </p>

      <p className={styles.p}>
        <span className={styles.span}>9. Children’s Privacy</span>
        <br />
        <span>
          Our services are intended for individuals 18 years and older. We do
          not knowingly collect data from minors under 13. If you believe a
          child has provided information, contact us to remove it.
        </span>
      </p>

      <p className={styles.p}>
        <span className={styles.span}>10. Policy Updates</span>
        <br />
        <span>
          RoomaWeek.com may update this policy for operational or legal reasons.
          We’ll notify users of major changes and update the effective date at
          the top of this policy.
        </span>
      </p>

      <p className={styles.p}>
        <span>Contact Us</span>
        <br />
        <span>
          For questions or to exercise your privacy rights, please contact us at
          info@roomaweek.com
        </span>
      </p>
    </div>
  );
}

export default Privacy;
