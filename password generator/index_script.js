/* access to DOM elemnts */

const input = document.getElementById('password');

const copy = document.getElementById('copy');

const passwordLength = document.getElementById('password-length');

const uppercaseLetters = document.getElementById('include-uppercase-letters');
const lowercaseLetters = document.getElementById('include-lowercase-letters');
const includeNumbers = document.getElementById('include-numbers');
const includeSymbols = document.getElementById('include-symbols');

const buttonCreatePassword = document.getElementById('create-password');

/* alphabets */

const arr_en = [
	'a', 'b', 'c', 'd', 'e', 'f', 'g',
	'h', 'i', 'j', 'k', 'l', 'm', 'n',
	'o', 'p', 'q', 'r', 's', 't', 'u',
	'v', 'w', 'x', 'y', 'z'
	];
let arr_EN = [
	'A', 'B', 'C', 'D', 'E',
	'F', 'G', 'H', 'I', 'J',
	'K', 'L', 'M', 'N', 'O',
	'P', 'Q', 'R', 'S', 'T',
	'U', 'V', 'W', 'X', 'Y',
	'Z'
];
const arr_num = [
	'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
const arr_sym = [
	'!', '@', '#', '$', '%', 
	'^', '&', '*', '(', ')', 
	'-', '=', '+', '?', '/',
	'>', '<', '~' 
];
/* copy */
copy.addEventListener('click', async (event) => {
	const code = event.target.previousSibling.previousSibling.value;
	await navigator.clipboard.writeText(code);
});

buttonCreatePassword.addEventListener('click', checkPasswordLengthValue);

function checkPasswordLengthValue (event) {
	if (passwordLength.value.length < 4) {
		createPassword();
	}
	else {
		passwordLength.value = '8';
		console.log('Зачем тебе такой длинный пароль???');
	}
}

function createPassword (event, length) {
	let listIndex = [];

	let password = '';

	for (let i = 0; i < passwordLength.value; i++) {

		if (lowercaseLetters.checked) {
			let a = arr_en[Math.floor(Math.random() * arr_EN.length)];
			listIndex.push(a);
		}
		if (uppercaseLetters.checked) {
			let b = arr_EN[Math.floor(Math.random() * arr_en.length)];
			listIndex.push(b);
		}
		if (includeNumbers.checked) {
			let c = arr_num[Math.floor(Math.random() * arr_num.length)];
			listIndex.push(c);
		}
		if (includeSymbols.checked) {
			let d = arr_sym[Math.floor(Math.random() * arr_sym.length)];
			listIndex.push(d);
		}

		let j = Math.floor(Math.random() * listIndex.length);

		if (listIndex.length != 0) {
			
			password += listIndex[j];
			
			listIndex = [];
		}
		else {
			console.log('Press at least some switch...');
		}
	}
	input.value = password;
}