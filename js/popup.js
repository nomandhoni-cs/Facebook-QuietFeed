// Fetch the version number from the GitHub API
fetch("https://api.github.com/repos/nomandhoni-cs/Facebook-QuietFeed/tags")
  .then((response) => response.json())
  .then((tags) => {
    if (tags && tags.length > 0) {
      const versionNumber = tags[0].name;
      document.getElementById(
        "version"
      ).textContent = `Version: ${versionNumber}`;
    }
  })
  .catch((error) => {
    console.error("Error fetching version:", error);
  });
