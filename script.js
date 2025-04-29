// Smoothly reveal sections when scrolling
const sections = document.querySelectorAll('.slide-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.3
});

sections.forEach(section => {
  observer.observe(section);
});
