const ui = {
    path: [],
    host: (window.location.host === 'localhost:5173' ? 
        'http://'
        : 'https://'
    ) + window.location.host,
    aside: {
        toggle: document.getElementById('toggle-aside'),
        state: true,
        elem: document.querySelector('aside'),
        ctt: document.getElementById('aside-content')
    },
    section: document.querySelector('section'),
    input: document.querySelector('input')
}

const getPath = () => '~/' + (ui.path.length ? ui.path.join('/') : '')

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

const cmd = {
    clear: {
        help: [ 'do: clear terminal', 'format: clear', 'args: none' ],
        do: function(args) { ui.section.innerHTML = '' }
    },
    pwd: {
        help: [ 'do: display current path', 'format: pwd', 'args: none' ],
        do: function(args) { addLine(getPath()) }
    },
    cd: {
        help: [ 'do: change path', 'format: cd [<path>] | cd [..]', 'args: path <prop/prop/...>' ],
        do: function(args) {
            if (!args.length) return;

            let subs = args[0].split('/')
            if (subs[0] === '..' && ui.path.length) {
                subs.shift()
                ui.path.pop()
            }

            const path = ui.path.slice().concat(subs)
            const node = getNode(path)

            if (node)
                ui.path = ui.path.concat(subs)
            else
                addLine(getError('invalid path'))
        }
    },
    help: {
        help: [
            'do: list commands or display command information',
            'format: help <command>',
            'args: command'
        ],
        do: function(args) {
            if (!args.length) {
                const props = Object.keys(cmd)
                addLine('Available commands: ' + props.join(', '))
                return true
            }

            const key = args[0]
            if (!cmd.hasOwnProperty(key))
                addLine(getBashError(key, 'command not found'))
            else {
                const props = cmd[key].help
                for (const prop of props)
                    addLine(prop)
            }
        }
    },
    ls: {
        help: [
            'do: list properties in current path',
            'format: ls <path>',
            'args: path <prop/prop/...>'
        ],
        do: function(args) {
            const node = args.length ?
                getNode(ui.path.slice().concat(args[0].split('/')))
                : getNode()

            if (!node || typeof node !== 'object') {
                let message = 'cannot list properties'
                if (args.length)
                    message += ' on ' + args[0]
                addLine(getError(message))
                return false
            }
            
            const props = Object.keys(node)
            const p = document.createElement('p')

            for (const prop of props) {
                if (prop === 'dir')
                    continue;
                else if (portfolio.dir.includes(prop)) 
                    p.append(document.createTextNode(prop + '/'))
                else if (prop === 'href') {
                    const a = document.createElement('a')
                    a.href = node[prop]
                    a.append(document.createTextNode(prop))
                    p.append(a)
                }
                else if (node[prop].href) {
                    const a = document.createElement('a')
                    a.href = ui.host + node[prop].href
                    a.append(document.createTextNode(prop))
                    p.append(a)
                }
                else if (portfolio.sources.hasOwnProperty(node[prop])) {
                    const a = document.createElement('a')
                    a.href = portfolio.sources[node[prop]].href
                    a.target = "_blank"
                    a.append(document.createTextNode(prop))
                }
                else
                    p.append(document.createTextNode(prop))
                p.append(document.createTextNode(' '))
            }
            
            ui.section.append(p)
        }
    },
    stat: {
        help: [
            'do: display entity (or property) information',
            'format: stat <path>',
            'args: path <prop/prop/...>'
        ],
        do: function(args) {
            const path = ((p = ui.path.slice()) => {
                let subs = args.length ? args[0].split('/') : []
                if (subs[0] === '..' && p.length) {
                    p.pop()
                    subs.shift()
                }
                return p.concat(subs)
            })()
            const node = getNode(path)
            
            if (!node) {
                addLine(getError('invalid path'))
                return false
            }

            if (typeof node !== 'object') {
                const title = path[path.length - 1]
                addLine(title + ': ' + node)
                return true
            }

            addLine(JSON.stringify(node))
        }
    },
    // 0-2 args
    count: {
        help: [
            'do: count properties',
            'format: count <path> <terms>',
            'args: path <prop/prop/...>, (search) terms <term,term=value,...> (spaces => hyphens)'
        ],
        do: function(args) {
            // Get path and terms
            // Teat node and path
            // Count terms or properties
            addLine('not implemented yet')
        }
    },
    descript: {
        help: [
            'do: view statement or description',
            'format: descript <path> <[now]>',
            'args: path <prop/prop/...>, now = description of status'
        ],
        do: function(args) { addLine('not implemented yet') }
    },
    find: {
        help: [
            'do: list subentities',
            'format: find <path> <terms>',
            'args: path <prop/prop/...>, (search) terms <term,term=value,...> (spaces => hyphens)'
        ],
        do: function(args) { addLine('not implemented yet') }
    },
    go: {
        help: [
            'do: follow link',
            'format: go <path> <property>',
            'args: path <prop/prop/...>, property ~ files'
        ],
        do: function(args) { addLine('not implemented yet') }
    },
    more: {
        help: [
            'do: read more (...)',
            'format: more <path> <property>',
            'args: path <prop/prop/...>, property'
        ],
        do: function(args) { addLine('not implemented yet') }
    },
    searchable: {
        help: [
            'do: display searchable properties or values of property in directory',
            'format: searchable <path> <prop>',
            'args: path <prop/prop/...>, prop property'
        ],
        do: function(args) { addLine('not implemented yet') }
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
    ui.aside.ctt.append(button)
})

document.querySelectorAll('#aside-content button').forEach(btn => 
    btn.addEventListener('click', () => cmd.help.do([btn.innerHTML]))
)

/* ------------------------------------------------------------------- Input */

const execute = value => {
    const [exec, ...ipt] = value.split(' ')
    if (cmd.hasOwnProperty(exec))
        cmd[exec].do(ipt)
    else
        addLine(getBashError(exec, 'command not found'))
}

ui.input.addEventListener('change', e => {
    addLine(e.target.value)
    const value = e.target.value.slice(2)
    ui.input.value = '$ '

    if (value.includes('&&')) {
        const vals = value.split('&&')
        vals.forEach(val => execute(val.trim()))
    }
    else
        execute(value)

    addBashPath()
})