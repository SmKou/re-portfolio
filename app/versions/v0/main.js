const bg = document.getElementById('background')
const portrait = document.getElementById('portrait')

const app = {
    portraits: [],
    current: 0,
    interval: '',
    timeout: ''
}

const initBg = () => {
    app.timeout = ''
    const width = document.getElementById('portraits').offsetWidth
    const height = document.getElementById('portraits').offsetHeight
    while(bg.firstChild)
        bg.removeChild(bg.firstChild)

    let x = 1, y = 1
    while (Math.abs(Math.floor(width / x) - 32) > 10)
        x++
    while (Math.abs(Math.floor(height / y) - 32) > 10)
        y++

    const color = () => Math.floor(Math.random() * 255)
    for (let i = 0; i < x * y; ++i) {
        const block = document.createElement('div')
        block.style.background = `rgb(${color()}, ${color()}, 200)`
        bg.append(block)
    }

    bg.style.gridTemplateColumns = `repeat(${x}, 1fr)`

    console.log(x, y, width, height, bg.childNodes.length)
}

const initPortraits = () => {
    const arr = new Array(28)
    for (let i = 0; i < arr.length; ++i)
        arr[i] = `assets/${i + 1 < 10 ? '0' : ''}${i + 1}-min.png`
    portrait.style.backgroundImage = `url(${arr[0]})`
    app.portraits = arr
}

const next = () => {
    let index = app.current
    while (index === app.current)
        index = Math.floor(Math.random() * app.portraits.length)
    portrait.style.backgroundImage = `url(${app.portraits[index]})`
    app.current = index
}

initBg()
initPortraits()
app.interval = setInterval(() => next(), 2400)

const resize = () => {
    if (app.timeout)
        clearTimeout(app.timeout)

    app.timeout = setTimeout(() => initBg(), 400)
}

window.onresize = resize