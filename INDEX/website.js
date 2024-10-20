let slideshow = document.querySelector('.slideshow');
let form = document.querySelector('.form');
let mouseDownAt = 0;
let left = 0;

slideshow.onmousedown = (e) => {
    mouseDownAt = e.clientX;
}

slideshow.onmouseup = () => {
    mouseDownAt = 0;
    slideshow.style.userSelect = 'unset';
    slideshow.style.cursor = 'unset';
    form.style.pointerEvents = 'unset';
    form.classList.remove('left');
    form.classList.remove('right');
}

slideshow.onmousemove = e => {
    if(mouseDownAt == 0) return;
    slideshow.style.userSelect = 'none';
    slideshow.style.cursor = 'grab';
    form.style.pointerEvents = 'none';

    if(e.clientX > mouseDownAt){
        form.classList.add('left');
        form.classList.remove('right');
    }else if(e.clientX < mouseDownAt){
        form.classList.add('right');
        form.classList.remove('left');
    }
    // increase or decrease the speed
    // by changing the value of "speed"
    let speed = 5;
    let leftTemporary = left + ((e.clientX - mouseDownAt) / speed);
    let leftLimit = form.offsetWidth - slideshow.offsetWidth / 2;

    if(leftTemporary < 0 && Math.abs(leftTemporary) < leftLimit){
        form.style.setProperty('--left', left + 'px');
        left = leftTemporary;
        mouseDownAt = e.clientX;
    }
}
