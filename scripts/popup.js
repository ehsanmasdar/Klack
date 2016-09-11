updatewindow();

setInterval(updatewindow(),4000);

function updatewindow() {
  // chrome.storage.sync.get('live', function(items){
  //   document.getElementById("current-cpm").innerHTML = items.live.cpm;
  // });
  chrome.storage.sync.get('charstore', function(items){
    document.getElementById("total-text").innerHTML = items.charstore[' '];
  });
  chrome.storage.sync.get('avg', function(items){
    console.log(items);
    if (items.avg && items.avg.length > 0){
      var avg = 0;
      for (var i = 0; i< items.avg.length; i++){

        avg += items.avg[i].val.wpm;

      }
      avg /= items.avg.length;
      // computePerc(avg);
      document.getElementById("average-speed").innerHTML =  avg;
    }
    else {
      document.getElementById("average-speed").innerHTML = 0;
    }
  });
      
  }
document.addEventListener('DOMContentLoaded', function() {
    var reset = document.getElementById('reset');
    // onClick's logic below:
    reset.addEventListener('click', function() {
      chrome.storage.sync.set({'avg':[]}, function(){})
      document.getElementById("average-speed").innerHTML = 0;
    });
    var drop = document.getElementById('drop');
    drop.addEventListener('click', function() {
      var newURL = "chrome-extension://mkgbiggmccflndfmlofhjfgedkidkhii/index.html";
      chrome.tabs.create({ url: newURL });
    });
});

function setPerc(value){
	document.getElementById("perc").innerHTML = value;
}

function computePerc(avg){
  console.log(avg);

  if (6 < avg && avg <=10){
    setPerc("0");
  }else if (8 < avg && avg <=12){
    setPerc("0");
  }else if (10 < avg && avg <=14){
    setPerc("1");
  }else if (12 < avg && avg <=16){
    setPerc("2");
  }else if (14 < avg && avg <=18){
    setPerc("3");
  }else if (16 < avg && avg <=20){
    setPerc("5");
  }else if (18 < avg && avg <=22){
    setPerc("8");
  }else if (20 < avg && avg <=24){
    setPerc("11");
  }else if (22 < avg && avg <=26){
    setPerc("14");
  }else if (24 < avg && avg <=28){
    setPerc("18");
  }else if (26 < avg && avg <=30){
    setPerc("23");
  }else if (28 < avg && avg <=32){
    setPerc("27");
  }else if (30 < avg && avg <=34){
    setPerc("32");
  }else if (32 < avg && avg <=36){
    setPerc("37");
  }else if (34 < avg && avg <=38){
    setPerc("41");
  }else if (36 < avg && avg <=40){
    setPerc("45");
  }else if (38 < avg && avg <=42){
    setPerc("50");
  }else if (40 < avg && avg <=44){
    setPerc("53");
  }else if (42 < avg && avg <=46){
    setPerc("57");
  }else if (44 < avg && avg <=48){
    setPerc("61");
  }else if (46 < avg && avg <=50){
    setPerc("64");
  }else if (48 < avg && avg <=52){
    setPerc("67");
  }else if (50 < avg && avg <=54){
    setPerc("70");
  }else if (52 < avg && avg <=56){
    setPerc("72");
  }else if (54 < avg && avg <=58){
    setPerc("75");
  }else if (56 < avg && avg <=60){
    setPerc("77");
  }else if (58 < avg && avg <=62){
    setPerc("79");
  }else if (60 < avg && avg <=64){
    setPerc("81");
  }else if (62 < avg && avg <=66){
    setPerc("83");
  }else if (64 < avg && avg <=68){
    setPerc("84");
  }else if (66 < avg && avg <=70){
    setPerc("86");
  }else if (68 < avg && avg <=72){
    setPerc("87");
  }else if (70 < avg && avg <=74){
    setPerc("89");
  }else if (72 < avg && avg <=76){
    setPerc("90");
  }else if (74 < avg && avg <=78){
    setPerc("91");
  }else if (76 < avg && avg <=80){
    setPerc("92");
  }else if (78 < avg && avg <=82){
    setPerc("93");
  }else if (80 < avg && avg <=84){
    setPerc("94");
  }else if (82 < avg && avg <=86){
    setPerc("95");
  }else if (84 < avg && avg <=88){
    setPerc("96");
  }else if (86 < avg && avg <=90){
    setPerc("96");
  }else if (88 < avg && avg <=92){
    setPerc("97");
  }else if (90 < avg && avg <=94){
    setPerc("97");
  }else if (92 < avg && avg <=96){
    setPerc("98");
  }else if (94 < avg && avg <=98){
    setPerc("98");
  }else if (96 < avg && avg <=100){
    setPerc("98");
  }else if (98 < avg && avg <=102){
    setPerc("99");
  }else if (100 < avg && avg <=104){
    setPerc("99");
  }else if (102 < avg && avg <=106){
    setPerc("99");
  }else if (104 < avg && avg <=108){
    setPerc("99");
  }else if (106 < avg && avg <=110){
    setPerc("99");
  }else if (108 < avg && avg <=112){
    setPerc("99");
  }else if (110 < avg){
    setPerc("99");
  }
}
