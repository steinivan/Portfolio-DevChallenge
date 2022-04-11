const tecnologias = ["Angular","Javascript","CSS","Vue","React"]
const tecnologiasPorcentajes =[60,85,92,60,92]
const classTecnology = document.querySelector(".tecnologys")

const tablaTecnology = ()=>{
    classTecnology.innerHTML += `<h4 class="tecnology-container-h4">FRONT END<h4>`

    for (let index = 0; index < tecnologias.length; index++) {
        classTecnology.innerHTML += `
        <div class="tecnology-container-div">
            <p> ${tecnologias[index]} </p> 
            <div class="tecnology-container-barra">
                <div class="tecnology-barra" style="width:${tecnologiasPorcentajes[index]}%;">
                </div>
            </div>
        </div>`
    }
    
}
tablaTecnology()

