document.onkeypress = function (e) {
    e = e || window.event;
    console.log(e.keyCode);
    chrome.extension.sendMessage({key: e.keyCode});
};


console.log('Test Pennapps push');
