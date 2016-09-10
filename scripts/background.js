var keystrokes = 0;
var localKeystrokes = 0;
var words = [];
var wordslast = 0;
var samples = [];
var maxLength = 7;
var period = 4000;
var session = false;

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  keystrokes += 1;
  localKeystrokes += 1;
  if (request.key == 32){
    var d = new Date();
  	words.push(d.getTime());

    wordslast++;
  }
});

chrome.browserAction.setBadgeText({ text: '\'0' });

setInterval(function() {
  console.log("keystrokes:" + keystrokes);
  if (wordslast > 1){
    session = true;
    var num = parseInt((words.length*60)/((words[words.length-1]-words[0])/1000), 10);
    // var num = 60/((words[words.length-1]-words[0])/words.length/1000); //this line calculates avg time for one word within period
    // var res = rollingAverage(parseInt(num,10));
    chrome.browserAction.setBadgeText({ text: num + ""});
    chrome.storage.sync.set({'live': num}, function(){
    	 console.log("saved value of " + num);
    	}
    );
  }
  else{
    if (session == true){
      chrome.storage.sync.get('avg', function(items){
        chrome.storage.sync.get('live', function(liveitem){
          console.log(items);
          if (!items.avg)
            items.avg = []
          var temp = items.avg;
          temp.push(liveitem.live);
          console.log(liveitem);
          console.log(temp);
          chrome.storage.sync.set({'avg': temp }, function(){});
        });
      });
      console.log("session ended");
      session = false;
    }
    else {
      chrome.storage.sync.set({'live': 0}, function(){});
    }
    words = [];
    samples = [];
    chrome.browserAction.setBadgeText({ text: "0"});
  }
  wordslast = 0;
}, period);
