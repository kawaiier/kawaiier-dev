const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const navLinks = document.querySelector(".nav-links");
const body = document.body;

mobileMenuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenuToggle.classList.toggle("active");
  body.style.overflow = navLinks.classList.contains("active") ? "hidden" : "";
});

document.addEventListener("click", (e) => {
  if (
    navLinks.classList.contains("active") &&
    !navLinks.contains(e.target) &&
    !mobileMenuToggle.contains(e.target)
  ) {
    navLinks.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
    body.style.overflow = "";
  }
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
    body.style.overflow = "";
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

const navigation = document.querySelector(".navigation");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navigation.style.background = "rgba(255, 255, 255, 0.98)";
    navigation.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.15)";
  } else {
    navigation.style.background = "rgba(255, 255, 255, 0.95)";
    navigation.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }
});

const reviewCards = document.querySelectorAll(".review-card");
const reviewDots = document.querySelectorAll(".review-dots .dot");
const prevBtn = document.querySelector(".review-prev");
const nextBtn = document.querySelector(".review-next");
let currentReview = 0;

function showReview(index) {
  reviewCards.forEach((card, i) => {
    card.classList.toggle("active", i === index);
  });
  reviewDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function nextReview() {
  currentReview = (currentReview + 1) % reviewCards.length;
  showReview(currentReview);
}

function prevReview() {
  currentReview = (currentReview - 1 + reviewCards.length) % reviewCards.length;
  showReview(currentReview);
}

prevBtn.addEventListener("click", prevReview);
nextBtn.addEventListener("click", nextReview);

reviewDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentReview = index;
    showReview(currentReview);
  });
});

setInterval(nextReview, 5000);

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    faqItems.forEach((faq) => {
      faq.classList.remove("active");
    });

    if (!isActive) {
      item.classList.add("active");
    }
  });
});

const faqCollapsed = document.querySelector(".faq-collapsed");
const faqShowMoreBtn = document.querySelector(".faq-show-more");
if (faqCollapsed && faqShowMoreBtn) {
  faqShowMoreBtn.addEventListener("click", () => {
    const isHidden =
      faqCollapsed.style.display === "none" ||
      faqCollapsed.style.display === "";
    faqCollapsed.style.display = isHidden ? "block" : "none";
    faqShowMoreBtn.textContent = isHidden ? "Скрыть" : "Показать ещё";
  });
}

const enrollmentModal = document.getElementById("enrollmentModal");
const modalClose = document.querySelector(".modal-close");
const enrollBtns = document.querySelectorAll(".enroll-btn");
const selectedTariff = document.getElementById("selectedTariff");

enrollBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tariff = btn.getAttribute("data-tariff");
    selectedTariff.textContent =
      tariff === "base" ? "Base (4000₽)" : "Premium (4500₽)";
    enrollmentModal.classList.add("active");
  });
});

modalClose.addEventListener("click", () => {
  enrollmentModal.classList.remove("active");
});

enrollmentModal.addEventListener("click", (e) => {
  if (e.target === enrollmentModal) {
    enrollmentModal.classList.remove("active");
  }
});

const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".about-card, .result-card, .price-card, .day"
  );

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementTop < window.innerHeight && elementBottom > 0) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

document
  .querySelectorAll(".about-card, .result-card, .price-card, .day")
  .forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

const codeLines = document.querySelectorAll(
  ".code-content .tag, .code-content .text"
);
let lineIndex = 0;

function typeCode() {
  if (lineIndex < codeLines.length) {
    codeLines[lineIndex].style.opacity = "1";
    lineIndex++;
    setTimeout(typeCode, 200);
  }
}

codeLines.forEach((line) => {
  line.style.opacity = "0";
  line.style.transition = "opacity 0.5s ease";
});

const codePreview = document.querySelector(".code-preview");
const observerOptions = {
  threshold: 0.5,
};

const codeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(typeCode, 500);
      codeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

codeObserver.observe(codePreview);

const updateSpotsLeft = () => {
  const spotsElement = document.querySelector(".spots-left");
  const currentSpots = parseInt(spotsElement.textContent);

  if (Math.random() > 0.8 && currentSpots > 3) {
    spotsElement.textContent = currentSpots - 1;
    spotsElement.style.animation = "pulse 0.5s ease";
    setTimeout(() => {
      spotsElement.style.animation = "";
    }, 500);
  }
};

setInterval(updateSpotsLeft, 30000);

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePhone = (phone) => {
  const re = /^[\d\s\-\+\(\)]+$/;
  return re.test(phone) && phone.length >= 10;
};

const heroSection = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const rate = scrolled * -0.5;

  if (scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${rate}px)`;
  }
});

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (
      !this.classList.contains("enroll-btn") &&
      this.getAttribute("href") !== "#pricing" &&
      !this.classList.contains("faq-show-more") &&
      this.getAttribute("target") !== "_blank"
    ) {
      e.preventDefault();
      this.classList.add("loading");
      this.innerHTML = '<span class="loading"></span> Загрузка...';

      setTimeout(() => {
        this.classList.remove("loading");
        this.innerHTML = this.textContent.replace(" Загрузка...", "");
      }, 2000);
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && enrollmentModal.classList.contains("active")) {
    enrollmentModal.classList.remove("active");
  }

  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    const focusedElement = document.activeElement;
    const faqQuestions = Array.from(document.querySelectorAll(".faq-question"));
    const currentIndex = faqQuestions.indexOf(focusedElement);

    if (currentIndex !== -1) {
      e.preventDefault();
      let nextIndex;

      if (e.key === "ArrowDown") {
        nextIndex = (currentIndex + 1) % faqQuestions.length;
      } else {
        nextIndex =
          (currentIndex - 1 + faqQuestions.length) % faqQuestions.length;
      }

      faqQuestions[nextIndex].focus();
    }
  }
});

let scrollTimeout;
const debounce = (func, wait) => {
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(scrollTimeout);
      func(...args);
    };
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(later, wait);
  };
};

window.addEventListener("scroll", debounce(animateOnScroll, 10));

window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  animateOnScroll();

  console.log("Сайт интенсива загружен успешно!");
});

const createCookieConsent = () => {
  const consent = localStorage.getItem("cookieConsent");
  if (!consent) {
    const cookieBanner = document.createElement("div");
    cookieBanner.className = "cookie-consent";
    cookieBanner.innerHTML = `
            <p>Мы используем cookie для улучшения работы сайта</p>
            <button class="btn btn-primary btn-small">Принять</button>
        `;
    document.body.appendChild(cookieBanner);

    cookieBanner.querySelector("button").addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "true");
      cookieBanner.remove();
    });
  }
};

setTimeout(createCookieConsent, 2000);

// Handle mobile orientation change
window.addEventListener("orientationchange", () => {
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
    mobileMenuToggle.classList.remove("active");
    body.style.overflow = "";
  }
});

// Add touch support for reviews slider
let touchStartX = 0;
let touchEndX = 0;

const reviewsSlider = document.querySelector(".reviews-slider");

reviewsSlider.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

reviewsSlider.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const swipeLength = touchEndX - touchStartX;

  if (Math.abs(swipeLength) > swipeThreshold) {
    if (swipeLength > 0) {
      prevReview();
    } else {
      nextReview();
    }
  }
}

// Improve modal handling on mobile
const modalContent = enrollmentModal.querySelector(".modal-content");

enrollmentModal.addEventListener(
  "touchmove",
  (e) => {
    if (e.target === enrollmentModal) {
      e.preventDefault();
    }
  },
  { passive: false }
);

// Handle mobile keyboard appearance
const inputs = document.querySelectorAll("input, textarea");
inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    setTimeout(() => {
      window.scrollTo(0, window.scrollY);
    }, 200);
  });
});
