    
    
    // remove .start-animation class when animation ends
    document.querySelector('.start-animation').addEventListener('animationend', (event) => {
        if (event.animationName === 'text-clip') {
            event.target.classList.remove('start-animation');
        }
        }); 
    
        // change color in navbar li when mouseenter and mouseleave
        document.querySelectorAll('#main-nav a').
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
    
    // search for tag



    // let selectedTag = [];
    
    // let example = document.querySelector('tag-code').textContent
    // console.log(example);

    /* 
    STEPS:

    1. array empty that add tags when clicked
    2. filter the array with the tags inside each project
    3. the projects that have the tags will be shown and the rest will be hidden
    

    // 1. array empty that add tags when clicked


    let allTag = [];
    document.querySelectorAll('#projects li').forEach(function(li) {
        li.addEventListener('click', function() {
            allTag.push(this.textContent.toLocaleLowerCase());
            console.log(allTag);

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
            console.log(tagProject);

            // 2.2 filter the array with the tags inside each project

            if (allTag === tagProject) {
                console.log('yes');
            } else {
                console.log('no');
            }

            // not working -> try to loop though TagProject, and don't make as an object, just filter directly.

        });
    });

*/








// ball animation


function animateBalls(containerId, numBalls) {
  const container = document.querySelector(containerId);
  const colors = ["#f1bb6e", "#BCA37F", "#EAD7BB"];
  
  for (let i = 0; i < numBalls; i++) {
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

// Call the function with the IDs of the containers and the number of balls
animateBalls('#ball-container', 30);

// the problem is that balls in project aren't distributed evenly
// create fixed background with the balls