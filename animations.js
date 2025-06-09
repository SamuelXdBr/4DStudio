// Animações adicionais para o site

// Animar elementos ao rolar
function revealOnScroll() {
  const elements = document.querySelectorAll('.reveal');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

// Efeito parallax para a seção hero
function parallaxEffect() {
  const heroSection = document.querySelector('.hero-section');
  const scrollPosition = window.scrollY;
  
  if (heroSection) {
    // Move a imagem de fundo conforme o usuário rola
    heroSection.style.backgroundPosition = `center ${50 + scrollPosition * 0.05}%`;
  }
}

// Animar cards de produto ao passar o mouse com movimento do mouse
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
  card.addEventListener('mousemove', function(e) {
    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;
    
    const mouseX = e.clientX - cardCenterX;
    const mouseY = e.clientY - cardCenterY;
    
    // Calcula o ângulo de rotação com base na posição do mouse
    const rotateX = mouseY * -0.03;
    const rotateY = mouseX * 0.03;
    
    // Aplica efeito de rotação 3D
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  });
  
  card.addEventListener('mouseleave', function() {
    // Reseta a transformação quando o mouse sai
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    card.style.transition = 'transform 0.5s ease';
  });
});

// Animar os links de navegação
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px)';
    this.style.transition = 'transform 0.3s ease';
  });
  
  link.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Efeito de digitação para o título da seção hero
function typeEffect() {
  const heroHeading = document.querySelector('.hero-section h1');
  
  if (heroHeading && !heroHeading.classList.contains('typed')) {
    heroHeading.classList.add('typed');
    
    const text = heroHeading.textContent;
    heroHeading.textContent = '';
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        heroHeading.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
  }
}

// Executar animações no carregamento da página
document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('scroll', parallaxEffect);
  
  // Adiciona classe ativa ao link de navegação atual com base na posição de rolagem
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= (sectionTop - 150)) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
  
  // Aciona o efeito de digitação para o título da seção hero após um breve atraso
  setTimeout(typeEffect, 500);
  
  // Inicializa animações de revelação
  revealOnScroll();
});