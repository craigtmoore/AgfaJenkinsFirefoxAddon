function copyToClipboard(text) {
  var ta = document.getElementById('ta');
  ta.style.display = 'block';
  ta.value = text;
  ta.select();
  document.execCommand('copy');
  ta.style.display = 'none';
}

function copyHtmlToClipboard(text) {
  var htmlDiv = document.getElementById('htmlDiv');
  htmlDiv.innerHTML = text
  htmlDiv.style.display = 'block';
  
  var range = document.createRange();
  range.selectNodeContents(htmlDiv);

  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange( range );

  document.execCommand('copy');
  htmlDiv.style.display = 'none';
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function getText(url, format) {

  var addressArray = url.split("/")

  var htmlFormat = ""

  var runningUrl = ""

  var foundJob = false

  var textFormat = ""

  addressArray.forEach(it => {
    
    if (runningUrl) {
        runningUrl += `/${it}`
    } else {
        runningUrl = it
    }

    if (foundJob && "job" != it && "junit" != it) {

      var displayText = it.replaceAll("%20", " ")

      if (isNumeric(displayText)) {
          displayText = "#" + displayText
      }

      if (displayText) {
        
        var link
        if (format === "MARKDOWN") {
            link = `[${displayText}](${runningUrl})`
        } else if (format === "JIRA") {
            link = `[${displayText}|${runningUrl}]`
        } else {
            link = `<a href=\"${runningUrl}\">${displayText}</a>`
        }

        if (htmlFormat) {
            link = ` > ${link}`
        }

        if (textFormat) {
            displayText = ` > ${displayText}`
        }

        textFormat += displayText

        htmlFormat += link
    
      }

    } else if ("job" === it) {
        foundJob = true
    }
  });

  return htmlFormat;
}

function snagJiraFormat(url) {
  var text = getText(url, "JIRA")
  copyToClipboard(text);
}

function snagMarkdownFormat(url) {
  var text = getText(url, "MARKDOWN")
  copyToClipboard(text);
}

function snagHtmlFormat(url) {
  copyHtmlToClipboard(getText(url));
}

chrome.commands.onCommand.addListener(function (command) {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    var tabId = tabs[0].id;
    var url = tabs[0].url
    chrome.tabs.sendMessage(tabId, { action: 'get page details' }, function (response) {
      if (command === "copy-jira") {
        snagJiraFormat(url, response);
      } else if (command === "copy-markdown") {
        snagMarkdownFormat(url, response);
      } else if( command === "copy-html" ) {
        snagHtmlFormat(url, response);
      }
    });
  });
});
