function menuBurger() {
  const btnMobile = document.querySelector(".header button")

  function handleClick(e) {
    const nav = document.querySelector(".header nav")
    nav.classList.toggle("ativo")
    btnMobile.classList.toggle("ativo")
    const ativo = nav.classList.contains("ativo")
    e.currentTarget.setAttribute("aria-expanded", ativo)
    if (ativo)
      e.currentTarget.setAttribute("aria-label", "Fechar Menu")
    else
      e.currentTarget.setAttribute("aria-label", "Abrir Menu")
  }

  btnMobile.addEventListener("click", handleClick)
}
menuBurger()


function menuDesaparecendoAoClique() {
  const li = document.querySelectorAll(".menu li")
  const btnMobile = document.querySelector(".header button")
  const nav = document.querySelector(".header nav")

  function handleClick() {
    btnMobile.classList.toggle("ativo")
    nav.classList.toggle("ativo")
    const ativo = nav.classList.contains("ativo")
    btnMobile.setAttribute("aria-expanded", ativo)
    if (ativo)
      btnMobile.setAttribute("aria-label", "Fechar Menu")
    else
      btnMobile.setAttribute("aria-label", "Abrir Menu")
  }

  li.forEach((itens) => {
    itens.addEventListener("click", handleClick)
  })
}
menuDesaparecendoAoClique()

function smoothScroll() {
  const navItens = document.querySelectorAll(".menu a[href^='#']")

  navItens.forEach((itens) => {
    itens.addEventListener("click", (e) => {
      e.preventDefault()
      const href = e.currentTarget.getAttribute("href")
      const sections = document.querySelector(href)
      console.log(sections)

      sections.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  })
}
smoothScroll()