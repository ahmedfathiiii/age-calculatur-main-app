let dayIn = document.querySelector(".dayInput")
let monthIn = document.querySelector(".monthInput")
let yearIn = document.querySelector(".yearInput")
let submit = document.querySelector(".button")
let dayOut = document.querySelector(".dayOutput")
let monthOut = document.querySelector(".monthOutput")
let yearOut = document.querySelector(".yearOutput")
let newdate = new Date(Date.now())
let monthNow = newdate.getMonth() + 1
let dateNow = newdate.getDate()
let yearNow = newdate.getFullYear()


function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}


submit.addEventListener("click", () => {
    if (valid()) {
        if (monthNow < monthIn.value && dateNow < dayIn.value) {
            dayOut.innerHTML = getDaysInMonth(yearNow, monthIn.value) + dateNow - dayIn.value;
            monthOut.innerHTML = 11 + monthNow - monthIn.value;
            yearOut.innerHTML = newdate.getFullYear() - yearIn.value - 1;
        } else if (dateNow < dayIn.value && monthNow == monthIn.value) {
            dayOut.innerHTML = getDaysInMonth(yearNow, monthIn.value) + dateNow - dayIn.value;
            monthOut.innerHTML = monthNow - monthIn.value;
            yearOut.innerHTML = newdate.getFullYear() - yearIn.value - 1;
        }
        else if (monthNow < monthIn.value) {
            monthOut.innerHTML = 12 + monthNow - monthIn.value;
            yearOut.innerHTML = newdate.getFullYear() - yearIn.value - 1;
            dayOut.innerHTML = dateNow - dayIn.value;
        } else if (dateNow < dayIn.value) {
            dayOut.innerHTML = getDaysInMonth(yearNow, monthIn.value) + dateNow - dayIn.value;
            monthOut.innerHTML = monthNow - monthIn.value;
            yearOut.innerHTML = newdate.getFullYear() - yearIn.value;
        }
        else {
            yearOut.innerHTML = newdate.getFullYear() - yearIn.value;
            monthOut.innerHTML = monthNow - monthIn.value;
            dayOut.innerHTML = dateNow - dayIn.value;
        }
    }
})

function valid() {
    let inputs = document.querySelectorAll("input")
    let validate = true
    inputs.forEach((i => {
        let parent = i.parentElement
        if (dayIn.value > 31) {
            dayIn.parentElement.querySelector("small").innerHTML = "Must be valid date"

            i.style.borderColor = "var(--Lightred"
            validate = false
        } else if (monthIn.value > 12) {
            monthIn.parentElement.querySelector("small").innerHTML = "Must be valid month"
            i.style.borderColor = "var(--Lightred"
            validate = false
        } else if (yearIn.value > yearNow) {
            yearIn.parentElement.querySelector("small").innerHTML = "Must be in the past"
            i.style.borderColor = "var(--Lightred"
            validate = false
        } else if (!i.value) {
            parent.querySelector("small").innerHTML = "The field is required"
            i.style.borderColor = "var(--Lightred"
            validate = false
        } else {
            validate = true
            parent.querySelector("small").innerHTML = ""
            i.style.borderColor = "var(--Lightgrey)"

        }
    }))
    return validate
}


