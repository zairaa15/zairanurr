/**
 * Personal Portfolio Website - Zaira Nur Rojabiyah
 * Interactive Scripts: Navbar toggle, Scrollspy, Smooth Scroll, and Reveal Effects
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenuMobile = document.getElementById('navMenuMobile');
  const navLinks = document.querySelectorAll('.nav-link');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  const backToTopBtn = document.getElementById('backToTop');
  const sections = document.querySelectorAll('section[id]');

  /* ==========================================================================
     1. STICKY NAVBAR ON SCROLL
     ========================================================================== */
  const handleNavbarScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  };

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // Initial check

  /* ==========================================================================
     2. MOBILE HAMBURGER MENU TOGGLE
     ========================================================================== */
  if (navToggle && navMenuMobile) {
    const toggleMenu = (forceState) => {
      const isOpen = forceState !== undefined ? forceState : !navToggle.classList.contains('open');
      
      navToggle.classList.toggle('open', isOpen);
      navMenuMobile.classList.toggle('active', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navMenuMobile.setAttribute('aria-hidden', String(!isOpen));
      
      if (isOpen) {
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      } else {
        document.body.style.overflow = '';
      }
    };

    navToggle.addEventListener('click', () => toggleMenu());

    // Close menu when clicking any mobile link
    drawerLinks.forEach((link) => {
      link.addEventListener('click', () => {
        toggleMenu(false);
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (
        navMenuMobile.classList.contains('active') &&
        !navMenuMobile.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        toggleMenu(false);
      }
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenuMobile.classList.contains('active')) {
        toggleMenu(false);
        navToggle.focus();
      }
    });
  }

  /* ==========================================================================
     3. SCROLLSPY (ACTIVE NAV LINK HIGHLIGHT)
     ========================================================================== */
  const updateActiveNavLink = () => {
    const scrollPosition = window.scrollY + 140; // Offset for navbar

    sections.forEach((currentSection) => {
      const sectionHeight = currentSection.offsetHeight;
      const sectionTop = currentSection.offsetTop;
      const sectionId = currentSection.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Desktop nav
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });

        // Mobile drawer nav
        drawerLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink(); // Initial check

  /* ==========================================================================
     4. BACK TO TOP BUTTON
     ========================================================================== */
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     5. SCROLL REVEAL ANIMATIONS (Intersection Observer)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('revealed'));
  }

  /* ==========================================================================
     6. LANYARD ID CARD 3D MOUSE TILT INTERACTION
     ========================================================================== */
  const lanyardWrapper = document.getElementById('lanyardWrapper');
  const lanyardBadge = document.querySelector('.lanyard-card-badge');

  if (lanyardWrapper && lanyardBadge) {
    lanyardWrapper.addEventListener('mousemove', (e) => {
      const rect = lanyardWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = (-y / rect.height) * 16;
      const rotateY = (x / rect.width) * 16;

      lanyardBadge.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03) translateY(-4px)`;
      lanyardBadge.style.animationPlayState = 'paused';
    });

    lanyardWrapper.addEventListener('mouseleave', () => {
      lanyardBadge.style.transform = '';
      lanyardBadge.style.animationPlayState = 'running';
    });
  }
});


