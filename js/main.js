const aboutButton = document.getElementById("about");
const skillsButton = document.getElementById("skills");
const workButton = document.getElementById("work");
const contactButton = document.getElementById("contact");
const aboutSection = document.querySelector(".about");
const skillsSection = document.querySelector(".skills");
const workSection = document.querySelector(".work");
const contactSection = document.querySelector(".contact");

aboutButton.addEventListener("click", () => {
  appear(aboutSection);
  disapper(skillsSection);
  disapper(workSection);
  disapper(contactSection);
});

skillsButton.addEventListener("click", () => {
  appear(skillsSection);
  disapper(aboutSection);
  disapper(workSection);
  disapper(contactSection);
});
workButton.addEventListener("click", () => {
  appear(workSection);
  disapper(aboutSection);
  disapper(skillsSection);
  disapper(contactSection);
});
contactButton.addEventListener("click", () => {
  appear(contactSection);
  disapper(aboutSection);
  disapper(workSection);
  disapper(skillsSection);
});

function appear(section) {
  section.classList.add("slidein");
  section.classList.remove("slideout");
}

function disapper(section) {
  section.classList.add("slideout");
  section.classList.remove("slidein");
}
