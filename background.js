chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'scratch.mit.edu'},
      })
      ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.pageAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(
    tab.id,
    {file: 'jquery-3.3.1.min.js'}
  );
  chrome.tabs.executeScript(
    tab.id,
    {file: 'rgbcolor.min.js'}
  );
  chrome.tabs.executeScript(
    tab.id,
    {file: 'stackblur.min.js'}
  );
  chrome.tabs.executeScript(
    tab.id,
    {file: 'canvg.min.js'}
  );
  chrome.tabs.executeScript(
    tab.id,
    {file: 'content.js'}
  );
});
