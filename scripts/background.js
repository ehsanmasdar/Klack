var charcount = 0;
chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  charcount += 1;
  chrome.browserAction.setBadgeText({ text: charcount + "" });
});
chrome.browserAction.setBadgeText({ text: '\'Allo' });

console.log('\'Allo \'Allo! Event Page for Browser Action');
