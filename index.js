


// change color in navbar li when mouseenter and mouseleave
document.querySelectorAll('.topnav__item a').
forEach(function(a) {
    a.addEventListener('mouseenter', function() {
        this.parentNode.style.backgroundColor = '#EAD7BB';
        this.parentNode.style.margin = '-2px 5px';
        this.parentNode.style.padding = '3px 0px';
        this.parentNode.style.borderRadius = '30px';
        this.style.color = '#113946';
    });

    a.addEventListener('mouseleave', function() {
        this.parentNode.style.backgroundColor = '';
        this.parentNode.style.margin = '';
        this.parentNode.style.padding = '';
        this.parentNode.style.borderRadius = '';
        this.style.color = '';
    });
});

// activate the hamburger menu

const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 40em)');
const topNavMenu = document.querySelector('.topnav__menu');
const main = document.querySelector('main');
const body = document.querySelector('body');

function openMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'true');
  topNavMenu.removeAttribute('inert');
  topNavMenu.removeAttribute('style');
  main.setAttribute('inert', '');
  // bodyScrollLockUpgrade.disableBodyScroll(body);
  btnClose.focus();
}

function closeMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'false');
  topNavMenu.setAttribute('inert', '');
  main.removeAttribute('inert');
  // bodyScrollLockUpgrade.enableBodyScroll(body);
  btnOpen.focus();

  setTimeout(() => {
    topNavMenu.style.transition = 'none';
  }, 500);
}

function setupTopNav(e) {
  if (e.matches) {
    // is mobile
    console.log('is mobile');
    topNavMenu.setAttribute('inert', '');
    topNavMenu.style.transition = 'none';
  } else {
    // is tablet/desktop
    console.log('is desktop');
    topNavMenu.removeAttribute('inert');
    closeMobileMenu();
  }
}

setupTopNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', function (e) {
  setupTopNav(e);
});



    
// ---------------------------------------------------------

// remove .start-animation class when animation ends
document.querySelector('.start-animation').addEventListener('animationend', (event) => {
    if (event.animationName === 'text-clip') {
        event.target.classList.remove('start-animation');
    }
    }); 

// ball animation


function animateBalls(containerId, numBalls) {
  const container = document.querySelector(containerId);
  const existingBalls = container.querySelectorAll('.ball');
  const colors = ["#f1bb6e", "#BCA37F", "#EAD7BB"];

  if (existingBalls.length > numBalls) {
    // If there are more existing balls than needed, remove the excess
    for (let i = numBalls; i < existingBalls.length; i++) {
      existingBalls[i].remove();
    }
  } else {
    // If there are less existing balls than needed, add more
    for (let i = existingBalls.length; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add("ball");
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.bottom = `${Math.floor(Math.random() * 100)}vh`; // Change 'top' to 'bottom'
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random()}em`;
      ball.style.height = ball.style.width;
      
      container.append(ball);
      
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * -12 // Change '12' to '-12' to reverse the direction
      };

      setTimeout(() => {
        let anim = ball.animate(
          [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
          ],
          {
            duration: (Math.random() + 1) * 2000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
          }
        );
      }, 4000);
    }
  }
}

// Call the function with the IDs of the containers and the number of balls


// media query for balls animation

// Call the function immediately when the page loads
if (window.innerWidth < 1400) {
  animateBalls('#ball-container', 30);
} else if (window.innerWidth < 1700)  {
  animateBalls('#ball-container', 50);
}else {
  animateBalls('#ball-container', 60);
}

// Also call the function when the window is resized
window.addEventListener('resize', function() {
  if (window.innerWidth < 1700) {
    animateBalls('#ball-container', 30);
  } else {
    animateBalls('#ball-container', 60);
  }
});


// the problem is that balls in project aren't distributed evenly
// create fixed background with the balls

// ---------------------------------------------------------


    /*  Steps & logic for building the filter function
    STEPS:

    1. array empty that add tags when clicked
    2. filter the array with the tags inside each project
    3. the projects that have the tags will be shown and the rest will be hidden
    

    // 1. array empty that add tags when clicked


let allTag = [];
document.querySelectorAll('#projects li').forEach(function(li) {
    li.addEventListener('click', function() {

        if (!allTag.includes(this.textContent.toLocaleLowerCase())) {
          allTag.push(this.textContent.toLocaleLowerCase());
          console.log(allTag);
        } else if (allTag.includes(this.textContent.toLocaleLowerCase())) {
          allTag = allTag.filter(tag => tag !== this.textContent.toLocaleLowerCase());
          console.log(allTag);
        }

        // 2. filter the array with the tags inside each project

        // 2.1 get the tags inside each project
        let tagProject = [];
        document.querySelectorAll('.tag-code').forEach(function(tag, index) {
            let obj = {
                id: index,
                text: tag.textContent.toLocaleLowerCase()
            };
            tagProject.push(obj);
        });

        // If allTag is empty, reset the display property of all projects
        if (allTag.length === 0) {
          document.querySelectorAll('.project').forEach(function(project) {
            project.style.display = '';
          });
        } else {
          // 2.2 filter the array with the tags inside each project
          for (let i = 0; i < allTag.length; i++) {
            for (let j = 0; j < tagProject.length; j++) {
              let words = tagProject[j].text.split(' ');

              //     3. the projects that equal tags will be shown and the rest will be hidden

              if (words.includes(allTag[i])) {
                document.querySelectorAll('.project')[tagProject[j].id].style.display = '';

              } else {
                document.querySelectorAll('.project')[tagProject[j].id].style.display = 'none';
              }
            }
          }
        }

    });
});

*/


document.querySelectorAll('#projects li').forEach(function(li) {
    li.addEventListener('click', function() {
        let allTag = []; 

        // If the clicked tag is not "Show All", add it to the allTag array
        if (this.textContent.toLocaleLowerCase() !== 'show all') {
            allTag.push(this.textContent.toLocaleLowerCase());
        }

        // 2.1 get the tags inside each project
        let tagProject = [];
        document.querySelectorAll('.tag-code').forEach(function(tag, index) {
            let obj = {
                id: index,
                text: tag.textContent.toLocaleLowerCase()
            };
            tagProject.push(obj);
        });

        // If allTag is empty or "Show All" is clicked, reset the display property of all projects
        if (allTag.length === 0) {
          document.querySelectorAll('.project').forEach(function(project) {
            project.style.display = '';
          });
        }  else {
          // 2.2 filter the array with the tags inside each project
          document.querySelectorAll('.project').forEach(function(project, index) {
            let words = tagProject[index].text.split(' ');

            // Check if any of the project's tags match any of the selected tags
            let matches = words.some(word => allTag.includes(word));

            // If there's a match, show the project, otherwise hide it
            project.style.display = matches ? '' : 'none';
          });
        }
    });
});

// change color buttons when clicked 

document.querySelectorAll('#projects li').forEach(function(li) {
    li.addEventListener('click', function() {

        // Reset the background color of all li elements
        document.querySelectorAll('#projects li').forEach(function(li) {
            li.style.backgroundColor = 'grey';
        });
        
        // Set the background color of the clicked li
        this.style.backgroundColor = 'rgb(63, 62, 62)';
        
    });
});


// ---------------------------------------------------------




