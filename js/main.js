document.addEventListener('DOMContentLoaded', () => {
  // --- Dark Mode Logic ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  // Check system preference
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Get stored theme or fallback to system preference
  const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
  
  // Apply the theme on load
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (themeToggleBtn) {
    themeToggleBtn.setAttribute('aria-pressed', currentTheme === 'dark');
  }
  
  // Toggle theme on click
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      let theme = document.documentElement.getAttribute('data-theme');
      let targetTheme = theme === 'light' ? 'dark' : 'light';
      
      document.documentElement.setAttribute('data-theme', targetTheme);
      localStorage.setItem('theme', targetTheme);
      themeToggleBtn.setAttribute('aria-pressed', targetTheme === 'dark');
    });
  }

  // --- Mobile Menu Logic ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isActive = navLinks.classList.toggle('active');
      mobileMenuBtn.setAttribute('aria-expanded', isActive);
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Carousel is now handled entirely via CSS animations.

  // --- Intersection Observer for fade-in animations ---
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve to prevent memory leaks and unnecessary processing on scroll
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => observer.observe(el));
});
