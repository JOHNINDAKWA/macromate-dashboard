import "./Help.css";
import { BiExtension } from "react-icons/bi";
import { MdOutlineToggleOff } from "react-icons/md";
import { MdToggleOff } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from "react-router-dom";



const Help = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Link copied to clipboard! Paste it on a new tab.");
    });
  };
  return (
    <div className="help">
      <div className="help-container">
        <h1>Welcome to MacroMate Help Center</h1>

        <section>
          <h2>🧭 Getting Started</h2>
          <p>
            MacroMate is a productivity suite designed to help agents manage
            support responses with speed and accuracy. It consists of two main
            tools:
          </p>
          <ul>
            <li>
              <strong>MacroMate Dashboard</strong> – A centralized platform to
              manage macro templates.
            </li>
            <li>
              <strong>MacroMate Chrome Extension</strong> – A browser-based tool
              that allows agents to generate and use macros directly while
              working.
            </li>
          </ul>
        </section>

        <section>
          <h2>🔧 Installing the Chrome Extension</h2>
          <p>
            To use the MacroMate Chrome Extension, you'll first need to install
            it manually from the provided ZIP file.
          </p>

          <ol>
            <li>
              <strong>Download the Extension:</strong>
              <br />
              Go to the shared work drive folder and download the latest{" "}
              <code>macromate-extension.zip</code> file.
              <br />
              Alternatively, click the link below to download the latest version
              of the extension:
              <br />
              <a
                href="/assets/macromate-extension.zip"
                download
                className="download-link"
              >
                📦 Download MacroMate Extension
              </a>
            </li>

            <li>
              <strong>Extract the ZIP:</strong>
              <br />
              Right-click the file and choose <em>“Extract All…”</em> or use a
              zip tool to unpack it. You'll get a folder containing the
              extension files.
            </li>

            <li>
              <strong>Open Chrome Extensions:</strong>
              <br />
              In your Chrome browser:
              <br />
              1. Go to{" "}
              <button
                onClick={() => copyToClipboard("chrome://extensions/")}
                className="copy-link"
              >
                chrome://extensions/{" "}
                <span style={{ color: "green" }}>(Click to Copy)</span>
              </button>
              ➺ Copy and paste in a new tab.
              <br />
              2. Or click the{" "}
              <span className="inline-icon">
                <BiExtension size={20} />
                puzzle icon
              </span>{" "}
              in your toolbar and select <em>“Manage Extensions.”</em>
              <br />
              3. Alternatively, click the 3 dots ︙ in the top-right corner of
              Chrome, then click <strong>Extensions</strong> and select{" "}
              <strong>Manage Extensions</strong>.
            </li>

            <li>
              <strong>Enable Developer Mode:</strong>
              <br />
              <MdOutlineToggleOff size={20} className="toggle-icons" />
              ➺
              <MdToggleOff size={20} className="toggle-icons" />
              Toggle on <em>Developer Mode</em> in the top-right corner of the
              Extensions page.
            </li>

            <li>
              <strong>Load the Extension:</strong>
              <br />
              Click <em>“Load unpacked”</em> on the top left and{" "}
              <strong>navigate inside</strong> the extracted folder, i.e., 📁
              open the <strong>main extension folder</strong> (usually inside
              the first one you extracted). Select{" "}
              <strong>that inner folder</strong>, which contains files like
              `manifest.json` and `assets`. You should now see{" "}
              <strong>MacroMate</strong> listed among your Chrome extensions.
            </li>

            <li>
              <strong>Pin the Extension:</strong>
              <br />
              Click the puzzle 🧩 icon, then 📌 pin MacroMate to keep it
              visible.
            </li>
          </ol>

          <p>
            Once installed, click on the MacroMate icon to launch the extension
            and start using your macros!
            <br />
            <br />
            <i style={{ color: "green" }}>
              ⚠️ Fetching will only happen when both PaygOps and Connex AI are
              logged in and open in the background.
            </i>
          </p>
        </section>

        <section>
          <h2>🍀 Using the MacroMate Dashboard</h2>
          <p>
            The dashboard provides a powerful interface to view, manage, and
            organize macro templates.
          </p>

          <h3>1. Home</h3>
          <p>
            The landing page of the dashboard. It provides a quick overview and
            helpful links.
          </p>

          <h3>2. All Macros</h3>
          <p>Here, you can browse all available macros. Each macro displays:</p>
          <ul>
            <li>
              <strong>Title</strong> – The macro name or category (e.g.,
              "Delivery Issues").
            </li>
            <li>
              <strong>Fields</strong> – Dynamic input fields that agents will
              fill in while using the macro.
            </li>
            <li>
              <strong>Comments</strong> – Predefined comment templates linked to
              the macro.
            </li>
            <li>
              <strong>View More</strong> – Click to expand the macro details and
              see all fields and comments. Here you can edit or delete macro
              templates and comments.
            </li>
          </ul>

          <h3>3. Add Macro</h3>
          <p>
            Use this page to create new macro templates that help standardize
            and speed up your responses. Here's how to structure a macro:
          </p>
          <ul>
            <li>
              <strong>Macro Title</strong>: Provide a clear, descriptive name
              for your macro (e.g.,
              <code>Delivery Schedule Inquiry</code>).
            </li>

            <li>
              <strong>Fields</strong>: These act as placeholders that will be
              auto-filled with client data (like name, ID, etc.).
              <br />
              <br />
              <strong>To insert a field:</strong>
              <ol>
                <li>
                  Type the field name followed by a colon (<code>:</code>).
                </li>
                <li>
                  Select the appropriate placeholder from the dropdown list.
                </li>
              </ol>
              <br />
              <strong>Examples:</strong>
              <br />
              <code>Client Name: {"{{clientName}}"}</code>
              <br />
              <code>National ID: {"{{accountNumber}}"}</code>
              <br />
              <code>Lead ID: {"{{leadID}}"}</code>
              <br />
              <code>Territory: {"{{territory}}"}</code>
              <br />
              <code>Duka Name: {"{{dukazone}}"}</code>
              <br />
              <code>Status: {"{{status}}"}</code>
              <br />
              <code>Comment on the Status: {"{{statusComment}}"}</code>
              <br />
              <br />
              <strong>
                Required Placeholders (must be included in all macros):
              </strong>
              <br />
              <ul>
                <li>
                  <code>Caller Phone: {"{{phone}}"}</code>
                </li>
                <li>
                  <code>Comment:</code>
                </li>
                <li>
                  <code>{"{{comment}}"}</code>
                </li>
              </ul>
              <p>
                ⚠️ <strong>Important:</strong> Placeholders are used to pull
                values from PaygOps. Always include them in every macro.
              </p>
              <p>
                <strong>Example Output:</strong>
                <br />
                <code>Client Name: {"{{clientName}}"}</code> becomes <br />
                <code>Client Name: Larvin Kweya Ogutu</code>
              </p>
            </li>

            <li>
              <strong>Comments</strong>: Select a predefined comment snippet to
              be inserted dynamically at the end of the macro.
            </li>
          </ul>

          <h3>4. Settings</h3>
          <p>
            Configuration options (to be added in the future) for managing data
            sources, theme preferences, and more.
          </p>

          <h3>5. Help</h3>
          <p>
            You're here! This page helps you understand how to use the tools
            effectively.
          </p>
        </section>

        <section>
          <h2>🧩 Using the MacroMate Chrome Extension</h2>
          <p>
            The Chrome extension is your in-browser companion that helps you
            fetch, fill, and generate macros in real-time.
          </p>

          <h3>1. Launch the Extension</h3>
          <p>
            Click on the MacroMate icon in your browser’s toolbar. The popup
            window will appear. <br /> Click{" "}
            <span
              style={{
                background: "#007bff",
                padding: "2px 20px",
                color: "white",
                borderRadius: "6px",
              }}
            >
              🔍Fetch Data From PaygOps
            </span>{" "}
            Button.
          </p>

          <h3>2. Select a Macro</h3>
          <p>Browse or search for the macro you need.</p>

          <h3>3. Caller Phone Number</h3>
          <p>
            Phone Number is autofilled after fetching from Connex AI platform.
            For this to happen, ensure on Connex you are in the{" "}
            <strong>🏠Home Tab</strong> and <strong>My Interactions</strong>{" "}
            option is selected. In case the number is not autofilled, you can
            always paste it from connex.
          </p>
          <ul>
            <li>
              <strong>Input Fields</strong>: These are based on{" "}
              <code>
                {"{"}
                {"}"}
              </code>{" "}
              variables used in the dashboard templates.
            </li>
            <li>
              <strong>Comment Options</strong>: Pre-written comments you can
              select and customize. Select One.
            </li>
          </ul>

          <h3>4. Generate Macro</h3>
          <p>
            Once you select a comment, it will scroll to the{" "}
            <span
              style={{
                background: "#28a745",
                padding: "2px 20px",
                color: "white",
                borderRadius: "6px",
              }}
            >
              ✍️Generate Macro
            </span>{" "}
            button. Click it and it will scroll to the final macro message will
            appear in a preview box.
          </p>

          <h3>5. Copy and Paste</h3>
          <p>
            Once you’re satisfied, simply click{" "}
            <span
              style={{
                background: "#ffb300",
                padding: "2px 20px",
                color: "black",
                borderRadius: "6px",
              }}
            >
              📜Copy
            </span>{" "}
            to place the macro in your clipboard. You can then paste it directly
            into your newly created Zendesk Ticket.
          </p>

          <h3>6. Changes</h3>
          <p>
            If you feel you need to make a change, maybe select a different
            comment, or select a new macro or change caller phone number, simply
            select the other comment and click{" "}
            <span
              style={{
                background: "#28a745",
                padding: "2px 20px",
                color: "white",
                borderRadius: "6px",
              }}
            >
              ✍️Update Macro
            </span>{" "}
            button.
          </p>
        </section>

        <section>
          <h2> Best Practices 🧠</h2>
          <ul>
            <li>Use Macro titles exactly as they are in Zendesk. </li>
            <li>
              Use consistent placeholder names (e.g.,{" "}
              <code>{`{{clientName}}`}</code>, <code>{`{{leadID}}`}</code>).
            </li>

            <li>
              Review your macros periodically to ensure they are still relevant
              and up to date.
            </li>
            <li>
              Use comments to provide optional or situational messages. Label
              the comments for easy access in the extension
            </li>
          </ul>
        </section>

        <section>
          <h2>Need More Help? Or you have a suggestion? 🤔💭</h2>
          <p>
            Reach out to the support team or leave feedback from the Settings
            page. We're constantly improving MacroMate to make your work
            smoother and faster.
          </p>
        </section>

        <div className="settings-section privacy-section">
        <h3>
          {" "}
          <SiGnuprivacyguard />
          Privacy & Legal
        </h3>
        <p>
          We care about your data. Please review our{" "}
          <Link to="/privacy-policy" className="privacy-link">
            Privacy Policy
          </Link>{" "}
          to understand how we handle your information.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Help;
