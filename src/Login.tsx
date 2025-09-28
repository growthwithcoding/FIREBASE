// src/Login.tsx
import { useState, type FormEvent } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (err: unknown) {
      setError(err?.message ?? "Login failed");
    } finally {
      setBusy(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out!");
    } catch (err: unknown) {
      console.error("Logout error:", err?.message ?? err);
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={busy}>
          {busy ? "Signing in..." : "Login"}
        </button>
        {error && <p role="alert">{error}</p>}
      </form>

      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Login;
