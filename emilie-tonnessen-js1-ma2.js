// QUESTION 1
/* Refer: lesson 1
   Create a function expression by assigning an anonmyous function to a 
   variable called myFunctionExpression. The function should console log 
   your name. */
    const myFunctionExpression = function () {
        console.log("Emilie H. K. Tønnessen");
    }

    myFunctionExpression();


// QUESTION 2
/* Refer: lesson 2
   Select the "button" in the HTML below by its class. 
   Add a click event listener. 
   The callback function passed to the event listener should 
   log the sentence; "I was clicked".

   You can pass the function in directly, declare it and pass it in by 
   its name or assign it to a variable and pass it in by the variable 
   name.

   <button class="btn">Click me</button> */
    const selectTheButtonClass = document.querySelector(".btn");

    const buttonClick = function () {
        console.log("I was clicked")
    };

    selectTheButtonClass.addEventListener("click", buttonClick);



// QUESTION 3
/* Refer: lesson 2
   Select the input in the HTML below by its id. Add a keydown event 
   listener. The callback function passed to the event listener should 
   log the value of the key that was pressed.

   <input class="input" id="firstName"></div> /*



// QUESTION 4
/* Refer: lesson 2 / 3
   Select the button in the HTML below by its tag. Add a mouseover event 
   listener. The callback function should add a class called hover to 
   the button.

   <button class="btn" data-animal="dog">Hover over me</button> */



// QUESTION 5
/* Refer: lesson 2 / 3
   Select the button in the HTML below by its data attribute and add a 
   mouseout event listener to it. The callback function should remove 
   the class called hover from the button.

   <button class="btn" data-animal="dog">Hover over me</button> */



// QUESTION 6
/* Refer: lesson 3
   Select all the li tags from the HTML below. Using a loop, add a 
   mouseover event listener to each tag.

   The callback function should log the value of the data attribute on 
   each element when the cursor moves over it.

   <ul>
       <li data-animal="goose">Animal 1</li>
       <li data-animal="frog">Animal 2</li>
       <li data-animal="elephant">Animal 3</li>
   </ul> */



// QUESTION 7
/* Refer: lesson 3
   Convert the if-else-if statement below to a switch statement. Use the 
   code inside the else block in the default block in the switch.

   const animal = "cow";

   if(animal === "cat") {
       console.log("Meow");
   }
   else if(animal === "cow") {
       console.log("Moo");
   }
   else if(animal === "bird") {
       console.log("Tweet");
   }
   else {
       console.log("Harrumph");
   } */



// QUESTION 8
/* Refer: lesson 4
   Convert the for loop code below to a forEach loop.

   const sheep = ["Malcolm", "Anders", "Marie"];

   for(let i = 0; i < sheep.length; i++) {
       console.log(sheep[i]);
   } */



// QUESTION 9
/* Refer: lesson 4
   Create a timer that logs the word hello every half a second. It must 
   stop after its logged the word 6 times. */



// QUESTION 10
/* Refer: lesson 4
   Select the div from the HTML below. Write code that updates the div's 
   text to say Text updated after waiting 2 seconds. You can use either 
   innerText or innerHTML to update the text.

   <div class="container">Placeholder text</div> */


