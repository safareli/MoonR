chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.tabId, { file: 'jquery.min.js' }, function() {
    chrome.tabs.executeScript(tab.tabId, { file: 'contentscript.js' }, function() {
      chrome.tabs.insertCSS(tab.tabId, { file: 'contentstyle.css' }, function() {
        console.log('injected');
      });
    });
  });
});
