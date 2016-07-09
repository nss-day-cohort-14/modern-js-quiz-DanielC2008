(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let typesArray = require("./quiz");



},{"./quiz":3}],2:[function(require,module,exports){
"use strict";

let quiz = require("./quiz");
let Dom = require("./DomHandler");
},{"./DomHandler":1,"./quiz":3}],3:[function(require,module,exports){
"use strict";

//CREATE ROBOT OBJECT
let Robot = function() {
	this.robot = true;
	this.name = null;
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

viperBot = new Viper();
hawkBot = new Hawk();
ninjaBot = new Ninja();
assassinBot = new Assassin();
behemothBot = new Behemoth();
minotaurBot = new Minotaur();

let typesArray = [viperBot, hawkBot, ninjaBot, assassinBot, behemothBot, minotaurBot];

module.exports = typesArray;
},{}]},{},[2])


//# sourceMappingURL=bundle.js.map
