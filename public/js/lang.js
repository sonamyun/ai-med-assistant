// lang.js
const translations = {
  en: {
    email: "Email",
    password: "Password",
    login: "Login",
    register: "Register",
    emailPlaceholder: "Enter your email",
    passwordPlaceholder: "Enter your password",
  },
  ne: {
    email: "इमेल",
    password: "पासवर्ड",
    login: "लगइन",
    register: "दर्ता गर्नुहोस्",
    emailPlaceholder: "तपाईंको इमेल लेख्नुहोस्",
    passwordPlaceholder: "तपाईंको पासवर्ड लेख्नुहोस्",
  }
};

window.changeLanguage = function () {
  const lang = document.getElementById("lang").value;
  document.getElementById("email-label").innerText = translations[lang].email;
  document.getElementById("password-label").innerText = translations[lang].password;
  const loginBtn = document.getElementById("login-btn");
  if (loginBtn) loginBtn.innerText = translations[lang].login;
  const registerBtn = document.getElementById("register-btn");
  if (registerBtn) registerBtn.innerText = translations[lang].register;
  document.getElementById("email").placeholder = translations[lang].emailPlaceholder;
  document.getElementById("password").placeholder = translations[lang].passwordPlaceholder;
};
