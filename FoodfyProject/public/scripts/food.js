const modalOverlay = document.querySelectorAll('.modal')
const shows = document.querySelectorAll('.mostrar')
const closes = document.querySelectorAll('.close-modal')


for (let show of shows) {
    for(let modal of modalOverlay) {
        for(let close of closes) {
            if(show.getAttribute('id') == modal.getAttribute('id')) {
                show.addEventListener("click", () => {
                    modal.classList.add('active')
                    close.classList.add('active')
                    show.classList.add('active')
                    document.querySelector(`#${modal.getAttribute('id')}`).classList.add('active')
                })
            }
        }
    }
}

for (let show of shows) {
    for(let modal of modalOverlay) {
        for(let close of closes) {
            if(close.getAttribute('id') == modal.getAttribute('id')) {
                close.addEventListener("click", () => {
                    modal.classList.remove('active')
                    close.classList.remove('active')
                    show.classList.remove('active')
                    document.querySelector(`#${modal.getAttribute('id')}`).classList.remove('active')
                })
            }
        }
    }
}



