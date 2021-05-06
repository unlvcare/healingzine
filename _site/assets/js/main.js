window.onload=function(){
    const mainNav = document.querySelector(".main-nav")
    const navButton = document.querySelector(".mobile-menu-button")
    const close = document.querySelector(".close")

    navButton.addEventListener("click", function (event) {
        event.preventDefault()
        mainNav.classList.toggle("show-nav")
        close.classList.toggle("close-show")
    })

    close.addEventListener("click", function (event) {
        event.preventDefault()
        mainNav.classList.toggle("show-nav")
        close.classList.toggle("close-show")
    })

    const tocButton = document.querySelector(".toc-button")
    const toc = document.querySelector(".toc")
    const tocNav = document.querySelector(".toc-nav")
    const show = document.querySelector(".show")

    tocButton.addEventListener("click", function (event) {
        event.preventDefault()
        toc.classList.toggle("height-fix")
        tocNav.classList.toggle("hide")
        if (show.innerHTML === "Show") {
            show.innerHTML = "Hide"
        } else {
            show.innerHTML = "Show"
        }
    })
  }
