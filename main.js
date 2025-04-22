function formSubmit() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    const validLogin = "admin";
    const validPassword = "admin";

    if (login === validLogin) {
        alert("thanks for using website");
    } else {
        alert("login or password isn't correct");
    }
};

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", formSubmit);
