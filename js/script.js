
    // Бургер-меню
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      burger.classList.toggle('active');
    });
    
    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
      });
    });
    
    // FAQ аккордеон
    function toggleAnswer(question) {
      const answer = question.nextElementSibling;
      const plus = question.querySelector('span:last-child');
      
      answer.classList.toggle('active');
      plus.textContent = answer.classList.contains('active') ? '−' : '+';
    }
    
    // Попап
    function showPopup() {
      event.preventDefault();
      document.getElementById('popup').classList.add('active');
    }
    
    function hidePopup() {
      document.getElementById('popup').classList.remove('active');
    }
    
    // Форма
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      showPopup();
      this.reset();
    });
    
    // Куки-баннер
    function acceptCookies() {
      document.getElementById('cookieBanner').classList.add('hidden');
      localStorage.setItem('cookiesAccepted', 'true');
    }
    
    if (localStorage.getItem('cookiesAccepted') === 'true') {
      document.getElementById('cookieBanner').classList.add('hidden');
    }
    
    // Параллакс эффект для мобильных
    if (window.innerWidth <= 768) {
      document.querySelectorAll('.parallax').forEach(el => {
        el.style.backgroundAttachment = 'scroll';
      });
    }
    
    // Анимации при скролле
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
