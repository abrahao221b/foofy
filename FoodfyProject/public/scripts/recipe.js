const recipes = document.querySelectorAll('.recipe')

for (let recipe of recipes) {
        recipe.addEventListener("click", () => {
            const imgId = recipe.getAttribute("id")
            window.location.href = `/food?id=${imgId}`
    })
}


