const myname = document.querySelector(".myname");

let showBorder = true;

setInterval(() => {

    if(showBorder) {

        myname.style.borderRight = "none";
        showBorder = false;

    } else {
        
        myname.style.borderRight = "#b1a296 3px solid";
        showBorder = true;

    }

}, 550);
