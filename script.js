const calendar = document.getElementById("calendar");

// Get the current date
const today = new Date();

const currentMonth = today.getMonth(); // January = 0, December = 11
const currentYear = today.getFullYear();

// Find how many days are in this month
const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
).getDate();

// Optional: show the month name
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


// Create calendar days
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
    alert("Opening item for " + monthNames[currentMonth] + " " + day);
}
