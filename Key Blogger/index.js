
const logDiv = document.getElementById("log"); // div to display key press log
const stateDiv = document.getElementById("state"); // div to display current key state
const startBtn = document.getElementById("start-btn"); // button to start key logging
const stopBtn = document.getElementById("stop-btn"); // button to stop key logging

// Check if all required HTML elements exist
if (!logDiv ||!stateDiv ||!startBtn ||!stopBtn) {
  console.error("Missing required HTML elements");
  return;
}

// Flag to track whether key logging is active
let isLogging = false;

// Start button click handler
startBtn.addEventListener("click", () => {
  // Prevent multiple starts
  if (isLogging) return;
  
  // Set flag to indicate key logging is active
  isLogging = true;
  
  // Add event listeners for keydown and keyup events
  document.addEventListener("keydown", handleDown)
  document.addEventListener("keyup", handleUp)
  
  // Disable start button and enable stop button
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

// Stop button click handler
stopBtn.addEventListener("click", () => {
  // Prevent multiple stops
  if (!isLogging) return;
  
  // Set flag to indicate key logging is inactive
  isLogging = false;
  
  // Remove event listeners for keydown and keyup events
  document.removeEventListener("keydown", handleDown)
  document.removeEventListener("keyup", handleUp)
  
  // Clear log and state divs
  logDiv.textContent = "";
  stateDiv.textContent = "";
  
  // Disable stop button and enable start button
  stopBtn.disabled = true;
  startBtn.disabled = false;
});

// Function to handle keydown events
function handleDown(e) {
  // Log key press
  logDiv.textContent += ` key ${e.key} pressed down`;
  stateDiv.textContent = "key is down";
}

// Function to handle keyup events
function handleUp(e) {
  // Log key release
  logDiv.textContent += ` key ${e.key} released`;
  stateDiv.textContent = "key is up";
}