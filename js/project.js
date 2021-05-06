document.addEventListener("DOMContentLoaded", function() {
    //get all desired element from dom
    let sections = document.querySelectorAll('section');
    let ul = document.createElement("ul");
    let bttn = document.createElement("button");
    //create menu button
    bttn.innerHTML = '<i class="fa fa-bars"></i> Menu';
    bttn.setAttribute('id', "slide-down");
    bttn.classList.add("sc");


    ul.appendChild(bttn)
    let dummy = document.createDocumentFragment();

    for (let i = 0; i < sections.length; i++) {
        // sections[i].addEventListener('click', {


        // })
        // console.log(sections[i].firstElementChild.firstElementChild.textContent)
        let li = document.createElement("li");
        li.setAttribute("href", `#${sections[i].id}`);

        li.classList.add("link");

        li.innerHTML = sections[i].firstElementChild.firstElementChild.textContent;
        //add listener to link to scroll to desired section
        li.addEventListener("click", function(event) {
            let links = document.getElementsByClassName("link")
            for (let i = 0; i < sections.length; i++) {
                links[i].classList.remove("active");

            }

            console.log(event)
            ul.style.top = `-${ul.clientHeight}px`
            sections[i].scrollIntoView({ behavior: "smooth" })
            li.classList.add("active")

        })
        dummy.appendChild(li);


    }
    //append dummy element to ul at once 
    ul.appendChild(dummy);
    document.getElementById("headEl").insertAdjacentElement("afterbegin", ul)
    let timer = null
        //add listner to scroll event to hide the nav bar and show it when stop scrolling
    window.addEventListener('scroll', function(event) {
        // console.log(ul);

        // alert(ul.clientHeight)
        if (timer !== null) {
            clearTimeout(timer)
        }
        timer = setTimeout(function() {
            ul.style.top = `0px`;
            //ul.classList.remove('slide-up');
            //ul.classList.remove('slide-upp');
        }, 150)
        if (ul.clientHeight > 40) {
            // ul.classList.add('slide-upp');
            ul.style.top = `-${ul.clientHeight}px`

        } else {
            // ul.classList.add('slide-up');
            ul.style.top = `-${ul.clientHeight}px`

        }
        let links = document.getElementsByClassName("link")

        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove("active")
        }
        for (let i = 0; i <= sections.length; i++) {
            if (sections[i] !== undefined) {
                let position = sections[i].getBoundingClientRect()

                if (position.top >= 0 && position.bottom <= window.innerHeight) {

                    links[i].classList.add("active")

                    // alert(`section${} is completely visible`)
                    //console.log("section3 is completely visible");
                }
            }
        }

        console.log(event);
    })
    let btn = document.getElementById("toTopBtn");
    //add listner to to top button to scroll to top
    btn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                lef: 0,
                behavior: "smooth"
            })
        })
        //add listner to menu button in small screen
    bttn.addEventListener("click", function() {
        ul.classList.toggle("expand");
        let links = document.getElementsByClassName("link")
        for (let i = 0; i < links.length; i++) {
            links[i].classList.toggle("visible")
        }

    })
    for (let i = 0; i < sections.length; i++) {
        sections[i].addEventListener("click", function() {
            // alert(sections[i].lastElementChild.lastElementChild)
            sections[i].lastElementChild.classList.toggle("toggle-collaps");
        })
    }

})