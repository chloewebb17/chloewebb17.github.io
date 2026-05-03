const scroller = document.querySelector("main");

scroller.addEventListener("wheel", (e) => {
    e.preventDefault();
    scroller.scrollLeft += e.deltaY;
}, { passive: false });