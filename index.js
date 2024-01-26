    
    
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
            this.parentNode.style.margin = '-3px 5px';
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
    */

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










    // let input = document.getElementById("input");
    // let allTag = [];
            // document.querySelectorAll('#projects li').forEach(function(li) {
            //     allTag.push(li.textContent);
            // });

    //     li.addEventListener('click', () => {
    //         let input = document.getElementById('input').value;
    //         input = input.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g, "");
            
    //         let reversedInput = input.split('').reverse().join('');

    //         if (input === reversedInput) {
    //             document.querySelector('.result-input').innerHTML = `Yes, ${input} is a palindrome!`;
    //         } else {
    //             document.querySelector('.result-input').innerHTML = `No, ${input} is not a palindrome!`;
    //         }



    //     });
