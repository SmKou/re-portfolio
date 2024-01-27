const alpha_opt_btns = document.querySelector('.option-btns.alpha')
const topic_opt_btns = document.querySelector('.option-btns.topics')

const createButton = (option, classes, func) => {
    const button = document.createElement('button')
    button.setAttribute('class', classes)
    button.append(document.createTextNode(option.toUpperCase()))
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

    document.querySelectorAll(`dt.${topic}, dd.${topic}`).forEach(entry => entry.classList.remove('collapsed'))
    document.querySelectorAll(`dt:not(.${topic}), dd:not(.${topic})`).forEach(entry => entry.classList.add('collapsed'))

    const activeBtn = document.querySelector('button.topic.active')
    if (activeBtn)
        activeBtn.classList.remove('active')
    e.target.classList.add('active')
}

const topics = ['html', 'css', 'tag', 'font', 'shape', 'layout', 'element']

topics.forEach(topic => topic_opt_btns.append(createButton(topic, `topic ${topic}`, filterTopic)))