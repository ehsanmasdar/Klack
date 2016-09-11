function heatMapColorforValue(value){
  var h = parseInt(255 - (value * 255),10);
  return "rgb( 255," + h + ", " + h + ")";
}
setInterval(function () {
  updatewindow();
  chrome.storage.sync.get('charstore', function(items){
    var local = items.charstore;
    console.log(local);
    var total = 0;
    for (var key in local) {
      if (local.hasOwnProperty(key)) {
        total += local[key];
      }
    }
    console.log(total);
    for (var key in local) {
      if (local.hasOwnProperty(key)) {
        local[key] = local[key]/total;
      }
    }
    var max = 0.0;
    for (var key in local) {
      if (local.hasOwnProperty(key)) {
        if (local[key] > max){
          max = local[key];
        }
      }
    }
    for (var key in local) {
      if (local.hasOwnProperty(key) && key != ' ') {
        local[key] = local[key]/max;
        document.getElementById(key.toUpperCase().charCodeAt(0)).style.backgroundColor = heatMapColorforValue(local[key]);
      }
    }

  });
},1000);
