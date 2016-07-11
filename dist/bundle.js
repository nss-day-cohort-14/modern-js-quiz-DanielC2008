(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const domHandler = require("./domHandler");
const buildRobot = require("./buildRobot");
const attack = require("./attack");

domHandler();

$("input").keypress( (e) => {
	buildRobot.storeName(e);
});

$("select").change( (e) => {
	buildRobot.rbtObj(e);
});

$("#attack").click(() => {	
	attack();
});
},{"./attack":2,"./buildRobot":3,"./domHandler":4}],2:[function(require,module,exports){
"use strict";

const buildRobot = require("./buildRobot");



function attack(){
	let robotOne = buildRobot.robotOne[0];
	let robotTwo = buildRobot.robotTwo[0];
	robotTwo.health = robotTwo.health - robotOne.attack;	
	buildRobot.createRbt(robotTwo, "robotSelect2");
	robotOne.health = robotOne.health - robotOne.attack;	
	buildRobot.createRbt(robotOne, "robotSelect1");
}


module.exports = attack;
},{"./buildRobot":3}],3:[function(require,module,exports){
"use strict";

const typesArray = require("./quiz");
let nameOne;
let nameTwo;
let robotOne = [];
let robotTwo = [];

//STORE NAME
function storeName(e) {
	 let enter = e.which === 13 ?  
		(e.target.id === "player1" ? (nameOne = $(e.target).val()) : (nameTwo = $(e.target).val())) 
		: null;
};


//CREATE ROBOT OBJECT AND NAME
function rbtObj(e) {
	let robot;
	let divId = e.target.id;
	typesArray.forEach( (index) => {
		let getModel = index.model === $(e.target).val() ? (robot = index) : null; 
	});
		let selectName = divId === "robotSelect1" ?
			(nameOne !== undefined ? (robot.name = nameOne) : (robot.name)):
			(nameTwo !== undefined ? (robot.name = nameTwo) : (robot.name));
		createRbt(robot, divId);
};


//SEND TO DOM AND MAKE OBJECT ACCESSIBLE////
function createRbt(robot, divId) {
	let robotEl; 
	let accessRob = divId === "robotSelect1" ? (robotOne.splice(0, 1, robot)) : (robotTwo.splice(0, 1, robot));
	let selectDiv = divId === "robotSelect1" ? (robotEl = $("#robot1")) : (robotEl = $("#robot2"));
	let a = `Model: ${robot.model}`, b = `Name: ${robot.name}`, c = `Current Health: ${robot.health}`, d = `Damage: ${robot.attack}`;
	let robAttr = [a, b, c, d];
	robotEl.empty();
	robAttr.forEach( (index) => {
	let create = $("<div>").html(`${index}`);
	robotEl.append(create);
	});
};


module.exports = {robotOne, robotTwo, createRbt, storeName, rbtObj};
},{"./quiz":5}],4:[function(require,module,exports){
"use strict";

const typesArray = require("./quiz");

//Build up select element
let buildSelect = () => {
	let robots = $("select").append("<option>");
	typesArray.forEach( (index) => {
		let option = $("<option>").html(`${index.model}`);
		robots.append(option);
	});
};

module.exports = buildSelect;

},{"./quiz":5}],5:[function(require,module,exports){
"use strict";

//CREATE ROBOT OBJECT
let Robot = function() {
	this.robot = true;
	this.name = "Unnamed Killer";
	this.health = null;
	this.attack = null;
};

//CREATE TYPE
let Drone = function() {
	this.type = "Drone";
};
Drone.prototype = new Robot();

let Bipedal = function() {
	this.type = "Bipedal";
};
Bipedal.prototype = new Robot();

let ATV = function() {
	this.type = "ATV";
};
ATV.prototype = new Robot();

//CREATE MODELS
let Viper = function() {
	this.model = "Viper";
	this.health = Math.floor((Math.random() * (150-100)-1) + 100);
	this.attack = Math.floor((Math.random() * (50-40)-1) + 40);
};
Viper.prototype = new Drone();

let Hawk = function() {
	this.model = "Hawk";
	this.health = Math.floor((Math.random() * (170-120)-1) + 120);
	this.attack = Math.floor((Math.random() * (30-20)-1) + 20);
};
Hawk.prototype = new Drone();

let Ninja = function() {
	this.model = "Ninja";
	this.health = Math.floor((Math.random() * (160-110)-1) + 110);
	this.attack = Math.floor((Math.random() * (40-30)-1) + 30);
};
Ninja.prototype = new Bipedal();

let Assassin = function() {
	this.model = "Assassin";
	this.health = Math.floor((Math.random() * (140-90)-1) + 90);
	this.attack = Math.floor((Math.random() * (80-70)-1) + 70);
};
Assassin.prototype = new Bipedal();

let Behemoth = function() {
	this.model = "Behemoth";
	this.health = Math.floor((Math.random() * (200-150)-1) + 150);
	this.attack = Math.floor((Math.random() * (30-20)-1) + 20);
};
Behemoth.prototype = new ATV();

let Minotaur = function() {
	this.model = "Minotaur";
	this.health = Math.floor((Math.random() * (180-130)-1) + 130);
	this.attack = Math.floor((Math.random() * (50-40)-1) + 40);
};
Minotaur.prototype = new ATV();

let viperBot = new Viper();
let hawkBot = new Hawk();
let ninjaBot = new Ninja();
let assassinBot = new Assassin();
let behemothBot = new Behemoth();
let minotaurBot = new Minotaur();

let typesArray = [viperBot, hawkBot, ninjaBot, assassinBot, behemothBot, minotaurBot];

module.exports = typesArray;
},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
