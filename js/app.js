const dot = document.querySelector('.dot');
const body = document.querySelector('body');
dot.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        dot.style.backgroundColor = 'white'
    } else {
        dot.style.backgroundColor = 'rgb(50, 55, 63)';
    }
})