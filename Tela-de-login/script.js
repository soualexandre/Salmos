const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", evnt => {
	event.preventDefault();
	form.classList.add("form-hide");
})