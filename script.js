const form   = document.querySelector("form");
const uname  = document.getElementById("uname");
const pword  = document.getElementById("pword");
const msgBox = document.getElementById("msgBox");

form.addEventListener("submit", event => {
    // event.preventDefault();
    if (uname.value === "" || pword.value === "") {
        event.preventDefault();
        msgBox.textContent = `enter a value, you entered ${uname.value}, ${pword.value}`;
   } else {
        msgBox.textContent = "success!";
   }
});
