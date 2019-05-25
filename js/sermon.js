var id = '1s45Zu2P3nHU3FJggO_Tq0pSLdDQGiDmAkbb9XsPyRTw'
var url = "https://spreadsheets.google.com/feeds/cells/" + id + "/default/public/basic?alt=json&min-row=1&min-col=1&max-col=3";
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    entryArrays = myJson.feed.entry;
    sermonsArr = Object.entries(document.getElementsByClassName('sermons'))
    console.log(sermonsArr)
    ite = 3;
    sermonsArr.forEach(function(serEle) {
      console.log(serEle)
      if (serEle[1].children[2] == undefined) {
        serEle[1].children[0].href = entryArrays[ite].content['$t'];
        serEle[1].children[0].style['background-image'] = 'url(https://img.youtube.com/vi/' + entryArrays[ite].content['$t'].substring(32, entryArrays[ite].content['$t'].length) + '/maxresdefault.jpg)'
        ite++;
        console.log(serEle[1].children[2])
        serEle[1].children[1].children[0].innerText = entryArrays[ite].content['$t']
        ite++;
        serEle[1].children[1].children[1].innerText = entryArrays[ite].content['$t']
        ite++

      } else {
        serEle[1].children[1].href = entryArrays[ite].content['$t'];
        serEle[1].children[1].style['background-image'] = 'url(https://img.youtube.com/vi/' + entryArrays[ite].content['$t'].substring(32, entryArrays[ite].content['$t'].length) + '/maxresdefault.jpg)'
        ite++;
        console.log(serEle[1].children[2])
        serEle[1].children[2].children[0].innerText = entryArrays[ite].content['$t']
        ite++;
        serEle[1].children[2].children[1].innerText = entryArrays[ite].content['$t']
        ite++

      }


    })

  });
