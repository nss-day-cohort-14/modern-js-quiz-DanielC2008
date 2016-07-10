(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// const quiz = require("./quiz");
const domHandler = require("./domHandler");
const buildRobot = require("./buildRobot.js");

domHandler();

},{"./buildRobot.js":2,"./domHandler":3}],2:[function(require,module,exports){
"use strict";

const typesArray = require("./quiz");
let nameOne;
let nameTwo;

//STORE NAME
$("input").keypress( (e) => {
	 let enter = e.which === 13 ?  
		(e.target.id === "player1" ? (nameOne = $(e.target).val()) : (nameTwo = $(e.target).val())) 
		: null;
});


//CREATE ROBOT OBJECT
$("select").change( (e) => {
	let robot;
	let divId = e.target.id;
	typesArray.forEach( (index) => {
		let getModel = index.model === $(e.target).val() ? (robot = index) : null; 
	});
		createRbt(robot, divId);
});


//ADD NAME AND SEND TO DOM
let createRbt = (robot, divId) => {
	let robotEl; 
	if (divId === "robotSelect1") {
		 robotEl = $("#robot1");
		if (nameOne !== undefined) {
		 robot.name = nameOne;
		} 
	}	
	else {
		 robotEl = $("#robot2");
		if (nameTwo !== undefined) {
		 robot.name = nameTwo;
		} 
	}	

		let a = `Model: ${robot.model}`, b = `Name: ${robot.name}`, c = `Current Health: ${robot.health}`, d = `Damage: ${robot.attack}`;
		let robAttr = [a, b, c, d];
		robotEl.empty();
		robAttr.forEach( (index) => {
		let create = $("<div>").html(`${index}`);
		robotEl.append(create);
	});
};

// let createRbt2 = (robot) => {
// 	let a = `Model: ${robot.model}`, b = `Name: ${nameTwo}`, c = `Current Health: ${robot.health}`, d = `Damage: ${robot.attack}`;
// 	let robAttr = [a, b, c, d];
// 	let rob = $("#robot2");
// 	rob.empty();
// 	robAttr.forEach( (index) => {
// 		let create = $("<div>").html(`${index}`);
// 		rob.append(create);
// 	});
// };
},{"./quiz":4}],3:[function(require,module,exports){
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

},{"./quiz":4}],4:[function(require,module,exports){
"use strict";

//CREATE ROBOT OBJECT
let Robot = function() {
	this.robot = true;
	this.name = "Unnamed Killer";
	this.health = null;
	this.attck = null;
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
