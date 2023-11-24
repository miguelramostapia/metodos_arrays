const listado_tareas = [
    {
        id: 1,
        descripcion: 'Tarea número 1',
        realizado: true,
        eliminado: false
    },
    {
        id: 2,
        descripcion: 'Tarea número 2',
        realizado: true,
        eliminado: false
    },
    {
        id: 3,
        descripcion: 'Tarea número 3',
        realizado: true,
        eliminado: false
    },
    {
        id: 4,
        descripcion: 'Tarea número 4',
        realizado: false,
        eliminado: false
    },
    {
        id: 5,
        descripcion: 'Tarea número 5',
        realizado: false,
        eliminado: false
    },
    {
        id: 6,
        descripcion: 'Tarea número 6',
        realizado: true,
        eliminado: true
    }]
/*
const texto_html=document.querySelector(".resumen")
let texto_de_paso=""
let cantidad_tareas = listado_tareas.length
let cantidad_tareas_realizadas=0
for (let item_tarea of listado_tareas){
    if(item_tarea.realizado==true && item_tarea.eliminado==false){
        cantidad_tareas_realizadas=cantidad_tareas_realizadas+1
    }
}
texto_de_paso=`<p>Total : ${cantidad_tareas}</p><br>
               <p>Realizadas : ${cantidad_tareas_realizadas}</p>`
texto_html.innerHTML=texto_de_paso

const texto_html_tarea=document.querySelector(".tareas")
let texto_de_tareas="ID     DESCRIPCION          REALIZADA"
for (let item_tarea of listado_tareas){
    if(item_tarea.eliminado==false){
        texto_de_tareas+=
        `<p>${item_tarea.id}    ${item_tarea.descripcion}    <input type=checkbox>${item_tarea.realizado}  <i class="fa-regular fa-trash-can fa-lg"></i>  ${item_tarea.eliminado}</p>`
        }
}
texto_html_tarea.innerHTML=texto_de_tareas*/


function add_tarea(){
    let cantidad_tareas = listado_tareas.length+1
    var value_test = document.querySelector(".uname").value;
    value_test.innerHTML=""
    listado_tareas.push({id:cantidad_tareas,descripcion:value_test,realizado:false,eliminado:false})
    refresh_pagina_inicio()
}

function refresh_pagina_inicio(){
    const texto_html=document.querySelector(".resumen")
    let texto_de_paso=""
    let cantidad_tareas = listado_tareas.length
    let cantidad_tareas_realizadas=0
    for (let item_tarea of listado_tareas){
        if(item_tarea.realizado==true && item_tarea.eliminado==false){
            cantidad_tareas_realizadas=cantidad_tareas_realizadas+1
        }
    }
    texto_de_paso=`<p>Total : ${cantidad_tareas}</p><br>
                <p>Realizadas : ${cantidad_tareas_realizadas}</p>`
    texto_html.innerHTML=texto_de_paso

    const texto_html_tarea=document.querySelector(".tareas")
    let texto_de_tareas="ID     DESCRIPCION          REALIZADA"
    for (let item_tarea of listado_tareas){
        if(item_tarea.eliminado==false){
            texto_de_tareas+=
            `<p>${item_tarea.id}    ${item_tarea.descripcion}    <input type=checkbox>${item_tarea.realizado}  <i class="fa-regular fa-trash-can fa-lg"></i>  ${item_tarea.eliminado}</p>`
            }
    }
    texto_html_tarea.innerHTML=texto_de_tareas
    var value_test = document.querySelector(".uname").value;
    console.log(value_test)
    value_test=""
    value_test.innerHTML=""
    console.log(value_test)
}