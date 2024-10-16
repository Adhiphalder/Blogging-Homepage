 const sidebarLink = document.querySelectorAll('.sidebar__list a')
 
 function linkColor(){
     sidebarLink.forEach(l => l.classList.remove('active-link'))
     this.classList.add('active-link')
 }
 
 sidebarLink.forEach(l => l.addEventListener('click', linkColor))



/*-----------------*\
  #MAIN
\*-----------------*/

const buttons = document.querySelectorAll('.identifier-button');
const sections = document.querySelectorAll('.identifier-body');

const defaultSection = document.getElementById('identifier-body-all');
defaultSection.classList.add('active');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        document.getElementById(target).classList.add('active');
    });
});