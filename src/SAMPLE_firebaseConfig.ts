// SAMPLE_firebaseConfig.ts
// ----------------------------------------------------
// 🚨 IMPORTANT:
// This is a SAMPLE Firebase config file. 
// Do NOT put your real credentials here.
// Instead:
//
// 1. Copy this file → rename it to firebaseConfig.ts
// 2. Replace the placeholder values with your Firebase project’s config
// 3. Make sure firebaseConfig.ts is gitignored (already handled in .gitignore)
// ----------------------------------------------------

import { initializeApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";

// Replace these placeholder values with your actual Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_AUTH_DOMAIN_HERE",
  projectId: "YOUR_PROJECT_ID_HERE",
  storageBucket: "YOUR_STORAGE_BUCKET_HERE",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE",
  appId: "YOUR_APP_ID_HERE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth instance
const auth: Auth = getAuth(app);

export { auth };
