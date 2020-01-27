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

animatedForm = () =>
{
    const arrows = document.querySelectorAll(".fa-arrow-right")
    arrows.forEach(arrow =>
    {
        arrow.addEventListener("click", () =>
        {
            const input = arrow.previousElementSibling
            const parent = arrow.parentElement
            const nextform = parent.nextElementSibling
            //Validate
            if (input.type === "text" && validateUser(input)) {
                nextSlide(parent, nextform)
                const forgotPassword = document.querySelector(".join-btn")
                forgotPassword.style.display = "";
                forgotPassword.style.backgroundColor = "red"
                const cBody = document.querySelector(".header-left");
                cBody.style.backgroundColor = "red"
                const fas = document.querySelectorAll(".fas")
                fas.forEach(f =>
                {
                    f.style.color = "red"

                })

            }
            else if (input.type === "email" && validateEmail(input)) {
                nextSlide(parent, nextform)

            }
            else if (input.type == "password" && validatePassword(input)) {
                nextSlide(parent, nextform)
                const loginButton = document.querySelector(".login-btn")
                loginButton.style.backgroundColor = "orange";
                const forgotPassword = document.querySelector(".join-btn")
                forgotPassword.style.display = "none";
                forgotPassword.style.backgroundColor = "orange"
                const cBody = document.querySelector(".header-left");
                cBody.style.backgroundColor = "orange"
                const fas = document.querySelectorAll(".fas")
                fas.forEach(f =>
                {
                    f.style.color = "orange"

                })
            } else {
                parent.style.animation = "shake 0.5s ease";
            }
            parent.addEventListener("animationend", () =>
            {
                parent.style.animation = "";

            })
        })
    })
}





validateUser = user =>
{
    if (user.value.length < 6) {
        error("rgb(189,87, 138)");
        message("Username is too short..try again!");
    } else {
        error("rgb(87, 189, 130")
        message("");
        return true;
    }
}

validateEmail = email =>
{
    const regex = /@/;
    if (!regex.test(email.value)) {
        error("rgb(189,87, 138)");
        message("Check your email again!");
    } else {
        error("rgb(87, 189, 130")
        message("");

        return true;
    }
}

validatePassword = password =>
{
    const regex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;

    if (!regex.test(password.value)) {
        error("rgb(189,87, 138)");
        message("Please choose a very strong password!");
    } else {
        error("rgb(87, 189, 130")
        message("");

        return true;
    }
}
error = color =>
{
    document.body.style.backgroundColor = color

}
message = (text) =>
{
    const fieldError = document.querySelector(".field-error")
    fieldError.textContent = text;
}

nextSlide = (parent, nextform) =>
{
    parent.classList.add("innactive-in")
    parent.classList.remove("active-in")
    nextform.classList.add("active-in")
}
animatedForm()