// auto-refresh.js

// Define an interval to check the page content every second
let intervalId = setInterval(function () {
  // Check if the "Get notified when we're back" text appears on the page
  if (document.body.innerHTML.indexOf("Get notified when we're back") !== -1) {
    // Log a message to the console
    console.log("Reloading the page");
    // Reload the page
    location.reload();
  } else {
    // Log a message to the console
    console.log("Text not found, stopping refresh");
    // Clear the interval to stop checking the page content
    clearInterval(intervalId);
  }
}, 1000);
