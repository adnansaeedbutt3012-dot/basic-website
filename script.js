document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productGrid = document.getElementById('productGrid');
  const productCards = productGrid ? productGrid.children : [];
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (filterButtons.length) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.dataset.category;

        Array.from(productCards).forEach(card => {
          const matches = category === 'all' || card.dataset.category === category;
          card.style.display = matches ? 'grid' : 'none';
        });
      });
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      formStatus.textContent = 'Thank you! Your request has been sent.';
      contactForm.reset();
      setTimeout(() => {
        formStatus.textContent = '';
      }, 5000);
    });
  }

  if (mobileMenuToggle && navLinks) {
    const toggleMenu = () => {
      const isOpen = navLinks.classList.toggle('open');
      mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
    };

    mobileMenuToggle.addEventListener('click', toggleMenu);

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
