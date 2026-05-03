const scroller = document.querySelector("html");

scroller.addEventListener("wheel", (e) => {
    e.preventDefault();
    scroller.scrollRight += e.deltaY;
}, { passive: false });