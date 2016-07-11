(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";


const domHandler = require("./domHandler");
const buildRobot = require("./buildRobot");
const handleFight = require("./handleFight");

domHandler.buildSelect();

$("input").keypress( function(e) {
	buildRobot.storeName(e, $(this));
});

$("select").change( function() {
	buildRobot.rbtObj($(this));
});

$("#attack").click(() => {	
	handleFight();
});


},{"./buildRobot":3,"./domHandler":4,"./handleFight":5}],2:[function(require,module,exports){
"use strict";

function attack(offense, defense) {
defense.health = defense.health - offense.attack;
}

module.exports = attack;


},{}],3:[function(require,module,exports){
"use strict";

const typesArray = require("./quiz");
let nameOne;
let nameTwo;
let robotOne = [];
let robotTwo = [];

//STORE NAME
function storeName(e, $input) {
  let enter = e.which === 13 ?  
	 ($input.attr("id") === "player1" ? (nameOne = $input.val()) : (nameTwo = $input.val())) 
	 : null;
}


//CREATE ROBOT OBJECT AND NAME
function rbtObj($select) {
	let robot;
	let divId = $select.attr("id");
	typesArray.forEach( (index) => {
		let getModel = index.model === $select.val() ? (robot = index) : null; 
	});
		let selectName = divId === "robotSelect1" ?
			(nameOne !== undefined ? (robot.name = nameOne) : (robot.name)):
			(nameTwo !== undefined ? (robot.name = nameTwo) : (robot.name));
		createRbt(robot, divId);
}


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
}


module.exports = {robotOne, robotTwo, createRbt, storeName, rbtObj};
},{"./quiz":6}],4:[function(require,module,exports){
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

// ANNOUNCE WINNER/////////
function announce(winner, loser) {
	let announcement = $("#announcement");
	let winnerDiv = $("<div>").html(`${winner} destroyed ${loser}!`);
	announcement.append(winnerDiv);
	$("#attack").prop("disabled", true);
}

module.exports = {buildSelect, announce};

},{"./quiz":6}],5:[function(require,module,exports){
"use strict";

const buildRobot = require("./buildRobot");
const domHandler = require("./domHandler");
const attack = require("./attack");

function handleFight() {
	let robotOne = buildRobot.robotOne[0];
	let robotTwo = buildRobot.robotTwo[0];

	attack(robotOne, robotTwo);
	if (robotTwo.health <= 0) {
		domHandler.announce(robotOne.name, robotTwo.name);
		return;
	}
	else {
		buildRobot.createRbt(robotTwo, "robotSelect2");
		attack(robotTwo, robotOne);
	}
	if (robotOne.health <= 0) {
		domHandler.announce(robotTwo.name, robotOne.name);
		return;
	}
	else {
	buildRobot.createRbt(robotOne, "robotSelect1");

	}
}

module.exports = handleFight;
},{"./attack":2,"./buildRobot":3,"./domHandler":4}],6:[function(require,module,exports){
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
