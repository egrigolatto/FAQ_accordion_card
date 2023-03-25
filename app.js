const  preguntas = document.querySelectorAll('.preguntas');

preguntas.forEach(pregunta =>{
    pregunta.addEventListener('click', ()=>{
        if(pregunta.classList.contains('desplegar')){
            pregunta.classList.remove('desplegar');
        }else{
            preguntas.forEach(pregunt => {
               pregunt.classList.remove('desplegar');
            })
            pregunta.classList.toggle('desplegar')
        }
    })
})