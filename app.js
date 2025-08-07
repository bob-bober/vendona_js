"use strict";

window.Webflow = window.Webflow || [];
window.Webflow.push(() => {
 
alert("klappt es?")


/* main-feature-section */
//scroll-animation-txt
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

/* feature section */
// scroll-animation-imgs
gsap.utils.toArray(".feature-img").forEach((el) => {

  const wrapper = el.closest(".feature-wrapper");

  gsap.from(el, {
    scrollTrigger: {
      trigger: wrapper,
      start: "top 65%",
      markers: true,
      toggleActions: "play none none reverse"
    },

    opacity: 0.3,
    y: 50,
    duration: 1,
    ease: "power1.out"
    
  })
});

/* faq-section */
// scroll-animation-borderlines
gsap.from(".questions-wrapper .border-line", {
  scrollTrigger: {
    trigger: ".questions-wrapper",
    start: "top 95%",
    markers: true,
    toggleActions: "play none none reset",
  },

  width: "0%",
  stagger: 0.1,
  duration: 2,
  ease: "power1.out",

})

// hover-animation-bg


/* scrollTrigger-refresh */
window.addEventListener("load", () => {
    scrollTrigger.refresh();
});



});



console.log("klappt das jetzt oder wie? ")

console.log("test")