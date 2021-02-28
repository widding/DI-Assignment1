let likedComments = localStorage.getItem('likedComments')
likedComments = JSON.parse(likedComments) || []
let likes = likedComments.length

let dislikedComments = localStorage.getItem('dislikedComments')
dislikedComments = JSON.parse(dislikedComments) || []
let dislikes = dislikedComments.length

let superLikedComments = localStorage.getItem('superLikedComments')
superLikedComments = JSON.parse(superLikedComments) || []
let superLikes = superLikedComments.length;

let superDislikedComments = localStorage.getItem('superDislikedComments')
superDislikedComments = JSON.parse(superDislikedComments) || []
let superDislikes = superDislikedComments.length;

if(likes) console.info("Liked: ", likes); document.getElementById('likedAmount').innerHTML = likes
if(dislikes) console.info("Disliked: ", dislikes); document.getElementById('dislikedAmount').innerHTML = dislikes
if(superLikes) console.info("Super liked: ", superLikes); document.getElementById('superLikedAmount').innerHTML = superLikes
if(superDislikes) console.info("Super disliked: ",superDislikes); document.getElementById('superDislikedAmount').innerHTML = superDislikes