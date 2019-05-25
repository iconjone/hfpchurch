url = "https://spreadsheets.google.com/feeds/cells/1HCHkSZ3wquAG5joULORvHRLPmauRiMogqycWYnFiVls/default/public/basic?alt=json&min-row=1&min-col=1&max-col=4";
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    entryArrays = myJson.feed.entry;
    ite = 0;
    timeline = document.getElementById('timelineAppend')
    entryArrays.forEach(function(entry) {
      if (ite % 4 == 0 && ite >= 4) {
        li = document.createElement("li")
        li.className = 'timeline-item'
        divInfo = document.createElement('div')
        divInfo.className = 'timeline-info'
        spanDate = document.createElement("span")
        spanDate.innerHTML = entry.content['$t'];
        pTime = document.createElement('p')
        pTime.innerHTML = entryArrays[ite + 1].content['$t'];
        divInfo.appendChild(spanDate)
        divInfo.appendChild(pTime)
        li.appendChild(divInfo)
        divTimeMarker = document.createElement('div')
        divTimeMarker.className = 'timeline-marker'
        li.appendChild(divTimeMarker)
        divTimeContent = document.createElement('div')
        divTimeContent.className = 'timeline-content'
        h3Title = document.createElement('h3')
        h3Title.className = 'timeline-title'
        h3Title.innerHTML = entryArrays[ite + 2].content['$t'];
        pTimeDes = document.createElement('p')
        pTimeDes.innerHTML = entryArrays[ite + 3].content['$t'];
        divTimeContent.appendChild(h3Title)
        divTimeContent.appendChild(pTimeDes)
        li.appendChild(divTimeContent)
        timeline.appendChild(li)

      }
      ite++

    })

  })
