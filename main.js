const ui = {
    path: [],
    host: (window.location.host === 'localhost:5173' ? 'http://' : 'https://') + window.location.host,
    aside: {
        toggle: document.getElementById('toggle-aside'),
        state: true,
        elem: document.querySelector('aside')
    },
    section: document.querySelector('section'),
    input: document.querySelector('input')
}

const getPath = () => ui.path.length ? '~/' + ui.path.join('/') : 'Home'

const getBashError = (cmd, error) => 'bash: ' + cmd + ': ' + error

const getError = (error, term = '') => 'error: ' + (term ? term + ': ' : '') + error

const getNode = (path = ui.path.slice(), node = portfolio) => {
    let shift
    while(shift = path.shift())
        if (node.hasOwnProperty(shift))
            node = node[shift]
        else
            return false
    return node
}

const addBashPath = () => {
    const path = 'Re-Portfolio SMKOU ~/' + ui.path.join('/')
    const p = document.createElement('p')
    p.setAttribute('class','bash')
    p.append(document.createTextNode(path))
    ui.section.append(p)
}

const addLine = (output, isCmd = false) => {
    const line = document.createElement('p')
    line.append(document.createTextNode((isCmd ? '$ ' : '') + output))
    ui.section.append(line)
}

const messages = {
    'cnet': 'All C#/.Net projects are not likely to be completed.'
}

const cmd = {
    cd: {
        help: [
            'do: change path',
            'format: cd [<path>] | cd [..]',
            'args: path <prop/prop/...>'
        ],
        error: [
            'no such property', 
            'cannot cd into property value'
        ],
        do: function(args) {
            let subs = args[0].slice().split('/')
            let sub
            while(sub = subs.shift())
                if (sub === '.')
                    continue
                else if (sub === '..')
                    ui.path.pop()
                else {
                    const node = getNode()

                    if (!node.hasOwnProperty(sub)) {
                        addLine(getError(this.error[0], sub))
                        return false
                    }

                    if (typeof node[sub] !== 'object') {
                        addLine(getError(this.error[1]))
                        addLine('use: stat <path>')
                        return false
                    }

                    ui.path.push(sub)
                }
        }
    },
    clear: {
        help: [
            'do: clear console',
            'format: clear',
            'args: none'
        ],
        do: function(args) { ui.section.innerHTML = '' }
    },
    count: {
        help: [
            'do: get count of subentities',
            'format: count <path> <terms>',
            'args: path <prop/prop/...>[/], (search) terms <term=value,term,...>',
            'warning: uses strict equivalence and string.includes for term=value'
        ],
        error: [
            'invalid path',
            'cannot be counted'
        ],
        do: function(args) { 
            let path, terms
            for (const arg of args)
                if (arg.includes('/'))
                    path = arg.split('/')
                else if (arg.includes(','))
                    terms = arg.split(',')
                else 
                    if (getNode(ui.path.slice().concat(arg)))
                        path = [arg]
                    else
                        terms = [arg]

            const subs = ui.path.slice().concat(path)
            const node = getNode(subs)

            if (!node) {
                addLine(getError(this.error(0)))
                return false
            }

            if (typeof node !== 'object') {
                addLine('value: ' + node)
                addLine(getError(this.error[1]))
                return false
            }

            if (node.type !== 'dir' && node.type !== 'vers') {
                addLine(getError(this.error[1]))
                return false
            }
            
            if (terms) {
                const search = {}
                for (let i = 0; i < terms.length; ++i)
                    if (terms[i].includes('=')) {
                        const t = terms[i].split('=')
                        search[t[0]] = { val: t[1], count: 0 }
                    } else
                        search[terms[i]] = { val: '', count: 0 }

                const entities = Object.keys(node).filter(key => key !== 'type' && key !== 'href')
                for (const entity of entities) {
                    for (const term of Object.keys(search))
                        if (entities[entity].hasOwnProperty(term)) {
                            if (search[term].val) {
                                if (search[term].val === entity[term] 
                                    || (
                                        (typeof entity[term] === 'string' || Array.isArray(entity[term])) 
                                        && entity[term].includes(search[term].val)
                                    ))
                                        search[term].count++
                            }
                            else
                                search[term].count++
                        }
                }

                const title = subs[subs.length - 1]
                const p = document.createElement('p')
                p.append(document.createTextNode(title + ':'))
                ui.section.append(p)

                const props = Object.keys(search)
                for (const prop of props) {
                    const p = document.createElement('p')
                    p.append(document.createTextNode('No. of ' + (search[prop].val ? `${prop}=${search[prop].val}` : prop) + ': ' + search[prop].count))
                    ui.section.append(p)
                }
            } 
            else {
                const title = subs[subs.length - 1]
                const props = Object.keys(node).filter(key => key !== 'type' && key !== 'href')

                const p = document.createElement('p')
                p.append(document.createTextNode('No. of ' + title + ': ' + props.length))
                ui.section.append(p)

                const p2 = document.createElement('p')
                p2.append(document.createTextNode('Every entity in ' + title + ' has ' + props.join(', ')))
                ui.section.append(p2)
            }
        }
    },
    descript: {
        help: [
            'do: view a statement or description',
            'format: descript <path> <[now]>',
            'args: path <prop/prop/...>, now = description of status'
        ],
        error: [
            'invalid path',
            'no such property'
        ],
        do: function(args) {
            let now, path
            for (const arg of args)
                if (arg === 'now')
                    now = true
                else
                    if (arg.includes('/'))
                        path = arg.split('/')
                    else
                        path = [arg]

            const subs = ui.path.slice().concat(path)
            const node = getNode(subs)

            if (!node) {
                addLine(getError(this.error[0]))
                return false
            }

            if (typeof node !== 'object') {
                addLine('value: ' + node)
                addLine(getError(this.error[1]))
            }

            const prop = now ? 'now' : 'description'
            if (node.hasOwnProperty(prop)) {
                let text = ''
                if (now && typeof node[prop] === 'object') {
                    if (node[prop].hasOwnProperty('message'))
                        text += messages[node[prop].message]

                    if (node[prop].hasOwnProperty('additional'))
                        text += node[prop].additional
                }
                else
                    text = Array.isArray(node[prop]) ?
                        node[prop][0] + (node[prop].length > 1 ? '...' : '')
                        : node[prop]
                addLine(prop + ': ' + text)
            }
            else
                addLine(getError(this.error[1]))
        }
    },
    find: {
        help: [ 
            'do: get list of subentities',
            'format: find <path> <terms>',
            'args: path <prop/prop/...>, terms <term=value,term,...>'
        ],
        error: [
            'invalid path',
            'cannot be searched',
            'not found'
        ],
        do: function(args) { 
            let path, terms
            for (const arg of args)
                if (arg.includes('/'))
                    path = args.split('/')
                else if (arg.includes(','))
                    terms = arg.split(',')
                else
                    if (getNode(ui.path.slice().concat(arg)))
                        path = [arg]
                    else
                        terms = [arg]

            const subs = ui.path.slice().concat(path)
            const node = getNode(subs)

            if (!node) {
                addLine(getError(this.error[0]))
                return false
            }

            switch (true) {
                case typeof node !== 'object':
                    addLine('value: ' + node)
                case node.type !== 'dir' && node.type !== 'vers':
                    addLine(getError(this.error[1]))
                    return false
            }

            if (terms) {
                const search = {}
                for (let i = 0; i < terms.length; ++i) {
                    const t = terms[i].includes('=') ?
                        terms[i].split('=')
                        : terms[i]
                    search[t] = {
                        val: Array.isArray(t) ? t[0] : '',
                        props: []
                    }
                }

                const entities = Object.keys(node).filter(key => key !== 'type' && key !== 'href')
                const keys = Object.keys(search)
                for (const entity of entities) {
                    for (const term of keys)
                        if (entities[entity].hasOwnProperty(term)) {
                            if (search[term].val) {
                                if (search[term].val === entity[term]
                                    || (
                                        (typeof entity[term] === 'string' || Array.isArray(entity[term]))
                                        && entity[term].includes(search[term].val)
                                    ))
                                        search[term].props.push(entity)
                            }
                            else
                                search[term].props.push(entity)
                        }
                }

                const title = subs[subs.length - 1]
                const p = document.createElement('p')
                p.append(document.createTextNode(title + ':'))
                ui.section.append(p)

                const props = Object.keys(search)
                for (const prop of props) {
                    const p = document.createElement('p')
                    p.append(document.createTextNode((search[prop].val ? `${prop}=${search[prop].val}` : prop) + ': ' + search[prop].props.join(', ')))
                }
            }
            else {
                const title = subs[subs.length - 1]
                const props = Object.keys(node).filter(key => key !== 'type' && key !== 'href')

                const p = document.createElement('p')
                p.append(document.createTextNode('Find in: ' + props.join(', ')))
                ui.section.append(p)

                const p2 = document.createElement('p')
                p2.append(document.createTextNode('Every entity in ' + title + ' has ' + props.join(', ')))
                ui.section.append(p2)
            }

            addLine(getError('not implemented yet', 'find')) 
        }
    },
    go: {
        help: [
            'do: follow a link',
            'format: go <path> <property>',
            'args: path <prop/prop/...>, property'
        ],
        error: [
            'not a link',
            'more than one link available'
        ],
        do: function(args) {
            addLine(getError('not implemented yet', 'go')) 

            /* go | go <path> | go <property> | go <path> <property> */
        }
    },
    help: {
        help: [
            'do: list of commands or command information',
            'format: help <command>',
            'args: name of command'
        ],
        error: ['command not found'],
        do: function(args) {
            if (!args.length) {
                for (const key of Object.keys(cmd)) {
                    const p = document.createElement('p')
                    p.append(document.createTextNode('command: ' + key))
                    ui.section.append(p)

                    const props = cmd[key].help
                    for (const prop of props)
                        addLine(prop)
                }
                return true
            }

            const key = args[0]
            if (!cmd.hasOwnProperty(key))
                addLine(getBashError(key, this.error[0]))
            else {
                addLine(`help ${key}`, true)
                const props = cmd[key].help
                for (const prop of props)
                    addLine(prop)
            }
        }
    },
    ls: {
        help: [
            'do: view list of properties in current path',
            'format: ls <path> | ls [help]',
            'args: path <prop/prop/...>'
        ],
        error: ['cannot use on an entity'],
        do: function(args) {
            const hasHelp = args.includes('help')

            const subs = args ? args[0] !== 'help' ? args[0].split('/') : [] : []
            const node = !args.length ? getNode()
                : args && args[0] === 'help' ? cmd
                : getNode(ui.path.slice().concat(subs))
            const props = Object.keys(node).filter(key => key !== 'type' && key !== 'href')

            if (typeof node !== 'object') {
                addLine(getError(this.error[0]))
                addLine('use <stat> instead')
                return false
            }

            if (args && args[0] === 'help')
                addLine(props.join(' '))
            else if (node.type === 'vers') {
                const title = ui.path.length ? ui.path[ui.path.length - 1] : 'versions'
                const p = document.createElement('p')
                const a = document.createElement('a')
                a.href = ui.host + node.href
                a.append(document.createTextNode(title))
                p.append(document.createTextNode('See '))
                p.append(a)
                ui.section.append(p)
                addLine('use <go> to follow link or click the link')

                for (const key of props) {
                    const p = document.createElement('p')
                    p.append(document.createTextNode(key + ': ' + node[key].title))
                    ui.section.append(p)
                }
            }
            else if (node.type === 'src')
                for (const key of props) {
                    const p = document.createElement('p')
                    p.append(document.createTextNode(key + ': '))
                    const a = document.createElement('a')
                    a.href = node[key].href
                    a.target = "_blank"
                    a.append(document.createTextNode(node[key].title))
                    p.append(a)
                    ui.section.append(p)
                }
            else if (node.type === 'qna')
                for (const key of props) {
                    const p = document.createElement('p')
                    p.append(document.createTextNode(key + ': ' + node[key].q))
                    ui.section.append(p)
                }
            else {
                let list = []
                for (const prop of props)
                    list.push(prop + (typeof node[prop] === 'object' ? '/' : ''))
                addLine(list.join(' '))
            }
        }
    },
    more: {
        help: [
            'do: read more on value presented with ellipsis (...)',
            'format: more <path> <property>',
            'args: path <prop/prop/...>, property'
        ],
        do: function(args) { 
            addLine(getError('not implemented yet', 'more')) 
        }
    },
    pwd: {
        help: [
            'do: get current path',
            'format: pwd',
            'args: none'
        ],
        do: function(args) { addLine(getPath()) }
    },
    stat: {
        help: [
            'do: view entity information',
            'format: stat <path>',
            'args: path <prop/prop/...>'
        ],
        error: ['cannot retrieve information on list of entities'],
        do: function(args) {
            const subs = args && args.length ? args[0].split('/') : []
            const node = args ? getNode(ui.path.slice().concat(subs)) : getNode()

            if (node.type === 'dir') {
                addLine(getError(this.error[0]))
                addLine('use <ls> to view list')
                return false
            }

            if (typeof node !== 'object') {
                addLine('value: ' + node)
                return false
            }

            const props = Object.keys(node).filter(key => key !== 'type')
            const makeParagraphs = n => {
                console.log(n)
                const arr = new Array(n)
                console.log(arr)
                for (let i = 0; i < n.length; ++i)
                    arr[i] = document.createElement('p')
                return arr
            }

            let title, paragraphs

            switch (node.type) {
                case 'ver':
                    if (node.status) {
                        const p = document.createElement('p')
                        const a = document.createElement('a')
                        a.href = node.href
                        a.append(document.createTextNode(node.title))
                        p.append(document.createTextNode('Title: '))
                        p.append(a)
                        ui.section.append(p)
                        addLine('use <go> to follow links in entities')
                    } else {
                        addLine('title: ' + node.title)
                        addLine('status: page not uploaded or coded')
                    }
                    break
                case 'proj':
                    title = ui.path[ui.path.length - 1]
                    .split('-')
                    .map(word => word[0].toUpperCase() + word.slice(1))
                    .join(' ')

                    const src = portfolio.sources[node.source]
                    const aSrc = document.createElement('a')
                    aSrc.href = src.href
                    aSrc.target = '_blank'
                    aSrc.append(document.createTextNode(src.title))

                    const aView = node.view ? document.createElement('a') : ''
                    if (aView) {
                        aView.href = node.view
                        aView.target = '_blank'
                        aView.append(document.createTextNode('view'))
                    }

                    const aInspect = node.inspect ? document.createElement('a') : ''
                    if (aInspect) {
                        aInspect.href = node.inspect
                        aInspect.target = '_blank'
                        aInspect.append(document.createTextNode('inspect'))
                    }

                    paragraphs = makeParagraphs(4)
                    console.log(paragraphs)

                    paragraphs[0].append(document.createTextNode(`${title} (${node.year}) `))
                    if (aView) {
                        paragraphs[0].append(aView)
                        paragraphs[0].append(document.createTextNode(' '))
                    }
                    if (aInspect) paragraphs[0].append(aInspect)

                    paragraphs[1].append(document.createTextNode('source: '))
                    paragraphs[1].append(aSrc)

                    paragraphs[2].append(document.createTextNode('keywords: '))
                    paragraphs[2].append(node.keywords.join(', '))

                    paragraphs[3].append(document.createTextNode('status: '))
                    paragraphs[3].append(node.status)

                    for (const p of paragraphs)
                        ui.section.append(p)
                    break
                case 'exp':
                    title = ui.path[ui.path.length - 1]
                    .split('-')
                    .map(word => word[0].toUpperCase() + word.slice(1))
                    .join(' ')

                    paragraphs = makeParagraphs(4)

                    paragraphs[0].append(document.createTextNode(title))
                    paragraphs[1].append(document.createTextNode(`${node.employer} (${node.start} to ${node.end})`))
                    paragraphs[2].append(document.createTextNode(node.location))
                    paragraphs[3].append(document.createTextNode('skills: ' + node.skills.join(', ')))

                    for (const p of paragraphs)
                        ui.section.append(p)
                    break
                case 'edu':
                    paragraphs = makeParagraphs(3)

                    paragraphs[0].append(document.createTextNode(`${node.major} ${node.hasOwnProperty('track') ? '(' + node.track + ')' : ''}`))
                    paragraphs[1].append(document.createTextNode(`${node.degree} grad. ${node.graduation}`))
                    paragraphs[2].append(document.createTextNode(`${node.institution} ${node.school ? node.school : ''} (${node.location})`))

                    for (const p of paragraphs)
                        ui.section.append(p)
                    break
                case 'qna':
                    break

            }
        }
    }
}

/* -------------------------------------------------------------- Initial ui */

addBashPath()

ui.aside.toggle.addEventListener('click', () => {
    ui.aside.state = !ui.aside.state
    const state = ui.aside.state ? 'expanded' : 'collapsed'
    ui.aside.toggle.setAttribute('class', state)
    ui.aside.elem.setAttribute('class', state)
})

Object.keys(cmd).forEach(key => {
    const button = document.createElement('button')
    button.id = key + '-btn'
    button.append(document.createTextNode(key))
    ui.aside.elem.append(button)
})

document.querySelectorAll('aside button').forEach(btn => 
    btn.addEventListener('click', () => cmd.help.do([btn.innerHTML]))
)

/* ------------------------------------------------------------------- Input */

ui.input.addEventListener('change', e => {
    const value = e.target.value
    ui.input.value = '$ '

    const [sign, exec, ...ipt] = value.split(' ')
    if (exec !== 'help' || (exec === 'help' && !ipt.length))
        addLine(value)

    if (cmd.hasOwnProperty(exec))
        cmd[exec].do(ipt)
    else
        addLine(getBashError(exec, 'command not found'))

    addBashPath()
})