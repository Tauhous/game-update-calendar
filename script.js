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

const events = {
    5: [
        {
            title: "Game Night",
            icon: "assets/icons/game.png",
            description: "A game scheduled for today."
        }
    ],

    12: [
        {
            title: "Team A vs Team B",
            icon: "assets/icons/game.png",
            description: "First game."
        },
        {
            title: "Team C vs Team D",
            icon: "assets/icons/game.png",
            description: "Second game."
        }
    ],

    20: [
        {
            title: "Tournament",
            icon: "assets/icons/game.png",
            description: "Multiple games happening."
        },
        {
            title: "Final Match",
            icon: "assets/icons/game.png",
            description: "Championship match."
        },
        {
            title: "Awards",
            icon: "assets/icons/trophy.png",
            description: "Awards ceremony."
        }
    ]
};

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

let dayEvents = events[day] || [];

let iconHTML = "";

if(dayEvents.length === 1){

    iconHTML = `
        <img 
        class="icon"
        src="${dayEvents[0].icon}">
    `;

}

else if(dayEvents.length === 2){

    iconHTML = `
        <div class="split-icons">
            <img src="${dayEvents[0].icon}">
            <img src="${dayEvents[1].icon}">
        </div>
    `;

}

else if(dayEvents.length > 2){

    iconHTML = `
        <div class="multi-icon">
            <img src="${dayEvents[0].icon}">
            <span>2+</span>
        </div>
    `;

}


box.innerHTML = `
    <h3>${day}</h3>

    <div onclick="openItem(${day})">
        ${iconHTML}
    </div>
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
