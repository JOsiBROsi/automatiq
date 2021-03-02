let prevScrollPosition = window.pageYOffset;
window.onscroll = () => {
    let currentScrollPosition = window.pageYOffset;
    if (prevScrollPosition > currentScrollPosition) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-4rem";
    }
    prevScrollPosition = currentScrollPosition;
}