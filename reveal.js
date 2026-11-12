/* ScrollReveal settings: sections fade and slide in as you scroll down the page.
   Library: https://scrollrevealjs.org (loaded from the unpkg CDN in index.html) */
(function () {
  // If the CDN didn't load, do nothing: everything simply stays visible
  if (typeof window.ScrollReveal === "undefined") {
    return;
  }

  // Respect visitors who ask their device for less motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  var sr = ScrollReveal({
    distance: "32px",
    duration: 800,
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    origin: "bottom",
    viewFactor: 0.15,
    // cleanup removes ScrollReveal's inline styles after each reveal, so my CSS
    // hover effects (card lift, button lift) and the theme fade keep working
    cleanup: true
  });

  // Hero
  sr.reveal(".hero-text", { origin: "left" });
  sr.reveal(".stamp", { delay: 250, scale: 0.8 });
  sr.reveal(".facts li", { interval: 120 });

  // About
  sr.reveal("#about > .eyebrow, #about > h2, #about > .lead", { interval: 100 });
  sr.reveal(".experience details", { interval: 100 });
  sr.reveal(".sidebar .card", { origin: "right", interval: 150 });

  // Projects
  sr.reveal("#projects > .eyebrow, #projects > h2, #projects > .lead", { interval: 100 });
  sr.reveal("#projects article", { interval: 120 });

  // Contact
  sr.reveal(".contact-info", { origin: "left" });
  sr.reveal("#contact form", { origin: "right", delay: 150 });
})();
