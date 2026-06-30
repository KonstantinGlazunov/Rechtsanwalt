document.addEventListener("DOMContentLoaded", () => {
  const state = {
    lang: localStorage.getItem("siteLang") || "de",
    quiz: { area: "", deadline: "" }
  };

  const t = (key) => key.split(".").reduce((value, part) => value && value[part], translations[state.lang]);

  const applyTranslations = () => {
    document.documentElement.lang = state.lang;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = t(element.dataset.i18n);
      if (typeof value === "string") element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const value = t(element.dataset.i18nPlaceholder);
      if (typeof value === "string") element.placeholder = value;
    });

    document.querySelectorAll("[data-i18n-options]").forEach((select) => {
      const options = t(select.dataset.i18nOptions);
      if (!Array.isArray(options)) return;
      const selected = select.value;
      select.innerHTML = "";
      options.forEach((label, index) => {
        const option = document.createElement("option");
        option.value = index === 0 ? "" : label;
        option.textContent = label;
        select.append(option);
      });
      select.value = selected;
    });

    document.querySelectorAll("[data-lang-switch]").forEach((button) => {
      const isActive = button.dataset.langSwitch === state.lang;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    renderQuiz();
  };

  const setLanguage = (lang) => {
    if (!translations[lang]) return;
    state.lang = lang;
    localStorage.setItem("siteLang", lang);
    applyTranslations();
  };

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.langSwitch));
  });

  const header = document.querySelector("[data-header]");
  const setHeaderState = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileNav = document.querySelector("[data-mobile-nav]");
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("is-open");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    mobileNav.classList.toggle("is-open", !isOpen);
  });

  document.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
      closeMenu();
    });
  });

  document.querySelectorAll(".faq-item button").forEach((button) => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      button.closest(".faq-item").classList.toggle("is-open", !expanded);
    });
  });

  const revealItems = document.querySelectorAll(".fade-in");
  if ("IntersectionObserver" in window && !prefersReducedMotion()) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        entry.target.style.willChange = "auto";
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.16 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const navLinks = [...document.querySelectorAll(".nav a")];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 });
  sections.forEach((section) => activeObserver.observe(section));

  const form = document.querySelector("[data-contact-form]");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors(form);
    const formData = new FormData(form);
    const errors = {};

    if (!formData.get("name").trim()) errors.name = t("form.required");
    if (!formData.get("email").trim()) errors.email = t("form.required");
    if (formData.get("email").trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get("email").trim())) errors.email = t("form.emailInvalid");
    if (!formData.get("message").trim()) errors.message = t("form.required");
    if (!formData.get("privacy")) errors.privacy = t("form.privacyRequired");

    Object.entries(errors).forEach(([field, message]) => {
      const errorElement = form.querySelector(`[data-error-for="${field}"]`);
      const input = form.elements[field];
      if (errorElement) errorElement.textContent = message;
      if (input) input.setAttribute("aria-invalid", "true");
    });

    if (Object.keys(errors).length) return;

    form.querySelector("[data-form-success]").textContent = t("form.success");
    form.reset();
  });

  applyTranslations();

  function renderQuiz() {
    const areaGroup = document.querySelector('[data-quiz-group="area"]');
    const deadlineGroup = document.querySelector('[data-quiz-group="deadline"]');
    if (!areaGroup || !deadlineGroup) return;

    const areaOptions = state.lang === "de"
      ? ["Familienrecht", "Erbrecht", "Arbeitsrecht", "Mietrecht", "Verkehrsrecht", "Vertragsrecht", "Ich bin unsicher"]
      : ["Familienrecht", "Erbrecht", "Arbeitsrecht", "Mietrecht", "Verkehrsrecht", "Vertragsrecht", "Не уверен(а)"];
    const deadlineOptions = state.lang === "de"
      ? ["Ja, dringend", "Ja, aber nicht dringend", "Nein", "Ich weiß es nicht"]
      : ["Да, срочно", "Да, но не срочно", "Нет", "Не знаю"];

    areaGroup.innerHTML = "";
    deadlineGroup.innerHTML = "";
    areaOptions.forEach((label) => areaGroup.append(createQuizOption("area", label)));
    deadlineOptions.forEach((label) => deadlineGroup.append(createQuizOption("deadline", label)));
    updateQuizResult();
  }

  function createQuizOption(group, label) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = label;
    button.classList.toggle("is-selected", state.quiz[group] === label);
    button.addEventListener("click", () => {
      state.quiz[group] = label;
      renderQuiz();
    });
    return button;
  }

  function updateQuizResult() {
    const result = document.querySelector("[data-quiz-result]");
    if (!result) return;
    result.hidden = !(state.quiz.area && state.quiz.deadline);
  }

  function clearErrors(scope) {
    scope.querySelectorAll("[data-error-for]").forEach((element) => { element.textContent = ""; });
    scope.querySelectorAll("[aria-invalid]").forEach((element) => element.removeAttribute("aria-invalid"));
    scope.querySelector("[data-form-success]").textContent = "";
  }

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
});
