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

function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
  }

let prevSize = [];

let sizeBox = (reactions, color, reactionsTotal) => {
    let boxSize = 15;
    let zIndex = reactions;
    if(reactions !== 0){
        boxSize = (reactions / reactionsTotal * 100)
    }
    let box = document.getElementById(color)
    if(reactions == 0) box.style.background = "rgb(255,255,255)";

    
    box.style.minWidth = boxSize + '%';
    box.style.minHeight = boxSize + '%';
    box.style.maxWidth = 100 - boxSize + '%';
    box.style.maxHeight = 100 - boxSize + '%';

    box.style.width = '100%'
    box.style.height = '100%'

    box.style.zIndex = zIndex;
}

let reactionsTotal = greenReactions + yellowReactions + blueReactions + redReactions

console.info("Green :", greenReactions, "/", reactionsTotal, " = ", (greenReactions / reactionsTotal) * 100 + "%")
console.info("Blue :", blueReactions, "/", reactionsTotal, " = ", (blueReactions / reactionsTotal) * 100 + "%")
console.info("Yellow :", yellowReactions, "/", reactionsTotal, " = ", (yellowReactions / reactionsTotal) * 100 + "%")
console.info("Red :", redReactions, "/", reactionsTotal, " = ", (redReactions / reactionsTotal) * 100 + "%")


sizeBox(greenReactions, "green", reactionsTotal);
sizeBox(blueReactions, "blue", reactionsTotal);

sizeBox(yellowReactions, "yellow", reactionsTotal);
sizeBox(redReactions, "red", reactionsTotal);
