(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header');
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header');
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  document.addEventListener("DOMContentLoaded", function(){
    var myCarousel = document.getElementById("heroCarousel");
    myCarousel.addEventListener("slid.bs.carousel", function(){
      if (document.getElementById("hcc-1").classList.contains('active')){
        document.getElementById("hero").style.background = `linear-gradient(0deg, rgba(156, 115, 82, 0.95), rgba(142, 113, 82, 0.95)), url(assets/img/concepts-1.jpg)`;
      }
      else if (document.getElementById("hcc-2").classList.contains('active')){
        document.getElementById("hero").style.background = `linear-gradient(0deg, rgba(156, 115, 82, 0.95), rgba(142, 113, 82, 0.95)), url(assets/img/concepts-2.jpg)`;
      }
      else if (document.getElementById("hcc-3").classList.contains('active')){
        document.getElementById("hero").style.background = `linear-gradient(0deg, rgba(156, 115, 82, 0.95), rgba(142, 113, 82, 0.95)), url(assets/img/concepts-1.jpg)`;
      }
      else if (document.getElementById("hcc-4").classList.contains('active')){
        document.getElementById("hero").style.background = `linear-gradient(0deg, rgba(156, 115, 82, 0.95), rgba(142, 113, 82, 0.95)), url(assets/img/concepts-1.jpg)`;
      }
      else if (document.getElementById("hcc-5").classList.contains('active')){
        document.getElementById("hero").style.background = `linear-gradient(0deg, rgba(156, 115, 82, 0.95), rgba(142, 113, 82, 0.95)), url(assets/img/concepts-5.jpg)`;
      }
    });
  });

})()