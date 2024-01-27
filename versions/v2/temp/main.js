const setHtml = document.querySelectorAll('.set-html')
const setCss = document.querySelectorAll('.set-css')

setHtml.forEach(btn => btn.addEventListener('click', () => {
    document.querySelector('body').setAttribute('class', 'html')
}))

setCss.forEach(btn => btn.addEventListener('click', () => {
    document.querySelector('body').setAttribute('class', 'css')
}))