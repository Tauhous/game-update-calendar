let events = {};

fetch("events.json")
    .then(response => response.json())
    .then(data => {

        events = data;

        createCalendar();

    });

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
function createCalendar(){

}
    
for(let day = 1; day <= daysInMonth; day++){

    let box = document.createElement("div");
    box.className = "day";

if(
    day === today.getDate()
){

    box.classList.add("today");

}

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

    let dayEvents = events[day] || [];

    if(dayEvents.length === 0){
        return;
    }


    document.getElementById("popup-title").textContent =
        monthNames[currentMonth] + " " + day;


    let content = "";

    dayEvents.forEach(event => {

        content += `
            <div class="event">
                <img src="${event.icon}">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
            </div>
        `;

    });


    document.getElementById("popup-items").innerHTML = content;


    document.getElementById("popup").style.display = "block";
}



function closePopup(){

    document.getElementById("popup").style.display = "none";

}
