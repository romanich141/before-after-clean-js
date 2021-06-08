document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const beforeImg = document.querySelector(".before");

    let isActive = false;

    const slide = x => {
        if (!isActive) return; 
        let shift = Math.max(0, Math.min(x, slider.offsetWidth));
        beforeImg.style.width = `${ shift }px`;
    }

    const getOffsetX = e => {
        return e?.offsetX;
    };

    slider.addEventListener('mousedown', e => {
        isActive = true;
        slide(getOffsetX(e))
    });

    slider.addEventListener('mouseup', () => {
        isActive = false;
    });

    slider.addEventListener("mouseleave", () => {
        isActive = false;
    });

    
    slider.addEventListener('mousemove', e => {
        slide(getOffsetX(e))
    });
})