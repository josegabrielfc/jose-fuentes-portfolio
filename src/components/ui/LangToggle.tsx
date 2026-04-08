"use client";

interface Props {
  lang: "en" | "es";
}

export default function LangToggle({ lang }: Props) {
  const targetPath = lang === "en" ? "/es" : "/";

  return (
    <a
      href={targetPath}
      aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "6px 12px",
        borderRadius: "8px",
        border: "1px solid var(--th-toggle-border)",
        background: "var(--th-toggle-bg)",
        backdropFilter: "blur(8px)",
        color: "var(--th-toggle-color)",
        fontSize: "0.75rem",
        fontFamily: "'JetBrains Mono', monospace",
        fontWeight: "500",
        letterSpacing: "0.04em",
        textDecoration: "none",
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--th-toggle-border-hover)";
        el.style.color = "var(--th-toggle-color-hover)";
        el.style.background = "var(--th-toggle-bg-hover)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--th-toggle-border)";
        el.style.color = "var(--th-toggle-color)";
        el.style.background = "var(--th-toggle-bg)";
      }}
    >
      <span style={{ color: lang === "en" ? "var(--th-text-1)" : "var(--th-text-3)" }}>EN</span>
      <span style={{ color: "var(--th-text-3)" }}>/</span>
      <span style={{ color: lang === "es" ? "var(--th-text-1)" : "var(--th-text-3)" }}>ES</span>
    </a>
  );
}
