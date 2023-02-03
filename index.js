const body = document.querySelector('body');
body.addEventListener('mousedown', () => {

    body.addEventListener('mousemove', handleEvent);

})
body.addEventListener('mouseup', () => {
    body.removeEventListener('mousemove', handleEvent);
})

function handleEvent(event) {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const span = document.createElement('span');
    span.style.left = xPos + 'px';
    span.style.top = yPos + 'px';

    body.appendChild(span);
}