import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA6EYHJBZiaJ7zkSFAceB6Dl2zDvq9rHG0",
  authDomain: "ai-assistant-3d1d1.firebaseapp.com",
  projectId: "ai-assistant-3d1d1",
  storageBucket: "ai-assistant-3d1d1.appspot.com",
  messagingSenderId: "955748553206",
  appId: "1:955748553206:web:6565b4c200d00c16b137d7",
  measurementId: "G-DNZ342NMQR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "/dashboard.html";
      } catch (err) {
        alert("Login failed: " + err.message);
      }
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        window.location.href = "/dashboard.html";
      } catch (err) {
        alert("Signup failed: " + err.message);
      }
    });
  }
});
