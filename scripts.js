const modalOverlay = document.querySelector('.modal-overlay')
const receitas = document.querySelectorAll('.receita')

for (let receita of receitas) {
    receita.addEventListener("click", function() {
        const imagemId = receita.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `/imagens/${imagemId}`

    })
} 

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove('active')
})
