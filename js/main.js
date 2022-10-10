let fixNav = document.querySelector(".fix-nav");
let scrollTop = document.querySelector(".scroll-top");
if (fixNav) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 84) {
      fixNav.classList.add("show")
      scrollTop.classList.add("show")
    } else {
      fixNav.classList.remove("show")
      scrollTop.classList.remove("show")
    }
  })
}

let searchIcon = document.querySelector(".search-icon");
let overlaySearch = document.querySelector(".overlay-search")
let closeSearch = document.querySelector(".close-search")

if (searchIcon) {
  searchIcon.addEventListener("click", () => {
    document.body.style.overflow = "hidden"
    overlaySearch.classList.add("show")
  })
  closeSearch.addEventListener("click", () => {
    document.body.style.overflow = "auto"
    overlaySearch.classList.remove("show")
  })
}

