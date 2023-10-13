
/* stars */
function createRandomStars() {
    const numStars = 40; // Altere o número de estrelas conforme desejado
  
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
  
        // Defina posições aleatórias
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
  
        star.style.top = `${randomY}px`;
        star.style.left = `${randomX}px`;
  
        // Defina início da animação em tempos aleatórios
        star.style.animation = `twinkling ${Math.random() * 3 + 1}s infinite ${Math.random() * 3}s`;
  
        document.body.appendChild(star);
    }
  }
  
  createRandomStars(); // Chame a função para criar estrelas aleatórias



  let currentIndex = 0;
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');

  function prevSlide() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel();
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
  }

  function updateCarousel() {
      const offset = -currentIndex * 100+ '%'; 
      carousel.style.transform = `translateX(${offset})`;
  }
  //setInterval(nextSlide, 15000);

updateCarousel();

  // MENU HAMBURGUER
// Fecha o menu de navegação ao clicar em um link
document.querySelectorAll('.navBar a').forEach((link) => {
    link.addEventListener('click', () => {
      document.getElementById('check').checked = false;
    });
  });





