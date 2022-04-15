"use strict";

window.addEventListener("load", initialize);

let divFeedback;
let divTypes;
let inpInput;

function initialize() {
  // Ophalen van DOM elementen
  inpInput = document.getElementById("input");
  divFeedback = document.getElementById("feedback");
  divTypes = document.querySelector("#types");
  const btnShowType = document.querySelector("#show-type");
  const divHead = document.querySelector("#head");
  const divSub = document.querySelector("#sub");
  const divSubSub = document.querySelector("#sub-sub");


  // EventListeners koppelen aan elementen
  btnShowType.addEventListener("click", getEventType);
  inpInput.addEventListener("focus", getEventType);
  inpInput.addEventListener("keydown", getEventType);
  inpInput.addEventListener("keydown", getCharacter);
  divHead.addEventListener("click", getClick); //true is capturing, false is bubbling
  divSub.addEventListener("click", getClick);
  divSubSub.addEventListener("click", getClick);

  document.addEventListener("mousedown", showMouseButtonAndPosition);

}

/**
 * show position of mousepointer and which button clicked
 * pageX/Y gives the coordinates relative to the <html> element in CSS pixels.
 * clientX/Y gives the coordinates relative to the viewport in CSS pixels.
 * screenX/Y gives the coordinates relative to the screen in device pixels.
 */
function showMouseButtonAndPosition(e) {
    
}

/**
 * Show which element triggered the event
 * demonstrates propagation
 * @param {*} e 
 */
function getClick(e) {
   
   
}
/**
 * gets the type of event called
 * and shows the element id
 * @param {*} e 
 */
function getEventType(e) {
    
}
/**
 * get the character pressed in the input box
 * KeyCode is deprecated
 * use key instead
 * @param {*} e 
 */
function getCharacter(e) {

}
