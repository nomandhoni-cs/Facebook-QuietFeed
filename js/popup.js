document.addEventListener("DOMContentLoaded", function () {
  chrome.runtime.getManifest().version;
  const versionElement = document.getElementById("version");
  versionElement.textContent = `Version: ${
    chrome.runtime.getManifest().version
  }`;
});
