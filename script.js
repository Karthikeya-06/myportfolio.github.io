const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const heroMedia = document.querySelector(".hero-media");

window.addEventListener(
  "pointermove",
  (event) => {
    if (!heroMedia || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;
    heroMedia.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  },
  { passive: true }
);
