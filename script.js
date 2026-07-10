const calendar = document.getElementById("calendar");

const today = new Date();

const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

document.getElementById("month-title").textContent =
    `${monthNames[currentMonth]} ${currentYear}`;


// Find first day of month (0 = Sunday, 6 = Saturday)
const firstDay = new Date(
    currentYear,
    currentMonth,
    1
).getDay();


// Find number of days in month
const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
).getDate();


// Add blank spaces before first day
for(let i = 0; i < firstDay; i++){

    let emptyBox = document.createElement("div");
    emptyBox.className = "day empty";

    calendar.appendChild(emptyBox);
}


// Create actual calendar days
for(let day = 1; day <= daysInMonth; day++){

    let box = document.createElement("div");
    box.className = "day";

    box.innerHTML = `
        <h3>${day}</h3>
        <img 
          class="icon"
          src="assets/icons/game.png"
          onclick="openItem(${day})">
    `;

    calendar.appendChild(box);
}


function openItem(day){
    alert(
        "Opening item for " +
        monthNames[currentMonth] +
        " " +
        day
    );
}
