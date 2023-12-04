const versions = [ 'v0/', 'v1/', 'v2/', 'v3/', 'v4/' ]
const statuses = [ false, false, false, false, true ]
let version = versions.length - 1

const ui = {
    controls: {
        prev: document.getElementById('prev'),
        next: document.getElementById('next'),
        link: document.getElementById('link'),
        home: document.getElementById('home')
    },
    frame: document.getElementById('version-view')
}

ui.frame.setAttribute('src', versions[version])

ui.controls.prev.addEventListener('click', () => {
    version--
    if (version < 0)
        version = versions.length - 1
    if (statuses[version])
        frame.src = versions[version]
})

ui.controls.next.addEventListener('click', () => {
    version++
    if (version > versions.length - 1)
        version = 0
    if (statuses[version])
        frame.src = versions[version]
})

// deployed: https://smkou.github.io/re-portfolio/versions/v4/
const getHttpHost = () => {
    const host = window.location.host
    const http = host === 'localhost:5173' ? 'http://' : 'https://'
    return http + host + '/'
}

ui.controls.link.addEventListener('click', () => {
    window.location.href = getHttpHost() + 'versions/' + version[version]
})

ui.controls.home.addEventListener('click', () => {
    window.location.href = getHttpHost()
})
