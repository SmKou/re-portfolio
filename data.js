function g_data() {
    return { status: true, message: 'Data is working' }
}

const load = () => {
    console.log('loaded')
    const data = g_data()
    delete g_data
    if (data)
        console.log(`status: ${data.status} - ${data.message}`)
}

window.addEventListener('load', load, false)