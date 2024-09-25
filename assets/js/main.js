/**
 * Template Name: OnePage
 * Template URL: https://bootstrapmade.com/onepage-multipurpose-bootstrap-template/
 * Updated: Aug 07 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /* Quiz ssection starts here */

  const questions = [
    {
      question: "Which is the classical dance form of Kerala?",
      options: { A: "Bharatanatyam", B: "Kathak", C: "Kathakali", D: "Odissi" },
      correct: "C",
    },
    {
      question: "Taj Mahal is located in which city?",
      options: { A: "Delhi", B: "Agra", C: "Jaipur", D: "Mumbai" },
      correct: "B",
    },
    {
      question: "Which festival is known as the 'Festival of Lights'?",
      options: { A: "Holi", B: "Diwali", C: "Eid", D: "Christmas" },
      correct: "B",
    },
    {
      question:
        "Which of the following is a traditional Indian musical instrument?",
      options: { A: "Guitar", B: "Piano", C: "Sitar", D: "Drums" },
      correct: "C",
    },
    {
      question: "What is the national animal of India?",
      options: { A: "Lion", B: "Elephant", C: "Tiger", D: "Peacock" },
      correct: "C",
    },
    {
      question: "Which is the capital of India?",
      options: { A: "Mumbai", B: "Delhi", C: "Chennai", D: "Kolkata" },
      correct: "B",
    },
    {
      question: "What is the national flower of India?",
      options: { A: "Lotus", B: "Rose", C: "Sunflower", D: "Marigold" },
      correct: "A",
    },
    {
      question: "Which state is known as the 'Land of Rising Sun'?",
      options: {
        A: "Arunachal Pradesh",
        B: "Assam",
        C: "Manipur",
        D: "Mizoram",
      },
      correct: "A",
    },
    {
      question: "Which river is the longest in India?",
      options: { A: "Ganga", B: "Yamuna", C: "Brahmaputra", D: "Godavari" },
      correct: "A",
    },
    {
      question: "Who is known as the 'Iron Man of India'?",
      options: {
        A: "Mahatma Gandhi",
        B: "Subhas Chandra Bose",
        C: "Sardar Patel",
        D: "Jawaharlal Nehru",
      },
      correct: "C",
    },
  ];

  let currentQuestion = 0;
  let score = 0;

  function loadQuestion() {
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const feedbackEl = document.getElementById("feedback");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    questionEl.innerText = questions[currentQuestion].question;

    optionsEl.innerHTML = questions[currentQuestion].options
      ? Object.entries(questions[currentQuestion].options)
          .map(
            ([key, value]) =>
              `<button class="option" data-answer="${key}">${value}</button>`
          )
          .join("")
      : "";

    feedbackEl.innerText = "";
    nextBtn.disabled = true;
    prevBtn.disabled = currentQuestion === 0;

    // Reattach event listeners
    document.querySelectorAll(".option").forEach((button) => {
      button.addEventListener("click", () => checkAnswer(button));
    });
  }

  function checkAnswer(button) {
    const correctAnswer = questions[currentQuestion].correct;
    const nextBtn = document.getElementById("nextBtn");
    const feedbackEl = document.getElementById("feedback");
    const selectedAnswer = button.getAttribute("data-answer");

    if (selectedAnswer === correctAnswer) {
      button.classList.add("correct");
      feedbackEl.innerText = "Correct Answer!";
      score++;
    } else {
      button.classList.add("wrong");
      document
        .querySelector(`.option[data-answer="${correctAnswer}"]`)
        .classList.add("correct");
      feedbackEl.innerText = "Wrong Answer!";
    }

    document
      .querySelectorAll(".option")
      .forEach((option) => (option.disabled = true));
    nextBtn.disabled = false;
  }

  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      loadQuestion();
    } else {
      displayScore();
    }
  }

  function prevQuestion() {
    if (currentQuestion > 0) {
      currentQuestion--;
      loadQuestion();
    }
  }

  function displayScore() {
    const quizContainer = document.getElementById("quiz-container");
    const scoreContainer = document.getElementById("score-container");
    const finalScore = document.getElementById("final-score");
    const retakeQuizBtn = document.getElementById("retakeQuizBtn");

    quizContainer.style.display = "none";
    scoreContainer.style.display = "block";
    finalScore.innerText = `${score} / ${questions.length}`;
    retakeQuizBtn.addEventListener("click", retakeQuiz);
  }

  function retakeQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("score-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
  }

  // Initialize the first question
  loadQuestion();

  document.getElementById("nextBtn").addEventListener("click", nextQuestion);
  document.getElementById("prevBtn").addEventListener("click", prevQuestion);

  /* Quiz section Ends here */

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
    let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
    let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
      initIsotope = new Isotope(
        isotopeItem.querySelector(".isotope-container"),
        {
          itemSelector: ".isotope-item",
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        }
      );
    });

    isotopeItem
      .querySelectorAll(".isotope-filters li")
      .forEach(function (filters) {
        filters.addEventListener(
          "click",
          function () {
            isotopeItem
              .querySelector(".isotope-filters .filter-active")
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            initIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            if (typeof aosInit === "function") {
              aosInit();
            }
          },
          false
        );
      });
  });

  /**
   * Frequently Asked Questions Toggle
   */
  document
    .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
    .forEach((faqItem) => {
      faqItem.addEventListener("click", () => {
        faqItem.parentNode.classList.toggle("faq-active");
      });
    });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener("load", function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);
})();
