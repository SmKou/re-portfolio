const select = document.querySelector('.pages-dropdown')
const toggle = document.getElementById('pages-btn')

toggle.addEventListener('click', () => {
    const isExpanded = select.classList.contains('expand')
    if (isExpanded)
        select.classList.remove('expand')
    else
        select.classList.add('expand')
})

select.addEventListener('mouseleave', () => {
    select.classList.remove('expand')
})