chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "startWatching") {
    // Handle starting the content watching here
    // Implement play, load video, etc.
    console.log("Starting to watch together");
  } else if (message.action === "stopWatching") {
    // Handle stopping the content watching here
    // Implement pausing, closing video player, etc.
    console.log("Stopping to watch together");
  }
});
