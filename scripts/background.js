var keystrokes = 0;
var words = [];
var samples = [];
var maxLength = 7;
var period = 7000;

function rollingAverage(n){
  if (samples.length < maxLength){
    samples.push(n)
  }
  else {
    samples.shift();
    samples.push(n);
  }
  var avg = 0;
  for (var i = 0; i < samples.length; i++){
    avg += samples[i];
  }
  return avg/samples.length;
}
chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  keystrokes += 1;
  if (request.key == 32){
    var d = new Date();
  	words.push(d.getTime());
    // console.log(words);
  }
  // console.log(request.key);
});

chrome.browserAction.setBadgeText({ text: '\'Allo' });
setInterval(function() {
  console.log("keystrokes:" + keystrokes);
  if (words.length > 1){
    var num = 60/((words[words.length-1]-words[0])/words.length/1000);
    // console.log('alarm');
    // console.log(words[words.length-1], words[0],words.length,((words[words.length-1]-words[0])/words.length/1000));
    // console.log('Number:' + num);
    // console.log('Words.length:' + words.length)
    var res = rollingAverage(parseInt(num,10));
    console.log(samples);
    console.log(res);
    chrome.browserAction.setBadgeText({ text: parseInt(res,10) + ""});
    words = [];
  }
  else{
    words = [];
    var res = rollingAverage(0);
    console.log(samples);
    console.log(res);
    chrome.browserAction.setBadgeText({ text: parseInt(res,10) + ""});
  }
}, period);
console.log('\'Allo \'Allo! Event Page for Browser Action');
