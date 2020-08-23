const dot = document.querySelector('.dot');
const body = document.querySelector('body');
dot.addEventListener('click', () => {
    body.classList.toggle('dark');
})