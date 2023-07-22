document.addEventListener("DOMContentLoaded", function () {
  const startWatchingButton = document.getElementById("startWatching");
  const stopWatchingButton = document.getElementById("stopWatching");

  startWatchingButton.addEventListener("click", async () => {
    const tab = await getCurrentTab();
    console.log("Tab in popupjs - ", tab);
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"],
    });
    chrome.runtime.sendMessage({ action: "startWatching" });
  });

  stopWatchingButton.addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "stopWatching" });
  });
});

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  console.log("Tab object" - tab);
  return tab;
}
