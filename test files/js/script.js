// QUESTION 7
/* Refer: lesson 3
   - Convert the if-else-if statement below to a switch statement. 
   - Use the code inside the else block in the default block in the switch.

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


const animal = "mm";

switch (animal) {
    case "cat":
        console.log("Meow");
        break;

    case "cow":
        console.log("Moo");
        break;

    case "bird":
        console.log("Tweet");
        break;

    default:
        console.log("Harrumph");
}