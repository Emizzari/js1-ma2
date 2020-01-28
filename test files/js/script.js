// This is a test script for MA2




// QUESTION 4
/* Refer: lesson 2 / 3
   - Select the button in the HTML below by its tag. 
   - Add a mouseover event listener. 
   - The callback function should add a class called "hover" to the button.

   <button class="btn" data-animal="dog">Hover over me</button> */

    const selectButtonByTag = document.querySelector("button");

    function addClassWhenMouseover() {
        selectButtonByTag.classList.add("hover");
    }

    selectButtonByTag.addEventListener("mouseover", addClassWhenMouseover);

// QUESTION 5
/* Refer: lesson 2 / 3
   - Select the button in the HTML below by its data attribute and add a
     mouseout event listener to it.
   - The callback function should remove the class called "hover" from the button.

   <button class="btn" data-animal="dog">Hover over me</button> */

    const varOne = document.querySelector("button");

    function functionOne() {
        varOne.classList.remove("hover");
    }

    varOne.addEventListener("mouseout", functionOne);