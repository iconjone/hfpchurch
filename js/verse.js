var id = '1jwfYaQL_rKg301Ji7qJOPkRjGL-NhPaIrvsXZ4WXZzI'
var url = "https://spreadsheets.google.com/feeds/cells/" + id + "/default/public/basic?alt=json&min-row=1&max-row=1&min-col=1&max-col=1";
verseAppend = document.getElementById('verseAppend')
console.log('ran')
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    entryArrays = myJson.feed.entry;
    var verse = entryArrays[0].content.$t
    verseAppend.innerHTML = verse;

  })
