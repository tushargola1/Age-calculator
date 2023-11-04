let dayValue = document.getElementById("day").value;
let monthValue = document.getElementById("month").value;
let yearValue = document.getElementById("year").value;
let dayLabel = document.getElementById("day-label");
let day = document.getElementById("day");
let dayError = document.getElementById("day-error");
let monthLabel = document.getElementById("month-label");
let month = document.getElementById("month");
let monthError = document.getElementById("month-error");
let yearLabel = document.getElementById("year-label");
let year = document.getElementById("year");
let yearError = document.getElementById("year-error");
let days = document.getElementById("days");
let months = document.getElementById("months");
let years = document.getElementById("years");
let submit = document.getElementById("submit");

function isLeapYear(year) {
  return (
    (year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0)
  );
}

function submitForm() {
  dayLabel.classList.remove("label-error");
  dayError.innerText = "hidden";
  day.classList.remove("input-error");

  monthLabel.classList.remove("label-error");
  monthError.innerText = "hidden";
  month.classList.remove("input-error");

  yearLabel.classList.remove("label-error");
  year.classList.remove("input-error");
  yearError.innerText = "hidden";

  days.innerText = "--";
  months.innerText = "--";
  years.innerText = "--";

  if (day.value == "") {
    dayLabel.classList.add("label-error");
    day.classList.add("input-error");
    dayError.classList.remove("hidden");
    dayError.innerText = "This field is required";
  } else if (day.value < 1 || day.value > 31) {
    dayLabel.classList.add("label-error");
    day.classList.add("input-error");
    dayError.innerText = "Must be a valid date";
  }

  if (month.value == "") {
    monthLabel.classList.add("label-error");
    month.classList.add("input-error");
    monthError.classList.remove("hidden");
    monthError.innerText = "This field is required";
  } else if (month.value < 1 || month.value > 12) {
    monthLabel.classList.add("label-error");
    month.classList.add("input-error");
    monthError.innerText = "Must be a valid date";
  }

  if (year.value == "") {
    yearLabel.classList.add("label-error");
    year.classList.add("input-error");
    yearError.classList.remove("hidden");
    yearError.innerText = "This field is required";
  } else if (year.value > new Date().getFullYear()) {
    yearLabel.classList.add("label-error");
    year.classList.add("input-error");
    yearError.innerText = "Must be in the past";
  }

  if (
    (day.value > 30 &&
      (month.value == 4 ||
        month.value == 6 ||
        month.value == 9 ||
        month.value == 11)) ||
    (day.value >= 29 && month.value == 2 && !isLeapYear(year.value))
  ) {
    dayLabel.classList.add("label-error");
    day.classList.add("input-error");
    dayError.innerText = "Must be a valid date";
  }

  if (
    dayLabel.classList.contains("label-error") ||
    monthLabel.classList.contains("label-error") ||
    yearLabel.classList.contains("label-error")
  ) {
    return;
  } else {
    let dayValue = parseInt(day.value);
    let monthValue = parseInt(month.value) - 1;
    let yearValue = parseInt(year.value);

    const birthDate = new Date(yearValue, monthValue, dayValue);
    const currentDate = new Date();

    const difference = currentDate - birthDate;

    const age = new Date(difference);

    const calculatedYears = age.getFullYear() - 1970;
    const calculatedMonths = age.getMonth();
    const calculatedDays = age.getDate() - 1;

    days.innerText = calculatedDays;
    months.innerText = calculatedMonths;
    years.innerText = calculatedYears;
    yearError.classList.add("hidden")
    monthError.classList.add("hidden")
    dayError.classList.add("hidden")
  }
}
