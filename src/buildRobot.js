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


//SEND TO DOM AND MAKE OBJECT ACCESSIBLE/////// Make two different functions to make cards
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