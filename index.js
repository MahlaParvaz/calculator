const buttons = document.querySelectorAll(".button");
const result = document.querySelector(".result-box");
const clear = document.querySelector(".clear");
const back = document.querySelector(".backspace");
/* calculate */
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.value === "back") {
            result.innerText = result.innerText.slice(0, -1);
        } else if (e.target.value === "clear") {
            result.innerText = " ";
        } else if (e.target.value === "result") {
            try {
                result.innerText = eval(result.innerText);
            } catch (error) {
                result.innerText = "Error :(";
            }
        } else {
            result.innerText += e.target.innerText;
        }
    });
});

/* Buttons animation */
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const element = button;
        element.style.boxShadow = "inset -6px -6px 16px 0 rgba(255, 255, 255, .5), inset 6px 6px 16px 0 rgba(209, 205, 199, .5)";
        setTimeout(() => {
            element.style.boxShadow = " 6px 6px 16px 0 rgba(209, 205, 199, .5),-6px -6px 16px 0 rgba(255, 255, 255, .5)";
        }, 500);
    });
})