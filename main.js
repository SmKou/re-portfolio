const view = document.querySelector('article section')
const input = document.querySelector('article input')

const ui = {
    path: [],
    host: `${/^localhost:\d+/.test(window.location.host) ? 'http://' : 'https://'}${window.location.host}`
}

const aside = {
    e: document.querySelector('aside'),
    state: true,
    tog: document.getElementById('toggle-aside'),
    ctt: document.getElementById('aside-content')
}

const getPath = () => `~/${path.length ? ui.path.join('/') : ''}`
const getBashError = (error, cmd) => `bash: ${cmd}: ${error}`
const getError = (error, term = '') => `error: ${term? term + ': ' : ''}${error}`

const getNode = (path = ui.path.slice(), node = portfolio) => {
    let shift
    while (shift = path.shift())
        if (node.hasOwnProperty(shift))
            node = node[shift]
        else
            return { shift }
    return node
}

const addLine = output => {
    const line = document.createElement('p')
    line.append(document.createTextNode(output))
    view.append(line)
}

const help = {
    cd: [ 
        'do: change path', 
        'format: cd [<path>] | cd [..]', 
        'args: path <prop/prop/...>' 
    ],
    clear: [ 
        'do: clear terminal', 
        'format: clear', 
        'args: none' 
    ],
    count: [
        'do: count properties',
        'format: count <path> <terms>',
        'args: path <prop/prop/...>, (search) terms <term, term=value, ...> (spaces => hyphens)'
    ],
    descript: [
        'do: view statement or description',
        'format: descript <path> <[now]|[status]>',
        'args: path <prop/prop/...>, now = description of status'
    ],
    find: [
        'do: list subentities',
        'format: find <path> <terms>',
        'args: path <prop/prop/...>, (search) terms <term,term=value,...> (spaces => hyphens)'
    ],
    go: [
        'do: follow link',
        'format: go <path> <property>',
        'args: path <prop/prop/...>, property ~ files'
    ],
    help: [
        'do: list commands or display command information',
        'format: help <command>',
        'args: command'
    ],
    ls: [
        'do: list properties in current path',
        'format: ls <path>',
        'args: path <prop/prop/...>'
    ],
    more: [
        'do: read more (...)',
        'format: more <path> <property>',
        'args: path <prop/prop/...>, property'
    ],
    pwd: [ 
        'do: display current path', 
        'format: pwd', 
        'args: none' 
    ],
    searchable: [
        'do: display searchable properties or values of property in directory',
        'format: searchable <path> <prop>',
        'args: path <prop/prop/...>, prop property'
    ],
    stat: [
        'do: display entity (or property) information',
        'format: stat <path>',
        'args: path <prop/prop/...>'
    ]
}

const cmd = {
    cd: function(args) {
        if (!args.length) return;

        let path = ui.path.slice()
        let subs = args[0].split('/')
        while (subs.length && subs[0] === '..')
            if (path.length) {
                path.shift()
                subs.shift()
            }
            else{
                ui.path = []
                return;
            }

        const node = getNode(path.concat(subs))
        if (node.shift)
            addLine(getBashError('No such file or directory', `cd: ${node.shift}`))
        else
            ui.path = path.concat(subs)
    },
    clear: function() { view.innerHTML = '' },
    count: function(args) {
        let [path, ...terms] = args
        terms = terms.length ? terms.split(',').map(t => {
            const term = t.trim()
            if (term.includes('='))
                return term.split('=')
            else
                return term
        })
        : []

        let node = getNode(ui.path.slice().concat(path.split('/')))
        if (node.shift) {
            terms.unshift(path)
            path = ui.path.slice()
            node = getNode()
        } else
            path = path.split('/')

        if (!dir.includes(path[path.length - 1]) || typeof node != object) {
            addLine(getError('Cannot be counted', path[path.length - 1]))
            return false
        }
        
        const counts = new Array(terms.length)
        counts.fill(0)
        const props = Object.keys(node)
        for (const prop of props) {
            const subprops = Object.keys(node[prop])
            for (let i = 0; i < terms.length; ++i)
                if ((
                    typeof terms[i] === 'string' 
                    && subprops.includes(terms[i].toLowerCase())
                ) || (
                    subprops.includes(terms[i][0].toLowerCase()) 
                    && node[prop][terms[i][0]].toLowerCase().includes(terms[i][1])
                ))
                    counts[i] += 1
        }

        const title = path[path.length - 1]
        for (let i = 0; i < terms.length; ++i) {
            if (typeof terms[i] === 'string')
                addLine(`${counts[i]} containing ${terms[i]} in ${title}`)
            else
                addLine(`${counts[i]} containing ${terms[i][0]}=${terms[i][1]} in ${title}`)
        }        
    },
    descript: function(args) {
        let [path, now] = args
        let node

        if (path === undefined) {
            path = ui.path.slice()
            node = getNode()
            now = 'description'
        } 
        else {
            node = getNode(ui.path.slice().concat(path.split('/')))
            if (node.shift)
                if (path === 'status' || path === 'now' || path === 'description') {
                    node = getNode()
                    now = path
                    path = ui.path.slice()
                }
                else {
                    addLine(getBashError('No such file or directory', node.shift))
                    return false
                }
        }

        if (node.hasOwnProperty(now)) {
            const line = typeof node[now] === 'string' ? node[now]
                : node[now][0] + (node[now].length > 1 ? '...' : '')
            addLine(`${now}: ${line}`)
        } else if (['description', 'status', 'now'].includes(path[path.length - 1])) {
            const line = typeof node === 'string' ? node
                : node[0] + (node.length > 1 ? '...' : '')
            addLine(`${path[path.length - 1]}: ${line}`)
        } else 
            addLine(getError('Cannot view statement'))
    },
    find: function(args) {},
    go: function(args) {},
    help: function(args) {},
    ls: function(args) {},
    more: function(args) {},
    pwd: function() { addLine(getPath()) },
    searchable: function(args) {},
    stat: function(args) {}
}

/* ------------------------------------------- Initial ui */

const addBashPath = () => {
    const path = `Re-Portfolio SMKOU ~/${ui.path.join('/')}`
    const p = document.createElement('p')
    p.setAttribute('class', 'bash')
    p.append(document.createTextNode(path))
    view.append(p)
}

addBashPath()

aside.tog.addEventListener('click', () => {
    aside.state = !aside.state
    const state = aside.state ? 'expanded' : 'collapsed'
    aside.tog.setAttribute('class', state)
    aside.e.setAttribute('class', state)
})

Object.keys(help).forEach(key => {
    const btn = document.createElement('button')
    btn.id = `${key}-btn`
    btn.append(document.createTextNode(key))
    aside.ctt.append(btn)
})

document.querySelectorAll('#aside-content button').forEach(btn => btn.addEventListener('click', () => cmd.help([btn.innerHTML])))

/* ------------------------------------------- Input */

const execute = value => {
    const [exec, ...ipt] = value.split(' ')
    if (cmd.hasOwnProperty(exec))
        cmd[exec](ipt)
    else
        addLine(getBashError('command not found', exec))
}

input.addEventListener('change', e => {
    addLine(e.target.value)
    const value = e.target.value.slice(2)
    input.value = '$ '
    if (value.includes('&&'))
        value.split('&&').forEach(val => execute(val.trim()))
    else
        execute(value)
    addBashPath()
})