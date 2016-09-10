var charcount = 0;
var wordcount = 0;
chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  charcount += 1;

  if (request.key == 32){
  	wordcount++;
  }

  chrome.browserAction.setBadgeText({ text: wordcount + ""});
  console.log(request.key);

});
chrome.browserAction.setBadgeText({ text: '\'Allo' });

console.log('\'Allo \'Allo! Event Page for Browser Action');
