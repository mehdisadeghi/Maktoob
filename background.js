// Copyright (c) 2016 Mehdi Sadeghi.
// Use of this source code is governed by MIT license.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.executeScript(
    {
      file: 'custom.js'
    },
    function (results) {
    }
  );
});

function makeDocumentReadable(document) {
  var loc = document.location;
  var uri = {
    spec: loc.href,
    host: loc.host,
    prePath: loc.protocol + "//" + loc.host,
    scheme: loc.protocol.substr(0, loc.protocol.indexOf(":")),
    pathBase: loc.protocol + "//" + loc.host + loc.pathname.substr(0, loc.pathname.lastIndexOf("/") + 1)
  };
  //var documentClone = document.cloneNode(true);
  var article = new Readability(uri, document).parse();

}