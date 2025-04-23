import './PrivacyPolicy.css';
import {
  FiCalendar,
  FiUserCheck,
  FiInfo,
  FiDatabase,
  FiSettings,
  FiXCircle,
  FiClock,
  FiCheckCircle,
  FiUser,
  FiMail
} from 'react-icons/fi';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-card">
        <h1> Privacy Policy for Macromate Extension</h1>
        <p className="effective-date"><FiCalendar className="icon" /> Effective Date: 1st May 2025</p>

        <section>
          <h2><FiInfo className="icon section-icon indigo" /> Introduction</h2>
          <p>
            Welcome to MacroMate! This Chrome Extension is built to streamline your workflow in platforms like Zendesk, PaygOps, and CXM. We take your privacy seriously and ensure all actions stay on your device.
          </p>
        </section>

        <section>
          <h2><FiDatabase className="icon section-icon teal" /> 1. What We Access (Not Collect!)</h2>
          <p>
            MacroMate does not collect or transmit any of your data. It temporarily accesses:
          </p>
          <ul>
            <li>Phone numbers visible on CXM</li>
            <li>Client data on PaygOps (e.g., account number, lead ID)</li>
            <li>Ticket and agent info on Zendesk</li>
          </ul>
          <p>All this is processed locally — never stored or shared externally.</p>
        </section>

        <section>
          <h2><FiSettings className="icon section-icon blue" /> 2. How We Use It</h2>
          <ul>
            <li>For real-time macro suggestions and auto-fill</li>
            <li>No analytics or user tracking</li>
            <li>No third-party transmissions</li>
            <li>No data persistence beyond the session</li>
          </ul>
        </section>

        <section>
          <h2><FiXCircle className="icon section-icon red" /> 3. No Third-Party Services</h2>
          <p>MacroMate avoids all third-party tracking, advertising, and analytics tools. Your data is yours.</p>
        </section>

        <section>
          <h2><FiClock className="icon section-icon yellow" /> 4. Data Retention</h2>
          <p>
            We retain nothing once your session ends. Data may temporarily exist in <code>chrome.storage.local</code>, but it clears automatically.
          </p>
        </section>

        <section>
          <h2><FiCheckCircle className="icon section-icon green" /> 5. User Consent</h2>
          <p>
            By using MacroMate, you agree to this approach — minimal, respectful, and focused on your productivity.
          </p>
        </section>

        <section>
          <h2><FiUserCheck className="icon section-icon purple" /> 6. Your Rights</h2>
          <p>
            We don’t store personal data, so there’s nothing to erase or export. Still, we’re happy to help if you have questions.
          </p>
        </section>

        <section>
          <h2><FiMail className="icon section-icon rose" /> 7. Contact Us</h2>
          <p>
            Questions or feedback? Contact us at:<br />
            <a href="macromate@oneacrefund.org">macromate@oneacrefund.org</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
