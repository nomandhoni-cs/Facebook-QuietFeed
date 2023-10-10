function hideSuggestedPosts() {
  var allElements = document.querySelectorAll(
    'span.x193iq5w.xeuugli.x13faqbe.x1vvkbs.x1xmvt09.x1lliihq.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.xudqn12.x3x7a5m.x6prxxf.xvq8zen.xo1l8bm.xi81zsa[dir="auto"]'
  );
  var suggestedElements = [];

  for (var i = 0; i < allElements.length; i++) {
    var element = allElements[i];
    if (element.textContent === "Suggested for you") {
      suggestedElements.push(element);
    }
  }

  suggestedElements.forEach(function (spanElement) {
    var parentElement = spanElement.parentElement;
    while (parentElement) {
      if (parentElement.classList.contains("x1lliihq")) {
        parentElement.remove();

        // Update the extension icon
        chrome.action.setIcon({
          path: {
            16: "images/icon16_updated.png",
            48: "images/icon48_updated.png",
            128: "images/icon128_updated.png",
          },
        });

        break;
      }
      parentElement = parentElement.parentElement;
    }
  });
}
