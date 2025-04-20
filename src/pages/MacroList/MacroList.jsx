import { useEffect, useState } from "react";
import "./MacroList.css";
import { Link } from "react-router-dom";
import { FaCogs, FaCommentDots, FaTags, FaFire } from "react-icons/fa";

const API_KEY = "$2a$10$B0bSg6uvmQU8k9TbXllduOi7ECvV9gHRI.xo7IKlU7nyIjxfL5Rry";
const BIN_URL = "https://api.jsonbin.io/v3/b/6802ee858a456b79668c8f83";
const headers = {
  "X-Access-Key": API_KEY,
};

const MacroList = () => {
  const [macros, setMacros] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const cachedMacros = localStorage.getItem("cachedMacros");

    if (cachedMacros) {
      setMacros(JSON.parse(cachedMacros));
      setLoading(false);
    } else {
      fetch(BIN_URL, { headers })
        .then((res) => res.json())
        .then((data) => {
          const macroData = data.record || {};
          localStorage.setItem("cachedMacros", JSON.stringify(macroData));
          setMacros(macroData);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch macros:", err);
          setLoading(false);
        });
    }
  }, []);

  const isCommon = (macro) => {
    const fieldCount = Object.keys(macro).filter(
      (f) => f !== "comments"
    ).length;
    const commentCount = macro.comments?.length || 0;
    return fieldCount >= 4 || commentCount >= 3;
  };

  return (
    <div className="macro-list">
      <div className="macro-header">

        <div className="macro-btn">
        <h1>
          <FaTags style={{ marginRight: "0.5rem" }} />
          All Macros
        </h1>
        <button
          className="refresh-btn"
          onClick={() => {
            setLoading(true);
            fetch(BIN_URL, { headers })
              .then((res) => res.json())
              .then((data) => {
                const macroData = data.record || {};
                localStorage.setItem("cachedMacros", JSON.stringify(macroData));
                setMacros(macroData);
                setLoading(false);
              })
              .catch((err) => {
                console.error("Failed to refresh macros:", err);
                setLoading(false);
              });
          }}
        >
          ↺
        </button>
        </div>


        <input
          type="text"
          className="macro-search"
          placeholder="Search macros..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <p className="loading">Loading macros...</p>
      ) : (
        <div className="macro-grid">
          {Object.entries(macros)
            .filter(([key]) =>
              key.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map(([key, macro]) => {
              const fieldCount = Object.keys(macro).filter(
                (f) => f !== "comments"
              ).length;
              const commentCount = macro.comments?.length || 0;
              const common = isCommon(macro);

              return (
                <Link to={`/macro/${encodeURIComponent(key)}`} className="macro-card" key={key}>
                  <div className="macro-title">
                    <FaCogs className="macro-icon" />
                    <h3>{key}</h3>
                    {common && (
                      <span className="common-badge" title="Common Macro">
                        <FaFire />
                      </span>
                    )}
                  </div>
                  <p>
                    <FaTags className="icon-left" /> <strong>Fields:</strong>{" "}
                    {fieldCount}
                  </p>
                  <p>
                    <FaCommentDots className="icon-left" />{" "}
                    <strong>Comments:</strong> {commentCount}
                  </p>
                  <Link to={`/macro/${encodeURIComponent(key)}`}>
                    <button className="view-btn">View Details</button>
                  </Link>
                </Link>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default MacroList;
