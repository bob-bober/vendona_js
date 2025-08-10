"use strict";

window.Webflow = window.Webflow || [];
window.Webflow.push(() => {


 const collectionSwiperMobile = new Swiper('.swiper.is-collection', {
    loop: true,
    slidesPerView: 1.15,
    spaceBetween: 16,
    grabCursor: true,

    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev'
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.15,
        spaceBetween: 16,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2.5,
        spaceBetween: 40
      },
      // when window width is >= 640px
      950: {
        slidesPerView: 3.5,
        spaceBetween: 56,
      }
    }

  })

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

  /* swiper-mobile */
  
   




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
  initFinalCta()


  /* scrollTrigger-refresh */
  window.addEventListener("load", () => {
      ScrollTrigger.refresh();
  });


});


