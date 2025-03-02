
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


/*-----------------*\
     BACKGROUND
\*-----------------*/


const infoImage = document.getElementById("infoImage");
const infoCover = document.querySelector(".info-cover");

function updateBackground() {
    const newSrc = infoImage.src;
    infoCover.style.setProperty("--bg-url", `url('${newSrc}')`);
}

updateBackground();

const observer = new MutationObserver(updateBackground);
observer.observe(infoImage, { attributes: true, attributeFilter: ["src"] });


/*-----------------*\
    BUTTON TOGGLE
\*-----------------*/


document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".com-follower-profile-button");

    buttons.forEach((button) => {
        button.addEventListener("click", function (event) {
            // event.preventDefault(); // Prevents unwanted page jumps

            if (this.innerText === "Follow") {
                this.innerText = "Followed";
                this.classList.add("followed");
                alert("You're successfully following this user");
            } else {
                this.innerText = "Follow";
                this.classList.remove("followed");
            }
        });
    });
});

  