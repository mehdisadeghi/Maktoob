(function(params) {
  var loc = document.location;
  var uri = {
    spec: loc.href,
    host: loc.host,
    prePath: loc.protocol + "//" + loc.host,
    scheme: loc.protocol.substr(0, loc.protocol.indexOf(":")),
    pathBase: loc.protocol + "//" + loc.host + loc.pathname.substr(0, loc.pathname.lastIndexOf("/") + 1)
  };
  var article = new Readability(uri, document).parse();
  if (article) {
    document.body.innerHTML = article.content;

    document.body.style.marginTop = "2em";
    document.body.style.marginBottom = "2em";
    document.body.style.marginLeft = "20%";
    document.body.style.marginRight = "20%";
    document.body.style.lineHeight = "1.4em";

    document.body.style.fontSize = "1.3em";
    document.body.style.fontFamily = '"Helvetica Neue",Helvetica,Arial,sans-serif';

    var ss = document.styleSheets[0];
    ss.insertRule("p {margin-top: '5em'; margin-bottom: '5em'; }", 0);

  }
  return {success: true, html: document.body.innerHTML};
})('');