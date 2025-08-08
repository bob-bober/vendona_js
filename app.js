"use strict";





window.Webflow = window.Webflow || [];
window.Webflow.push(() => {

/* navbar */
function initNavbar() {

  //navbar-show-hide-animation 
  const navbar = document.getElementById("navbar");
  let lastScrollY = window.scrollY;
  const scrollThreshold = 10;

  window.addEventListener("scroll", function() {
    const currentScrollY = window.scrollY;
    let scrollDif = Math.abs(currentScrollY - lastScrollY);

    if(scrollDif < scrollThreshold) {
      return
    };

    if(currentScrollY > lastScrollY) {
      gsap.to(navbar, {y: -200, opacity: 0, duration: 0.5});
    } else {
      gsap.to(navbar, {y: 0, opacity: 1, duration: 0.2});
    };

    lastScrollY = currentScrollY; 
})

}

/* btns */
function initBtnHovers() {
  const btnMain = document.querySelectorAll(".btn")

  btnMain.forEach((el) => {

    let mouseHoverTl = gsap.timeline({defaults:{duration: 0.4, ease: "power1.out"}, paused: true});
  
    mouseHoverTl.fromTo(el.querySelector(".btn-txt"), {y: "0rem"}, {y: "-5rem"}, 0);
    mouseHoverTl.fromTo(el.querySelector(".btn-txt-abs"), {y: "5rem"}, {y: "0rem"}, 0);
    mouseHoverTl.fromTo(el.querySelector(".card-whipe"), {y: "5rem"}, {y: "0rem", ease: "power1.inOut"}, 0);

    el.addEventListener("mouseenter", function() {
      mouseHoverTl.play()
    })

    el.addEventListener("mouseleave", function() {
      mouseHoverTl.reverse()
    })
  })
}

/* main-feature-section */
function initMainFeatureSection() {
  //scroll-animation-txt
  gsap.from(document.querySelector(".main-feature-content-wrapper").children, {

    scrollTrigger: {
      trigger: ".main-feature-content-wrapper",
      start: "top 80%",
      markers: false,
      toggleActions: "play none none none",
    },

    opacity: 0,
    y: 50,
    stagger: 0.1,
    duration: 0.8,
    ease: "power1.out",

  });
}

/* feature-section */
function initFeatureSection() {
  // scroll-animation-imgs
  gsap.utils.toArray(".feature-img").forEach((el) => {

    const wrapper = el.closest(".feature-wrapper");

    gsap.from(el, {
      scrollTrigger: {
        trigger: wrapper,
        start: "top 75%",
        markers: false,
        toggleActions: "play none none reverse"
      },

      /* opacity: 0.3, */
      y: 50,
      duration: 1,
      ease: "power1.out"
      
    })
  });
}

/* faq-section */
function initFaqSection() {

  //scroll-animation-borderlines
  gsap.from(".questions-wrapper .border-line", {

    scrollTrigger: {
      trigger: ".questions-wrapper",
      start: "top 95%",
      markers: false,
      toggleActions: "play none none reset",
    },

    width: "0%",
    stagger: 0.1,
    duration: 2,
    ease: "power1.out",

  })

  //hover&click-animation
  const questionItemWrapper = document.querySelectorAll(".question-item-wrapper");
  questionItemWrapper.forEach((el) => {

    const faqHoverTl = gsap.timeline({defaults: {ease: "power1.out", duration: 0.25}, paused: true});
    faqHoverTl.fromTo(el, {backgroundColor: "#e4ddcb" }, {backgroundColor: "#c5b59e"}, 0);
    faqHoverTl.to(el.querySelector(".card-txt-wrapper"), {x: "0.5rem"}, 0);

    const faqClickTl = gsap.timeline({defaults: {duration: 0.5, ease: "power1.out"}, paused: true});
    faqClickTl.fromTo(el.querySelector(".card-answer-wrapper"), {height: 0, opacity: 0}, {height: "auto", opacity: 1, duration: 0.6}, 0);
    faqClickTl.to(el.querySelector(".card-txt-wrapper"), {x: "1rem"}, 0);
    faqClickTl.to(el.querySelector(".icon-plus"), {rotate: 45}, 0);

    el.addEventListener("mouseenter", function() {
      faqHoverTl.play()
    });
    el.addEventListener("mouseleave", function() {
      if(el.classList.contains("is-open")) {
        faqHoverTl.play()
      } else {
        faqHoverTl.reverse()
      } 
    });


    el.addEventListener("click", function() {
      el.classList.toggle("is-open"); 
        
      if(el.classList.contains("is-open")) {
        faqClickTl.play()
      } else{
        faqClickTl.reverse()
      }
    })

  })

}

/* final-cta */
function initFinalCta() {
  //scroll-animatioin-txt
  const finalCtaWrapper = document.querySelector(".final-cta-wrapper");
  const headlineFinalCta = finalCtaWrapper.querySelector(".h2-txt")

  gsap.from(finalCtaWrapper.children, {

    scrollTrigger: {
      trigger: finalCtaWrapper,
      markers: false,
      start: "top 75%",
      toggleActions: "play none none reset",},
      
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.1,
    ease: "power1.out",

  })

  //split-txt-animation
  let splitHeadline = SplitText.create(headlineFinalCta, {type: "words, chars", mask: "lines"});

  gsap.from(splitHeadline.words, {

    scrollTrigger: {
      trigger: finalCtaWrapper,
      markers: false,
      start: "top 65%",
      toggleActions: "play none none reset",},

    y:52,
    stagger: 0.05,
    duration: 1,
  })

  //hover-bg-change-animation
  const finalCtaBtn = document.querySelector(".btn.is-final-cta");
  const finalCtaSection = document.querySelector(".section.is-final-cta");
  const faqSection = document.querySelector(".section.is-faq-home");
  

  const finalCtaBGTl = gsap.timeline({defaults: {ease: "power1.in", duration: 0.25}, paused: true});

  finalCtaBGTl.to(finalCtaSection, {backgroundColor: "#c5b59e"}, 0);
  finalCtaBGTl.to(finalCtaWrapper, {backgroundColor: "#e4ddcb"}, 0);
  finalCtaBGTl.to(faqSection, {backgroundColor: "#c5b59e"}, 0);

  finalCtaBtn.addEventListener("mouseenter", function() {
    finalCtaBGTl.play()
  })

  finalCtaBtn.addEventListener("mouseleave", function() {
    finalCtaBGTl.reverse()
  })
}

/* init-function-call */
initNavbar()
initBtnHovers()
initMainFeatureSection()
initFeatureSection()
initFaqSection()
initFinalCta()


/* scrollTrigger-refresh */
window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});


});


