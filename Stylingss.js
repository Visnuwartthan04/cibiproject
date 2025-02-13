document.addEventListener("DOMContentLoaded", function() {
  
  const photoSlots = document.querySelectorAll('.photo-slot');

  photoSlots.forEach(photo => {
    photo.addEventListener('mouseenter', function() {

      photo.style.transform = 'scale(1.1)';
      photo.style.transition = 'transform 0.3s ease-in-out';
    });

    photo.addEventListener('mouseleave', function() {
      
      photo.style.transform = 'scale(1)';
    });
  });

  let modal = document.createElement('div');
  modal.classList.add('lightbox');
  document.body.appendChild(modal);

  let modalImg = document.createElement('img');
  modal.appendChild(modalImg);

  photoSlots.forEach(photo => {
    photo.addEventListener('click', () => {
    
      modal.style.display = 'block';
      modalImg.src = photo.querySelector('img').src;  
    });
  });

  modal.addEventListener('click', () => {
    modal.style.display = 'none'; 
  });

});