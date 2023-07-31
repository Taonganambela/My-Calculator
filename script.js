// Get the display element
const display = document.getElementById('display');

// Function to update the display
function updateDisplay(value) {
  display.value = value;
}

// Function to handle button clicks
function handleClick(event) {
  const clickedButtonValue = event.target.innerText;
  
  if (clickedButtonValue === '=') {
    try {
      // Evaluate the expression
      const result = eval(display.value);
      updateDisplay(result);
    } catch (error) {
      updateDisplay('Error');
    }
  } else if (clickedButtonValue === 'C') {
    // Clear the display
    updateDisplay('');
  } else if (clickedButtonValue === '√') {
    // Square root
    try {
      const value = eval(display.value);
      if (value < 0) {
        updateDisplay('Error');
      } else {
        const result = Math.sqrt(value);
        updateDisplay(result);
      }
    } catch (error) {
      updateDisplay('Error');
    }
  } else {
    // Append the clicked button value to the display
    updateDisplay(display.value + clickedButtonValue);
  }
}

// Attach click event listener to buttons
const buttons = document.querySelectorAll('.grid button');
buttons.forEach(button => button.addEventListener('click', handleClick));


//shapes
