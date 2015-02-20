/*
Write an expression that checks for given integer if
its third digit (right-to-left) is 7. E. g. 1732  true.
 */
var a = 5458465458417041;
if (a > 100) {
	var aux = Math.floor(a / 100);
	console.log(aux);
	if ((aux%10) === 7) {
		console.log("True");
	} else {
		console.log("False");
	}
}

// Otra forma sería convertir a string, no se cual será más eficiente.