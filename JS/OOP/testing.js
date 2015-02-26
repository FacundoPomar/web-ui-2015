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



console.log("Without contruct parameters");
var land = LandVehicle();
console.log(land.getSpeed());
console.log(land.getPropulsionUnits());
land.accelerate();
console.log(land.getSpeed());

console.log("With speed parameter");
var land = LandVehicle(20);
console.log(land.getSpeed());
console.log(land.getPropulsionUnits());
land.accelerate();
console.log(land.getSpeed());

console.log("With speed and wheelsArray parameter");
var land = LandVehicle(20, [Wheel(11), Wheel(11), Wheel(11), Wheel(11)]);
console.log(land.getSpeed());
console.log(land.getPropulsionUnits());
land.accelerate();
console.log(land.getSpeed());

//Water test

var a = WaterVehicle(10, [new Propeller(10, 1)]);
console.log(a.getSpeed());
a.accelerate();
a.spinLeft();
console.log(a.getSpeed());
a.accelerate();



//Amphibious test

var a = Amphibious(0, 
	[Wheel(10), Wheel(10), Wheel(10), Wheel(10)], 
	[Propeller(10, 1), Propeller(3, 1)]);

console.log("Amphibious speed "+ a.getSpeed());
console.log("Land Speed: " + a.land.getSpeed());
console.log("Water Speed: " + a.water.getSpeed());
a.accelerate();
console.log("Amphibious speed "+ a.getSpeed());
console.log("Land Speed: " + a.land.getSpeed());
console.log("Water Speed: " + a.water.getSpeed());
a.switchToLand();
console.log("Switch to Land");
console.log("Amphibious speed "+ a.getSpeed());
console.log("Land Speed: " + a.land.getSpeed());
console.log("Water Speed: " + a.water.getSpeed());
a.switchToWater();
a.accelerate();
console.log("Switch to water");
console.log("Amphibious speed "+ a.getSpeed());
console.log("Land Speed: " + a.land.getSpeed());
console.log("Water Speed: " + a.water.getSpeed());

*/