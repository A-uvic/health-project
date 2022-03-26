//Global variables
const checkBtns = document.getElementById("audiovisual-menu");
const getOptions = document.getElementsByClassName("checkbox");
const getLabel = document.getElementsByClassName ("label");


//Event listeners
checkBtns.addEventListener("click", attAudiovisual);






//Function to att the audiovisual content
function attAudiovisual() {
    const content = document.getElementById("audiovisual-content");

    for (var i = 0; i <= getOptions.length; i++) {
        if (getOptions[i].checked) {
            if (getOptions[i].value == "Img") {
                uncheck()
                underlineSelectedTxt("Img")
                content.innerHTML = `
                <div class="item" id="picture"><img src="assets/Picture1.PNG" alt=""></div>
                <div class="item" id="picture"><img src="assets/Picture2.PNG" alt=""></div>
                <div class="item" id="picture"><img src="assets/Picture3.PNG" alt=""></div>
                `
            } else if (getOptions[i].value == "Video") {
                uncheck()
                underlineSelectedTxt("Video")
                content.innerHTML = `
                <div class="item" id="video"><img src="assets/Video1.PNG" alt=""></div>
                <div class="item" id="video"><img src="assets/Video2.PNG" alt=""></div>
                <div class="item" id="video"><img src="assets/Video3.PNG" alt=""></div>
                <div class="item" id="video"><img src="assets/Video4.PNG" alt=""></div>
                `
            } else if (getOptions[i].value == "Info") {
                uncheck()
                underlineSelectedTxt("Info")
                content.innerHTML = `
                <div class="item" id="Info"><img src="assets/Info.PNG" alt=""></div>
                `
            } else {
                uncheck()
                underlineSelectedTxt("All")
                content.innerHTML = `
                <div class="item" id="picture"><img src="assets/Picture1.PNG" alt=""></div>
                <div class="item" id="video"><img src="assets/Video1.PNG" alt=""></div>
                <div class="item" id="video"><img src="assets/Video2.PNG" alt=""></div>
                <div class="item" id="info"><img src="assets/Info.PNG" alt=""></div>
                <div class="item" id="video"><img src="assets/Video3.PNG" alt=""></div>
                <div class="item" id="picture"><img src="assets/Picture2.PNG" alt=""></div>
                <div class="item" id="picture"><img src="assets/Picture3.PNG" alt=""></div>
                <div class="item" id="video"><img src="assets/Video4.PNG" alt=""></div>
                `
            };
        };
    };
};

// Function to uncheck the radio btns and remove underline from labels
const uncheck = () => {
    for (let i = 0; i < getOptions.length; i++) {
        if (getOptions[i].checked === true) {
            getOptions[i].checked = false;
        };
    };
    for(let i = 0; i < getLabel.length; i++) {
        if (getLabel[i].style.textDecoration == "underline"){
            getLabel[i].style.textDecoration = "none";
        };
    };
};

// Function to spawn sub-menu
const showMenu = () => {
    const subMenu = document.getElementById("sub-menu");
    if (subMenu.style.display == "none" || subMenu.style.display == "") {
        subMenu.style.display = "block"
    } else {
        subMenu.style.display = "none";
    };
};

//Function to spawn search bar
const showSearchBar = () => {
    const subSearch = document.getElementById("form");
    if (subSearch.style.display == "none" || subSearch.style.display == "") {
        subSearch.style.display = "block";
    } else {
        subSearch.style.display = "none";
    };
};

// Function to underline the selected type of audiovisual content
const underlineSelectedTxt = (text) => {
    document.getElementById(text).style.textDecoration = "underline";
}


$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    center:false,
    responsive:{
        0:{
            items:1
        },
        1166:{
            items:2
        },
        1724:{
            items:3
        }
    }
})

var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.btn-card-right').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.btn-card-left').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})