import "./Help.css";
import { BiExtension } from "react-icons/bi";
import { MdOutlineToggleOff } from "react-icons/md";
import { MdToggleOff } from "react-icons/md";

const Help = () => {
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
            </li>

            <li>
              <strong>Download the Extension:</strong>
              <br /> Go to the shared work drive folder and download the latest{" "}
              <code>macromate-extension.zip</code> file or Click the link below
              to download the latest version of the extension:
              <br />
              <a
                href="/assets/MacroMate.rar"
                download
                style={{
                  color: "#2563eb",
                  fontWeight: "500",
                  display: "inline-block",
                  marginTop: "6px",

                }}
              >
                📦 Download MacroMate.rar
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
              In your Chrome browser, go to{" "}
              <a
                href="chrome://extensions/"
                target="blank"
                style={{
                  color: "#2563eb",
                  textDecoration: "underline",
                  fontWeight: "500",
                }}
              >
                chrome://extensions/
              </a>{" "}
              or click the{" "}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  backgroundColor: "#f3f4f6",
                  padding: "2px 6px",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: "500",
                  boxShadow: "inset 0 0 0 1px #d1d5db",
                }}
              >
                <BiExtension size={24} />
                puzzle icon
              </span>{" "}
              in your toolbar and select <em>“Manage Extensions.”</em>
            </li>
            <li>
              <strong>Enable Developer Mode:</strong>
              <br />
              <MdOutlineToggleOff
                size={20}
                style={{ verticalAlign: "middle", marginRight: "4px" }}
              />{" "}
              ➺
              <MdToggleOff
                size={20}
                style={{ verticalAlign: "middle", marginRight: "4px" }}
              />
              Toggle on <em>Developer Mode</em> in the top-right corner of the
              Extensions page.
            </li>

            <li>
              <strong>Load the Extension:</strong>
              <br />
              Click <em>“Load unpacked”</em> on the top left and{" "}
              <strong>navigate inside</strong> the extracted folder. 📁 Open the{" "}
              <strong>main extension folder</strong> (usually inside the first
              one you extracted). Select
              <strong> that inner folder,</strong> which contains files like
              `manifest.json` and `assets`. You should now see{" "}
              <strong>MacroMate</strong> listed among your Chrome extensions.
            </li>
            <li>
              <strong>Pin the Extension:</strong>
              <br />
              Click the puzzle icon in your Chrome toolbar, then click the 📌pin
              icon next to <strong>MacroMate</strong> to keep it visible and
              accessible at all times.
            </li>
          </ol>

          <p>
            Once installed, click on the MacroMate icon to launch the extension
            and start using your macros! <br />
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
              see all fields and comments.
            </li>
          </ul>

          <h3>3. Add Macro</h3>
          <p>
            This page allows you to create new macro templates. Here's how the
            structure works:
          </p>
          <ul>
            <li>
              <strong>Macro Title</strong>: A clear name for the macro (e.g.,
              "Delivery Schedule Inquiry").
            </li>
            <li>
            <strong>Fields</strong>: These are like blanks or empty spaces in your Macro that will be filled automatically with the right info (like a client’s name or ID). 
  <br /><br />
  To add a field, just type the field name followed by a colon <code>:</code>, and you’ll see a list pop up — choose the matching placeholder from the list. 
  <br /><br />
  For example:
              <br />
              <code>{`Client Name: {{clientName}}.`}</code> <br />
              <code>{`National ID: {{accountNumber}}.`}</code> <br />
              <code>{`Lead ID: {{leadID}}.`}</code> <br />
              <code>{`Territory: {{territory}}.`}</code> <br />
              <code>{`Duka Name: {{dukazone}}.`}</code> <br />
              <code>{`Status: {{status}}.`}</code> <br />
              <code>{`Comment on the Status: {{statusComment}}.`}</code> <br /><br />
              <strong>⚠️ Important:</strong> Note that it is very important to add that placeholder as it will be used to fill the value from PaygOps. <br /><br />
              For Example: <br />
               <code>{`Client Name: {{clientName}}.`}</code> 
               <br /> will be replaced with <br />
               <code>Client Name: Larvin Kweya Ogutu</code><br />
            </li>
            <li>
              <strong>Comments</strong>: Select one comment
              snippets that will be inserted dynamically.
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
            window will appear.
          </p>

          <h3>2. Select a Macro</h3>
          <p>
            Browse or search for the macro you need. Once selected, you’ll see:
          </p>

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
              select and customize.
            </li>
          </ul>

          <h3>4. Generate Macro</h3>
          <p>
            Fill in the input fields, select a comment, and click{" "}
            <strong>"Generate"</strong>. The final macro message will appear in
            a preview box.
          </p>

          <h3>5. Copy and Paste</h3>
          <p>
            Once you’re satisfied, simply click <strong>"Copy"</strong> to place
            the macro in your clipboard. You can then paste it directly into
            your newly created Zendesk Ticket.
          </p>

          <h3>6. Changes</h3>
          <p>
            If you feel you need to make a change, maybe select a different
            comment, just select the other comment and click{" "}
            <strong>Update Macro</strong> button.
          </p>
        </section>

        <section>
          <h2>🧠 Best Practices</h2>
          <ul>
            <li>Keep macro titles short and descriptive.</li>
            <li>
              Use consistent placeholder names (e.g.,{" "}
              <code>{`{{clientName}}`}</code>, <code>{`{{leadID}}`}</code>).
            </li>

            <li>
              Review your macros periodically to ensure they are still relevant.
            </li>
            <li>Use comments to provide optional or situational messages.</li>
          </ul>
        </section>

        <section>
          <h2>❓Need More Help?</h2>
          <p>
            Reach out to the support team or leave feedback from the Settings
            page. We're constantly improving MacroMate to make your work
            smoother and faster.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Help;
