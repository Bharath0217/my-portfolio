var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname){
    // Remove active class from all tabs and contents
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu =document.getElementById("menu")

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}