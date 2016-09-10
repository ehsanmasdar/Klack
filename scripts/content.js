document.onkeypress = function (e) {
    e = e || window.event;
    chrome.extension.sendMessage({key: e.key});
};
