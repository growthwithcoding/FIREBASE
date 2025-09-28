// src/App.tsx
import { useEffect, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "./firebaseConfig";
import Register from "./Register";
import Login from "./Login";

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
    return () => unsub();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          {/* Show only logout while authenticated */}
          <button onClick={() => auth.signOut()}>Logout</button>
        </div>
      ) : (
        <>
          <Register />
          <Login />
        </>
      )}
    </div>
  );
};

export default App;
