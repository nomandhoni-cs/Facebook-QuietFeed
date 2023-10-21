if (window.location.href === "https://www.facebook.com/") {
  let lastScrollPosition = 0;

  window.addEventListener("scroll", function () {
    let currentScrollPosition = window.scrollY;

    // Check if the user is scrolling down (scrolling away from the top)
    if (currentScrollPosition > lastScrollPosition) {
      // Check if the user scrolled at least 100px and is scrolling down
      if (Math.abs(currentScrollPosition - lastScrollPosition) >= 150) {
        hideSuggestedPosts();
      }
    }
    lastScrollPosition = currentScrollPosition;
  });

  function hideSuggestedPosts() {
    console.log("Runed");
    let allElements = document.querySelectorAll(
      'span.x193iq5w.xeuugli.x13faqbe.x1vvkbs.x1xmvt09.x1lliihq.x1s928wv.xhkezso.x1gmr53x.x1cpjm7i.x1fgarty.x1943h6x.xudqn12.x3x7a5m.x6prxxf.xvq8zen.xo1l8bm.xi81zsa[dir="auto"]'
    );
    let suggestedElements = [];

    for (let i = 0; i < allElements.length; i++) {
      let element = allElements[i];
      if (element.textContent === "Suggested for you") {
        suggestedElements.push(element);
      }
    }

    suggestedElements.forEach(function (spanElement) {
      let parentElement = spanElement.parentElement;
      while (parentElement) {
        if (parentElement.classList.contains("x1lliihq")) {
          parentElement.remove();
          break;
        }
        parentElement = parentElement.parentElement;
      }
    });
  }
}
