import ThemeToggle from "./ThemeToggle";

export default function ({ children }: any) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1.625rem",
      }}
    >
      <h1
        style={{
          boxShadow: "none",
          textDecoration: "none",
          color: "rgb(34,34,34)",
        }}
      >
        <a
          aria-current="page"
          style={{
            boxShadow: "none",
            textDecoration: "none",
            color: "var(--color-text-secondary)",
          }}
          className=""
          href="/"
        >
          Overreacted
        </a>
      </h1>
      <div style={{ display: "inline-block" }}>
        <ThemeToggle />
      </div>
    </header>
  );
}
