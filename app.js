console.log('Conectado')
/* Reloj */
function actualizarFecha(){
    const fecha=new Date();
    const opciones={weekday:'long',year:'numeric',month:'long',day:'numeric'};
    const fechaString=fecha.toLocaleDateString(undefined,opciones);
    document.querySelector('.fecha').textContent=fechaString;
}
function actualizarTiempo(){
    const fecha=new Date();
    const hora=fecha.getHours();
    const minuto=fecha.getMinutes();
    const segundo=fecha.getSeconds();

    const tiempoString=`${formatoTiempo(hora)}:${formatoTiempo(minuto)}:${formatoTiempo(segundo)}`;
    document.querySelector('.tiempo').textContent=tiempoString;

}

function formatoTiempo(tiempo){
    return tiempo<10? `0${tiempo}` : tiempo;
}

actualizarFecha()
setInterval(actualizarTiempo,1000)

/* Fin Reloj */
/* Lista */
const input=document.getElementById('ingresarTarea');
const boton=document.querySelector('button');
const listaTareas=document.getElementById('listaTareas');

function agregarTarea(){
    if(input.value){
        let tareaNueva=document.createElement('div');
        tareaNueva.classList.add('tarea');

        let texto=document.createElement('p');
        texto.innerText=input.value;
        tareaNueva.appendChild(texto);

        let iconos=document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        let completar =document.createElement('i');
        completar.classList.add('bi','bi-check-circle-fill','icono-completar');
        completar.addEventListener('click',completarTarea)
  
        let eliminar=document.createElement('i');
        eliminar.classList.add('bi','bi-trash3-fill','icono-eliminar');
        eliminar.addEventListener('click',eliminarTarea)

        iconos.append(completar,eliminar);

        listaTareas.appendChild(tareaNueva);
        limpiarCampo();


    }else{
        alert('Por favor de ingresar una tarea')
    }
}

function completarTarea(e){
    let tarea=e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');

}
function eliminarTarea(e){
    let tarea=e.target.parentNode.parentNode;
    tarea.remove();

}

boton.addEventListener('click',(agregarTarea));
input.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        agregarTarea();
        limpiarCampo();

    }
})
function limpiarCampo(){
    document.getElementById('ingresarTarea').value='';
}


/* Fin Lista */