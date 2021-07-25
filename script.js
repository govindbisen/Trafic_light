const circles = document.querySelectorAll('.circle');
let activelight = 0;

setInterval(changeLight,1000);


function changeLight(){
    circles[activelight].className = 'circle';
    activelight++;

    if(activelight>2){
        activelight = 0;
    }

    const currentLight = circles[activelight];
    currentLight.classList.add(currentLight.getAttribute('color'));
}