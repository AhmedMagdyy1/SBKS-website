const menuBtn = document.getElementById("mobile-menu-btn");
const sideMenu = document.getElementById("mobile-side-menu");
const closeBtn = document.getElementById("close-mobile-menu");
menuBtn.addEventListener("click", () => {
  sideMenu.classList.remove("translate-x-full");
  sideMenu.classList.add("translate-x-0");
});
closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("translate-x-0");
  sideMenu.classList.add("translate-x-full");
});

// Initialize AOS (Animate On Scroll) library
AOS.init();

const swiper = new Swiper(".teamSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});

const CALENDLY_URL =
  "https://calendly.com/Mkhiralah-s-bks/free-consultation";

document
  .getElementById("scheduleForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = {
      fullName: document.getElementById("fullName").value,
      email: document.getElementById("emailAddress").value,
      phone: document.getElementById("phoneNumber").value,
      message: document.getElementById("message").value,
    };

    // Validate required fields
    if (!formData.fullName || !formData.email) {
      alert("Please fill in all required fields");
      return;
    }

    // Show success message
    document.getElementById("successMessage").classList.remove("hidden");

    // Open Calendly after a short delay
    setTimeout(() => {
      Calendly.initPopupWidget({
        url: CALENDLY_URL,
        prefill: {
          name: formData.fullName,
          email: formData.email,
          customAnswers: {
            a1: formData.phone,
            a2: formData.message,
          },
        },
        utm: {
          utmSource: "website",
          utmMedium: "form_submission",
          utmCampaign: "free_consultation",
        },
      });
    }, 1000);
  });
