setInterval(function () {
  chrome.storage.sync.get('live', function(items){
    document.getElementById("current-speed").innerHTML =  items.live.wpm;
  });
  chrome.storage.sync.get('avg', function(items){
    if (items.avg && items.avg.length > 0){
      var avg = 0;
      for (var i = 0; i< items.avg.length; i++){
        avg += items.avg[i].val.wpm;
      }
      avg /= items.avg.length;
      document.getElementById("average-speed").innerHTML =  avg;
    }
    else {
      document.getElementById("average-speed").innerHTML = 0;
    }
  });
    
},500);


document.addEventListener('DOMContentLoaded', function() {
    var reset = document.getElementById('reset');
    // onClick's logic below:
    reset.addEventListener('click', function() {
      chrome.storage.sync.set({'avg':[]}, function(){})
      document.getElementById("average-speed").innerHTML = 0;
    });
});
