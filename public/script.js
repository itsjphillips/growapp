const form = document.getElementById("password-reset-form");
const message = document.getElementById("message");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const email = document.getElementById("email").value;
  message.textContent = "";
  
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    message.textContent = "Password reset email sent. Check your inbox.";
  } catch (error) {
    message.textContent = `
