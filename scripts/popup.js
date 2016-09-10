console.log('\'Allo \'Allo! Popup');


chrome.storage.sync.get('avg', function(items){
    console.log(items);
 });