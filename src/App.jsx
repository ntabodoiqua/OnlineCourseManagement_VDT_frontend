import AppRouter from "./routes/AppRouter";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter } from "react-router-dom"; // 👈 THÊM
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
    <BrowserRouter>
      {" "}
      {/* BỌC TẤT CẢ TRONG NÀY */}
      <AuthProvider>
        <AppRouter darkMode={darkMode} setDarkMode={setDarkMode} />
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          closeButton
        />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
