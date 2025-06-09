// Ano atual para direitos autorais
document.getElementById('year').textContent = new Date().getFullYear();

// Efeito de rolagem da navegação
window.addEventListener('scroll', function() {
  const mainNav = document.getElementById('mainNav');
  if (window.scrollY > 50) {
    mainNav.classList.add('navbar-shrink');
  } else {
    mainNav.classList.remove('navbar-shrink');
  }
});

// Rolagem suave para links de navegação
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      // Fecha o menu móvel se estiver aberto
      const navToggler = document.querySelector('.navbar-toggler');
      const navCollapse = document.querySelector('.navbar-collapse');
      
      if (navCollapse.classList.contains('show')) {
        navToggler.click();
      }
      
      // Rola para a seção
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Validação de formulário
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validação simples de formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    let isValid = true;
    
    if (!name) {
      isValid = false;
      document.getElementById('name').classList.add('is-invalid');
    } else {
      document.getElementById('name').classList.remove('is-invalid');
    }
    
    if (!email || !email.includes('@')) {
      isValid = false;
      document.getElementById('email').classList.add('is-invalid');
    } else {
      document.getElementById('email').classList.remove('is-invalid');
    }
    
    if (!subject) {
      isValid = false;
      document.getElementById('subject').classList.add('is-invalid');
    } else {
      document.getElementById('subject').classList.remove('is-invalid');
    }
    
    if (!message) {
      isValid = false;
      document.getElementById('message').classList.add('is-invalid');
    } else {
      document.getElementById('message').classList.remove('is-invalid');
    }
    
    if (isValid) {
      contactForm.innerHTML = `
        <div class="text-center py-5">
          <div class="mb-4">
            <i class="fas fa-check-circle text-success" style="font-size: 4rem;"></i>
          </div>
          <h3 class="mb-3">Obrigado!</h3>
          <p class="lead">Sua mensagem foi enviada com sucesso.</p>
          <p>Entraremos em contato o mais breve possível.</p>
        </div>
      `;
    }
  });
}

// Animação de contador para estatísticas
const counterElements = document.querySelectorAll('.counter');
let hasAnimated = false;

function animateCounters() {
  if (hasAnimated) return;
  
  counterElements.forEach(counter => {
    const target = parseInt(counter.textContent, 10);
    let count = 0;
    const duration = 2000; // ms
    const increment = target / (duration / 20);
    
    const interval = setInterval(() => {
      count += increment;
      counter.textContent = Math.floor(count);
      
      if (count >= target) {
        counter.textContent = target;
        clearInterval(interval);
      }
    }, 20);
  });
  
  hasAnimated = true;
}

// Inicializa o AOS
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
  
  // Verifica se devemos animar os contadores no carregamento da página
  const aboutSection = document.getElementById('about');
  const aboutPosition = aboutSection.getBoundingClientRect().top;
  
  if (aboutPosition < window.innerHeight) {
    animateCounters();
  }
});

// Anima os contadores quando a seção "sobre" está visível
window.addEventListener('scroll', function() {
  const aboutSection = document.getElementById('about');
  const aboutPosition = aboutSection.getBoundingClientRect().top;
  
  if (aboutPosition < window.innerHeight * 0.75) {
    animateCounters();
  }
});