document.onkeypress = function (e) {
    e = e || window.event;
    console.log(e.keycode);
    chrome.extension.sendMessage({key: e.keycode});
};


console.log('Test Pennapps push');
