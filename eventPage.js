chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(tab.tabId, { code: 'MoonR.switcher();' });
});
