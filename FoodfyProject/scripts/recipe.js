const modalOverlay = document.querySelector('.modal-overlay');
const recipes = document.querySelectorAll('.recipe')

for (let recipe of recipes) {
        recipe.addEventListener("click", () => {
            const imgId = recipe.getAttribute("id")
            modalOverlay.classList.add('active')
            modalOverlay.querySelector("img").src = `/assets/${imgId}`
        

    })
}

// The "Function" below could be replaced with arrow function
document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove('active')
})


