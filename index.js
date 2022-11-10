let homePoints = 0;
let guestPoints = 0;

let homePointsElem = document.getElementById("home-point-text");
let guestPointsElem = document.getElementById("guest-point-text");

function addPointsHome(points){
    homePoints += points;
    homePointsElem.textContent = homePoints;
}

function addPointsGuest(points){
    guestPoints += points;
    guestPointsElem.textContent = guestPoints;
}

function newgame(){
    homePoints = 0;
    guestPoints = 0;
    homePointsElem.textContent = homePoints;
    guestPointsElem.textContent = guestPoints;
}