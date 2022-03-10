const switcher = document.querySelector('.switch');
switcher.addEventListener('change', (e) => {
    document.body.classList.toggle('dark',
    e.target.checked)
   
})