const versions = [ 'v0/', 'v1/', 'v2/', 'v3/', 'v4/' ]
const statuses = [ true, false, false, false, true ]
let version = versions.length - 1

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

ui.frame.setAttribute('src', versions[version])

ui.controls.prev.addEventListener('click', () => {
    version--
    if (version < 0)
        version = versions.length - 1

    if (statuses[version]) {
        ui.message.classList.remove('view')
        ui.frame.src = versions[version]
    }
    else {
        ui.message.classList.add('view')
        ui.frame.src = ''
    }
})

ui.controls.next.addEventListener('click', () => {
    version++
    if (version > versions.length - 1)
        version = 0

    if (statuses[version]) {
        ui.message.classList.remove('view')
        ui.frame.src = versions[version]
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
    const href = getHttpHost() + 'versions/' + versions[version]
    window.location.href = href
})

ui.controls.home.addEventListener('click', () => {
    const href = getHttpHost()
    window.location.href = href
})
