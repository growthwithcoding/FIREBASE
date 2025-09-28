// src/Register.tsx
import { useState, type FormEvent } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration successful!");
      setEmail("");
      setPassword("");
    } catch (err: unknown) {
      // Map common Firebase error codes to friendly text if desired
      setError(err?.message ?? "Registration failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={handleRegister}>
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
        placeholder="Password (6+ chars)"
        value={password}
        autoComplete="new-password"
        onChange={(e) => setPassword(e.target.value)}
        required
        minLength={6}
      />
      <button type="submit" disabled={busy}>
        {busy ? "Creating..." : "Register"}
      </button>
      {error && <p role="alert">{error}</p>}
    </form>
  );
};

export default Register;
