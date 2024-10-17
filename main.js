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



function linkColor(){
    sidebarLink.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
}

sidebarLink.forEach(l => l.addEventListener('click', linkColor))



document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown3-click-button');
    const dropdownContent = document.querySelector('.section-dropdown3');

    // Show the dropdown when the button is clicked
    dropdownButton.addEventListener('click', function(event) {
        event.stopPropagation();  // Prevent the click from propagating
        dropdownContent.classList.toggle('show');
    });

    // Hide the dropdown when clicking outside the dropdown
    document.addEventListener('click', function(event) {
        if (!dropdownContent.contains(event.target) && !dropdownButton.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});