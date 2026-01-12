import React, { useState } from "react";
import "./index.css";

// --- DATA ---
// This would usually be in a separate file, but keeping it here for the "single file script" feel.

const PROJECTS = [
  {
    id: 1,
    name: "Digital Election Management (DEM)",
    context: "Civic Tech / Government Deployment",
    stack: [
      { name: "React Native", color: "badge-blue" },
      { name: "Laravel", color: "badge-red" },
      { name: "PostgreSQL", color: "badge-blue" },
    ],
    problem:
      "Election data was tracked manually across calls, spreadsheets, and WhatsApp groups.",
    broken:
      "Early builds lacked strict role separation, causing accidental data overwrites.",
    lesson:
      "In civic systems, correctness and auditability matter more than speed.",
    link: null,
  },
  {
    id: 2,
    name: "Society ERP SaaS",
    context: "Accounting & Compliance",
    stack: [
      { name: "React", color: "badge-blue" },
      { name: "Laravel", color: "badge-red" },
      { name: "PostgreSQL", color: "badge-blue" },
      { name: "GST Logic", color: "badge-yellow" },
    ],
    problem:
      "Housing societies relied on manual billing and error-prone GST calculations.",
    broken:
      "Billing logic failed during mid-cycle member changes and edge cases.",
    lesson: "Accounting software is a rules engine disguised as CRUD.",
    link: null,
  },
  {
    id: 3,
    name: "CN Water Plant Monitoring",
    context: "Industrial Monitoring System",
    stack: [
      { name: "Python", color: "badge-green" },
      { name: "Desktop App", color: "badge-gray" },
      { name: "Analytics", color: "badge-yellow" },
    ],
    problem:
      "Plant downtime was detected late due to lack of real-time visibility.",
    broken: "Initial alerting produced noisy signals with no prioritization.",
    lesson: "Observability without signal filtering is just expensive noise.",
    link: null,
  },
  {
    id: 4,
    name: "Teaching Systems at Scale",
    context: "Education / Classroom",
    stack: [
      { name: "React", color: "badge-blue" },
      { name: "Node.js", color: "badge-green" },
      { name: "AI/ML", color: "badge-purple" },
    ],
    problem: "Students struggled to connect theory with real system behavior.",
    broken:
      "Early lectures focused too much on tools instead of mental models.",
    lesson:
      "If you can’t explain a system, you don’t understand it well enough.",
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

const BLOG_POSTS = [
  {
    id: "003",
    date: "2025-12-10",
    title: "Why I Re-wrote My Backend in Rust",
    tags: ["Systems", "Rust"],
    slug: "/notes/rust-rewrite",
  },
  {
    id: "002",
    date: "2025-11-04",
    title: "The High Priestess: Tarot as a State Machine",
    tags: ["Philosophy", "Models"],
    slug: "/notes/tarot-state",
  },
  {
    id: "001",
    date: "2025-10-22",
    title: "Supabase vs. Firebase: A Cost Analysis",
    tags: ["Infra", "Database"],
    slug: "/notes/supabase-cost",
  },
];

const YOUTUBE_VIDEOS = [
  {
    title: "Discriminative vs Generative AI — explained clearly",
    views: "Video Essay",
    link: "https://youtu.be/ay0_lveY-wo",
  },
  {
    title: "AI Models Explained Without Hype",
    views: "Video Essay",
    link: "https://youtu.be/VsWh8baVURM",
  },
];

// --- NEW COMPONENTS ---

const YouTubeSection = () => (
  <div className="yt-terminal">
    <div style={{ marginBottom: "1rem" }}>
      <span style={{ color: "#fff" }}>CHANNEL:</span>
      <strong style={{ marginLeft: "10px" }}>Stack & Models</strong>
    </div>

    <p
      style={{
        color: "#ccc",
        marginBottom: "1.5rem",
        fontFamily: "var(--sans-font)",
      }}
    >
      Video essays on engineering, AI models, and stacks.
      <br />
      Minimal editing. Maximum density.
    </p>

    <div style={{ display: "grid", gap: "0.5rem" }}>
      {YOUTUBE_VIDEOS.map((vid, i) => (
        <div
          key={i}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <a
            href={vid.link}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#e5e7eb", textDecoration: "none" }}
          >
            &gt; {vid.title}
          </a>
          <span className="yt-stat">[{vid.views}]</span>
        </div>
      ))}
    </div>

    <div
      style={{
        marginTop: "1.5rem",
        borderTop: "1px solid #333",
        paddingTop: "1rem",
      }}
    >
      <a
        href="https://youtube.com/@stackandmodels"
        target="_blank"
        rel="noreferrer"
        className="yt-link"
      >
        [SUBSCRIBE_STREAM]
      </a>
    </div>
  </div>
);

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
      <h1>Prasad Junghare / README.md</h1>
      <p style={{ fontSize: "1.1rem", color: "#333" }}>
        Coder & Educator. <br />I build systems and teach people how they
        actually work.
        {/* {/* Tooltip Example
        <span
          style={{ margin: "0 6px" }}
          data-tooltip="Making systems understandable before making them clever"
        >
          performance profiling
        </span>
        and strict type safety.*/}
      </p>
    </header>

    <YouTubeSection />

    <h2>// Engineering_Logs</h2>

    <div style={{ marginTop: "2rem", fontStyle: "italic", color: "#777" }}>
      {PROJECTS.map((p) => (
        <div key={p.id} className="project-item">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <span className="project-title">{p.name}</span>
            <span className="context-tag">{p.context}</span>
          </div>

          {/* NEW: Tech Stack Badges */}
          <div style={{ marginBottom: "1rem", marginTop: "0.2rem" }}>
            {p.stack.map((tech) => (
              <span key={tech.name} className={`badge ${tech.color}`}>
                {tech.name}
              </span>
            ))}
          </div>

          <div className="project-details">
            <div className="data-row">
              <span className="label">PROBLEM</span>
              <span>{p.problem}</span>
            </div>
            <div className="data-row">
              <span className="label">FAILURE</span>
              {/* Highlight the failure in red context */}
              <span style={{ color: "#b91c1c" }}>{p.broken}</span>
            </div>
            <div className="data-row">
              <span className="label">LESSON</span>
              <span>{p.lesson}</span>
            </div>
          </div>

          {p.link && (
            <div style={{ marginLeft: "96px" }}>
              <a
                href={`https://${p.link}`}
                className="source-link"
                target="_blank"
                rel="noreferrer"
              >
                git checkout source
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

const Notes = () => (
  <section>
    <header>
      <h1>/var/www/notes</h1>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "2rem" }}>
        Long-form thoughts on code structure and mental models.
      </p>
    </header>

    {/* The File List Layout */}
    <div className="file-list">
      {/* Table Header */}
      <div
        className="file-row"
        style={{
          borderBottom: "2px solid #000",
          fontWeight: "bold",
          color: "#000",
        }}
      >
        <span>DATE</span>
        <span>TITLE</span>
        <span>TAGS</span>
      </div>

      {BLOG_POSTS.map((post) => (
        <a key={post.id} href={post.slug} className="file-row">
          <span className="file-date">{post.date}</span>
          <span className="file-title">{post.title}</span>
          <div style={{ textAlign: "right" }}>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="badge badge-gray"
                style={{ fontSize: "0.65rem" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>

    {/* Optional: Add the YouTube terminal here if you want it on the notes page too */}
  </section>
);

const Now = () => (
  <section>
    {/* NEW: Status Dot */}
    <header>
      <h1>/var/www/now</h1>
      <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "2rem" }}>
        Investing time on.
      </p>
    </header>

    <div
      style={{
        background: "#f3f4f6",
        padding: "1rem",
        borderLeft: "4px solid #10b981",
        marginBottom: "2rem",
        fontSize: "0.9rem",
      }}
    >
      <strong>Current Focus:</strong> Deep diving into NLP.
    </div>

    {/* Reuse existing list logic... */}
  </section>
);

function App() {
  const [view, setView] = useState("index");

  return (
    <div className="container">
      {/* Navigation */}
      <nav>
        {["index", "notes", "now"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={(e) => {
              e.preventDefault();
              setView(item);
            }}
            className={view === item ? "active" : ""}
          >
            /{item === "index" ? "home" : item}
          </a>
        ))}
      </nav>
      {view === "index" && <Home />}
      {view === "now" && <Now />}{" "}
      {/* Use Now component from previous response */}
      {view === "notes" && <Notes />}
      <footer style={{ marginTop: "6rem", fontSize: "0.8rem", color: "#999" }}>
        <p>No tracking. No cookies. Just HTML & CSS.</p>
      </footer>
    </div>
  );
}

export default App;
