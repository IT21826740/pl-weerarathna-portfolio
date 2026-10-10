document.addEventListener("DOMContentLoaded", () => {

  /* ==========================
        LOADER
  ========================== */
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    if (loader) loader.style.display = "none";
  });

  /* ==========================
        SCROLL PROGRESS BAR
  ========================== */
  window.addEventListener("scroll", () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    const bar = document.getElementById("progressBar");
    if (bar) bar.style.width = scrolled + "%";
  });

  /* ==========================
        PORTFOLIO FILTER
  ========================== */
  const filterButtons = document.querySelectorAll(".portfolio-filter button");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      portfolioItems.forEach(item => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  /* ==========================
        LIGHTBOX
  ========================== */
  const gallery = document.querySelectorAll(".portfolio-item img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const close = document.querySelector(".close-lightbox");

  if (lightbox && lightboxImg && close) {
    gallery.forEach(img => {
      img.onclick = () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
      };
    });

    close.onclick = () => {
      lightbox.style.display = "none";
    };

    lightbox.onclick = (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    };
  }

  /* ==========================
        COUNTERS
  ========================== */
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const target = Number(counter.dataset.target);
    let count = 0;

    const updateCounter = () => {
      const increment = Math.ceil(target / 80);
      count += increment;

      if (count >= target) {
        counter.innerText = target + "+";
      } else {
        counter.innerText = count;
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  });

  /* ==========================
        BACK TO TOP BUTTON
  ========================== */
  const topBtn = document.getElementById("topBtn");

  if (topBtn) {
    window.addEventListener("scroll", () => {
      topBtn.style.display = window.scrollY > 300 ? "flex" : "none";
    });

    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});