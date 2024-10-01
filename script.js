// Filter Portfolio Videos by Category
const filterButtons = document.querySelectorAll('.filter-btn');
const videoCards = document.querySelectorAll('.video-card');
const videos = document.querySelectorAll('video');

filterButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const category = e.target.getAttribute('data-category');

    filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    videoCards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});