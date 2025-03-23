const timer1 = document.querySelector("#timer1")
const btn1 = document.querySelector("#btn1")
const mes = document.querySelector("#message")

let isWorking1 = false;
let i = 61;

let countTimer1 = null;

btn1.addEventListener("click", () => {
    btn1.textContent = "Перезапустити"
    if (isWorking1 === false) {
        countTimer1 = setInterval(() => {
            if (i > 0) {
                i -= 1
                timer1.textContent = i
            } else {
                clearInterval(countTimer1)
            } if (i === 30) {
                mes.textContent = "30 секунд пройшло"
            }
        }, 1000)

        isWorking1 = true
    }
    else {
        clearInterval(countTimer1)
        mes.textContent = ""

        i = 60
        timer1.textContent = i

        countTimer1 = setInterval(() => {
            if (i >= 0) {
                timer1.textContent = i
                i -= 1
            } else {
                clearInterval(countTimer1)
            }
            if (i === 30) {
                mes.textContent = "30 секунд пройшло"
            }
        }, 1000)
    }
})



const timer2 = document.querySelector("#timer2")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn")
const text = document.querySelector("#text")

let isWorking2 = false;
let d = 31;
let k = 0

let countTimer2 = null;
let animationTimer = null

btn2.addEventListener("click", () => {
    btn2.textContent = "Перезапустити"
    if (isWorking2 === false) {
        countTimer2 = setInterval(() => {
            if (d > 0) {
                d -= 1
                timer2.textContent = d
            } else {
                clearInterval(countTimer2)
                btn3.disabled = false
            }

            if (d === 10) {
                timer2.classList.add("decoration")
                animationTimer = setInterval(() => {
                    k += 1
                    timer2.style.transform = `rotate(${5 * k}deg)`;
                }, 10)
            }
        }, 1000)

        isWorking2 = true
    }
    else {
        clearInterval(countTimer2)
        timer2.style.transform = `rotate(0deg)`;
        clearInterval(animationTimer)
        timer2.classList.remove("decoration")
        btn3.disabled = true
        d = 31
        timer2.textContent = d


        countTimer2 = setInterval(() => {
            if (d > 0) {
                d -= 1
                timer2.textContent = d
            } else {
                clearInterval(countTimer2)
                btn3.disabled = false
            }

            if (d === 10) {
                timer2.classList.add("decoration")
                animationTimer = setInterval(() => {
                    k += 1
                    timer2.style.transform = `rotate(${5 * k}deg)`;
                }, 10)
            }
        }, 1000)
    }
})


btn3.addEventListener("click", () => {
    text.textContent = "Ви врятували планету! Ви молодець!"
})
