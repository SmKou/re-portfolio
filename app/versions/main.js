function data() {
    const versions = [
        { title: 'The Profile', present: true, completed: false },
        { title: 'The Magazine', present: true, completed: false },
        { title: 'The Design Index', present: true, completed: false },
        { title: 'The Show', present: false, completed: false },
        { title: 'The People in Pages', present: true, completed: true },
        { title: 'Epicodus Resume', present: true, completed: true }
    ]

    const ui = {
        version: 0,
        controls: {
            prev: document.getElementById('prev'),
            next: document.getElementById('next'),
            link: document.getElementById('link'),
            home: document.getElementById('home')
        },
        frame: document.getElementById('version-view'),
        message: document.querySelector('.message')
    }

    const path = () => `v${ui.version}/`

    return { versions, ui, path }
}

function init() {
    const data = data()

    data.ui.frame.setAttribute('src', data.path())

    const toggle_view = present => {
        if (present)
            data.ui.message.classList.remove('view')
        else
            data.ui.message.classList.add('view')

        data.ui.frame.src = present ? data.path() : ''
    }

    data.ui.controls.prev.addEventListener('click', () => {
        data.ui.version--
        if (data.ui.version < 0) data.ui.version = data.versions.length - 1
        toggle_view(data.versions[data.ui.version].present)
    })

    data.ui.controls.next.addEventListener('click', () => {
        data.ui.version++
        if (data.ui.version > data.versions.length - 1) data.ui.version = 0
        toggle_view(data.versions[data.ui.version].present)
    })

    const get_host = () => {
        const host = window.location.host
        const http = host === 'localhost:5173' ? 'http://' : 'https://'
        return http + host + '/'
    }

    data.ui.controls.link.addEventListener('click', () => {
        const href = `${get_host()}/versions/${data.path()}/`
        window.location.href = href
    })

    data.ui.controls.home.addEventListener('click', () => {
        const href = get_host()
        window.location.href = href
    })
}

init()
