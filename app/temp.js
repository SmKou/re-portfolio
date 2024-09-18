import ver from 'versions/main.js'
import edu from 'education/main'
import exp from 'experience/main'
import proj from 'projects/main'
import src from 'sources/main'
import man from 'manual/main'

console.log(Object.keys(ver))

const portfolio = {
	versions: ver,
	education: edu,
	experience: exp,
	projects: proj
}

const resources = {
	manual: man,
	sources: src
}

const directories = {
	portfolio,
	resources,
	pages: {
		versions: {
			title: 'The Old TV',
			description: 'Preview available portfolioes on an old tv-like ui',
			href: 'versions/'
		}
	}
}

const media = {
	linkedin: {
		title: 'LinkedIn',
		href: 'https://www.linkedin.com/in/'
	},
	github: {
		title: 'Github',
		href: 'https://github.com/'
	}
}

(() => {


/* ---------------------------------------------------------------- PAGES */

    const resources = { manual, sources }

    const portfolio = { versions, experience, education, projects }
    const directories = { portfolio, resources, pages }

    const ui = {
        dir: 'portfolio',
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
    const user_input = { vals: [], i: -1 }
    // ui.ipt handled after cmd initialization

    const get_dir = (dir = ui.dir) => {
        switch (dir) {
            case 'portfolio':
                return portfolio
            case 'resources':
                return resources
            case 'pages':
                return pages
        }
    }

    const get_node = (path = ui.path.slice(), dir = 'portfolio', node = get_dir(dir), shift) => {
        if (!path.length)
            return node
        shift = path.shift()
        const res = node.hasOwnProperty(shift)
            ? get_node(path, dir, node[shift])
            : { shift }
        return res
    }

    const add_text = text => document.createTextNode(text)

    const create_element = ({ type, content, classname, link }) => {
        let e = {}
        switch (type) {
            case 'div':
                e = document.createElement('div')
                break
            case 'p':
                e = document.createElement('p')
                break
            case 'span':
                e = document.createElement('span')
                break
            case 'h1':
                e = document.createElement('h1')
                break
            case 'a':
                e = document.createElement('a')
                e.href = link
                if (!link.includes(ui.host))
                    e.target = "_blank"
                break
            case 'li':
                e = document.createElement('li')
                break
        }
        if (classname)
            e.setAttribute('class', classname)
        if (content) {
            if (Array.isArray(content))
                for (const c of content) { e.append(c) }
            else if (typeof content === 'string')
                e.append(add_text(content))
            else
                e.append(content)
        }
        return e
    }

    const create_list = items => {
        const list = document.createElement('ul')
        for (const item of items)
            list.append(item)
        return list
    }

    const add_line = (output) => ui.cns.append(create_element({ type: 'p', content: output }))

    const add_lines = output => output.split('\n').forEach(line => add_line(line))

    const add_empty_line = () => {
        const line = document.createElement('br')
        ui.cns.append(line)
    }

    const add_path = () => {
        const span = create_element({ type: 'span' })
        span.style.fontWeight = 'bold'
        span.append(document.createTextNode('Re-Portfolio SMKOU ~/'))
        const line = create_element({
            type: 'p',
            classname: 'bash',
            content: span
        })
        line.append(document.createTextNode(ui.path.join('/')))
        ui.cns.append(line)
    }
    add_path()

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

    document.querySelectorAll('#aside-content button')
    .forEach(btn => btn.addEventListener('click', () => {
        const command = btn.innerHTML
        add_line(`$ ${command}`)
        add_lines(`${manual[command].help}
        ${manual[command].whatis}`)
    }))

    /* ERRORS -------------------------------------- */

    const print_error = err => {
        add_lines(err)
        return false
    }

    const errors = {
        custom: (term, message) => print_error(`error: ${term}: ${message}`),
        command: (term) => print_error(`bash: ${term}: command not found`),
        node: (term, wrong) => print_error(`bash: ${term}: ${wrong}: no such item or directory`),
        invalid_option: (term, wrong) => print_error(`bash: ${term}: ${wrong.join(', ')}: invalid option
        ${term}: usage: ${data.resources.manual[term].help}`),
        unknown_option: (term, wrong) => print_error(`${term}: unknown option -- ${wrong.map(err => {
            err = err.split('-')
            return err[err.length - 1]
        }).join(', ')}
        Try '${term} --help' for more information.`)
    }

    /* HELPERS ------------------------------------- */

    const is_valid_date = str => !isNaN(new Date(str))

    const flatten = (arr, flat = []) => {
        if (!arr.length) return flat
        arr.forEach(e => {
            if (Array.isArray(e))
                flat.concat(flatten(e, flat))
            else
                flat.push(e)
        })
        return flat
    }

    const includes = (arr, ...terms) => {
        terms = flatten(terms)
        let included = false
        let i = -1
        while (++i < terms.length && !included) {
            if (arr.includes(terms[i])) { included = true }
        }
        return included
    }

    const filter = (arr, terms) => {
        const included = []
        const not_included = []
        for (const term of terms) {
            if (!arr.includes(term)) { not_included.push(term) }
            else { included.push(term) }
        }
        return { included, not_included }
    }

    const filter_input_type = (args) => {
        const flags = []
        const values = []
        while (args.length) {
            const arg = args.pop()
            if (arg.includes('-')) { flags.push(arg) }
            else { values.push(arg.toLowerCase()) }
        }
        return { flags, values }
    }

    const init_no_input = (args, command) => {
        const { flags, values } = filter_input_type(args)
        if (values.length)
            return errors.invalid_option(command, values)
        const { included, not_included } = filter(resources.manual[command].options, flags)
        if (not_included.length)
            return errors.unknown_option(command, not_included)
        return included
    }

    /* CMD ----------------------------------------- */

    const help = (args) => {
        const { flags, values } = filter_input_type(args)
        const wrong = []
        for (const val of values) {
            if (!resources.manual.hasOwnProperty(val)) { wrong.push(val) }
        }
        if (wrong.length)
            return errors.invalid_option('help', wrong)
        const { included, not_included } = filter(resources.manual.help.options, flags)
        if (not_included.length)
            return errors.unknown_option('help', not_included)

        if (includes(included, '-o', '--open-aside') && !ui.aside.state) { ui.aside.tog.click() }
        else if (included.includes('--help'))
            return help(['help'])

        if (!values.length) {
            add_line(Object.keys(resources.manual).join(' '))
            return true
        }
        add_lines(`${resources.manual[values[0]].help}\n${resources.manual[values[0]].whatis}`)
    }

    const cal = (args) => {
        const addr = resources.manual.cal
        let date = new Date()
        let freq = ['daily', 'weekly', 'monthly']
        let viewGoals = false

        if (args.length) {
            const { flags, values } = filter_input_type(args)
            const wrong = []
            for (const v of values) {
                if (freq.includes(v)) { freq = freq.filter(f => f === v) }
                else if (is_valid_date(v)) { date = new Date(v) }
                else { wrong.push(v) }
            }
            if (wrong.length)
                return errors.invalid_option('cal', wrong)
            const { included, not_included } = filter(addr.options, flags)
            if (not_included.length)
                return errors.unknown_option('cal', not_included)
            if (included.length) {
                if (included.includes('--help'))
                    return help(['cal'])
                else if (included.includes('-e'))  { freq.push('events') }
                else if (included.includes('-g')) { viewGoals = true }
            }
        }

        const sched = {}
        const weekday = date.getDay()
        const options = {
            weekday: 'narrow',
            day: 'numeric',
            month: 'numeric',
            year: '2-digit'
        }
        const weeks_diff = (() => {
            if (date.getDate() > 1) {
                const [m,,y] = date.toLocaleDateString(undefined, options).split('/')
                const month_first = new Date(`${m}/1/${y}`)
                return Math.floor(data.getTime() - month_first.getTime()) / (1000 * 60 * 60 * 24) + 1
            }
            return 1
        })()

        const add = (freq, type) => (e, key) => {
            const [time, dur] = e.time
            const [hour, half] = time.split(':')
            sched[time] = {
                n: parseInt(hour) * 2 + (parseInt(half) ? 1 : 0),
                dur: dur * 2,
                name: key.split('_').join(' '),
                freq,
                type,
                duration: `${dur} hour${dur !== 1 ? 's' : ''}`
            }
        }

        const add_sched = (freq, type) => {
            const f = calendar[freq][type]
            for (const key of Object.keys(f)) {
                const e = f[key]
                if (freq === 'daily'
                || (freq === 'weekly' && e.days[weekday])
                || (freq === 'monthly' && e.week === weeks_diff && e.days[weekday])) {
                    add(freq, type)(e, key)
                }
            }
        }

        for (const f of freq)
            add_sched(f, 'routine')
        if (viewGoals) {
            for (const f of freq)
                add_sched(f, 'goals')
        }

        const keys = Object.keys(sched).sort((a, b) => sched[a].n - sched[b].n)
        const line = (key) => `${sched[key].name} - ${key} for ${sched[key].duration}`
        add_lines(keys.map(key => line(key)).join('\n'))
    }

    const cd = (args) => {
        if (!args.length) {
            ui.path = []
            ui.dir = 'portfolio'
            return true
        }

        const addr = resources.manual.cd
        const { flags, values } = filter_input_type(args)
        if (flags.length) {
            const { included, not_included } = filter(addr.options, flags)
            if (not_included.length)
                return errors.invalid_option('cd', not_included)
            if (included.length)
                return help(['cd'])
        }

        let directory = 'portfolio'
        let path = ui.path.slice()
        let node = get_node()
        if (values.length) {
            if (values.length > 1) { [directory, path] = values }
            else {
                const ipt = values[0]
                if (Object.keys(directories).includes(ipt)) { directory = values[0] }
                else {
                    let subs = values[0].split('/')
                    while (subs[0] === '..') {
                        subs.shift()
                        if (path.length) { path.pop() }
                    }
                    path = path.concat(subs)
                    node = get_node(path)
                    if (node.hasOwnProperty('shift'))
                        return errors.node('cd', node.shift)
                    path = path.concat(subs)
                }
            }
        }

        ui.dir = directory
        ui.path = path
    }

    const cls = (args) => {
        if (args.length) {
            const included = init_no_input(args, 'cls')
            if (!included) return;
            return help(['cls'])
        }
        ui.cns.innerHTML = ''
        ui.aside.tog.click()
    }

    const clear = (args) => {
        if (args.length) {
            const included = init_no_input(args, 'clear')
            if (!included) return;
            return help(['clear'])
        }
        ui.cns.innerHTML = ''
    }

    const date = (args) => {
        const addr = resources.manual.date
        let date = new Date()
        let dest_date = ''
        let freq = ''
        let qty = 0
        let format = {
            weekday: 'narrow',
            day: 'numeric',
            month: 'numeric',
            year: '2-digit'
        }
        let divider = '/'

        if (args.length) {
            const { flags, values } = filter_input_type(args)
            const wrong = []
            for (const v of values) {
                if (is_valid_date(v)) { dest_date = new Date(v) }
                else if (typeof v === 'number' && v !== 0) { qty = v }
                else if (['day', 'week', 'month', 'year'].includes(v)) { freq = v }
                else { wrong.push(v) }
            }
            if (wrong.length)
                return errors.invalid_option('date', wrong)
            if ((!freq && qty) || (freq && !qty))
                return errors.custom('date', 'requires frequency and quantity')
            const { included, not_included } = filter(addr.options, flags)
            if (not_included.length)
                return errors.unknown_option('date', not_included)
            if (included.length) {
                if (included.includes('--help'))
                    return help(['date'])
                else if (includes(included, '-s', '--short')) {
                    format = {...format, month: 'short', year: 'numeric' }
                }
                else if (includes(included, '-l', '--long')) {
                    format = {...format, weekday: 'long', month: 'long', year: 'numeric' }
                }
                else if (includes(included, '-h', '--hyphen')) { divider = '-' }
            }
        }

        /*
        (default) => current date
        freq qty => current date + (freq * qty)
        dest freq qty => dest + (freq * qty)
        dest => dest - current date
        */
    }

    const dir = (args) => {}

    const echo = (args) => {}

    const find = (args) => {}

    const hostname = (args) => {
        if (args.length) {
            const included = init_no_input(args, 'hostname')
            if (!included) return;
            return help(['hostname'])
        }
        add_line(ui.host)
    }

    const ls = (args) => {
        const addr = resources.manual.ls

        let path = ui.path.slice()
        let dir = ui.dir
        if (args.length) {
            const { flags, values } = filter_input_type(args)
            const wrong = []
            const dirs = Object.keys(directories)
            if (includes(values, dirs)) {
                for (let i = 0; i < values.length; ++i) {
                    if (dirs.includes(values[i])) {
                        dir = values[i]
                        values.splice(i, 1)
                    }
                }
            }

            for (const val of values) {
                const subs = val.split('/')
                const node = get_node(path.concat(subs))
                if (!node.shift) { path = path.concat(subs) }
                else {
                    if (Object.keys(directories).includes(val)) { dir = val }
                    else { wrong.push(val) }
                }
            }

            if (wrong.length)
                return errors.invalid_option('ls', wrong)
            const { included, not_included } = filter(addr.options, flags)
            if (not_included.length)
                return errors.unknown_option('ls', not_included)
            if (included.length)
                return help(['ls'])
        }

        if (ui.dir !== dir) { ui.dir = dir }
        const node = get_node(path)
        if (typeof node !== 'object')
            return errors.custom('ls', 'cannot list value(s)')

        const props = Object.keys(node)
        const items = []
        for (const prop of props) {
            if (typeof node[prop] === 'object') { items.push(prop + '/') }
            else { items.push(prop) }
        }
        add_line(items.join(' '))
    }

    const lynx = (args) => {}

    const man = (args) => {
        const addr = resources.manual.man
        if (!args.length)
            return errors.custom('man', 'requires command name')
        const { flags, values } = filter_input_type(args)
        if (values.length > 1)
            return errors.custom('man', 'enter only one command name')
        if (!cmd.hasOwnProperty(values[0]))
            return errors.command(values[0])
        const { included, not_included } = filter(addr.options, flags)
        if (not_included.length)
            return errors.unknown_option('man', not_included)

        if (included.includes('--help'))
            return help(['man'])

        const page = resources.manual[values[0]].page

        if (includes(included, '-n', '--name-only'))
            add_line(page.name)
        else if (includes(included, '-s', '--synopsis-only'))
            add_lines(page.synopsis.join('\n'))
        else if (includes(included, 'd', '--description-only'))
            add_lines(page.description)
        else {
            const create_div = (title, text) => {
                const span = create_element({
                    type: 'span',
                    content: title
                })
                span.style.fontWeight = 'bold'
                const div = create_element({
                    type: 'div',
                    classname: 'manual-page',
                    content: span
                })

                if (Array.isArray(text)) {
                    const ctnr = create_element({
                        type: 'div',
                        content: text.map(t => {
                            const p = create_element({
                                type: 'p',
                                content: t
                            })
                            p.style.marginTop = 0
                            return p
                        })
                    })
                    div.append(ctnr)
                }
                else {
                    const p = create_element({ type: 'p', content: text })
                    p.style.marginTop = 0
                    div.append(p)
                }

                ui.cns.append(div)
            }

            create_div('Name', page.name)
            create_div('Synopsis', page.synopsis)
            create_div('Description', page.description.split('\n'))
        }
    }

    const more = (args) => {}

    const msg = (args) => {
        const opt = {
            linkedin: () => 'koudblue',
            github: () => 'SmKou'
        }
        const present = {}
        const present_all = () => {
            const m = Object.keys(opt)
            for (const key of m) { present[key] = `${media[key].href}${opt[key]()}/` }
        }
        if (args.length) {
            const included = init_no_input(args, 'msg')
            if (!included) return;
            if (included.length) {
                if (included.includes('--help'))
                    return help(['msg'])
                else if (includes(included, '-l', '--linkedin')) {
                    present.linkedin =  `${media.linkedin.href}${opt.linkedin()}/`
                }
                else if (includes(included, '-g', '--github')) {
                    present.github = `${media.github.href}${opt.github()}`
                }
            }
            else { present_all() }
        }
        else { present_all() }

        const links = Object.keys(present).map(v => {
            const a = create_element({
                type: 'a',
                content: v,
                link: present[v]
            })
            return a
        })
        const content = new Array(links.length * 2 - 1)
        for (i = 1; i < content.length; i += 2) {
            content[i] = document.createTextNode(' ')
        }
        const p = create_element({
            type: 'p',
            content
        })
        ui.cns.append(p)
    }

    const print = (args) => {
        const included = init_no_input(args, 'print')

        if (included.length && includes(included, '-a', '--all') && includes(included, '-d', '--download'))
            return errors.custom('print', 'dev refuses - printed resume is 3pg long with poor formatting')

        const title = create_element({
            type: 'h1',
            content: 'Frontend Web Developer'
        })
        const contact_linkedin = create_element({
            type: 'p',
            content: [
                document.createTextNode('LinkedIn: '),
                create_element({
                    type: 'a',
                    content: 'Kou.d Blue',
                    link: media.linkedin + 'koudblue'
                })
            ]
        })
        const contact_github = create_element({
            type: 'p',
            content: [
                document.createTextNode('Github: '),
                create_element({
                    type: 'a',
                    content: 'SmKou',
                    link: media.github + 'smkou'
                })
            ]
        })
        const header = create_element({
            type: 'div',
            classname: 'resume-header',
            content: [
                title,
                create_element({
                    type: 'div',
                    content: [ contact_linkedin, contact_github ]
                })
            ]
        })

        const statement = create_element({
            type: 'p',
            content: ''
        })

        const skills_title = create_element({
            type: 'h1',
            content: 'Skills'
        })
        const skill_items = [
            'JavaScript/HTML/CSS',
            'Node.js',
            'React',
            'Interaction design',
            'User Experience design',
            'Service design',
            'Design Research'
        ]
        const skills_list = create_list(skill_items.map(skill => create_element({
            type: 'li',
            content: skill
        })))
        const skills = create_element({
            type: 'div',
            classname: 'skills-section',
            content: [ skills_title, skills_list ]
        })

        const exp_title = create_element({
            type: 'h1',
            content: 'Professional Experience'
        })
        const exp_props = Object.keys(portfolio.experience)
        const exp_shown_props = !included.length || !includes(included, '-a', '--all')
            ? exp_props.filter(key => includes(
                key.split('-'),
                ['frontend', 'backend', 'fullstack', 'web']
            ))
            : exp_props
        const exp_items = exp_shown_props.map(key => {
            const pos = portfolio.experience[key]

            const pos_source = create_element({
                type: 'p',
                classname: 'exp-title',
                content: `${Array.isArray(pos.ref) ?
                    pos.ref.join(', ')
                    : pos.ref.title
                } / ${pos.location}`
            })
            const pos_title = create_element({
                type: 'p',
                content: pos.title
            })
            const pos_head = create_element({
                type: 'div',
                content: [ pos_source, pos_title ]
            })
            const exp_head = create_element({
                type: 'div',
                classname: 'exp-header',
                content: [
                    pos_head,
                    create_element({
                        type: 'p',
                        classname: 'text-right',
                        content: `${pos.year[0]} - ${pos.year[1]}`
                    })
                ]
            })

            const resp_items = pos.responsibility.split('\n').map(line => {
                line = line.trim()
                return create_element({ type: 'li', content: line })
            })
            const exp_list = create_list(resp_items)

            const exp_section = create_element({
                type: 'div',
                content: [exp_head, exp_list]
            })
            return exp_section
        })
        const exp_list = create_element({
            type: 'div',
            content: exp_items
        })
        const exp = create_element({
            type: 'div',
            content: [ exp_title, exp_list ]
        })

        const edu_title = create_element({
            type: 'h1',
            content: 'Education'
        })
        const edu_props = Object.keys(portfolio.education)
        const edu_shown_props = !included.length || !includes(included, '-a', '--all')
            ? edu_props.filter(key => key != 'pre-engineering')
            : edu_props
        const edu_items = edu_shown_props.map(key => {
            const deg = portfolio.education[key]
            const deg_title = create_element({
                type: 'p',
                classname: 'edu-title',
                content: `${Array.isArray(deg.ref) ? deg.ref.map(r => r.title).join(', ') : deg.ref.title} / ${deg.location}`
            })
            const deg_spec = create_element({
                type: 'p',
                content: deg.title
            })
            const deg_head = create_element({
                type: 'div',
                content: [ deg_title, deg_spec ]
            })

            const deg_grad = create_element({
                type: 'p',
                classname: 'text-right',
                content: deg.year
            })

            const edu_head = create_element({
                type: 'div',
                classname: 'edu-header',
                content: [ deg_head, deg_grad ]
            })

            if (!included.length || !includes(included, '-a', '--all'))
                return edu_head

            const desc = create_element({
                type: 'p',
                content: deg.description
            })
            const keywords = create_element({
                type: 'p',
                classname: 'small',
                content: 'Keywords: ' + deg.keywords.join(', ')
            })
            const info = create_element({
                type: 'div',
                content: [ desc, keywords ]
            })

            const edu_body = create_element({
                type: 'div',
                content: [ edu_head, info ]
            })
            return edu_body
        })
        const edu_list = create_element({
            type: 'div',
            content: edu_items
        })
        const edu = create_element({
            type: 'div',
            content: [ edu_title, edu_list ]
        })

        const sections = [ header, statement, skills, exp, edu ]
        const resume = create_element({
            type: 'div',
            content: sections
        })

        const top_btn = document.createElement('button')
        top_btn.setAttribute('class', 'top-btn bold')
        top_btn.append(document.createTextNode('TOP'))
        top_btn.addEventListener('click', () => {
            resume.scrollIntoView({ inline: 'start' })
        })

        if (included.length) {
            if (included.includes('--help'))
                return help(['print'])
            if (includes(included, '-d', '--download')) {
                const frame = document.createElement('iframe')
                frame.name = 'frame'
                ui.cns.append(frame)

                const r = resume.innerHTML
                const a = window.open('', 'frame', 'height=1320, width=1020')
                const s = `@page { size: auto;  margin: 1mm; }
                body { width: 95vw }
                h1 {
                    margin: 1.8rem 0.8rem;
                    border-bottom: 0.1rem solid black;
                }
                p { margin: 0 }
                div { margin: 0.6rem 0 }
                .resume-header,
                .exp-header,
                .edu-header {
                    padding: 0 0.8rem;
                    display: grid;
                    grid-template-columns: 1fr 22rem;
                    column-gap: 0.8rem;
                }
                .resume-header {
                    width: 100%;
                    align-items: center;
                }
                .exp-title,
                .edu-title,
                .bold { font-weight: bold }

                .text-right { text-align: right }
                .small { font-size: 1.2rem }

                .skills-section { padding: 0.8rem }
                `
                a.document.write(`<html><head><title>Stella Marie - Web Developer Resume</title><style>${s}</style></head><body>${r}</body></html`)
                a.document.close()
                a.print()
                frame.remove()
            }
        }

        ui.cns.append(resume)
        ui.cns.append(top_btn)
        setTimeout(() => top_btn.click(), 0.4)
    }

    const pwd = (args) => {
        let path = ui.path.slice()
        if (args.length) {
            const included = init_no_input(args, 'pwd')
            if (!included) return;

            if (included.includes('--help'))
                return help(['pwd'])
            else if (includes(included, '-r', '--root')) { path = `${ui.dir}:/${path.join('/')}`}
        }
        else { path = path.join('/') }

        if (path === '') { add_line('/') }
        else { add_line(path) }
    }

    const stat = (args) => {}

    const tree = (args) => {}

    const whatis = (args) => {
        const { flags, values } = filter_input_type(args)
        if (!values.length)
            return custom_error('whatis', 'command required')
        if (values.length > 1)
            return custom_error('whatis', 'only 1 arg')

        const command = values[0]
        if (!Object.keys(resources.manual).includes(command))
            return command_error(command)
        const { included, not_included } = filter(resources.manual.whatis.options, flags)
        if (not_included.length)
            return unknown_option_error('whatis', not_included)

        if (!included.length) {
            add_line(resources.manual[command].whatis)
            return true
        }

        const page = resources.manual[command].page
        if (included.includes('--help'))
            return help(['whatis'])
        else if (includes(included, '-n', '--name-only')) { add_line(page.name) }
        else if (includes(included, '-s', '--synopsis-only')) { add_lines(page.synopsis.join('\n')) }
        else if (includes(included, '-d', '--description-only')) { add_lines(page.description) }
        else if (includes(included, '-m', '--manual')) {
            const data = `${page.name}\n${page.synopsis.join('\n')}\n${page.description}`
            add_lines(data)
        }
    }

    const whoami = (args) => {
        if (args.length) {
            const included = init_no_input(args, 'whoami')
            if (!included) return;
            if (included.includes('--help'))
                return help(['whoami'])
            else if (includes(included, '-a', '--all')) { add_line('Stella Marie: Sm Kou, Sm Joker, Kou.d Blue') }
        }
        else { add_line('Stella Marie') }
    }

    const cmd = {
        cal, cd, cls, clear,
        date, dir,
        echo,
        find,
        help, hostname,
        ls, lynx,
        man, more, msg,
        print, pwd,
        stat,
        tree,
        whatis, whoami
    }
    const exec = input => {
        const [command, ...ipt] = input.split(' ')
        if (cmd.hasOwnProperty(command)) { cmd[command](ipt) }
        else { errors.command(command) }
    }

    ui.ipt.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            add_line(e.target.value, true)
            user_input.vals.push(e.target.value)
            user_input.i = user_input.vals.length

            const value = e.target.value.slice(2)
            ui.ipt.value = '$ '
            if (value.includes('&&')) {
                const cmds = value.split('&&').map(val => val.trim())
                for (const cmd of cmds) {
                    const res = exec[cmd]
                    if (!res)
                        break;
                }
            }
            else { exec(value) }
            add_empty_line()
            add_path()
            ui.cns.lastChild.scrollIntoView({ inline: 'end' })
        }
        else if (e.key === 'ArrowUp' && user_input.i > 0) { user_input.i-- }
        else if (e.key === 'ArrowDown' && user_input.i <= user_input.vals.length - 1) { user_input.i++ }

        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            if (user_input.i === user_input.vals.length)
                ui.ipt.value = '$ '
            else
                ui.ipt.value = user_input.vals[user_input.i]
        }
    })
})()
