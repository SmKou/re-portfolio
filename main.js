const ui = {
    path: [],
    host: `${/^localhost:\d+/.test(window.location.host) ? 'http://' : 'https://'}${window.location.host}`,
    cns: document.querySelector('article section'),
    ipt: document.querySelector('article input'),
    aside: {
        e: document.querySelector('aside'),
        state: true,
        tog: document.getElementById('toggle-aside'),
        ctt: document.getElementById('aside-content')
    }
}

const error = (message, term, type) => `${type}: ${term ? term + ': ' : ''}${message}`

const stdError = (message, term) => error(message, term, 'error')
const bashError = (message, term) => error(message, term, 'bash')
const optionError = (message, term) => error(message, term, '')

const addLine = (output, bash = false) => {
    const line = document.createElement('p')
    if (bash)
        line.setAttribute('class', 'bash')
    line.append(document.createTextNode(output))
    ui.cns.append(line)
}

const addLines = output => output.split('\n').forEach(line => addLine(line))

const cmd = {
    cal: function(args) {
        let date = new Date()
        if (args.length && args.includes('--help'))
            return this.help(['cal'])
        else if (args.length) {
            try { date = new Date(args[0]) }
            catch (error) {
                
            }
        }
        addLine(date)

        

        // addLine(error(`unknown option ${args[0]}`, ''))
        // ls: unknown option -- j
    },
    cd: function(args) {},
    cls: function(args) {},
    clear: function(args) {},
    date: function(args) {},
    dir: function(args) {},
    echo: function(args) {},
    find: function(args) {},
    help: function(args) {
        if (!args.length) {
            const commands = Object.keys(manual)
            addLine(`Available commands: ${commands.join(', ')}`)
            return true
        }

        if (args[0] === '--help') {
            addLines(manual.help.help)
            return true
        }

        if (!manual.hasOwnProperty(args[0])) {
            addLine(bashError('command not found', args[0]))
            return false
        }
        
        addLines(manual[args[0]].help)
        return true
    },
    hostname: function(args) {},
    ls: function(args) {},
    lynx: function(args) {},
    man: function(args) {},
    more: function(args) {},
    msg: function(args) {},
    pwd: function(args) {},
    sort: function(args) {},
    stat: function(args) {},
    tree: function(args) {},
    whatis: function(args) {},
    whoami: function(args) {}
}

/* ----------------------------------------------------- Setup UI */

const addPath = () => {
    const path = `Re-Portfolio SMKOU ~/${ui.path.join('/')}`
    addLine(path, true)
}

addPath()

ui.aside.tog.addEventListener('click', () => {
    ui.aside.state = !ui.aside.state
    const state = ui.aside.state ? 'expanded' : 'collapsed'
    ui.aside.tog.setAttribute('class', state)
    ui.aside.e.setAttribute('class', state)
})

Object.keys(manual).forEach(command => {
    const btn = document.createElement('button')
    btn.id = `${command}-btn`
    btn.append(document.createTextNode(command))
    ui.aside.ctt.append(btn)
})

document.querySelectorAll('#aside-content button').forEach(btn => btn.addEventListener('click', () => cmd.help([btn.innerHTML])))

/* ----------------------------------------------------- Enable input */

const execute = input => {
    const [command, ...ipt] = input.split(' ')
    if (cmd.hasOwnProperty(command))
        cmd[command](ipt)
    else
        addLine(bashError('command not found', command))
}

ui.ipt.addEventListener('change', e => {
    addLine(e.target.value)
    const value = e.target.value.slice(2)
    ui.ipt.value = '$ '
    if (value.includes('&&'))
        value.split('&&').forEach(val => execute(val.trim()))
    else
        execute(value)
    addPath()
})