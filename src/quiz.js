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

let viperBot = new Viper();
let hawkBot = new Hawk();
let ninjaBot = new Ninja();
let assassinBot = new Assassin();
let behemothBot = new Behemoth();
let minotaurBot = new Minotaur();

let typesArray = [viperBot, hawkBot, ninjaBot, assassinBot, behemothBot, minotaurBot];

module.exports = typesArray;