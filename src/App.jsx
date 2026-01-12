import React, { useState } from "react";
import "./index.css";

// --- DATA ---
// This would usually be in a separate file, but keeping it here for the "single file script" feel.

const PROJECTS = [
  {
    id: 1,
    name: "Digital Election Management (DEM)",
    context: "Government / Civic Tech",
    problem:
      "Election tracking was fragmented across manual reports, WhatsApp messages, and spreadsheets.",
    broken:
      "Early versions lacked proper role-based access, leading to data overwrites during peak usage.",
    lesson:
      "Access control and audit logs matter more than features in civic systems.",
    link: null, // Government deployment, not public
  },
  {
    id: 2,
    name: "Society ERP SaaS",
    context: "Housing Society Accounting",
    problem:
      "Housing societies relied on manual billing and error-prone GST calculations.",
    broken:
      "Initial billing logic failed edge cases during mid-cycle member changes.",
    lesson: "Accounting software is a rules engine disguised as CRUD.",
    link: null,
  },
  {
    id: 3,
    name: "CN Water Plant Monitoring",
    context: "Industrial Monitoring",
    problem:
      "Water plant downtime was detected late due to lack of real-time visibility.",
    broken:
      "First analytics pipeline produced noisy alerts with no prioritization.",
    lesson: "Observability without signal filtering is just expensive noise.",
    link: null,
  },
  {
    id: 4,
    name: "Femease – Women Wellness Hub",
    context: "Mobile App (React Native)",
    problem:
      "Existing app required performance and maintainability improvements.",
    broken: "Legacy components tightly coupled UI and business logic.",
    lesson: "Refactoring is easier when components are boring.",
    link: null,
  },
];

const NOW_ITEMS = [
  {
    label: "Building",
    text: "Teaching full-stack systems while finishing my M.Tech in Artificial Intelligence.",
  },
  {
    label: "Teaching",
    text: "React, backend fundamentals, and AI concepts at School of Future Tech.",
  },
  {
    label: "Learning",
    text: "System design, data consistency trade-offs, and practical AI workflows.",
  },
  {
    label: "Ignoring",
    text: "Framework hype cycles that don’t survive production.",
  },
];

// --- COMPONENTS ---

const Navigation = ({ view, setView }) => (
  <nav>
    {["index", "now", "notes"].map((item) => (
      <a
        key={item}
        href={`#${item}`}
        onClick={(e) => {
          e.preventDefault();
          setView(item);
        }}
        className={view === item ? "active" : ""}
      >
        /{item}
      </a>
    ))}
  </nav>
);

const Home = () => (
  <section>
    <header>
      <h1>Prasad Junghare</h1>
      <p style={{ fontSize: "1.2rem", color: "#444" }}>
        Coder & Educator. <br />I build systems — and the people who maintain
        them.
      </p>
    </header>

    <h2>Selected Engineering Logs</h2>
    <div>
      {PROJECTS.map((p) => (
        <div key={p.id} className="project-item">
          <span className="project-title">
            {p.name}{" "}
            <span style={{ fontWeight: 400, color: "#888" }}>
              — {p.context}
            </span>
          </span>
          <div className="project-meta">
            <p>
              <strong>Problem:</strong> {p.problem}
            </p>
            <p>
              <strong>Failure Mode:</strong> {p.broken}
            </p>
            <p>
              <strong>Lesson:</strong> {p.lesson}
            </p>
            {p.link ? (
              <a href={`https://${p.link}`} target="_blank" rel="noreferrer">
                Source →
              </a>
            ) : (
              <span className="dim">Closed Source</span>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Now = () => (
  <section>
    <h1>/now</h1>
    <p>Last updated: Oct 2025</p>
    <hr
      style={{ border: 0, borderBottom: "1px solid #eee", margin: "2rem 0" }}
    />

    <ul style={{ listStyle: "none", padding: 0 }}>
      {NOW_ITEMS.map((item, i) => (
        <li key={i} style={{ marginBottom: "1.5rem" }}>
          <strong
            style={{
              display: "block",
              fontSize: "0.9rem",
              color: "#666",
              marginBottom: "0.2rem",
            }}
          >
            {item.label}
          </strong>
          {item.text}
        </li>
      ))}
    </ul>
  </section>
);

const Notes = () => (
  <section>
    <h1>/notes</h1>
    <p>Brief thoughts on technical constraints.</p>

    <article style={{ marginTop: "3rem" }}>
      <h3 style={{ fontSize: "1rem" }}>On abstraction</h3>
      <p>
        The wrong abstraction is far more expensive than duplicated code. I
        prefer WET (Write Everything Twice) over hasty DRY.
      </p>
    </article>

    <article style={{ marginTop: "3rem" }}>
      <h3 style={{ fontSize: "1rem" }}>Teaching & Code</h3>
      <p>
        If I can’t explain a system to students, I probably don’t understand it
        well enough to ship it.
      </p>
    </article>
  </section>
);

function App() {
  const [view, setView] = useState("index");

  return (
    <div className="container">
      <Navigation view={view} setView={setView} />

      {view === "index" && <Home />}
      {view === "now" && <Now />}
      {view === "notes" && <Notes />}

      <footer style={{ marginTop: "6rem", fontSize: "0.8rem", color: "#999" }}>
        <p>No tracking. No cookies. Just HTML.</p>
      </footer>
    </div>
  );
}

export default App;
