var isON = false;
var H = {
    log:function(t){
        console.log(t);
    }
};

chrome.storage.sync.get('isON', function(result) {
    H.log(result);
    if (typeof result.isON != "undefined") {
        isON = result.isON;
        if (isON) {
            injectToAll();
        }
    }
});

chrome.browserAction.onClicked.addListener(function(tab) {
    isON = !isON;
    chrome.storage.sync.set({'isON': isON}, function() {
        H.log("isON was set");
    });
    injectToAll();
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == "loading" && isValidUrl(tab.url) && isON) {
        executeScript(tab);
    }
});

function injectToAll () {
    H.log("injectToAll");
    chrome.tabs.query({url:"http://*/*"}, function(tabs) {
        executeScript(tabs);
    });
    chrome.tabs.query({url:"https://*/*"}, function(tabs) {
        executeScript(tabs);
    });

}

function executeScript (tabs) {
    H.log("executeScript");
    var method = (isON)? "on":"off";
    var code = "MoonR." + method + "();";
    H.log(code);
    tabs = ( Array.isArray(tabs) )? tabs : [tabs];
    for (var i = 0; i < tabs.length; i++) {
        var id = tabs[i].id;
        H.log(tabs[i]);
        H.log(id);
        chrome.tabs.executeScript(id, { 'code': code });
    }
}

function isValidUrl (url) {
    return url.indexOf("http://") === 0 || url.indexOf("https://") === 0;
}
