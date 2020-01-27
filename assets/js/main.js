//Menu Drop down
menuDropDown = () =>
{
    const menuIcon = document.querySelector(".menu-icon")
    const menuItems = document.querySelector(".mobile-navigation")
    const exitMenu = document.querySelector(".close-menu")
    menuIcon.addEventListener("click", () =>
    {
        menuItems.classList.remove('innactive')
        menuItems.classList.add('active')
        exitMenu.addEventListener("click", () =>
        {
            menuItems.classList.add('innactive')
            menuItems.classList.remove('active')
            menuItems.style.backgroundColor = "rgb(0, 0, 255)"
        })

    })
}

menuDropDown()