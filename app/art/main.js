const gallery = document.getElementById('gallery')
const view = document.getElementById('view')

const initArtwork = () => {
    const files = Object.keys(art)
    for (const file of files) {
        const figure = document.createElement('figure')
        const img = document.createElement('img')
        img.id = file.split('-')[0]
        img.src = 'assets/' + file
        img.setAttribute('class', art[file])
        figure.append(img)
        gallery.append(figure)
    }
}

initArtwork()