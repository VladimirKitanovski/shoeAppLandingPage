function showNav() {
    console.log("this is working");
    var x = document.getElementById("responsive-nav");
    if (x.className === "responsive-nav") {
        x.className += " unfold"; 
    } else {
        x.className = "responsive-nav";
    }
}


// JavaScript
window.sr = ScrollReveal(); 

sr.reveal('#header img.phone', {
    duration: 800,
    origin: "bottom",
    distance: "100px"
});

sr.reveal('#features div.car', {
    delay: 200,
    duration: 800,
    origin: "bottom",
    distance: "100px"
});

sr.reveal('#features div.shoe', {
    delay: 400,
    duration: 800,
    origin: "bottom",
    distance: "100px"
});

sr.reveal('#features div.device', {
    delay: 600,
    duration: 800,
    origin: "bottom",
    distance: "100px"
});

sr.reveal('#discount .offer', {
    delay: 400,
    duration: 800,
    origin: "left",
    distance: "300px"
});

sr.reveal('#discount .discountLayout', {
    delay: 400,
    duration: 800,
    origin: "right",
    distance: "300px"
});