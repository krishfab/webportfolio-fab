 document.addEventListener("DOMContentLoaded", () => {
    const landing = document.querySelector('#landing');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    observer.observe(landing);
  });