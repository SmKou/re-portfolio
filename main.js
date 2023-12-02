import portfolio from "./portfolio"

const ui = {
    path: [],
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
        node = node[shift]
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

const cmd = {
    cd: {
        help: 'change path',
        error: ['no such property', 'cannot cd into property value'],
        do: function(args) {
            let subs = args[0].split('/')
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
                        addLine('use <stat> instead')
                        return false
                    }

                    ui.path.push(sub)
                }
        }
    },
    clear: {
        help: 'Clear console',
        do: function(args) { ui.section.innerHTML = '' }
    },
    count: {
        help: 'Get count of subentities with search term in properties',
        error: ['subentities do not contain term'],
        do: function(args) { addLine(getError('not implemented yet', 'count')) }
    },
    descript: {
        help: 'View a statement or description, use <descript> <now> for viewing status if available',
        error: ['no description','no such property'],
        do: function(args) {
            const node = args.length ? getNode(ui.path.slice().concat(args)) : getNode()

            if (!node) {
                addLine(getError(this.error[1]))
                return false
            }

            if (typeof node !== 'object') {
                addLine(node)
                return false
            }

            if (node.hasOwnProperty('description'))
                addLine('description: ' + node.description)
            else
                addLine(getError(this.error[0]))
        }
    },
    go: {
        help: 'Follow a link, opens in new tab according to link attributes, use <go> in an entity or specify the entity with <go> [prop]',
        error: ['not a link'],
        do: function(args) { addLine(getError('not implemented yet', 'go')) }
    },
    help: {
        help: 'Use <help> to get a list of commands and their uses, or <help> [command] to see what a command does',
        error: ['command not found'],
        do: function(args) {
            if (!args.length) {
                for (const key of Object.keys(cmd)) {
                    const p = document.createElement('p')
                    p.append(document.createTextNode(key + ': ' + cmd[key].help))
                    ui.section.append(p)
                }
                return true
            }

            const key = args[0]
            if (!cmd.hasOwnProperty(key))
                addLine(getBashError(key, this.error[0]))
            else {
                addLine(`help ${key}`, true)
                addLine(cmd[key].help)
            }
        }
    },
    ls: {
        help: 'View list of properties in current path, use <ls> <help> to see list of commands',
        error: ['cannot use on an entity'],
        do: function(args) {
            const node = !args.length ? getNode()
                : args && args[0] === 'help' ? cmd
                : getNode(ui.path.slice().concat(args))
            const props = Object.keys(node).filter(key => key !== 'type')

            if (typeof node !== 'object') {
                addLine(getError(this.error[0]))
                addLine('use <stat> instead')
                return false
            }

            if (args && args[0] === 'help')
                addLine(props.join(' '))
            else if (node.type === 'vers')
                for (const key of props) {
                    const p = document.createElement('p')
                    p.append(document.createTextNode(key + ': ' + node[key].title))
                    ui.section.append(p)
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
        help: 'When you see an ellipsis at the end of a line (...), use <more> to read the rest, specify property as needed with <more> [prop]',
        do: function(args) { addLine(getError('not implemented yet', 'more')) }
    },
    pwd: {
        help: 'Get current path',
        do: function(args) { addLine(getPath()) }
    },
    search: {
        help: 'Get list of subentities containing search term in properties',
        do: function(args) { addLine(getError('not implemented yet', 'search')) }
    },
    stat: {
        help: 'View information on entity, i.e. project, experience, education, or question',
        error: ['cannot retrieve information on list of entities'],
        do: function(args) {
            const node = args.length ? getNode(ui.path.slice().concat(args)) : getNode()

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
                const arr = new Array(n)
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

const messages = {
    'cnet': 'All C#/.Net projects are not likely to be completed.'
}

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