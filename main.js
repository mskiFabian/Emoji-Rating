const starsEl = document.querySelectorAll('.fa-star')
const emojisEl = document.querySelectorAll('.fa-regular')
const colorsArr = ['red', 'orange', 'yellow', 'lightgreen', 'green']

starsEl.forEach((starEl, index) => {
    starEl.addEventListener('click', () => {
        updateRating(index)
    })
})

function updateRating(index) {
    starsEl.forEach((starEl, i) => {
        if(i < index + 1) {
            starEl.classList.add('active')
        } else {
            starEl.classList.remove('active')
        }
    })

    emojisEl.forEach(emojiEl => {
        emojiEl.style.transform = `translateX(-${index * 50}px)`
        emojiEl.style.color = colorsArr[index]
    })
}