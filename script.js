let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('.calculator button');
let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (value == 'AC') {
            string = "";
            input.value = string;
        }
        else if (value == 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        }
        else {
            string += value;
            input.value = string;
        }
    });
});

let themeBtn = document.getElementById("themeToggle");
let icon = document.getElementById("icon");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        icon.textContent = "🌙";
    } else {
        icon.textContent = "☀️";
    }
});

