const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    let a = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let c = Math.floor(Math.random() * 256)
    let rgbColorValue = `rgb(${a},${b},${c})`
    color.textContent = rgbColorValue
    document.body.style.backgroundColor = rgbColorValue
})
