function getVal() {
	const val = document.querySelector("input").value;
	//console.log(val);

	//console.log(val.length);

	return val;
}

const calculateButton = document.querySelector(
	".calculator a button#calculate"
);

calculateButton.addEventListener("click", (event) => handleClick(event, false));

function isitDD(value) {
	let algs = [];

	let string = String(value);

	for (let i = 0; i < string.length; i++) {
		if (algs.indexOf(string[i]) == -1) {
			//se n acha
			algs.push(string[i]);
		}
	}

	//console.log(`Algarismos encontrados: ${algs}`);

	if (algs.length > 2) {
		return false;
	} else {
		return true;
	}
}

function handleClick(event, check = true) {
	event.preventDefault();

	let desiredValue = getVal();

	if (desiredValue < 100) {
		document.getElementById("final-answer").innerHTML = "Valor menor que 100!";
		document.getElementById("multiplied-value").innerHTML = "ㅡ";
		document.getElementById("time-value").innerHTML = "0 ms";
		return;
	}

	//console.log("Seu número é um duodígito? ", isitDD(desiredValue));

	let startTime = performance.now();

	let answer = calculateDD(desiredValue);

	let endTime = performance.now();

	let totalTime = endTime - startTime;

	let multipliedValue = answer / desiredValue;

	if (answer == -1) {
		document.getElementById("final-answer").innerHTML =
			"Não encontramos uma resposta!";
		document.getElementById("multiplied-value").innerHTML = "ㅡ";
	} else {
		document.getElementById("final-answer").innerHTML = answer;
		document.getElementById("multiplied-value").innerHTML = multipliedValue;
	}

	document.getElementById("time-value").innerHTML =
		totalTime.toFixed(4) + " ms";

	//console.log("clicou no botão de calcular!");
}

function calculateDD(number) {
	let i = 2;
	let answer = 1;
	let found = false;

	while (!found) {
		answer = number * i;
		//console.log(`Multiplicando por ${i}: ${answer}`);
		//console.log("É duodígito? ", isitDD(answer));

		if (isitDD(answer)) {
			found = true;
		}

		i++;

		if (i == 10000000) {
			found = true;
			answer = -1;
		}
	}

	// console.log("A resposta é: ", answer);

	return answer;
}
