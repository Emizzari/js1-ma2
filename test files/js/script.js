
// QUESTION 3
/* Refer: lesson 2
   - Select the input in the HTML below by its id.
   - Add a keydown event listener.
   - The callback function passed to the event listener should
     log the value of the key that was pressed.

   <input class="input" id="firstName"></div> */

const sheep = ["Malcolm", "Anders", "Marie"];



function LogSheep(item) {
  console.log(item);
}

sheep.forEach(LogSheep);