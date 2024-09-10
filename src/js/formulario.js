const inputs = document.querySelectorAll('.input')
const btn = document.querySelector('.btn');


btn.addEventListener('click', function (event) {
    event.preventDefault();
    inputs.forEach(input => {
        const aviso = input.nextElementSibling;

        if (input.value !== '') {
            input.classList.add('valido');
            input.classList.remove('incompleto');
            aviso.style.opacity = '0';
        } else {
            input.classList.remove('valido');
            input.classList.add('incompleto');
            aviso.style.opacity = '1';
        }
    });
});


