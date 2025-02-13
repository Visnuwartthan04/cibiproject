
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const feedbackModal = document.getElementById('feedbackModal');


openModal.addEventListener('click', (e) => {
  e.preventDefault();
  feedbackModal.style.display = 'flex';
  feedbackModal.classList.remove('closed');
});


closeModal.addEventListener('click', () => {
  feedbackModal.classList.add('closed');
  setTimeout(() => {
    feedbackModal.style.display = 'none';
  }, 500); 
});


window.addEventListener('click', (e) => {
  if (e.target === feedbackModal) {
    feedbackModal.classList.add('closed');
    setTimeout(() => {
      feedbackModal.style.display = 'none';
    }, 500);
  }
});

const feedbackForm = document.getElementById('feedbackForm');
feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your feedback!');
  feedbackModal.classList.add('closed');
  setTimeout(() => {
    feedbackModal.style.display = 'none';
  }, 500);
});