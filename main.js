 const sidebarLink = document.querySelectorAll('.sidebar__list a')
 
 function linkColor(){
     sidebarLink.forEach(l => l.classList.remove('active-link'))
     this.classList.add('active-link')
 }
 
 sidebarLink.forEach(l => l.addEventListener('click', linkColor))



const likeDislikeDiv = document.querySelector('.like-dislike');
const upvote = document.querySelector('.like-dislike .upvote');
const downvote = document.querySelector('.like-dislike .downvote');

upvote.addEventListener('click', () => {
    likeDislikeDiv.classList.toggle('highlight-upvote'); 
    likeDislikeDiv.classList.remove('highlight-downvote'); 
});

downvote.addEventListener('click', () => {
    likeDislikeDiv.classList.toggle('highlight-downvote');
    likeDislikeDiv.classList.remove('highlight-upvote'); 
});
