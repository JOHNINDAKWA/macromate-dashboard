import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./AddMacro.css";

const placeholders = [
  "clientName",
  "fullName",
  "nationalId",
  "accountNumber",
  "leadId",
  "phoneNumber",
  "salesTerritory",
  "dukaZone",
  "dob",
  "status",
  "statusComment",
  "phone",
  "comment",
  "N/A",
  "Yes",
  "No"
];

const API_KEY = "$2a$10$B0bSg6uvmQU8k9TbXllduOi7ECvV9gHRI.xo7IKlU7nyIjxfL5Rry";
const BIN_ID = "6802ee858a456b79668c8f83";

const AddMacro = () => {
  const [title, setTitle] = useState("");
  const [template, setTemplate] = useState("");
  const [comments, setComments] = useState([{ label: "", message: "" }]);
  const [status, setStatus] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionPosition, setSuggestionPosition] = useState({ top: 0, left: 0 });
  const [cursorIndex, setCursorIndex] = useState(0);
  const templateRef = useRef(null);
  const navigate = useNavigate(); // 👈 Setup navigation

  const handleCommentChange = (index, field, value) => {
    const updatedComments = [...comments];
    updatedComments[index][field] = value;
    setComments(updatedComments);
  };

  const addCommentField = () => {
    setComments([...comments, { label: "", message: "" }]);
  };

  const handleTemplateChange = (e) => {
    const value = e.target.value;
    const caretPos = e.target.selectionStart;
    setTemplate(value);
    setCursorIndex(caretPos);

    if (value[caretPos - 1] === ":") {
      const rect = e.target.getBoundingClientRect();
      const lineHeight = 24;
      const offsetTop =
        rect.top +
        window.scrollY +
        lineHeight * value.substring(0, caretPos).split("\n").length;
      const offsetLeft = rect.left + 150;

      setSuggestionPosition({ top: offsetTop, left: offsetLeft });
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const insertPlaceholder = (placeholder) => {
    const before = template.substring(0, cursorIndex);
    const after = template.substring(cursorIndex);
    const newValue = before + ` {{${placeholder}}}` + after;
    setTemplate(newValue);
    setShowSuggestions(false);
    setTimeout(() => templateRef.current?.focus(), 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ Prevent form from refreshing

    try {
      const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        headers: { "X-Access-Key": API_KEY },
      });

      const data = await res.json();
      const currentRecord = data.record;

      const updatedRecord = {
        ...currentRecord,
        [title]: { template, comments },
      };

      const updateRes = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Access-Key": API_KEY,
        },
        body: JSON.stringify(updatedRecord),
      });

      if (!updateRes.ok) throw new Error("Failed to update bin");

      // ✅ Navigate to macro detail page
      navigate(`/macro/${encodeURIComponent(title)}`);
    } catch (err) {
      console.error("Error:", err);
      setStatus("Something went wrong. Please try again.");
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log(`Copied: ${text}`);
    }).catch((err) => {
      console.error("Clipboard copy failed:", err);
    });
  };
  

  return (
    <div className="add-macro-container">
      <div className="add-macro">
        <h2>Add New Macro</h2>
        <form onSubmit={handleSubmit}>
          <label>Macro Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label>Template:</label>
          <textarea
            ref={templateRef}
            rows="6"
            value={template}
            onChange={handleTemplateChange}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder="Write your template. Use : to trigger placeholder suggestions."
            required
          />
          {showSuggestions && (
            <ul className="suggestion-box" style={{
              position: "absolute",
              top: suggestionPosition.top,
              left: suggestionPosition.left,
              zIndex: 999,
              background: "#fff",
              border: "1px solid #ccc",
              padding: "0.5rem",
              borderRadius: "6px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            }}>
              {placeholders.map((ph) => (
                <li key={ph}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      insertPlaceholder(ph);
                    }}
                    style={{ cursor: "pointer", padding: "0.3rem 0" }}
                >
                  {`{{${ph}}}`}
                </li>
              ))}
            </ul>
          )}

<label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
  Comments:
  <span style={{ display: "flex", gap: "0.3rem", cursor: "pointer" }}>
    {["🟨", "🟥", "🟦", "🟩", "🟪"].map((color) => (
      <span
        key={color}
        title={`Copy ${color}`}
        onClick={() => copyToClipboard(color)}
        style={{ fontSize: "1.2rem", transition: "transform 0.2s" }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1.0)")}
      >
        {color}
      </span>
    ))}
  </span>
</label>

          {comments.map((comment, index) => (
            <div key={index} className="comment-block">
              <input
                type="text"
                placeholder="Label"
                value={comment.label}
                onChange={(e) =>
                  handleCommentChange(index, "label", e.target.value)
                }
                required
              />
              <textarea
                placeholder="Message"
                rows="3"
                value={comment.message}
                onChange={(e) =>
                  handleCommentChange(index, "message", e.target.value)
                }
                required
              />
            </div>
          ))}

          <div className="macro-buttons">
            <button type="button" onClick={addCommentField}>
              + Add Another Comment
            </button>
            <button type="submit">Save Macro</button>
          </div>
          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddMacro;
