const logINCredentials = {
    email: "sazed@bank.com",
    password: 1234,
}
const logInPage = document.getElementById('log-in');
const mail = document.getElementById('email');
const password = document.getElementById('password');
const logInButton = document.getElementById('sign-in-button')

logInButton.addEventListener('click', function () {
    if (mail.value == logINCredentials.email && password.value == logINCredentials.password) {

        // logInPage.classList.add('hidden');
        // logInPage.classList.remove('flex');
        // for (let account of accounts) {
        //     account.classList.add('flex');
        //     account.classList.remove('hidden');
        window.location.href = './bank.html';
        document.cookie = logINCredentials.email;

    }
    else {
        // logInPage.classList.add('flex');
        // logInPage.classList.remove('hidden');
        // for (let account of accounts) {
        //     account.classList.add('hidden');
        //     account.classList.remove('flex');
        document.getElementById('wrong').innerText = "Email or Password or Both is incorect"
    }

})
