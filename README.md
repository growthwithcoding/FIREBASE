# 🔑 Firebase Auth + React (Assignment 1)

![Author](https://img.shields.io/badge/author-Austin_Carlson-blue)
![React](https://img.shields.io/badge/React-19.1.1-61dafb)
![Vite](https://img.shields.io/badge/Vite-7.1.6-9460f6)
![Firebase](https://img.shields.io/badge/Firebase-Auth-orange)
![Tests](https://img.shields.io/badge/tests-pending-lightgrey)
![CI](https://img.shields.io/badge/ci-pending-lightgrey)
![CD](https://img.shields.io/badge/cd-pending-lightgrey)
![Release](https://img.shields.io/badge/release-v0.0.1--base-green)

This repository is the **Assignment 1 project** for **Building Secure User Authentication with Firebase**.  
It forms the foundation for all **future lessons and the Module Final Project**.  
You will extend this app with **Firestore, Testing, CI/CD, and Deployment** in later assignments.

---

## 📌 Current Features (Assignment 1)

### Firebase Auth
- **Register.tsx** → Create user with email + password
- **Login.tsx** → Login + logout with Firebase Auth
- **App.tsx** → Tracks `onAuthStateChanged` and conditionally renders UI
- **firebaseConfig.ts** → Firebase initialization + Auth export  
- **SAMPLE_firebaseConfig.ts** → Included as a template. Copy this file, rename it to `firebaseConfig.ts`, and insert your own Firebase credentials. This way your real settings are ignored by Git but the sample stays committed.

---

## 🚀 Getting Started

```bash
git clone https://github.com/growthwithcoding/FIREBASE.git
cd FIREBASE
npm install
npm run dev
# open http://localhost:5173
```

---

## 📂 Project Structure

```
FIREBASE/
├─ src/
│  ├─ App.tsx                   # Tracks auth state + conditional rendering
│  ├─ Login.tsx                 # Login + logout form
│  ├─ Register.tsx              # Registration form
│  ├─ firebaseConfig.ts         # Your actual config (ignored by Git)
│  └─ SAMPLE_firebaseConfig.ts  # Template committed for setup
├─ public/
├─ .gitignore
├─ README.md
├─ index.html
├─ package.json
└─ vite.config.ts
```

---

## 🧭 Firebase Setup Instructions

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a project or use your existing one.
3. Enable **Email/Password** authentication in:  
   *Build → Authentication → Sign-in Method*.
4. Copy the Firebase SDK config from **Project Settings → General → Your apps**.
5. Paste the values into `src/firebaseConfig.ts` (copied from `SAMPLE_firebaseConfig.ts`).
6. Run `npm run dev` and register a test user.

---

## 🔥 Roadmap / Future Lessons

✅ **Lesson 1 (this repo): Authentication**  
- Base Firebase Auth (register/login/logout, auth state tracking)

🔜 **Lesson 2: Firestore Integration**  
- Add `db` export to `firebaseConfig.ts`  
- Create `users` collection  
- Implement Firestore **CRUD** (create, read, update, delete)  
- Optional: Switch to **real-time listeners** with `onSnapshot`  

🔜 **Lesson 3: Testing with Jest + RTL**  
- Add Jest + React Testing Library setup  
- Write **unit tests** for components (Register, Login, CRUD)  
- Add **snapshot tests** and **integration tests**  
- Mock Firebase/axios in test suite  
- Badge: ![Tests](https://img.shields.io/badge/tests-active-brightgreen)

🔜 **Knowledge Check: Firebase in E-Commerce App**  
- Reuse this Firebase config inside your **E-commerce repo**  
- Replace FakeStore API with Firestore `products` collection  
- Store **user orders** in Firestore `orders` collection  
- Implement **order history** page  

🔜 **Lesson 4: CI with GitHub Actions**  
- Add `.github/workflows/ci.yml`  
- Install deps + run tests automatically on push/PR  
- Fail pipeline if tests fail  
- Badge: ![CI](https://img.shields.io/badge/ci-active-brightgreen)

🔜 **Lesson 5: CD with Vercel**  
- Link GitHub repo with Vercel project  
- Add secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`  
- Add `deploy.yml` workflow with `needs: test`  
- Deploy to Vercel automatically after passing tests  
- Badge: ![CD](https://img.shields.io/badge/cd-active-brightgreen)

🏁 **Module Final Project: Full CI/CD E-Commerce**  
- Firebase Auth + Firestore (products, users, orders)  
- 2+ Unit tests + 1+ Integration test (cart updates)  
- CI pipeline with GitHub Actions  
- CD pipeline to Vercel  
- Live app demo + presentation  

---

## ⚙️ .gitignore Adjustment

Ensure the project **ignores your real Firebase config** but **keeps the sample committed**.  
Add this to your `.gitignore`:

```
# Ignore actual Firebase credentials
src/firebaseConfig.ts

# Keep the sample file in version control
!src/SAMPLE_firebaseConfig.ts
```

---

## ✍️ Author
- Austin Carlson  
- GitHub: [growthwithcoding](https://github.com/growthwithcoding)  
- Hashtag: **#growthwithcoding**
