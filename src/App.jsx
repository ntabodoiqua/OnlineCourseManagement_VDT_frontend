import AppRouter from "./routes/AppRouter";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      {/* Toggle switch */}
      <div style={{ position: "fixed", top: 16, right: 16, zIndex: 1000 }}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "10px 16px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: darkMode ? "#facc15" : "#0f172a",
            color: darkMode ? "#0f172a" : "#facc15",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      <AppRouter />
      <ToastContainer />
    </>
  );
}

export default App;
