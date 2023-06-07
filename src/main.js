const crashCourses = [
  {
    id: 1,
    title: "The Ultimate HTML Tutorial Course for Complete Beginners",
    category: "HTML",
    link: "3RXlQPkJzCM"
  },
  {
    id: 2,
    title: "HTML Crash Course For Absolute Beginners",
    category: "HTML",
    link: "UB1O30fR-EE"
  },
  {
    id: 3,
    title: "HTML for Beginners [TAGALOG]",
    category: "HTML",
    link: "hhIDcq-nrBI"
  },
  {
    id: 4,
    title: "CSS Full Course [TAGALOG]",
    category: "CSS",
    link: "4tw6hNeGm5g"
  },
  {
    id: 5,
    title: "Learn flexbox the easy way",
    category: "CSS",
    link: "u044iM9xsWU"
  },
  {
    id: 6,
    title: "Learn CSS Grid the easy way",
    category: "CSS",
    link: "rg7Fvvl3taU"
  },
  {
    id: 7,
    title: "Position absolute and responsive layouts",
    category: "CSS",
    link: "H04P5YXVssE"
  },
  {
    id: 8,
    title: "5 simple tips to making responsive layouts the easy way",
    category: "CSS",
    link: "VQraviuwbzU"
  },
  {
    id: 9,
    title: "10 CSS Pro Tips - Code this, NOT that!",
    category: "CSS",
    link: "Qhaz36TZG5Y"
  },
  {
    id: 10,
    title: "Three fun uses for ::before and ::after",
    category: "CSS",
    link: "QFjqxVMwIl8"
  },
  {
    id: 11,
    title: "Responsive design made easy",
    category: "CSS",
    link: "bn-DQCifeQQ"
  },
  {
    id: 12,
    title: "JavaScript Crash Course For Beginners",
    category: "JavaScript",
    link: "hdI2bqOjy3c"
  },
  {
    id: 13,
    title: "Advanced JavaScript Crash Course",
    category: "JavaScript",
    link: "R9I85RhI7Cg"
  },
  {
    id: 14,
    title: "100+ JavaScript Concepts you Need to Know",
    category: "JavaScript",
    link: "lkIFF4maKMU"
  },
  {
    id: 15,
    title: "Build 15 JavaScript Projects - Vanilla JavaScript Course",
    category: "JavaScript",
    link: "3PHXvlpOkf4"
  },
  {
    id: 16,
    title: "JavaScript DOM Manipulation – Full Course for Beginners",
    category: "JavaScript",
    link: "5fb2aPlgoys"
  },
  {
    id: 17,
    title: "BEST JavaScript Tutorial for Beginners (High Quality, Project Based Course)",
    category: "JavaScript",
    link: "DqaTKBU9TZk"
  },
  {
    id: 18,
    title: "Learn JavaScript With This ONE Project!",
    category: "JavaScript",
    link: "E3XxeE7NF30"
  },
  {
    id: 19,
    title: "React 18 Fundamentals Crash Course",
    category: "React",
    link: "jLS0TkAHvRg"
  },
  {
    id: 20,
    title: "React JS Full Course 2023 | Build an App and Master React in 1 Hour",
    category: "React",
    link: "b9eMGE7QtTk"
  },
  {
    id: 21,
    title: "React in 100 Seconds",
    category: "React",
    link: "Tn6-PIqc4UM"
  },
  {
    id: 22,
    title: "Build and Deploy 4 Modern React Apps and Get Hired as a Frontend Developer | Full 10-Hour Course",
    category: "React",
    link: "F627pKNUCVQ"
  },
  {
    id: 23,
    title: "Git & GitHub Crash Course For Beginners",
    category: "Git",
    link: "SWYqp7iY_Tc"
  },
  {
    id: 24,
    title: "Git Explained in 100 Seconds",
    category: "Git",
    link: "hwP7WQkmECE"
  },
  {
    id: 25,
    title: "Git Branching and Merging Crash Course",
    category: "Git",
    link: "hdI2bqOjy3c"
  },
  {
    id: 26,
    title: "Tailwind Crash Course | Project From Scratch",
    category: "Tailwind",
    link: "dFgzHOX84xQ"
  },
  {
    id: 27,
    title: "Tailwind CSS Introduction, Basics & Guided Tutorial",
    category: "Tailwind",
    link: "lCxcTsOHrjo?list=PL0Zuz27SZ-6M8znNpim8dRiICRrP5HPft"
  },
  {
    id: 28,
    title: "Learn Tailwind CSS – Course for Beginners",
    category: "Tailwind",
    link: "ft30zcMlFao"
  },
  {
    id: 29,
    title: "Ultimate Tailwind CSS Tutorial // Build a Discord-inspired Animated Navbar",
    category: "Tailwind",
    link: "pfaSUYaSgRo"
  },
  {
    id: 30,
    title: "Bootstrap CSS Framework - Full Course for Beginners",
    category: "Bootstrap",
    link: "-qfEOE4vtxE"
  },
  {
    id: 31,
    title: "Bootstrap 5 Crash Course",
    category: "Bootstrap",
    link: "Jyvffr3aCp0"
  },
];

// HTML CSS JavaScript React Git Tailwind Bootstrap Vue.js
const courses = document.querySelector(".course-container")
const categoryContainer = document.querySelector(".filter-btns")
const searchInput = document.querySelector("#search")
const searchBtn = document.querySelector("#search-btn")

let categoriesBtn;  // MAKING THE DYNAMIC CATEGORY BUTTONS GLOBAL VARIABLE
let allBtn;   // MAKING THE DYNAMIC ALL CATEGORY BUTTON GLOBAL VARIABLE

window.addEventListener("DOMContentLoaded", function(){
    renderCourse(crashCourses)
    renderCategoryBtns()
})

// =================================== RENDERS THE DYNAMIC CATEGORY BUTTONS =========================================
function renderCategoryBtns(){

  // MAKING THE CATEGORIES UNIQUE
  const filterBtns = crashCourses
  .reduce((accum, course) => {
    if(!accum.includes(course.category)){
      accum.push(course.category)
    }
    return accum
  }, ["All"])
  .map(btn => {
    return   `<button class="text-tertiary py-[0.2rem] md:py-[0.5rem] px-1 font-semibold hover:text-white filter-btn" data-id="${btn}">${btn.toUpperCase()}</button>`
  })
  .join("")

  // RENDERING AS DOM
  categoryContainer.innerHTML = filterBtns

  const all = categoryContainer.querySelector('.filter-btn')
  // PUTTING THE ALL CATEGORY BUTTON INTO GLOBAL VARIABLE
  allBtn = all
  all.classList.add("text-white")

  const categories = categoryContainer.querySelectorAll(".filter-btn")
  // PUTTING THE DYNAMIC CATEGORY BUTTONS INTO GLOBAL VARIABLE
  categoriesBtn = categories

  // RENDERING COURSES BASED ON THE CLICKED BUTTON
  categories.forEach(button => {
    button.addEventListener("click", (e) =>{
        let btn = e.currentTarget.dataset.id;
        categories.forEach(button => {
            button.addEventListener("click", (e) =>{
                let btnC = e.currentTarget
                // CHANGE COLOR OF THE CLICKED BUTTON
                removeColor()
                btnC.classList.add("text-white");
            })
        })
        // FILTERING COURSES
        let filteredCourse = crashCourses.filter(course => {
            if(course.category === btn){
                return course
            }
        })

        if(btn === "All"){
            renderCourse(crashCourses)
        }
        else{
            renderCourse(filteredCourse)
        }

    })
})
}

// REMOVING COLORS OF THE UNCLICKED BUTTONS
function removeColor(){
    categoriesBtn.forEach(otherButton => {
        otherButton.classList.remove("text-white");
    });
}

// ====================================== RENDERS THE DYNAMIC COURSES =========================================
function renderCourse(courseArray){
    const render = courseArray.map(course => {
        return `<div class="flex justify-center flex-col gap-1 pb-1 bg-bColor rounded-md overflow-hidden">
                    <div class="w-full relative h-7 md:h-9">
                        <iframe src="https://www.youtube.com/embed/${course.link}" frameborder="0" allowfullscreen  padding="0px" class=" lazyload z-[999] mt-0 pt-0 opacity-100 w-full absolute left-0 top-0 right-0 h-7 md:h-9"></iframe>
                        <img src="https://i.ytimg.com/vi/uWPkwkvz770/maxresdefault.jpg" alt="Course Thumbnail" class="w-full absolute left-0 top-0 right-0 h-full z-10 opacity-60 pulse pointer-events-none">
                    </div>
                    <h4 class="text-white font-medium text-sm md:text-base px-[0.5rem] md:px-1">${course.title}</h4>
                    <ul class="flex gap-[0.2rem] md:gap-[0.5rem] self-start px-[0.5rem] md:px-1">
                        <li class="text-[#90c53f] px-[0.4rem] md:px-[0.5rem] py-[0.2rem] md:py-[0.3rem] rounded-lg bg-black font-medium flex items-center"> <small class="text-[0.6rem] md:text-[0.8rem]">#coding</small> </li>
                        <li class="text-[#00d8ff] px-[0.4rem] md:px-[0.5rem] py-[0.2rem] md:py-[0.3rem] rounded-lg bg-black font-medium flex items-center"> <small class="text-[0.6rem] md:text-[0.8rem]">#webdev</small> </li>
                        <li class="text-[#f0db4f]  px-[0.4rem] md:px-[0.5rem] py-[0.2rem] md:py-[0.3rem] rounded-lg bg-black font-medium flex items-center"> <small class="text-[0.6rem] md:text-[0.8rem]">#bscpe</small> </li>
                    </ul>
                </div>`
    })
    .join("")

    // RENDERING AS DOM
    courses.innerHTML = render
}

// ================================================ SEARCH BUTTON ============================================
searchBtn.addEventListener("click", function(e){
    e.preventDefault()
    let category = []
    let lowerSearch = (searchInput.value).toLowerCase()

    categoriesBtn.forEach(button => {
            category.push((button.dataset.id).toLowerCase());
    })
    // IF SEARCH INPUT IS ALL
    if(lowerSearch === "all"){
        // REMOVE ALL BUTTON COLORS
        removeColor()
        // ADD COLOR TO ALL CATEGORY BUTTON
        allBtn.classList.add("text-white")
        // JUST RENDER ALL COURSES
        renderCourse(crashCourses)
    }
    // IF CATEGORY BUTTONS CONSIST OF THE SEARCHED CATEGORY
    else if(category.includes(lowerSearch)){
        categoriesBtn.forEach(button => {
            let btnC = (button.dataset.id).toLowerCase()
            // IF BUTTON ID IS EQUAL TO SEARCH INPUT
            if(btnC === lowerSearch){
                // REMOVE ALL BUTTON COLORS
                removeColor()
                // ADD COLOR TO THE SEARCHED CATEGORY
                button.classList.add("text-white");
            }
        })
        // FILTERING COURSES THAT HAS BEEN SEARCHED
        let filteredCourse = crashCourses.filter(course => {
            if(lowerSearch === (course.category).toLowerCase()){
                return course
            }
        })
        renderCourse(filteredCourse)

    }
    // IF THE SEARCH INPUT IS A NON EXISTING COURSE
    else{
        courses.innerHTML = `<div class="flex justify-center absolute right-0 left-0"><h2 class="text-[#f0db4f] text-center text-[1.5rem]"> COURSE NOT FOUND 🚀</h2></div>`
        removeColor()
    }
})


// =============================== WHEN INPUT IS EMPTY THEN SHOW ALL COURSES ======================================
let previousValue = searchInput.value;

searchInput.addEventListener('input', () => {
  const currentValue = searchInput.value;

  if (previousValue && !currentValue && currentValue === "") {
    renderCourse(crashCourses)
    removeColor()
    allBtn.classList.add("text-white")
    previousValue = currentValue;
  }

  // UPDATE THE PREVIOUS INPUT VALUE IF IT HAS CHANGED
  if (previousValue !== currentValue) {
    previousValue = currentValue;
  }
})
