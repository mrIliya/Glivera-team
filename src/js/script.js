window.addEventListener("DOMContentLoaded", () => {
  // ------------header message feature
  const headerMessage = document.querySelector(".header-message");
  const closeMessage = headerMessage.querySelector(".header-message__close");

  closeMessage.addEventListener("click", () => {
    headerMessage.classList.add("remove");
  });

  //  -----------offers cards feature

  const offerItems = document.querySelectorAll(".offers-item");
  const workWidth = window.innerWidth > 980;

  if (offerItems && workWidth) {
    const mainItem = document.querySelector(".main-item");

    offerItems.forEach((item) => {
      item.addEventListener("mouseleave", () => {
        offerItems.forEach((item) => item.classList.remove("active"));
        mainItem.classList.add("active");
      });

      item.addEventListener("mouseenter", () => {
        offerItems.forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
      });
    });
  }

  // ------------posts feature

  const posts = document.querySelectorAll(".posts-article");
  const morePosts = document.querySelector(".posts__more");

  if (!workWidth) {
    posts.forEach((post, index) => {
      if (index > 2) {
        post.style.display = "none";
      }
    });
  }

  morePosts.addEventListener("click", (e) => {
    e.preventDefault();

    posts.forEach((post) => {
      post.style.display = "block";
    });
  });

  // ------------mobile menu feature

  const burgerBtn = document.querySelector(".header-burger");
  const menu = document.querySelector(".header-nav");
  const body = document.querySelector("body");

  if (burgerBtn) {
    burgerBtn.addEventListener("click", () => {
      burgerBtn.classList.toggle("active");
      menu.classList.toggle("show");
      body.classList.toggle("lock");
    });
  }

  // ------------fixed menu feature
  const headerMenu = document.querySelector(".header__menu");

  document.addEventListener("scroll", () => {
    if (window.scrollY > 68) {
      headerMenu.classList.add("active");
    } else {
      headerMenu.classList.remove("active");
    }
  });
});
