function Player () {
	this.playerName = undefined;
	this.life = 0;
	this.pointHit = 0;
	this.die = undefined;
	this.healPossibility = 0;
	this.amountToHeal = 0;

	//
	// BEGIN INTERNAL FUNCTIONS
	//
	
	function isNumber (n) {
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
		return this.playerName;
	}

	this.setName = function (aString) {
		this.playerName = aString.toString();
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

	this.getHealPossibility = function() {
		return this.healPossibility;
	}

	this.getAmountToHeal = function () {
		return this.amountToHeal;
	}

	this.setAmountToHeal = function (aNumber) {
		if (isNumber(aNumber)) {
			this.amountToHeal = aNumber;
		}
	}

	this.setHealPossibility = function (aNumber) {
		/*
			aNumber is a % from 0 to 100
			*/
			if (isNumber(aNumber)) {
				this.healPossibility = aNumber;
			}
		}

	//
	// BEGIN FUNCTIONAL METHODS
	// 

	this.initialize = function (name) {
		this.setName(name);
		this.setLife(100);
		this.setPointHit(10);
		this.setDie(false);
		this.setHealPossibility(30);
		this.setAmountToHeal(20);
	}

	this.reduceLife = function (anAmount) {
		if (!this.isDie()) {
			if ((this.getLife() - anAmount) > 0) {
				this.setLife(this.getLife() - anAmount);
			} else {
				this.setLife(0);
				this.setDie(true);
				//alert(this.getName() + " Die in a horrible horrible way {put in here a random string}")
				console.log(this.getName() + " Die in a horrible horrible way {put in here a random string}");
			}
		} else {
			//Do better
			document.write(this.getName() + " already die<br />");
		}		
	}


	this.attack = function (op) {
		op.reduceLife(this.getPointHit());
	}

	this.heal = function () {
		var ran = Math.random()*100;
		var pos = 100 - this.getHealPossibility()
		if (ran >= (100 - this.getHealPossibility())) {
			console.log("Hurrah ! You heal yourself, this is an enormous archievement !")
			this.setLife(this.getLife() + this.getAmountToHeal());
		} else {
			console.log("you can't heal in this moment");
		}
	}

	//
	// INITIALIZATION
	// 
	
	

}

var op1 = new Player();
op1.initialize("pepe")
var op2 = new Player();
op2.initialize("hermindo");

console.log("op1 attack op2");
op1.attack(op2);
console.log("op2 have now " + op2.getLife() + " of life");
console.log("op2 will thrive heal it self");
op2.heal();

