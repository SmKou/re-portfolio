const alpha_opt_btns = document.querySelector('.option-btns.alpha')
const topic_opt_btns = document.querySelector('.option-btns.topics')

const measure = document.querySelector('.measure')

const createButton = (option, classes, func) => {
    const button = document.createElement('button')
    button.setAttribute('class', classes)
    button.innerHTML = option.toUpperCase()
    button.addEventListener('click', func)
    return button
}

/* Filter: alphabetical */

const filterAlpha = e => {
    const letter = e.target.innerHTML.toLowerCase()
        
    if (e.target.classList.contains('active')) {
        document.querySelectorAll(`section:not(.${letter})`).forEach(section => section.classList.remove('collapsed'))
        e.target.classList.remove('active')
        return true
    }

    document.querySelector(`section.${letter}`).classList.remove('collapsed')
    document.querySelectorAll(`section:not(.${letter})`).forEach(section => section.classList.add('collapsed'))

    const activeBtn = document.querySelector('button.alpha.active')
    if (activeBtn)
        activeBtn.classList.remove('active')
    e.target.classList.add('active')
}

const alphaClasses = new Array(26)
for (let i = 0; i < alphaClasses.length; ++i)
    alphaClasses[i] = String.fromCharCode('a'.charCodeAt(0) + i)

alphaClasses.forEach(alpha => alpha_opt_btns.append(createButton(alpha, `alpha ${alpha}`, filterAlpha)))

/* Filter: topic */

const filterTopic = e => {
    const topic = e.target.innerHTML.toLowerCase()

    if (e.target.classList.contains('active')) {
        document.querySelectorAll(`dt:not(.${topic}), dd:not(.${topic})`).forEach(entry => entry.classList.remove('collapsed'))
        e.target.classList.remove('active')
        return true
    }

    document.querySelectorAll(`dt.${topic}, dt.${topic} + dd`).forEach(entry => entry.classList.remove('collapsed'))
    document.querySelectorAll(`dt:not(.${topic}), dt:not(.${topic}) + dd`).forEach(entry => entry.classList.add('collapsed'))

    const activeBtn = document.querySelector('button.topic.active')
    if (activeBtn)
        activeBtn.classList.remove('active')
    e.target.classList.add('active')

    // const sections = document.querySelectorAll('section')
    // for (const section of sections) {
    //     const [alpha] = section.classList
    //     if (document.querySelector(`section.${alpha} dt.${topic}`))
    //         continue

    //     let allCollapsed = true
    //     const ds = document.querySelectorAll(`section.${alpha} dt, section.${alpha} dd`)
    //     for (const d of ds)
    //         if (!d.classList.contains('collapsed')) {
    //             allCollapsed = false
    //             break
    //         }
    //     if (allCollapsed)
    //         section.classList.add('collapsed')
    // }
}

const topics = ['html', 'tag', 'css', 'font', 'shape', 'layout', 'ui-element', 'programming', 'resource']

topics.forEach(topic => {
    const classTopic = topic.includes('-') ? topic.split('-').join(' ') : topic
    const button = createButton(topic, `topic ${classTopic}`, filterTopic)
    measure.append(button)
    const width = 12 + button.clientWidth
    button.remove()
    button.style.minWidth = width + 'px'
    topic_opt_btns.append(button)
})

/* Populate fonts */
const numbers = new Array(10)
for (let i = 0; i < numbers.length; ++i)
    numbers[i] = i
const samples = new Array(alphaClasses.length).concat(numbers)
for (let i = 0; i < alphaClasses.length; ++i)
    samples[i] = alphaClasses[i].toUpperCase() + alphaClasses[i]

const fontexs = document.querySelectorAll('dt.font + dd div.sample')
fontexs.forEach(fontex => {
    const spans = samples.map(sample => {
        const span = document.createElement('span')
        span.innerHTML = sample
        return span
    })
    spans.forEach(span => fontex.append(span))
})