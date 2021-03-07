const dropzonesWrapper = document.querySelector('.dropzones__wrapper')
const postSection = document.querySelector('.post__section')
const commentSection = document.querySelector('.comment__section')

let showDrawer = () => {
    commentSection.classList.toggle('comment__section--hidden')
    postSection.classList.toggle('post__section--smaller')
}

// Position of currently dragged item, needs restting after drop off.
let position = { x: 0, y: 0 }

// Arrays that store ID's of comments we have reacted to.
// These are stored in LocalStorage, so we can fetch the amount of each on /stats.html.

let greenComments = localStorage.getItem('greenComments')
greenComments = JSON.parse(greenComments) || []

let redComments = localStorage.getItem('redComments')
redComments = JSON.parse(redComments) || []

let yellowComments = localStorage.getItem('yellowComments')
yellowComments = JSON.parse(yellowComments) || []

let blueComments = localStorage.getItem('blueComments')
blueComments = JSON.parse(blueComments) || []

// Helper function that takes a comment element, and disables it
// + resets position, so we can drag the others.
let disableComment = (comment) => {
    //console.log("Disabled comment ", comment)
    interact(comment).unset();
    comment.remove('draggable')
    position = { x: 0, y: 0 }
}

// Function that takes a comment element, and a reaction to it.
// The switch statement handles which array/localstorage object we store the comment ID in
let storeReaction = (comment, reaction) => {
    switch(reaction){
        case "green":
            greenComments.push(comment.id)
            localStorage.setItem('greenComments', JSON.stringify(greenComments));
            console.info(greenComments)
            break;
        case "red":
            redComments.push(comment.id)
            localStorage.setItem('redComments', JSON.stringify(redComments));
            break;
        case "blue":
            blueComments.push(comment.id)
            localStorage.setItem('blueComments', JSON.stringify(blueComments));
            break;
        case "yellow":
            yellowComments.push(comment.id)
            localStorage.setItem('yellowComments', JSON.stringify(yellowComments));
            break;
    }
}


// Function that lets us clear stored reactions
// Mainly used for debugging and demo'ing
let clearReactions = () => {
    localStorage.clear();
    greenComments = []
    redComments = []
    yellowComments = []
    blueComments = []
}

// Function InteractJS that makes any element with class 'draggable' into a draggable element.
interact('.draggable').draggable({
    listeners: {
        start (event) {
        //console.log(event.type, event.target)
            event.target.classList.add("comment--dragging")
            dropzonesWrapper.classList.remove('dropzones--hidden')
            let remainingComments = [...document.querySelectorAll('.comment:not(.comment--dragging)')]
            remainingComments.map((comment, index) => {
                comment.classList.add('comment--hidden')
            })
        },
        move (event) {
            position.x += event.dx
            position.y += event.dy

            event.target.style.transform = `translate(${position.x}px, ${position.y}px)`
        },
        end (event) {
            event.target.classList.remove("comment--dragging")
            dropzonesWrapper.classList.add('dropzones--hidden')
            let remainingComments = [...document.querySelectorAll('.comment:not(.comment--dragging)')]
            remainingComments.map((comment, index) => {
                comment.classList.remove('comment--hidden')
            })
            //console.log(event.type, event.target)
        }
    }
})

// Dislike zone
// First, we define the element which acts as our Dropzone, where we can drop comments into.
const dislikeDropzone = document.getElementById('red-dropzone')

// InteractJS logic that handles the drop event.
// In this case, we run disableComment() on the dropped comment, and stores the reaction with storeReaction.
interact(dislikeDropzone)
    .dropzone({
    overlap: 0.75,
    ondrop: function (event) {
        console.info(event.relatedTarget.id + ' was dropped into ' + event.target.id)
        disableComment(event.relatedTarget)
        storeReaction(event.relatedTarget, 'red')
        event.target.classList.remove('drop-target')
    },
    ondragenter: function (event) {
        var dropzoneElement = event.target

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
      },
      ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
      },
})


// The following code is identitical to the above.
const superDislikeDropzone = document.getElementById('green-dropzone')
interact(superDislikeDropzone)
    .dropzone({
    overlap: 0.75,
    ondrop: function (event) {
        console.info(event.relatedTarget.id + ' was dropped into ' + event.target.id)
        disableComment(event.relatedTarget)
        storeReaction(event.relatedTarget, 'green')
        event.target.classList.remove('drop-target')
    },
    ondragenter: function (event) {
        var dropzoneElement = event.target

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
      },
      ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
      },
})

const superLikeDropzone = document.getElementById('blue-dropzone')
interact(superLikeDropzone)
    .dropzone({
    overlap: 0.75,
    ondrop: function (event) {
        console.info(event.relatedTarget.id + ' was dropped into ' + event.target.id)
        disableComment(event.relatedTarget)
        storeReaction(event.relatedTarget, 'blue')
        event.target.classList.remove('drop-target')
    },
    ondragenter: function (event) {
        var dropzoneElement = event.target

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
      },
      ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
      },
})

const likeDropzone = document.getElementById('yellow-dropzone')
interact(likeDropzone)
    .dropzone({
    overlap: 0.75,
    ondrop: function (event) {
        console.info(event.relatedTarget.id + ' was dropped into ' + event.target.id)
        disableComment(event.relatedTarget)
        storeReaction(event.relatedTarget, 'yellow')
        event.target.classList.remove('drop-target')
    },
    ondragenter: function (event) {
        var dropzoneElement = event.target

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
      },
      ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
      },
})