// Define a function called reminder that sets up the reminder timer
function reminder(interval) {
    // Use setInterval to execute a function repeatedly at a specified interval
    setInterval(function() {
        // Log a message to the console as a reminder to get up and move
        console.log("Time to get up and move!");
    }, interval * 60 * 1000); // Convert minutes to milliseconds
}

// Prompt the user to enter the reminder interval
const intervalChoice = prompt("Enter '30' for every 30 minutes or '60' for every hour:");

// Try to parse the user input and handle any potential errors
try {
    // Parse the user input string into an integer
    const interval = parseInt(intervalChoice);
    // Check if the parsed interval is valid (either 30 or 60)
    if (interval !== 30 && interval !== 60) {
        // Log an error message if the interval is not valid
        console.log("Invalid choice. Please enter either '30' or '60'.");
    } else {
        // Call the reminder function with the parsed interval if it's valid
        reminder(interval);
    }
} catch (error) {
    // Catch any errors that occur during parsing and log an error message
    console.log("Invalid input. Please enter a number.");
}
