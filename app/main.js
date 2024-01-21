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
const getError = (error, term = '') => `error: ${term? term + ': ' : ''}${error}`

const getNode = (path = ui.path.slice(), node = portfolio) => {
    let shift
    while (shift = path.shift())
        if (node.hasOwnProperty(shift))
            node = node[shift]
        else
            return false
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
        'args: path <prop/prop/...>, (search) terms <term,term=value,...> (spaces => hyphens)'
    ],
    descript: [
        'do: view statement or description',
        'format: descript <path> <[now]>',
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
    cd: function(args) {},
    clear: function() { view.innerHTML = '' },
    count: function(args) {},
    descript: function(args) {},
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

const getBashError = (cmd, error) => `bash: ${cmd}: ${error}`

const execute = value => {
    const [exec, ...ipt] = value.split(' ')
    if (cmd.hasOwnProperty(exec))
        cmd[exec](ipt)
    else
        addLine(getBashError(exec, 'command not found'))
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