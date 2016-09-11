var keystrokes = [];
var words = [];
var wordslast = 0;
var maxLength = 7;
var period = 4000;
var session = false;

var chars = {'a':0,'b':0,'c':0,'d':0,'e':0,'f':0,'g':0,'h':0,'i':0,'j':0,'k':0,'l':0,'m':0,'n':0,'o':0,'p':0,'q':0,'r':0,'s':0,'t':0,'u':0,'v':0,'w':0,'x':0,'y':0,'z':0, ' ':0};
chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var d = new Date();
  keystrokes.push(d.getTime())
  chars[request.key.toLowerCase()] += 1;
  if (request.key == ' '){
  	words.push(d.getTime());

    wordslast++;
  }
});

chrome.browserAction.setBadgeText({ text: '0' });

setInterval(function() {
  if (wordslast > 1){
    session = true;
    var num = parseInt((words.length*60)/((words[words.length-1]-words[0])/1000), 10);
    var keys = parseInt((keystrokes.length*60)/((keystrokes[keystrokes.length-1]-keystrokes[0])/1000), 10);
    chrome.browserAction.setBadgeText({ text: num + ""});
    chrome.storage.sync.set({'live': {'wpm':num,'cpm':keys}}, function(){
    	 console.log("saved value of " + num);
    	}
    );
  }
  else{
    if (session == true){
      chrome.storage.sync.get('avg', function(items){
        chrome.storage.sync.get('live', function(liveitem){
          if (!items.avg)
            items.avg = []
          var temp = items.avg;
          var d = new Date();
          temp.push({val:liveitem.live, date:d.getTime()});
          chrome.storage.sync.set({'avg': temp }, function(){});
        });
      });
      console.log("session ended");
      session = false;
    }
    else {
      chrome.storage.sync.set({'live': {'wpm':0,'cpm':0}}, function(){});
    }
    words = [];
    keystrokes = [];
    chrome.browserAction.setBadgeText({ text: "0"});
  }
  chrome.storage.sync.get('charstore', function(items){
    if(items.charstore){
      var local = items.charstore;
      for (var key in local) {
        if (local.hasOwnProperty(key)) {
          if (chars[key]){
            local[key] += chars[key];
          }
        }
      }
      chrome.storage.sync.set({'charstore': local}, function(){});
      chars = {'a':0,'b':0,'c':0,'d':0,'e':0,'f':0,'g':0,'h':0,'i':0,'j':0,'k':0,'l':0,'m':0,'n':0,'o':0,'p':0,'q':0,'r':0,'s':0,'t':0,'u':0,'v':0,'w':0,'x':0,'y':0,'z':0,' ':0};
    } 
    else{
      var local = {'a':0,'b':0,'c':0,'d':0,'e':0,'f':0,'g':0,'h':0,'i':0,'j':0,'k':0,'l':0,'m':0,'n':0,'o':0,'p':0,'q':0,'r':0,'s':0,'t':0,'u':0,'v':0,'w':0,'x':0,'y':0,'z':0,' ':0};
      for (var key in local) {
        if (local.hasOwnProperty(key)) {
          if (chars[key]){
            local[key] += chars[key];
          }
        }
      }
      chrome.storage.sync.set({'charstore': local}, function(){});
      chars = {'a':0,'b':0,'c':0,'d':0,'e':0,'f':0,'g':0,'h':0,'i':0,'j':0, 'k':0, 'l':0,'m':0,'n':0,'o':0,'p':0,'q':0,'r':0,'s':0,'t':0,'u':0,'v':0,'w':0,'x':0,'y':0,'z':0,' ':0};
    }
  });
  wordslast = 0;
}, period);
