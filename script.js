//your code here

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const bandNames = [
    "The Rolling Stones",
    "Led Zeppelin",
    "The Beatles",
    "Queen",
    "Metallica",
    "Pink Floyd",
    "The Who",
  ];

  function stripArticle(name) {
    return name.replace(/^(a|an|the) /i, "").trim();
  }

  const sortedBandNames = bandNames.slice().sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

  const ulElement = document.querySelector("ul");

  for (let i = 0; i < sortedBandNames.length; i++) {
    const liElement = document.createElement("li");
    liElement.textContent = sortedBandNames[i];
    ulElement.appendChild(liElement);
  }
});
