const buttons = document.querySelectorAll('button');
const display= document.querySelector('.display')

buttons.forEach(
    function (button){
        button.addEventListener("click", calculate);
    }
);

// Perform the calculations on our calculator
function calculate(event){
    // What was clicked?
    const clickedValue = event.target.value;

    // Handle what was clicked
    // If it is an =
    if(clickedValue === "="){
        // Is the display empty?
        if(display.value !== ""){
            // Calculate the value amd display
            display.value = eval(display.value);
        }
    }
    // Did I click clear?
    else if(clickedValue === "C"){
        // Empty the display
        display.value = "";
    }
    // Otherwise add it to the display
    else{
        // Add whatever I clicked to the display
        display.value = clickedValue;
    }
}