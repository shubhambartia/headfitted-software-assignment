function openTab(evt, tab) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    // for remaining element which are not in the active state
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.color = "grey";
        tabcontent[i].style.opacity = "0.5";
        tabcontent[i].style.zIndex = "none";
        tabcontent[i].style.boxShadow = "none";
        tabcontent[i].style.transform = "none";
        tabcontent[i].style.backgroundColor = "white";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // for the element which is on active state
    document.getElementById(tab).style.color = "black";
    document.getElementById(tab).style.backgroundColor = "white";
    document.getElementById(tab).style.opacity = "1";
    document.getElementById(tab).style.zIndex = "100";
    document.getElementById(tab).style.boxShadow = "1px -2px 5px 1px rgba(97,96,97,1)";
    document.getElementById(tab).style.transform = "scale(1.2)";
    evt.currentTarget.className += " active";
}