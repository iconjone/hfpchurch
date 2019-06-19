function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (true)
  }
  newsFormElement = document.getElementById('pNews')
  newsFormElement.innerHTML = "Make sure it's a valid email!"
  return (false)
}

function submitNews() {
  if (ValidateEmail(document.getElementById('nEmailAddress').value)) {
    url = "https://docs.google.com/forms/d/e/1FAIpQLSel6B0itDCeRFfWV6llX1Wdv9bpbRzZj_sOmTt_7kk-ORESbw/formResponse?&entry.2055715363="
    text = document.getElementById('nEmailAddress').value
    submit = '&submit=Submit'
    //file_get_contents(url+text+submit);
    fetch(url + text + submit, {
      'mode': 'no-cors'
    }).then(data => {
      console.log(data)
    })
    newsFormElement = document.getElementById('newsForm')
    newsFormElement.innerHTML = " "
    newsFormElement = document.getElementById('pNews')
    newsFormElement.innerHTML = " "
    newsTextElement = document.getElementById('newsText')
    newsTextElement.innerHTML = "Congrats! You've registered!"
  }
}
