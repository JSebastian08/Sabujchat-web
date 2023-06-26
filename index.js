const modal = document.querySelector("#modal")
const abrirModal = document.querySelector("#modal-btn")
const abrirModal2 = document.querySelector("#modal-btn-2")
const abrirModal3 = document.querySelector("#modal-btn-3")
const abrirModal4 = document.querySelector("#modal-btn-4")
const cerrarModal = document.querySelector("#close-modal")

abrirModal2.addEventListener("click", ()=>{
    modal.showModal();
})

abrirModal.addEventListener("click", ()=>{
    modal.showModal();
})

abrirModal3.addEventListener("click", ()=>{
    modal.showModal();
})

abrirModal4.addEventListener("click", ()=>{
    modal.showModal();
})

cerrarModal.addEventListener("click", ()=>{
    modal.close();
})

