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
		propulsionUnitAt: propulsionUnitAt,
		getSpeed: getSpeed,
		setSpeed: setSpeed,
		getPropulsionUnits: getPropulsionUnits,
		accelerate: accelerate
	}
}

function LandVehicle (aSpeed, wheelsArray) {
	var that = Vehicle(aSpeed);
	var defaultWheelRadius = 10;

	//Wheels setup
	if (Array.isArray(wheelsArray) && (wheelsArray.length === 4)) {
		for (var i = 0; i < wheelsArray.length; i++) {
			that.addPropulsionUnit(wheelsArray[i]);
		}		
	} else {
		for (var i = 0; i < 4; i++) {
			that.addPropulsionUnit(new Wheel(defaultWheelRadius));
		}
	}

	return that;
}

function AirVehicle (aSpeed, aPropellingNozzle) {
	var that = Vehicle(aSpeed);
	
	that.addPropulsionUnit(aPropellingNozzle || PropellingNozzle(10));

	function switchAfterBurner(aBool) {
		if (that.propulsionUnitAt(0)) {
			that.propulsionUnitAt(0).setAfterBurner(aBool);
		}
	}

	that.afterBurnerOn = function () {
		//Verify instanceof propulsionUnits.
		switchAfterBurner(true);

	}

	that.afterBurnerOff = function () {
		switchAfterBurner(false);
	};

	that.getAfterBurner = function () {
		return that.propulsionUnitAt(0);
	}

	return that;

}