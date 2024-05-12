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

const wrapper = document.querySelectorAll(".cardWrap");

wrapper.forEach((element) => {
  let state = {
    mouseX: 0,
    mouseY: 0,
    height: element.clientHeight,
    width: element.clientWidth,
  };

  element.addEventListener("mousemove", (ele) => {
    const card = element.querySelector(".card");
    const cardBg = card.querySelector(".cardBg");
    state.mouseX = ele.pageX - element.offsetLeft - state.width / 2;
    state.mouseY = ele.pageY - element.offsetTop - state.height / 2;

    // parallax angle in card
    const angleX = (state.mouseX / state.width) * 30;
    const angleY = (state.mouseY / state.height) * -30;
    card.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg) `;

    // parallax position of background in card
    const posX = (state.mouseX / state.width) * -40;
    const posY = (state.mouseY / state.height) * -40;
    cardBg.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
  });

  element.addEventListener("mouseout", () => {
    const card = element.querySelector(".card");
    const cardBg = card.querySelector(".cardBg");
    card.style.transform = `rotateY(0deg) rotateX(0deg) `;
    cardBg.style.transform = `translateX(0px) translateY(0px)`;
  });
});

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY || window.pageYOffset;
  var cvTopIcon = document.querySelector(".cv_top_icon a");

  if (scrollPosition > 100) {
    cvTopIcon.classList.add("show");
    cvTopIcon.addEventListener("click", scrollToTop);
  } else {
    cvTopIcon.classList.remove("show");
    cvTopIcon.removeEventListener("click", scrollToTop);
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
