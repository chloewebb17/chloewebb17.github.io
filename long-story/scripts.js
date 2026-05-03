const scroller = document.querySelector("body");

scroller.addEventListener("wheel", (e) => {
    e.preventDefault();
    scroller.scrollLeft += e.deltaY;
}, { passive: false });