const props = Object.keys(versions).filter(key => key.includes('v'))
let version = 0

const ui = {
    controls: {
        prev: document.getElementById('prev'),
        next: document.getElementById('next'),
        link: document.getElementById('link'),
        home: document.getElementById('home')
    },
    frame: document.getElementById('version-view'),
    message: document.querySelector('.message')
}

const path = () => versions[props[version]].href

ui.frame.setAttribute('src', path())

ui.controls.prev.addEventListener('click', () => {
    version--
    if (version < 0)
        version = props.length - 1

    if (versions[props[version]].status) {
        ui.message.classList.remove('view')
        ui.frame.src = path()
    }
    else {
        ui.message.classList.add('view')
        ui.frame.src = ''
    }
})

ui.controls.next.addEventListener('click', () => {
    version++
    if (version > props.length - 1)
        version = 0

    if (versions[props[version]].status) {
        ui.message.classList.remove('view')
        ui.frame.src = path()
    }
    else {
        ui.message.classList.add('view')
        ui.frame.src = ''
    }
})

// deployed: https://smkou.github.io/re-portfolio/versions/v4/
const getHttpHost = () => {
    const host = window.location.host
    const http = host === 'localhost:5173' ? 'http://' : 'https://'
    return http + host + '/'
}

ui.controls.link.addEventListener('click', () => {
    const href = getHttpHost() + versions.href + path()
    window.location.href = href
})

ui.controls.home.addEventListener('click', () => {
    const href = getHttpHost()
    window.location.href = href
})
