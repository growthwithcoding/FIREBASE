import { useState, type FormEvent } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "./firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setBusy(false);
    }
  };

  const handleReset = async () => {
    if (!email) return setError("Enter your email to reset password.");
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent.");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Reset failed");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out!");
    } catch (err: unknown) {
      console.error("Logout error:", err instanceof Error ? err.message : err);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {/* Email */}
        <div className="form-row">
          <span className="icon-left" aria-hidden="true">👤</span>
          <input
            className="pill"
            type="email"
            placeholder="Email"
            value={email}
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="form-row">
          <span className="icon-left" aria-hidden="true">🔒</span>
          <input
            className="pill"
            type="password"
            placeholder="Password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Meta */}
        <div className="meta-row">
          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember me
          </label>
          <a href="#reset" onClick={(e) => { e.preventDefault(); handleReset(); }}>
            Forgot password?
          </a>
        </div>

        <button className="btn" type="submit" disabled={busy}>
          {busy ? "Signing in..." : "Login"}
        </button>

        {error && <p role="alert">{error}</p>}
      </form>

      {/* Quick logout button on this card */}
      <button className="btn" onClick={handleLogout} style={{ marginTop: "10px" }}>
        Logout
      </button>
    </>
  );
};

export default Login;
