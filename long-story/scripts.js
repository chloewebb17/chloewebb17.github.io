const scroller = document.querySelector("html");

scroller.addEventListener("wheel", (e) => {
    e.preventDefault();
    scroller.scrollLeft += e.deltaY;
}, { passive: false });