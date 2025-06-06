const nav = {
    toggle: document.getElementById('toggle-nav'),
    nav: document.querySelector('nav'),
    state: false
}

const view = {
    article: document.getElementById('view-story'),
    title: '',
    container: document.querySelector('#view-story .container'),
    btns: document.querySelector('.story-btns'),
    close: document.getElementById('close-view'),
    prev: {},
    next: {},
    ep: -1,
    episodes: {}
}

const read = e => {
    const [, title, ep] = e.target.classList

    if (!title || !writings[title]) {
        console.error(`Invalid title: ${title}`)
        return false
    }

    view.title = title

    if (title === journal.main || journal.series.includes(title)) {

        if (ep === undefined) {
            console.error(`Episode not defined for journal main or series: ${ep}`)
            return false
        }

        view.episodes = Object.keys(writings[title].episodes)
        if (ep < 0 || ep >= view.episodes.length) {
            console.error(`Invalid episode: ${ep}`)
            return false
        }

        view.ep = ep

        view.next = document.createElement('button')
        view.next.append(document.createTextNode('next'))
        view.next.addEventListener('click', () => {
            view.ep++
            if (view.ep >= view.episodes.length)
                view.ep = 0
            displayStory(writings[view.title])
            document.getElementById('top-view').click()
        })
        view.btns.prepend(view.next)

        view.prev = document.createElement('button')
        view.prev.append(document.createTextNode('prev'))
        view.prev.addEventListener('click', () => {
            view.ep--
            if (view.ep < 0)
                view.ep = view.episodes.length - 1
            displayStory(writings[view.title])
            document.getElementById('top-view').click()
        })
        view.btns.prepend(view.prev)
    }

    const work = writings[title]
    displayStory(work)

    view.article.classList.remove('collapsed')
}

const display = set => {
    const e = document.querySelector(`.container.${set}`)
    e.innerHTML = ''

    journal[set].forEach(title => {
        const work = writings[title]
        const dates = work.date.join(', ')
        let html = `<div class="tile><figure><img class="${work.img}" src="assets/${work.img}-bw.jpg"/><figcaption>${work.credit}</figcaption></figure><div class="text">`

        if (set === 'series') {
            html += `<h2>${work.title}</h2><p>${dates}</p>`
            const firstkey = Object.keys(work.episodes)[0]
            const text = work.episodes[firstkey]
            if (typeof text === 'string')
                html += `<p>${text.split('\n')[0]}</p>`
            else {
                const firstpart = Object.keys(text)[0]
                html += `<p>${text[firstpart].split('\n')[0]}</p>`
            }
        }
        else if (set === 'prompts')
            html += `<h3>${work.title}</h3><p>${dates}</p><p>Prompt: ${work.prompt}</p>`
        else if (set === 'posts') 
            html += `<h2>${work.title}</h2><p>${dates}</p><p>${work.text.split('\n')[0].split(/[.?!]/)[0]}</p>`
        
            
        html += `<button class="read-more ${title}${set === 'series' ? ' 0' : ''}">...</button></div></div>`

        e.innerHTML += html
    })

    const readBtns = document.querySelectorAll(`.${set} button.read-more`)
    readBtns.forEach(btn => btn.addEventListener('click', read))

    const images = document.querySelectorAll(`.${set} img`)
    images.forEach(image => {
        image.addEventListener('mouseover', e => {
            const [name] = e.classList
            image.src = `assets/${name}-clr.jpg`
        })
        image.addEventListener('click', e => {
            const [name] = e.classList
            image.src = `assets/${name}-bw.jpg`
        })
        image.addEventListener('mouseleave', e => {
            const [name] = e.classList
            image.src = `assets/${name}-bw.jpg`
        })
    })
}

for (const key of Object.keys(journal))
    if (key === 'main') continue
    else display(key)

const createReadButton = (title, displayTitle, index = -1, seriesHead) => {
    const button = document.createElement('button')
    button.setAttribute('class', `read-more ${title}${index > -1 ? ' ' + index : ''}${seriesHead ? ' nav-head' : ''}`)
    button.append(document.createTextNode(displayTitle))
    button.addEventListener('click', read)
    return button
}

const setupNav = () => {
    const works = Object.keys(journal).reverse()
    for (const work of works) {
        if (work === 'main') {
            const seriesTitle = writings[journal.main].title
            nav.nav.append(createReadButton(journal.main, seriesTitle, 0, true))
            const episodes = Object.keys(writings[journal.main].episodes)
            for (let i = 0; i < episodes.length; ++i)
                nav.nav.append(createReadButton(journal.main, '— ' + episodes[i], i))
        }
        else if (work === 'series')
            journal[work].forEach(title => {
                const seriesTitle = writings[title].title
                nav.nav.append(createReadButton(title, seriesTitle, 0, true))
                const episodes = Object.keys(writings[title].episodes)
                for (let i = 0; i < episodes.length; ++i)
                    nav.nav.append(createReadButton(title, '— ' + episodes[i], i))
            })
        else 
            journal[work].forEach(title => nav.nav.append(createReadButton(title, writings[title].title)))
    }
}
setupNav()

const paragraphs = part => part.split('\n').map(para => `<p>${para}</p>`).join('')

const displayStory = work => {
    view.container.innerHTML = ''
    
    const [written, ...proofread] = work.date
    let content = `<h1>${work.title}</h1><p>Written: ${new Date(written).toLocaleDateString()}</p><p>Proofread: ${proofread.map(date => new Date(date).toLocaleDateString()).join(', ')}</p>`
    if (work.prompt)
        content += `<h3>${work.prompt}</h3>`

    if (view.ep > -1) {
        const {ep, episodes} = view
        const episode = episodes[ep]
        content += `<h2>${episode}</h2>`
        if (typeof work.episodes[episode] !== 'object') {
            content += paragraphs(work.episodes[episode])
        }
        else {
            const parts = Object.keys(work.episodes[episode])
            for (const part of parts) {
                content += `<h3>${part}</h3>`
                content += paragraphs(work.episodes[episode][part])
            }
        }
    } else 
        content += paragraphs(work.text)
    
    view.container.innerHTML = content
}

const sort = (set, criteria) => {
    if (!['title','newest','oldest'].includes(criteria)) {
        console.error('Not a valid order')
        return false
    }


    if (criteria === 'title')
        set.sort((a, b) => writings[a].title.localeCompare(writings[b].title))
    
    if (criteria === 'newest')
        set.sort((a, b) => {
            const adates = writings[a].date.map(date => new Date(date))
            const bdates = writings[b].date.map(date => new Date(date))
            if (last(bdates) - last(adates) === 0)
                if (first(bdates) - first(adates) === 0)
                    return writings[b].title - writings[a].title
                else return first(bdates) - first(adates)
            else return last(bdates) - last(adates)
        })

    if (criteria === 'oldest')
        set.sort((a, b) => {
            const adates = writings[a].date.map(date => new Date(date))
            const bdates = writings[b].date.map(date => new Date(date))
            if (last(adates) - last(bdates) === 0)
                if (first(adates) - first(bdates) === 0) 
                    return writings[a].title - writings[b].title
                else return first(adates) - first(bdates)
            else return last(adates) - last(bdates)
        })
}

nav.toggle.addEventListener('click', () => {
    nav.state = !nav.state
    const add = nav.state ? 'expanded' : 'collapsed'
    const remove = !nav.state ? 'expanded' : 'collapsed'
    nav.toggle.classList.remove(remove)
    nav.toggle.classList.add(add)
    if (nav.state)
        nav.nav.classList.remove('collapsed')
    else
        nav.nav.classList.add('collapsed')
})

const sort_btns = document.querySelectorAll('.sort-options button')
sort_btns.forEach(btn => btn.addEventListener('click', e => {
    const [criteria, set] = e.target.classList
    const activeBtn = document.querySelector(`button.${set}.active`)
    if (activeBtn)
        activeBtn.classList.remove('active')
    sort(journal[set], criteria)
    display(set)
    e.target.classList.add('active')
}))

const read_btns = document.querySelectorAll('button.read-more')
read_btns.forEach(btn => btn.addEventListener('click', read))

view.close.addEventListener('click', () => {
    view.title = ''
    view.prev.remove()
    view.prev = {}
    view.next.remove()
    view.next = {}
    view.ep = -1
    view.episodes = []
    view.container.innerHTML = ''
    view.article.classList.add('collapsed')
})

