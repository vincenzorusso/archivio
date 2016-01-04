/*SearchSource.defineSource('archivi', function(searchText, options) {
  var options = {sort: {isoScore: -1}, limit: 20};
  
  if(searchText) {
    var regExp = buildRegExp(searchText);
    var selector = {$or: [
      {titolo: regExp},
      {segnatura: regExp}
    ]};
    
    return Archivi.find(selector, options).fetch();
  } else {
    return Archivi.find({}, options).fetch();
  }
});

function buildRegExp(searchText) {
  // this is a dumb implementation
  var parts = searchText.trim().split(/[ \-\:]+/);
  return new RegExp("(" + parts.join('|') + ")", "ig");
}
*/