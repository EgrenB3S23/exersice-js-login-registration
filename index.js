function validateEmail(email) {
	if (typeof email !== "string") {
		return false;
	}
	let progress = 0;
	for (let i = 0; i < email.length; i++) {
		// console.log(email[i]);
		if (i > 1 && progress === 0 && email[i] === "@") {
			progress = 1;
		} else if (progress === 1 && email[i] === ".") {
			progress = 2;
		}
	}
	if (progress === 2) {
		return true;
	}
	return false;
}

function validatePassword(password, confirmPassword) {
	if (typeof password !== "string") return false;
	if (typeof confirmPassword !== "string") return false;
	if (password !== confirmPassword) return false;
	if (password.length < 8) return false;
	return true;
}

let users = [];

const templateUser = {
	name: "first name last name",
	username: "username",
	email: "email@email.com",
	password: "password",
};

document.getElementById("registerForm").addEventListener("submit", function (e) {
	e.preventDefault();
	// getData(e.target);
	const name = document.getElementById("name");
	const username = document.getElementById("username");
	const email = document.getElementById("email");
	const password = document.getElementById("password");
	const confirmPassword = document.getElementById("confirmPassword");

	let allIsOK = true;
	allIsOK = allIsOK && validateEmail(email.value);
	allIsOK = allIsOK && validatePassword(password.value, confirmPassword.value);
	console.log(allIsOK);
	console.log(`Email: ${validateEmail(email.value)}`);
	console.log(`Password: ${validatePassword(password.value, confirmPassword.value)}`);

	if (allIsOK) {
		users.push({
			name: name.value,
			username: username.value,
			email: email.value,
			password: password.value,
		});
		console.log(users);
	}
});

/* 
document.querySelector(".submit-btn").addEventListener("click", (e) => {
	// document.querySelector("nav").classList.toggle("open");
	const elem = document.getElementById("username");
	// console.log(validateEmail(elem.value));
	// console.log(elem);
	// console.log(elem.value);
	// console.log(elem2);
	// console.log(elem2.value);

	// Get form elements by ID
	const nameInput = document.getElementById("name");
	const emailInput = document.getElementById("email");

	// Access and log the values
	const name = nameInput.value;
	const email = emailInput.value;
	const elem3 = elem.value;
	console.log(`Name: ${name}, Email: ${email}, elem3: ${elem3}`);
});
 */
