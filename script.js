const items = document.querySelectorAll("section, .card, h2");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

items.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(25px)";
  el.style.transition = "0.8s ease";
  observer.observe(el);
});
