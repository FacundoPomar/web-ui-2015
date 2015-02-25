//Deberia de heredar as propelling units de una clase abstracta. MEJORAR

//Propelling Units

function Wheel (rad) {
	var radius = rad || 0;

	function getRadius () {
		return radius;
	}

	function setRadius (aValue) {
		radius = ra;
	}

	function getAcceleration () {
		return (2 * Math.PI * getRadius());
	}

	return {
		getRadius: getRadius,
		setRadius: setRadius,
		getAcceleration: getAcceleration
	}
}


function PropellingNozzle (pow) {
	var power = pow || 0;
	var afterBurner = false;

	function getPower () {
		return power;
	}

	function setPower (aValue) {
		power = aValue;
	}

	function getAfterBurner () {
		return afterBurner;
	}

	function setAfterBurner (aValue) {
		afterBurner = aValue; //Maybe some controll of type of data ?
	}

	function getAcceleration () {
		if (getAfterBurner()) {
			return 2 * getPower();
		} else {
			return getPower();
		}
	}

	return {
		getPower: getPower,
		setPower: setPower,
		getAfterBurner: getAfterBurner,
		setAfterBurner: setAfterBurner,
		getAcceleration: getAcceleration
	}
}

function Propeller(numberFins, spinDir) {
	var fins = numberFins || 0;
	var spinDirection  = spinDir || 1; //1 --> clockwise | -1 --> counter-clockwise

	function getFins () {
		return fins;
	}

	function setFins (aValue) {
		fins = aValue;
	}

	function getSpinDirection () {
		return spinDirection;
	}

	function setSpinDirection (aValue) {
		spinDirection = aValue;
	}

	function getAcceleration () {
		return getFins()*getSpinDirection();
	}

	return {
		getFins: getFins,
		setFins: setFins,
		getSpinDirection: getSpinDirection,
		setSpinDirection: setSpinDirection,
		getAcceleration: getAcceleration
	}
}

// Vehicle.

function Vehicle (aSpeed) {
	var speed = aSpeed || 0;
	var propulsionUnits = [];
	
	function addPropulsionUnit (aProp) {
		//Do a lot of verifications here
		propulsionUnits.push(aProp);
	}

	//Setting propulsionUnits from constructor parameters
	if (arguments.length > 1) {
		for (var i = 1; i < arguments.length; i++) {
			addPropulsionUnit(arguments[i]);
		}
	}

	function propulsionUnitAt (aPosition) {
		return getPropulsionUnits()[aPosition];
	}

	function getSpeed () {
		return speed;
	}

	function setSpeed (aValue) {
		speed = aValue;
	}

	function getPropulsionUnits () {
		return propulsionUnits;
	}

	function accelerate () {
		for (var i = 0; i < getPropulsionUnits().length; i++) {
			speed += propulsionUnitAt(i).getAcceleration();
		}
	}

	return {
		addPropulsionUnit: addPropulsionUnit,
		getSpeed: getSpeed,
		setSpeed: setSpeed,
		getPropulsionUnits: getPropulsionUnits,
		accelerate: accelerate
	}
}

/*
//Testing
//

//Vehicle with wheels
var w1 = new Wheel(10);
console.log(w1.getAcceleration());
var w2 = new Wheel(10);
console.log("Speed should be: " + w1.getAcceleration()*2);

var v = new Vehicle();


v.addPropulsionUnit(w1);
v.addPropulsionUnit(w2);
v.accelerate();
v.getSpeed();

//Vehicle with propeling nozzle

var pz1 = new PropellingNozzle(10);
pz1.setAfterBurner(true);
console.log("pz1 acceleration: " + pz1.getAcceleration());

var pz2 = new PropellingNozzle(10);
// pz1.setAfterBurner(true); // Witout afterburner
console.log("pz2 acceleration: " + pz2.getAcceleration());

var v = new Vehicle();


v.addPropulsionUnit(pz1);
v.addPropulsionUnit(pz2);
v.accelerate();
v.getSpeed();

//Vehicle with proppeler

var p1 = new Propeller(20, -1)
console.log("pz1 acceleration: " + p1.getAcceleration());

var v = new Vehicle();


v.addPropulsionUnit(p1);
v.accelerate();
v.getSpeed();

*/