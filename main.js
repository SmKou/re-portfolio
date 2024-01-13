const ui = {
    path: [],
    host: (window.location.host === 'localhost:5173' ? 
        'http://'
        : 'https://'
    ) + window.location.host,
    aside: {
        toggle: document.getElementById('toggle-aside'),
        state: true,
        elem: document.querySelector('aside')
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

const addSpace = () => {
    const line = document.createElement('p')
    line.append(document.createTextNode(''))
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
        help: [
            'do: change path',
            'format: cd [<path>] | cd [..]',
            'args: path <prop/prop/...>'
        ],
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
                ui.path.concat(subs)
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
                for (const key of Object.keys(cmd)) {
                    addLine('command: ' + key)
                    const props = cmd[key].help
                    for (const prop of props)
                        addLine(prop)
                    addSpace()
                }
                return true
            }

            const key = args[0]
            if (!cmd.hasOwnProperty(key))
                addLine(getBashError(key, 'command not found'))
            else {
                addLine(`help ${key}`, true)
                const props = cmd[key].help
                for (const prop of props)
                    addLine(prop)
                addSpace()
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
            }
            
            const props = Object.keys(node)
            const p = document.createElement('p')

            let content = ""
            for (const prop of props) 
                if (prop === 'dir')
                    continue;
                else if (portfolio.dir.includes(prop)) {
                    content += prop + '/ '
                }
                else if (node[prop].href)
                    content += `<a href="${ui.host + node[prop].href}">${prop}</a> `
                else
                    content += prop
        }
    },
    stat: {
        help: [
            'do: display entity (or property) information',
            'format: stat <path>',
            'args: path <prop/prop/...>'
        ],
        do: function(args) {}
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
            let path, terms
            if (args.length)
                if (isPath(args[0]))
                    [path, terms] = args
                else
                    [terms, path] = args
            
            const subs = ui.path.slice().concat(path)
            const node = getNode(subs)

            if (!node) {
                addLine(getError('invalid path'))
                return false
            }

            if (typeof node !== 'object') {
                addLine('value: ' + node)
                return false
            }
        }
    },
    descript: {
        help: [
            'do: view statement or description',
            'format: descript <path> <[now]>',
            'args: path <prop/prop/...>, now = description of status'
        ],
        do: function(args) {

        }
    },
    find: {
        help: [
            'do: list subentities',
            'format: find <path> <terms>',
            'args: path <prop/prop/...>, (search) terms <term,term=value,...> (spaces => hyphens)'
        ],
        do: function(args) {}
    },
    go: {
        help: [
            'do: follow link',
            'format: go <path> <property>',
            'args: path <prop/prop/...>, property ~ files'
        ],
        do: function(args) {}
    },
    more: {
        help: [
            'do: read more (...)',
            'format: more <path> <property>',
            'args: path <prop/prop/...>, property'
        ],
        do: function(args) {}
    },
    searchable: {
        help: [
            'do: display searchable properties or values of property in directory',
            'format: searchable <path> <prop>',
            'args: path <prop/prop/...>, prop property'
        ],
        do: function(args) {
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