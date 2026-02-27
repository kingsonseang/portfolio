import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectDialogProps {
  projects: Project[];
}

export function ProjectDialog({ projects }: ProjectDialogProps) {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  const selected = projects.find((p) => p.id === selectedId) ?? null;

  // On mount: read ?active_project= from URL and open that project
  React.useEffect(() => {
    const openFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const id = params.get("active_project");
      if (id && projects.some((p) => p.id === id)) {
        setSelectedId(id);
        const clean = new URL(window.location.href);
        clean.searchParams.delete("active_project");
        window.history.replaceState({}, "", clean.toString());
      }
    };
    openFromUrl();
    window.addEventListener("popstate", openFromUrl);
    return () => window.removeEventListener("popstate", openFromUrl);
  }, [projects]);

  // Click any card/button with data-project-id (projects page)
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-project-id]");
      if (target) {
        e.preventDefault();
        setSelectedId((target as HTMLElement).dataset.projectId ?? null);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Close on Escape
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when dialog is open
  React.useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  const techTypeColor: Record<string, string> = {
    language: "#6366f1",
    framework: "#10b981",
    service: "#f59e0b",
    database: "#ef4444",
    styling: "#8b5cf6",
    tool: "#06b6d4",
  };

  return (
    <AnimatePresence>
      {selected && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedId(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              backgroundColor: "rgba(0,0,0,0.45)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
          />

          {/* Dialog panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            style={{
              position: "fixed",
              inset: "0 0 0 0",
              zIndex: 101,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                background: "#f5f5f5",
                borderRadius: "2rem",
                width: "100%",
                maxWidth: "640px",
                maxHeight: "90vh",
                overflowY: "auto",
                pointerEvents: "all",
                position: "relative",
              }}
            >
              {/* Accent top bar */}
              <div
                style={{
                  height: "4px",
                  borderRadius: "2rem 2rem 0 0",
                  background: selected.color,
                }}
              />

              <div style={{ padding: "2rem" }}>
                {/* Close button */}
                <button
                  onClick={() => setSelectedId(null)}
                  aria-label="Close project details"
                  style={{
                    position: "absolute",
                    top: "1.5rem",
                    right: "1.5rem",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "none",
                    background: "rgba(0,0,0,0.07)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#242424",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>

                {/* Title row */}
                <div style={{ marginBottom: "0.25rem", paddingRight: "3rem" }}>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: selected.color,
                      marginBottom: "0.5rem",
                      display: "block",
                    }}
                  >
                    {selected.type} · {selected.year}
                  </span>
                  <h2
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 700,
                      color: "#242424",
                      lineHeight: 1.2,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {selected.title}
                  </h2>
                  <a
                    href={`https://${selected.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(36,36,36,0.45)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      textDecoration: "none",
                    }}
                  >
                    {selected.url}
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                </div>

                <hr style={{ margin: "1.25rem 0", border: "none", borderTop: "1px solid rgba(0,0,0,0.07)" }} />

                {/* Role */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(36,36,36,0.4)", marginBottom: "0.3rem" }}>
                    Role
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "#242424", fontWeight: 500 }}>{selected.role}</p>
                </div>

                {/* Overview */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(36,36,36,0.4)", marginBottom: "0.3rem" }}>
                    Overview
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "rgba(36,36,36,0.7)", lineHeight: 1.6 }}>{selected.overview}</p>
                </div>

                {/* Challenge */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(36,36,36,0.4)", marginBottom: "0.3rem" }}>
                    Challenge
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "rgba(36,36,36,0.7)", lineHeight: 1.6 }}>{selected.challenge}</p>
                </div>

                {/* Highlights */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(36,36,36,0.4)", marginBottom: "0.75rem" }}>
                    Key Highlights
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {selected.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.875rem", color: "rgba(36,36,36,0.7)", lineHeight: 1.5 }}
                      >
                        <span
                          style={{
                            marginTop: "0.4rem",
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: selected.color,
                            flexShrink: 0,
                          }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div>
                  <p style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(36,36,36,0.4)", marginBottom: "0.75rem" }}>
                    Tech Stack
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {selected.tech_stack.map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          padding: "0.3rem 0.75rem",
                          borderRadius: "999px",
                          background: `${techTypeColor[tech.type] ?? "#6366f1"}18`,
                          color: techTypeColor[tech.type] ?? "#6366f1",
                        }}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
