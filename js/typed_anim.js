function animateTyped(documentId, listAnimateString) {
  window.ityped.init(document.getElementById(documentId), {
    strings: listAnimateString,
    loop: true,
    typeSpeed: 45,
    backSpeed: 35,
    showCursor: false,
  });
}

animateTyped("animate-profile-name", [
  "Chairil Fauzi F.",
  "Frontend Developer",
  "Backend Developer",
]);
