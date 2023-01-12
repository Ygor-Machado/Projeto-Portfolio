function openMenu(){

    let x = document.getElementById("navigation");

    if (x.className === "navigation") {
        x.className += " menujs";
        document.getElementById("menu").innerHTML = "&Cross;";
    }else {
        x.className = "navigation"
        document.getElementById("menu").innerHTML = "&#9776;";
    }

}