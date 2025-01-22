document.addEventListener('DOMContentLoaded', () => {
    const circle = document.querySelector('.circle');
    
    circle.addEventListener('click', () => {
        circle.classList.add('animate');
    });
});
