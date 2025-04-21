import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./MacroDetail.css";
import { useLogin } from '/src/Context/LoginContext.jsx';


const API_KEY = "$2a$10$B0bSg6uvmQU8k9TbXllduOi7ECvV9gHRI.xo7IKlU7nyIjxfL5Rry";
const BIN_ID = "6802ee858a456b79668c8f83";

const placeholders = [
  "{{clientName}}",
  "{{fullName}}",
  "{{nationalId}}",
  "{{accountNumber}}",
  "{{leadId}}",
  "{{phoneNumber}}",
  "{{salesTerritory}}",
  "{{dukaZone}}",
  "{{dob}}",
  "{{status}}",
  "{{phone}}",
  "{{comment}}",
  "N/A",
  "Yes",
  "No",
];

const MacroDetail = () => {
  const { macroTitle } = useParams();
  const [macroData, setMacroData] = useState(null);
  const [fullRecord, setFullRecord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newLabel, setNewLabel] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [templateInput, setTemplateInput] = useState("");

  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionPosition, setSuggestionPosition] = useState({
    top: 0,
    left: 0,
  });
  const [cursorIndex, setCursorIndex] = useState(0);

  const [savingComment, setSavingComment] = useState(false);
  const [savingTemplate, setSavingTemplate] = useState(false);

  const templateRef = useRef(null);

  const { isLoggedIn} = useLogin();


  useEffect(() => {
    const fetchMacro = async () => {
      try {
        const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
          headers: {
            "X-Access-Key": API_KEY,
          },
        });

        const data = await res.json();
        setFullRecord(data.record);
        setMacroData(data.record[macroTitle]);
      } catch (err) {
        console.error("Failed to fetch macro:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMacro();
  }, [macroTitle]);

  const handleAddComment = () => {
    setNewLabel("");
    setNewMessage("");
    setIsEditMode(false);
    setEditIndex(null);
    setShowModal(true);
  };

  const handleEditComment = (index) => {
    const comment = macroData.comments[index];
    setNewLabel(comment.label);
    setNewMessage(comment.message);
    setEditIndex(index);
    setIsEditMode(true);
    setShowModal(true);
  };

  const handleDeleteComment = async (index) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this comment?"
    );
    if (!confirmed) return;

    const updatedComments = macroData.comments.filter((_, i) => i !== index);
    const updatedMacro = { ...macroData, comments: updatedComments };
    const updatedRecord = { ...fullRecord, [macroTitle]: updatedMacro };

    try {
      const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Access-Key": API_KEY,
        },
        body: JSON.stringify(updatedRecord),
      });

      if (res.ok) {
        setMacroData(updatedMacro);
        setFullRecord(updatedRecord);
      } else {
        console.error("Failed to delete comment");
      }
    } catch (err) {
      console.error("Error deleting comment:", err);
    }
  };

  const handleTemplateChange = (e) => {
    const value = e.target.value;
    const caretPos = e.target.selectionStart;
    setTemplateInput(value);
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

  const handleTemplateUpdate = async () => {
    if (!templateInput.trim()) return;

    setSavingTemplate(true); // Start loading state

    const updatedMacro = { ...macroData, template: templateInput };
    const updatedRecord = { ...fullRecord, [macroTitle]: updatedMacro };

    try {
      const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Access-Key": API_KEY,
        },
        body: JSON.stringify(updatedRecord),
      });

      if (res.ok) {
        setMacroData(updatedMacro);
        setFullRecord(updatedRecord);
        setShowTemplateModal(false);
      } else {
        console.error("Failed to update template");
      }
    } catch (err) {
      console.error("Error updating template:", err);
    } finally {
      setSavingTemplate(false); // End loading state
    }
  };

  const insertPlaceholder = (placeholder) => {
    const before = templateInput.substring(0, cursorIndex);
    const after = templateInput.substring(cursorIndex);
    const newValue = before + ` ${placeholder}` + after;
    setTemplateInput(newValue); // ✅

    setShowSuggestions(false);
    setTimeout(() => templateRef.current?.focus(), 0);
  };

  const handleModalSubmit = async () => {
    if (!newLabel || !newMessage) return;

    setSavingComment(true); // Start loading state

    let updatedComments;

    if (isEditMode && editIndex !== null) {
      updatedComments = macroData.comments.map((c, i) =>
        i === editIndex ? { label: newLabel, message: newMessage } : c
      );
    } else {
      updatedComments = [
        ...macroData.comments,
        { label: newLabel, message: newMessage },
      ];
    }

    const updatedMacro = { ...macroData, comments: updatedComments };
    const updatedRecord = { ...fullRecord, [macroTitle]: updatedMacro };

    try {
      const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Access-Key": API_KEY,
        },
        body: JSON.stringify(updatedRecord),
      });

      if (res.ok) {
        setMacroData(updatedMacro);
        setFullRecord(updatedRecord);
        setNewLabel("");
        setNewMessage("");
        setShowModal(false);
        setIsEditMode(false);
        setEditIndex(null);
      } else {
        console.error("Failed to update bin");
      }
    } catch (err) {
      console.error("Error updating comment:", err);
    } finally {
      setSavingComment(false); // End loading state
    }
  };

  if (loading) return <div className="macro-detail">↻ Loading...</div>;
  if (!macroData) return <div className="macro-detail">Macro not found.</div>;


  return (
    <div className="macro-detail-container">
      <div className="macro-detail">
        <Link to="/" className="back-btn">
          ← Back
        </Link>
        <h1>{macroTitle}</h1>
        <h3>Template:</h3>
        <pre className="template">
          {macroData.template.replace(/{{[^}]+}}/g, "").trim()}
        </pre>
        {isLoggedIn && (
          <button
            className="edit-template-btn"
            onClick={() => {
              setTemplateInput(macroData.template);
              setShowTemplateModal(true);
            }}
          >
            Edit 🖋️
          </button>
        )}

        <div className="div-comment">
          <h3>Comments:</h3>
          {isLoggedIn && (
  <button onClick={handleAddComment} className="add-comment-btn">
    Add Comment
  </button>
)}

        </div>
        <ul className="comment-lists">
      {macroData.comments.map((comment, idx) => (
        <li key={idx} className="comment-list">
          <strong>{comment.label}</strong>
          <p className="comment-message">{comment.message}</p>

          {isLoggedIn && ( // Conditionally render actions based on login status
            <div className="comment-actions">
              <button
                onClick={() => handleEditComment(idx)}
                className="edit-comment-btn"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteComment(idx)}
                className="delete-comment-btn"
              >
                Delete
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>{isEditMode ? "Edit Comment" : "Add Comment"}</h2>
              <input
                type="text"
                placeholder="Label"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
              />
              <textarea
                placeholder="Message"
                rows="12"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              ></textarea>
              <div className="modal-actions">
                <button onClick={handleModalSubmit} disabled={savingComment}>
                  {savingComment
                    ? "↻ Saving..."
                    : isEditMode
                    ? "Update"
                    : "Submit"}
                </button>

                <button onClick={() => setShowModal(false)} className="cancel">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {showTemplateModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Edit Template</h2>
              <textarea
                ref={templateRef}
                value={templateInput}
                onChange={handleTemplateChange}
                rows="25"
                placeholder="Enter template here..."
              />
              {showSuggestions && (
                <ul
                  className="suggestions-dropdown"
                  style={{
                    top: suggestionPosition.top,
                    left: suggestionPosition.left,
                  }}
                >
                  {placeholders.map((placeholder) => (
                    <li
                      key={placeholder}
                      onClick={() => insertPlaceholder(placeholder)}
                    >
                      {placeholder}
                    </li>
                  ))}
                </ul>
              )}
              <div className="modal-actions">
                <button
                  onClick={handleTemplateUpdate}
                  disabled={savingTemplate}
                >
                  {savingTemplate ? "↻ Saving..." : "Save"}
                </button>
                <button
                  className="cancel"
                  onClick={() => setShowTemplateModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MacroDetail;
