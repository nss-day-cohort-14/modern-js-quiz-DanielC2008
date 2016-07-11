"use strict";

function attack(offense, defense) {
defense.health = defense.health - offense.attack;
}

module.exports = attack;

