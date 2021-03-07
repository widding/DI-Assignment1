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

let likedComments = localStorage.getItem('likedComments')
likedComments = JSON.parse(likedComments) || []

let dislikedComments = localStorage.getItem('dislikedComments')
dislikedComments = JSON.parse(dislikedComments) || []

let superLikedComments = localStorage.getItem('superLikedComments')
superLikedComments = JSON.parse(superLikedComments) || []

let superDislikedComments = localStorage.getItem('superDislikedComments')
superDislikedComments = JSON.parse(superDislikedComments) || []

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
        case "like":
            likedComments.push(comment.id)
            localStorage.setItem('likedComments', JSON.stringify(likedComments));
            console.info(likedComments)
            break;
        case "dislike":
            dislikedComments.push(comment.id)
            localStorage.setItem('dislikedComments', JSON.stringify(dislikedComments));
            break;
        case "superDislike":
            superDislikedComments.push(comment.id)
            localStorage.setItem('superDislikedComments', JSON.stringify(superDislikedComments));
            break;
        case "superLike":
            superLikedComments.push(comment.id)
            localStorage.setItem('superLikedComments', JSON.stringify(superLikedComments));
            break;
    }
}


// Function that lets us clear stored reactions
// Mainly used for debugging and demo'ing
let clearReactions = () => {
    localStorage.clear();
    likedComments = []
    dislikedComments = []
    superLikedComments = []
    superDislikedComments = []
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
const dislikeDropzone = document.getElementById('dislike-dropzone')

// InteractJS logic that handles the drop event.
// In this case, we run disableComment() on the dropped comment, and stores the reaction with storeReaction.
interact(dislikeDropzone)
    .dropzone({
    overlap: 0.75,
    ondrop: function (event) {
        console.info(event.relatedTarget.id + ' was dropped into ' + event.target.id)
        disableComment(event.relatedTarget)
        storeReaction(event.relatedTarget, 'dislike')
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
const superDislikeDropzone = document.getElementById('superDislike-dropzone')
interact(superDislikeDropzone)
    .dropzone({
    overlap: 0.75,
    ondrop: function (event) {
        console.info(event.relatedTarget.id + ' was dropped into ' + event.target.id)
        disableComment(event.relatedTarget)
        storeReaction(event.relatedTarget, 'superDislike')
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

const superLikeDropzone = document.getElementById('superLike-dropzone')
interact(superLikeDropzone)
    .dropzone({
    overlap: 0.75,
    ondrop: function (event) {
        console.info(event.relatedTarget.id + ' was dropped into ' + event.target.id)
        disableComment(event.relatedTarget)
        storeReaction(event.relatedTarget, 'superLike')
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

const likeDropzone = document.getElementById('like-dropzone')
interact(likeDropzone)
    .dropzone({
    overlap: 0.75,
    ondrop: function (event) {
        console.info(event.relatedTarget.id + ' was dropped into ' + event.target.id)
        disableComment(event.relatedTarget)
        storeReaction(event.relatedTarget, 'like')
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