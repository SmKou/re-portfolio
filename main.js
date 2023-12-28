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
        do: function(args) {}
    },
    clear: {
        help: [
            'do: clear terminal',
            'format: clear',
            'args: none'
        ],
        do: function(args) {
            ui.section.innerHTML = ''
        }
    },
    count: {
        help: [
            'do: count subentities',
            'format: count <path> <terms>',
            'args: path <prop/prop/...>, (search) terms <term,term=value,...>'
        ],
        do: function(args) {}
    },
    descript: {
        help: [
            'do: view statement or description',
            'format: descript <path> <[now]>',
            'args: path <prop/prop/...>, now = description of status'
        ],
        do: function(args) {}
    },
    

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