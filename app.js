/* "use strict";

window.Webflow = window.Webflow || [];
window.Webflow.push(() => {
  

// scroll-animation feature-section
gsap.utils.toArray(".feature-txt-wrapper").forEach((el) => {

  gsap.from(el.children, {

    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      markers: true,
      toggleActions: "play none none none",
    },

    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.1,
    ease: "power1.out",

  });

});

// main-feature-scroll-animation

gsap.from(document.querySelector(".main-feature-content-wrapper").children, {

  scrollTrigger: {
    trigger: ".main-feature-content-wrapper",
    start: "top 85%",
    markers: true,
    toggleActions: "play none none none",
  },

  opacity: 0,
  y: 50,
  stagger: 0.1,
  duration: 0.8,
  ease: "power1.out",

});

imagesLoaded(document.querySelector("body"), () => {
  ScrollTrigger.refresh();
});



});

 */

console.log("klappt das jetzt oder wie? ")