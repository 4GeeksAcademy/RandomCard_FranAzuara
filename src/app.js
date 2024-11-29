/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let suits = ["♦", "♥", "♠", "♣"];
let value = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
window.onload = function() {
  //write your code here
  function getRandomElement(list) {
    const element = Math.floor(Math.random() * list.length);
    return element;
  }
  let randomSuits = suits[getRandomElement(suits)];
  let randomValue = value[getRandomElement(value)];
  document.getElementById("upperSuits").innerHTML = randomSuits;
  document.getElementById("numberValue").innerHTML = randomValue;
  document.getElementById("lowerSuits").innerHTML = randomSuits;

  let color = "black";
  if (randomSuits === "♦" || randomSuits === "♥") {
    color = "red";
  }
  upperSuits.style.color = color;
  lowerSuits.style.color = color;

  setTimeout(function() {
    location.reload();
  }, 10000);
};
