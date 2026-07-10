const calendar = document.getElementById("calendar");

for(let day = 1; day <= 31; day++){

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
    alert("Opening item for day " + day);
}