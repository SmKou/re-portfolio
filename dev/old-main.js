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
            let path = ui.path.slice()
            if (args.length) {
                let subs = args[0].split('/')
                if (subs[0] === '..') 
                    subs.shift()
                path = path.concat(subs)
            }
            const title = path[path.length - 1]
            const node = getNode(path)
            
            if (!node) {
                addLine(getError('invalid path'))
                return false
            }

            if (typeof node !== 'object') {
                addLine(title + ': ' + node)
                return true
            }

            const props = Object.keys(node)
            if (!path || (portfolio.dir.includes(title) && title !== 'versions')) {
                addLine('Properties: ' + props.join(', '))
                return true
            }

            if (title === 'versions') {}

            const p = document.createElement('p')
            for (const prop of props) {}
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


//     count: {
//         help: [
//             'do: get count of subentities',
//             'format: count <path> <terms>',
//             'args: path <prop/prop/...>[/], (search) terms <term=value,term,...>',
//             'warning: uses strict equivalence and string.includes for term=value'
//         ],
//         error: [
//             'invalid path',
//             'cannot be counted'
//         ],
//         do: function(args) { 
//             let path, terms
//             for (const arg of args)
//                 if (arg.includes('/'))
//                     path = arg.split('/')
//                 else if (arg.includes(','))
//                     terms = arg.split(',')
//                 else 
//                     if (getNode(ui.path.slice().concat(arg)))
//                         path = [arg]
//                     else
//                         terms = [arg]

//             const subs = ui.path.slice().concat(path)
//             const node = getNode(subs)

//             if (!node) {
//                 addLine(getError(this.error(0)))
//                 return false
//             }

//             if (typeof node !== 'object') {
//                 addLine('value: ' + node)
//                 addLine(getError(this.error[1]))
//                 return false
//             }

//             if (node.type !== 'dir' && node.type !== 'vers') {
//                 addLine(getError(this.error[1]))
//                 return false
//             }
            
//             if (terms) {
//                 const search = {}
//                 for (let i = 0; i < terms.length; ++i)
//                     if (terms[i].includes('=')) {
//                         const t = terms[i].split('=')
//                         search[t[0]] = { val: t[1], count: 0 }
//                     } else
//                         search[terms[i]] = { val: '', count: 0 }

//                 const entities = Object.keys(node).filter(key => key !== 'type' && key !== 'href')
//                 for (const entity of entities) {
//                     for (const term of Object.keys(search))
//                         if (entities[entity].hasOwnProperty(term)) {
//                             if (search[term].val) {
//                                 if (search[term].val === entity[term] 
//                                     || (
//                                         (typeof entity[term] === 'string' || Array.isArray(entity[term])) 
//                                         && entity[term].includes(search[term].val)
//                                     ))
//                                         search[term].count++
//                             }
//                             else
//                                 search[term].count++
//                         }
//                 }

//                 const title = subs[subs.length - 1]
//                 const p = document.createElement('p')
//                 p.append(document.createTextNode(title + ':'))
//                 ui.section.append(p)

//                 const props = Object.keys(search)
//                 for (const prop of props) {
//                     const p = document.createElement('p')
//                     p.append(document.createTextNode('No. of ' + (search[prop].val ? `${prop}=${search[prop].val}` : prop) + ': ' + search[prop].count))
//                     ui.section.append(p)
//                 }
//             } 
//             else {
//                 const title = subs[subs.length - 1]
//                 const props = Object.keys(node).filter(key => key !== 'type' && key !== 'href')

//                 const p = document.createElement('p')
//                 p.append(document.createTextNode('No. of ' + title + ': ' + props.length))
//                 ui.section.append(p)

//                 const p2 = document.createElement('p')
//                 p2.append(document.createTextNode('Every entity in ' + title + ' has ' + props.join(', ')))
//                 ui.section.append(p2)
//             }
//         }
//     },
//     descript: {
//         help: [
//             'do: view a statement or description',
//             'format: descript <path> <[now]>',
//             'args: path <prop/prop/...>, now = description of status'
//         ],
//         error: [
//             'invalid path',
//             'no such property'
//         ],
//         do: function(args) {
//             let now, path
//             for (const arg of args)
//                 if (arg === 'now')
//                     now = true
//                 else
//                     if (arg.includes('/'))
//                         path = arg.split('/')
//                     else
//                         path = [arg]

//             const subs = ui.path.slice().concat(path)
//             const node = getNode(subs)

//             if (!node) {
//                 addLine(getError(this.error[0]))
//                 return false
//             }

//             if (typeof node !== 'object') {
//                 addLine('value: ' + node)
//                 addLine(getError(this.error[1]))
//             }

//             const prop = now ? 'now' : 'description'
//             if (node.hasOwnProperty(prop)) {
//                 let text = ''
//                 if (now && typeof node[prop] === 'object') {
//                     if (node[prop].hasOwnProperty('message'))
//                         text += messages[node[prop].message]

//                     if (node[prop].hasOwnProperty('additional'))
//                         text += node[prop].additional
//                 }
//                 else
//                     text = Array.isArray(node[prop]) ?
//                         node[prop][0] + (node[prop].length > 1 ? '...' : '')
//                         : node[prop]
//                 addLine(prop + ': ' + text)
//             }
//             else
//                 addLine(getError(this.error[1]))
//         }
//     },
//     find: {
//         help: [ 
//             'do: get list of subentities',
//             'format: find <path> <terms>',
//             'args: path <prop/prop/...>, terms <term=value,term,...>'
//         ],
//         error: [
//             'invalid path',
//             'cannot be searched',
//             'not found'
//         ],
//         do: function(args) { 
//             let path, terms
//             for (const arg of args)
//                 if (arg.includes('/'))
//                     path = args.split('/')
//                 else if (arg.includes(','))
//                     terms = arg.split(',')
//                 else
//                     if (getNode(ui.path.slice().concat(arg)))
//                         path = [arg]
//                     else
//                         terms = [arg]

//             const subs = ui.path.slice().concat(path)
//             const node = getNode(subs)

//             if (!node) {
//                 addLine(getError(this.error[0]))
//                 return false
//             }

//             switch (true) {
//                 case typeof node !== 'object':
//                     addLine('value: ' + node)
//                 case node.type !== 'dir' && node.type !== 'vers':
//                     addLine(getError(this.error[1]))
//                     return false
//             }

//             if (terms) {
//                 const search = {}
//                 for (let i = 0; i < terms.length; ++i) {
//                     const t = terms[i].includes('=') ?
//                         terms[i].split('=')
//                         : terms[i]
//                     search[t] = {
//                         val: Array.isArray(t) ? t[0] : '',
//                         props: []
//                     }
//                 }

//                 const entities = Object.keys(node).filter(key => key !== 'type' && key !== 'href')
//                 const keys = Object.keys(search)
//                 for (const entity of entities) {
//                     for (const term of keys)
//                         if (entities[entity].hasOwnProperty(term)) {
//                             if (search[term].val) {
//                                 if (search[term].val === entity[term]
//                                     || (
//                                         (typeof entity[term] === 'string' || Array.isArray(entity[term]))
//                                         && entity[term].includes(search[term].val)
//                                     ))
//                                         search[term].props.push(entity)
//                             }
//                             else
//                                 search[term].props.push(entity)
//                         }
//                 }

//                 const title = subs[subs.length - 1]
//                 const p = document.createElement('p')
//                 p.append(document.createTextNode(title + ':'))
//                 ui.section.append(p)

//                 const props = Object.keys(search)
//                 for (const prop of props) {
//                     const p = document.createElement('p')
//                     p.append(document.createTextNode((search[prop].val ? `${prop}=${search[prop].val}` : prop) + ': ' + search[prop].props.join(', ')))
//                 }
//             }
//             else {
//                 const title = subs[subs.length - 1]
//                 const props = Object.keys(node).filter(key => key !== 'type' && key !== 'href')

//                 const p = document.createElement('p')
//                 p.append(document.createTextNode('Find in: ' + props.join(', ')))
//                 ui.section.append(p)

//                 const p2 = document.createElement('p')
//                 p2.append(document.createTextNode('Every entity in ' + title + ' has ' + props.join(', ')))
//                 ui.section.append(p2)
//             }

//             addLine(getError('not implemented yet', 'find')) 
//         }
//     },
//     go: {
//         help: [
//             'do: follow a link',
//             'format: go <path> <property>',
//             'args: path <prop/prop/...>, property'
//         ],
//         error: [
//             'not a link',
//             'more than one link available'
//         ],
//         do: function(args) {
//             addLine(getError('not implemented yet', 'go')) 

//             /* go | go <path> | go <property> | go <path> <property> */
//         }
//     },
//     ls: {
//         help: [
//             'do: view list of properties in current path',
//             'format: ls <path> | ls [help]',
//             'args: path <prop/prop/...>'
//         ],
//         error: ['cannot use on an entity'],
//         do: function(args) {
//             const hasHelp = args.includes('help')

//             const subs = args ? args[0] !== 'help' ? args[0].split('/') : [] : []
//             const node = !args.length ? getNode()
//                 : args && args[0] === 'help' ? cmd
//                 : getNode(ui.path.slice().concat(subs))
//             const props = Object.keys(node).filter(key => key !== 'type' && key !== 'href')

//             if (typeof node !== 'object') {
//                 addLine(getError(this.error[0]))
//                 addLine('use <stat> instead')
//                 return false
//             }

//             if (args && args[0] === 'help')
//                 addLine(props.join(' '))
//             else if (node.type === 'vers') {
//                 const title = ui.path.length ? ui.path[ui.path.length - 1] : 'versions'
//                 const p = document.createElement('p')
//                 const a = document.createElement('a')
//                 a.href = ui.host + node.href
//                 a.append(document.createTextNode(title))
//                 p.append(document.createTextNode('See '))
//                 p.append(a)
//                 ui.section.append(p)
//                 addLine('use <go> to follow link or click the link')

//                 for (const key of props) {
//                     const p = document.createElement('p')
//                     p.append(document.createTextNode(key + ': ' + node[key].title))
//                     ui.section.append(p)
//                 }
//             }
//             else if (node.type === 'src')
//                 for (const key of props) {
//                     const p = document.createElement('p')
//                     p.append(document.createTextNode(key + ': '))
//                     const a = document.createElement('a')
//                     a.href = node[key].href
//                     a.target = "_blank"
//                     a.append(document.createTextNode(node[key].title))
//                     p.append(a)
//                     ui.section.append(p)
//                 }
//             else if (node.type === 'qna')
//                 for (const key of props) {
//                     const p = document.createElement('p')
//                     p.append(document.createTextNode(key + ': ' + node[key].q))
//                     ui.section.append(p)
//                 }
//             else {
//                 let list = []
//                 for (const prop of props)
//                     list.push(prop + (typeof node[prop] === 'object' ? '/' : ''))
//                 addLine(list.join(' '))
//             }
//         }
//     },
//     more: {
//         help: [
//             'do: read more on value presented with ellipsis (...)',
//             'format: more <path> <property>',
//             'args: path <prop/prop/...>, property'
//         ],
//         do: function(args) { 
//             addLine(getError('not implemented yet', 'more')) 
//         }
//     },
//     pwd: {
//         help: [
//             'do: get current path',
//             'format: pwd',
//             'args: none'
//         ],
//         do: function(args) { addLine(getPath()) }
//     },
//     

const stat = {
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