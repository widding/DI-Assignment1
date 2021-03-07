let greenComments = localStorage.getItem('greenComments')
greenComments = JSON.parse(greenComments) || []
let greenReactions = greenComments.length

let redComments = localStorage.getItem('redComments')
redComments = JSON.parse(redComments) || []
let redReactions = redComments.length

let yellowComments = localStorage.getItem('yellowComments')
yellowComments = JSON.parse(yellowComments) || []
let yellowReactions = yellowComments.length;

let blueComments = localStorage.getItem('blueComments')
blueComments = JSON.parse(blueComments) || []
let blueReactions = blueComments.length;

if(greenReactions) console.info("Green: ", greenReactions); document.getElementById('likedAmount').innerHTML = greenReactions
if(redReactions) console.info("Red: ", redReactions); document.getElementById('dislikedAmount').innerHTML = redReactions
if(yellowReactions) console.info("Yellow: ", yellowReactions); document.getElementById('superLikedAmount').innerHTML = yellowReactions
if(blueReactions) console.info("Blue: ",blueReactions); document.getElementById('superDislikedAmount').innerHTML = blueReactions

let sizeBox = (reactions, color) => {
    console.info('Sizing ', color, ' box')
    let boxSize = reactions < 10 ? (reactions * 5) + 50 : reactions * 5
    let boxZ = 1;
    let box = document.getElementById(color)
    if(reactions > 2) boxZ = 2;
    if(reactions > 5) boxZ = 3;
    if(reactions > 7) boxZ = 4;
    if(reactions == 0) box.style.background = "rgb(255,255,255)";

    
    box.style.width = boxSize + '%';
    box.style.height = boxSize + '%';
    box.style.zIndex = boxZ;
}


sizeBox(greenReactions, "green");
sizeBox(yellowReactions, "yellow");
sizeBox(blueReactions, "blue");
sizeBox(redReactions, "red");
