import { useEffect, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "./firebaseConfig";
import Register from "./Register";
import Login from "./Login";
import "./App.css";

type Mode = "login" | "register";

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [mode, setMode] = useState<Mode>("login");

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  return (
    <>
      {user ? (
        <div className="auth-card">
          <h2>Welcome, {user.email}</h2>
          <button className="btn" onClick={() => auth.signOut()}>
            Logout
          </button>
        </div>
      ) : (
        <div className="auth-card">
          <div className="auth-toggle" role="tablist" aria-label="Auth mode">
            <button
              role="tab"
              aria-selected={mode === "login"}
              className={`toggle ${mode === "login" ? "active" : ""}`}
              onClick={() => setMode("login")}
            >
              Login
            </button>
            <button
              role="tab"
              aria-selected={mode === "register"}
              className={`toggle ${mode === "register" ? "active" : ""}`}
              onClick={() => setMode("register")}
            >
              Create Account
            </button>
          </div>

          {mode === "login" ? <Login /> : <Register />}
        </div>
      )}
    </>
  );
};

export default App;
