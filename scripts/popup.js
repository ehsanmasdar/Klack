setInterval(function () {
  chrome.storage.sync.get('live', function(items){
    document.getElementById("current-speed").innerHTML =  items.live.wpm;
  });
  chrome.storage.sync.get('avg', function(items){
    if (items.avg && items.avg.length > 0){
      var avg = 0;
      for (var i = 0; i< items.avg.length; i++){
<<<<<<< HEAD
        avg += items.avg[i]	;
=======
        avg += items.avg[i].val.wpm;
>>>>>>> 0e89eab438b5309a7d6dbfa11f3b8a521662f640
      }
      avg /= items.avg.length;
      document.getElementById("average-speed").innerHTML =  avg;
      document.getElementById("dropdown-avg-speed").innerHTML = avg;
    }
    else {
      document.getElementById("average-speed").innerHTML = 0;
      document.getElementById("dropdown-avg-speed").innerHTML = 0;
    }
  });

  if (avg <= 8){
  	setPerc("<1");
  }
  else if (8 < avg <= 12){
  	setPerc("1");
  }
  else if (10 < avg <= 14){
  	setPerc("2");
  }
  else if (12 < avg <= 16){
  	setPerc("3");
  }
  else if (14 < avg <= 18){
  	setPerc("5");
  }
  else if (16 < avg <= 20){
  	setPerc("8");
  }
  else if (18 < avg <= )

  }

    
},500);


document.addEventListener('DOMContentLoaded', function() {
    var reset = document.getElementById('reset');
    // onClick's logic below:
    reset.addEventListener('click', function() {
      chrome.storage.sync.set({'avg':[]}, function(){})
      document.getElementById("average-speed").innerHTML = 0;
    });
});
<<<<<<< HEAD

function setPerc(value){
	document.getElementById("dropdown-avg-speed").innerHTML = value;
}
=======
>>>>>>> 0e89eab438b5309a7d6dbfa11f3b8a521662f640
