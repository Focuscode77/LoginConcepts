const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
// Adds class to activate swtich
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});
//Removes class to bring it back
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});