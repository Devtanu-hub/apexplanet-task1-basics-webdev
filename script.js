// Task 1: a small JavaScript interaction — a button that responds when clicked.

const greetButton = document.getElementById("greetButton");
const greetResponse = document.getElementById("greetResponse");

const messages = [
  "Hey there! Thanks for stopping by. 👋",
  "Hello! This button is my first line of JavaScript.",
  "Hi! Devtanu is currently learning to make the web a little more interactive."
];

greetButton.addEventListener("click", () => {
  const message = messages[Math.floor(Math.random() * messages.length)];

  // A simple alert, as required for Task 1 ...
  alert(message);

  // ...plus a friendlier on-page confirmation, so the interaction
  // doesn't disappear the moment the alert is dismissed.
  greetResponse.textContent = message;
});
