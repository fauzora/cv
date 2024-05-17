function animateTyped(documentId, listAnimateString) {
  window.ityped.init(document.getElementById(documentId), {
    strings: listAnimateString,
    loop: true,
    typeSpeed: 45,
    backSpeed: 22.5,
    showCursor: false,
  });
}

animateTyped("animate-profile-name", [
  "Frontend Developer",
  "Backend Developer",
]);
