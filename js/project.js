function addSection() {
    let sections = document.querySelectorAll('section').length;
    let main = document.querySelector("main");
    let section = document.createElement("section");
    section.id = `section${sections+1}`;
    let div = document.createElement("div");
    div.className = 'specific';
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    h3.innerText = `section ${sections+1}`;
    p.innerText = `
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione laudantium aut vel, modi debitis explicabo quos voluptates necessitatibus amet sequi magnam molestias ullam possimus enim minima nam, tenetur impedit doloribus! Lorem ipsum dolor, sit amet

    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis animi autem doloremque aliquam nihil consequuntur! Ab excepturi quod veniam ad tempore sit, qui quia quas id ratione facere laboriosam praesentium! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Repellat, quidem debitis ea eveniet tenetur dolorem et sint non nulla dolorum! Doloribus, consequuntur ab? Fugiat non repudiandae nobis porro, mollitia earum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae, vel dolores obcaecati voluptate suscipit ullam ipsa saepe consequuntur id, odit incidunt impedit iste aliquam molestiae qui tenetur, magni hic unde lo Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quisquam odio
                    doloremque nisi laboriosam impedit, inventore repellat, exercitationem quas voluptas ipsam id? Ipsum aut eligendi hic aliquid explicabo dolorum voluptatibus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ut, natus
                    iste fuga praesentium nihil eius maiores perspiciatis quam consequuntur tenetur libero aspernatur deserunt, ipsam non esse eos veniam nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti magnam, ipsam officiis
                    quidem, odit ullam animi ex aliquam accusantium aut quibusdam repellendus suscipit, necessitatibus nam! Excepturi, sint facilis? Iste!
    `;
    div.appendChild(h3);
    div.appendChild(p);
    section.appendChild(div);
    main.appendChild(section);

}

function updateLinks() {

    //get all desired element from dom
    let sections = document.querySelectorAll('section');
    document.getElementsByTagName("ul")[0].remove();
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

            // console.log(event)
            ul.style.top = `-${ul.clientHeight}px`
            sections[i].scrollIntoView({ behavior: "smooth" })
            li.classList.add("active")

        })
        dummy.appendChild(li);


        //     })
        //     for (let i = 0; i < sections.length; i++) {
        //         sections[i].addEventListener("click", function() {
        //             // alert(sections[i].lastElementChild.lastElementChild)
        //             sections[i].lastElementChild.classList.toggle("toggle-collaps");
        //         })
        //     }

        // }
        // //append dummy element to ul at once 
        // ul.appendChild(dummy);
        // // document.getElementById("headEl").removeChild()
        // document.getElementById("headEl").insertAdjacentElement("afterbegin", ul)

    }
    ul.appendChild(dummy);
    document.getElementById("headEl").insertAdjacentElement("afterbegin", ul)
    let timer = null
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

                    if (position.top >= -40 && (position.bottom <= window.innerHeight + 40 || position.bottom <= window.innerHeight - 20)) {

                        links[i].classList.add("active")

                        // alert(`section${} is completely visible`)
                        //console.log("section3 is completely visible");
                    }
                }
            }

            // console.log(event);
        })
        // bttn.removeEventListener("click", function() {
        //             // alert(bttn.id)
        //             ul.classList.toggle("expand");
        //             let links = document.getElementsByClassName("link")
        //             for (let i = 0; i < links.length; i++) {
        //                 links[i].classList.toggle("visible")
        //             }

    //     })
    bttn.addEventListener("click", function() {
        console.log(bttn.id)
        ul.classList.toggle("expand");
        let links = document.getElementsByClassName("link")
        for (let i = 0; i < links.length; i++) {
            links[i].classList.toggle("visible")
        }
    })

}



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("add-section").addEventListener("click", function() {
        addSection();
        updateLinks();
    })

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

            // console.log(event)
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

        // console.log(event);
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