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
	let divId = $select.attr("id");
	let robot = typesArray.filter(function(curr) {
		return curr.model === $select.val();
	});
		let selectName = divId === "robotSelect1" ?
			(nameOne !== undefined ? (robot[0].name = nameOne) : (robot.name)):
			(nameTwo !== undefined ? (robot[0].name = nameTwo) : (robot.name));
		createRbt(robot[0], divId);
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