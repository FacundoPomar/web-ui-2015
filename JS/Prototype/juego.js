function Player (name) {
	this.name = name;
	this.life = 100;
	this.pointHit = 10;
	this.die = false;

	//
	// BEGIN INTERNAL FUNCTIONS
	//
	
	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}  

	//
	// BEGIN GETTERS AND SETTERS
	//

	this.getPointHit = function () {
		return this.pointHit;
	}

	this.setPointHit = function (aNumber) {
		if (isNumber(aNumber)) {
			this.pointHit = aNumber;
		}
	}

	this.getName = function () {
		return this.name;
	}

	this.setName = function (aString) {
		this.name = aString.toString();
	}

	this.getLife = function () {
		return this.life;
	}

	this.setLife = function (aNumber) {
		if (isNumber(aNumber)) {
			this.life = aNumber;
		}
	}

	this.isDie = function () {
		return this.die; 
	}

	this.setDie = function (aBoolean) {
		this.die = aBoolean;
	}

	//
	// BEGIN FUNCTIONAL METHODS
	// 

	this.reduceLife = function (anAmount) {
		if (!this.isDie()) {
			if ((this.getLife() - anAmount) > 0) {
				this.setLife(this.getLife() - anAmount);
			} else {
				this.setLife(0);
				this.setDie(true);
				//alert(this.name + " Die in a horrible horrible way {put in here a random string}")
				console.log(this.name + " Die in a horrible horrible way {put in here a random string}");
			}
		} else {
			//Do better
			document.write(this.getName() + " already die<br />");
		}		
	}


	this.attack = function (op) {
		op.reduceLife(this.getPointHit());
	}

}

var op1 = new Player("pepe");
var op2 = new Player("hermindo");


for (var i = 0; i < 12; i++) {
	(function (i) {
		setTimeout(function() {
			document.write("<h3>Round " + i + "</h3>");
			document.write(op2.getLife());
			op1.attack(op2);
		}, 2000)
	}(i));
}
