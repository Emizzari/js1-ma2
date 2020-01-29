
// QUESTION 3
/* Refer: lesson 2
   - Select the input in the HTML below by its id.
   - Add a keydown event listener.
   - The callback function passed to the event listener should
     log the value of the key that was pressed.

   <input class="input" id="firstName"></div> */

const input = document.querySelector("#firstName");

function logKey() {
    console.log(event.key);
}
input.addEventListener("keydown", logKey);