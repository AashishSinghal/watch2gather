chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "startWatching" || message.action === "stopWatching") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log("Tabs - ", tabs);
      const activeTab = tabs[0];
      console.log("Action - ", message.action);
    });
  }
});
