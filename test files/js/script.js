





// QUESTION 10
/* Refer: lesson 4
   - Select the div from the HTML below.
   - Write code that updates the div's text to say "Text updated" after
     waiting 2 seconds. 
   - You can use either innerText or innerHTML to update
     the text.

   <div class="container">Placeholder text</div> */

const container = document.querySelector(".container");

function updateContainer() {
    container.innerHTML = "Text updated";
}

setTimeout(updateContainer, 2000);