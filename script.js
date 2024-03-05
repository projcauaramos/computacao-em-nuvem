// scripts.js
// Função para destacar o link do menu conforme a rolagem da página
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav ul li a');
  
    sections.forEach(function(section, index) {
      var position = section.offsetTop;
      var sectionHeight = section.offsetHeight;
  
      if (window.scrollY >= position && window.scrollY < position + sectionHeight) {
        navLinks[index].classList.add('active');
      } else {
        navLinks[index].classList.remove('active');
      }
    });
  });

// Array de imagens
const images = ['img/cloud3.png', 'img/cloud2.jpg', 'img/cloud1.jpg'];

// Obtém a referência para a imagem
const cloudImage = document.getElementById('cloudImage');

// Variável para controlar o índice da imagem atual
let currentIndex = 0;

// Função para atualizar a imagem
function changeImage() {
  cloudImage.classList.add('hidden');
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    cloudImage.src = images[currentIndex];
    cloudImage.classList.remove('hidden');
  }, 500);
}

// Altera a imagem a cada 5 segundos
setInterval(changeImage, 5000);

