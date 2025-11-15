//Array of players with their names and jersey numbers (JSON objects)
let players = [
    {
        name: "Cristiano Ronaldo",
        position: "Forward",
        club: "Al-Nassr",
        jersey: 7
    },
    {
        name: "Kyllian Mbappe",
        position: "Forward",
        club: "Real Madrid",
        jersey: 10
    },
    {
        name: "Federico Valverde",
        position: "Midfielder",
        club: "Real Madrid",
        jersey: 8
    }
];
//Function to validate the input fields of the form
function validatePlayersInput(event) {
    let playerNameInput = event.target["add-player"].value;
    let jerseyNumberInput = event.target["add-player-jersey-number"].value;
    let positionInput = event.target["add-player-position"].value;
    let clubInput = event.target["add-player-club"].value;

    let error = false;

    if (playerNameInput == "") {
        error = true;
        const NAME_ERROR = document.getElementById("name-error");
        NAME_ERROR.style.visibility = "visible";
    }
    if (jerseyNumberInput == "") {
        error = true;
        const JERSEY_ERROR = document.getElementById("jersey-error");
        JERSEY_ERROR.style.visibility = "visible";
    }
    if (positionInput == "") {
        error = true;
        const POSITION_ERROR = document.getElementById("position-error");
        POSITION_ERROR.style.visibility = "visible";
    }
    if (clubInput == "") {
        error = true;
        const CLUB_ERROR = document.getElementById("club-error");
        CLUB_ERROR.style.visibility = "visible";
    }
    if (error) {
        
        console.log("Error");
        event.preventDefault();
    }
    return error;
}
//Function to listen to the form submission event
function listenToEvents() {
    let addPlayersForm = document.getElementById("add-player-form");
    addPlayersForm.addEventListener("submit", addToPlayers);
}
//Function to add a new player to the players array and update the displayed list
function addToPlayers(event) {
    event.preventDefault();
    
    if (validatePlayersInput(event)) {
        return;
    }
    let addPlayer = event.target["add-player"].value;
    let playersJerseyNumber = event.target["add-player-jersey-number"].value;
    let playersPosition = event.target["add-player-position"].value;
    let playersClub = event.target["add-player-club"].value;

    let newPlayer = {
        name: addPlayer,
        position: playersPosition,
        club: playersClub,
        jersey: playersJerseyNumber
    };

    players.push(newPlayer);
    showPlayers();
    event.target.reset();
}
//Function to display the list of players in the HTML
function showPlayers() {
    let allPlayers = document.getElementById("all-players");

    let htmlList = "";
    for (let i = 0; i < players.length; i++) {
        htmlList += `<li>${players[i].jersey} - ${players[i].name} - ${players[i].position} - ${players[i].club}</li>`;
    }

    allPlayers.innerHTML = htmlList;
}
//Object containing club IDs and their corresponding URLs
const CLUB_LINKS = {
    rmd: "https://www.realmadrid.com/",
    psg: "https://en.psg.fr/",
    mutd: "https://www.manutd.com/",
    mcity: "https://www.mancity.com/",
    arsenal: "https://www.arsenal.com/",
    fcb: "https://www.fcbarcelona.com/",
    atm: "https://en.atleticodemadrid.com/",
    liverpool: "https://www.liverpoolfc.com/",
    marseille: "https://www.om.fr/en",
    lyon: "https://www.ol.fr/en",
    atm: "https://www.atleticodemadrid.com/"
};

//Checks the links and looks for an image in the page with the same id, when you pass the cursor over an image that has a valid id it will change the cursor to a pointer
//and when u click on them you will get redirected to the page of destination.
for (const [id, url] of Object.entries(CLUB_LINKS)) {
    const IMG = document.getElementById(id);
    if (IMG) {
        IMG.style.cursor = "pointer";
        IMG.addEventListener("click", () => {
            window.location.href = url;
        });
    }
}
//We call the function so it works in the page.
listenToEvents();
showPlayers();