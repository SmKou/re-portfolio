import versions from "./versions/versions"
import sources from "./data/sources"
import experience from "./data/experience"
import education from "./data/education"
import projects from "./data/projects"
import {
	flatten,
	includes,
	filter,
	filter_ipt
} from './fn.js'

(() => {
    const manual = {
        cd: {
            page: {
                name: 'cd - change directory',
                synopsis: [
                    'cd PATH',
                    'cd DIRECTORY',
                    'cd DIRECTORY PATH'
                ],
                description: `Change working path.
                Root: portfolio

                Requires DIRECTORY to change root.
                
                --help
                    display command information`
            },
            options: ['--help'],
            help: 'cd: cd [path]',
            whatis: 'Change working path.'
        },
        cls: {
            page: {
                name: 'cls - clear screen',
                synopsis: ['cls'],
                description: `Clear interface: terminal + aside
                May also be used to toggle view of the aside.

                -o, --open
                Show command list only

                -c, --close
                Hide command list only
                
                --help
                    display command information`
            },
            options: [
				'-o', '--open',
				'c', '--close',
				'--help'
			],
            help: 'cls: cls',
            whatis: 'Clear the interface.'
        },
        clear: {
            page: {
                name: 'clear',
                synopsis: ['clear'],
                description: `Clear the terminal.
                    
                --help
                    display command information`
            },
            options: ['--help'],
            help: 'clear: clear',
            whatis: 'Clear the terminal.'
        },
        dir: {
            page: {
                name: 'dir - directory',
                synopsis: [
					'dir',
					'dir DIRECTORY'
				],
                description: `Show contained subdirectories and files.
                Root: portfolio
                
                Requires DIRECTORY to change root.

                -f, --files-only
                    show only contained files
                
                --help
                    display command information`
            },
            options: [
				'-f', '--files-only',
				'--help'
			],
            help: 'dir: dir <directory>',
            whatis: 'Show contained directories and files.'
        },
        echo: {
            page: {
                name: 'echo',
                synopsis: [
                    'echo FILENAME',
                    'echo PATH FILENAME'
                ],
                description: `Show file messages (status, comment, developer remarks)
                Default: show only status
    
                -a, --all
                    show all messages provided in file

                -c, --comment-only
                    show only comments
                
                -d, --dev-only
                    show only dev remarks
    
                --help
                    display command information`
            },
            options: [
				'-a', '--all',
				'-c', '--comment-only',
				'-d', '--dev-only',
				'--help'
			],
            help: 'echo: echo <path> <filename>',
            whatis: 'Show file messages.'
        },
        find: {
            page: {
                name: 'find',
                synopsis: [
                    'find ["string"]',
                    'find ["string"] DIRECTORY'
                ],
                description: `Search a directory for a string appearing in file properties and data.
                Search does not consist of equivalence:
                If the string consists of commas, it will be split into individual terms and file properties and data will be tested against each individual term.

                Root: portfolio
                DIRECTORY = root | subdirectory
                
                -p, --property-only
                    search only file properties
    
                -v, --value-only
                    search only file data
                
                --help
                    display command information`
            },
            options: [
				'-p', '--property-only',
				'-v', '--value-only',
				'--help'
			],
            help: 'find: find ["string"] <directory>',
            whatis: 'Search files for property name or value.'
        },
        help: {
            page: {
                name: 'help',
                synopsis: [
					'help',
					'help COMMAND'
				],
                description: `Display command information.
                No command: view list of available commands.

                -o, --open-aside
                    show aside with commands list

                --help
                    display command information

                The help flag can be used on any command, but will ignore all other input when used. Even if the other input is valid, --help takes precedence after error checking.`
            },
            options: [
				'-o', '--open-aside',
				'--help'
			],
            help: 'help: help <command>',
            whatis: 'Display command information.'
        },
        hostname: {
            page: {
                name: 'hostname',
                synopsis: ['hostname'],
                description: `Display name of host.

                --help
                    display command information`
            },
            options: ['--help'],
            help: 'hostname: hostname',
            whatis: 'Display name of host.'
        },
        ls: {
            page: {
                name: 'ls - list',
                synopsis: [
                    'ls',
                    'ls PATH',
                    'ls DIRECTORY',
                    'ls DIRECTORY PATH'
                ],
                description: `List directories and files.
                Root: portfolio.
                Default path: current working path
                
                Requires DIRECTORY to change root.
                
                --help
                    display command information`
            },
            options: ['--help'],
            help: 'ls: ls <dir> <path>',
            whatis: 'List directories and files.'
        },
        lynx: {
            page: {
                name: 'lynx',
                synopsis: [
                    'lynx FILENAME',
                    'lynx PATH FILENAME',
                    'lynx FILENAME LINK_NAME',
                    'lynx PATH FILENAME LINK_NAME'
                ],
                description: `Follow file url
                Opens url to another host in another tab.
                Displays list of urls if file has more than one
    
                Note: Lynx is a fully-featured www client for the linux terminal
                
                -m, --main-only
                    list all recent urls associated with file
    
                -a, --all
                    list all urls associated with file, include backups and iterations
                    
                --help
                    display command information`
            },
            options: ['-m', '--main-only', '-a', '--all', '--help'],
            help: 'lynx: lynx <path> <item_name> <link_name>',
            whatis: 'Open file url.'
        },
        man: {
            page: {
                name: 'man - manual',
                synopsis: ['man COMMAND'],
                description: `Show manual page for command.
    
                -n, --name-only
                    show only names from manual pages
    
                -s, --synopsis-only
                    show only synopsis from menaul pages
    
                -d, --description-only
                    show only description from manual pages
                
                --help
                    display command information`
            },
            options: ['-n', '--name-only', '-s', '--synopsis-only', '-d', '--description-only', '--help'],
            help: 'man: man <command>',
            whatis: 'Show manual page for command.'
        },
        more: {
            page: {
                name: 'more',
                synopsis: [
                    'more',
                    'more FILE',
                    'more PATH FILE'
                ],
                description: `Show file data.
    
                -m, --messages-included
                    include file messages
                
                --help
                    display command information`
            },
            options: ['-m', '--messages-included', '--help'],
            help: 'more: more <path> <filename>',
            whatis: 'Show file data.'
        },
        msg: {
            page: {
                name: 'msg - message',
                synopsis: ['msg'],
                description: `View contact to send a message to developer.
                Available preferences: linkedin, github.
                
                -l, --linkedin
                    show only linkedin contact
    
                -g, --github
                    show only github contact
    
                --help
                    display command information`
            },
            options: ['-l', '--linkedin', '-g', '--github', '--help'],
            help: 'msg: msg',
            whatis: 'View contact information.'
        },
        pwd: {
            page: {
                name: 'pwd - print working directory',
                synopsis: ['pwd'],
                description: `Prints path of working directory.

                -r, --root
                    show root directory
                
                --help
                    display command information`
            },
            options: ['-r', '--root', '--help'],
            help: 'pwd: pwd',
            whatis: 'Print working directory.'
        },
        stat: {
            page: {
                name: 'stat',
                synopsis: [
                    'stat',
                    'stat FILE'
                ],
                description: `Show file properties.
    
                -d, --data-included
                    include file data
    
                -m, --messages-included
                    include file messages
                
                --help
                    display command information`
            },
            options: ['-d', '--data-included', '-m', '--messages-included', '--help'],
            help: 'stat: stat <filename>',
            whatis: 'Show details of file.'
        },
        tree: {
            page: {
                name: 'tree',
                synopsis: [
                    'tree',
                    'tree DIRECTORY'
                ],
                description: `Prints structural representation.
                Root: portfolio
                
                Requires DIRECTORY to change root
                
                -f, --files-included
                    include files
    
                --help
                    display command information`
            },
            options: ['-f', '--files-included', '--help'],
            help: 'tree: tree <directory>',
            whatis: 'Show path structure.'
        },
		whatcanido: {
			page: {
				name: 'whatcanido - what can i do',
				synopsis: ['whatcanido'],
				description: `Show terminal commands available for the current directory or file

				--help
					display command information`
			},
			options: ['--help']
		},
        whatis: {
            page: {
                name: 'whatis - what is',
                synopsis: [
					'whatis COMMAND',
					'whatis WORD'
				],
                description: `Show command action.
                May be used to lookup definitions of terms used in this manual.
    
                -m, --manual
                    show manual page
    
                -n, --name-only
                    show only names from manual page
    
                -s, --synopsis-only
                    show only synopsis from menaul page
    
                -d, --description-only
                    show only description from manual page

				-v, --vocab
					show definition of term
                
                --help
                    display command information`
            },
            options: ['-m', '--manual', '-n', '--name-only', '-s', '--synopsis-only', '-d', '--description-only', '--help'],
            help: 'whatis: whatis [command]',
            whatis: 'Show command action.'
        },
        whoami: {
            page: {
                name: 'whoami - who am i',
                synopsis: ['whoami'],
                description: `Show the name of the developer.

                -a, --all
                    show all aliases
                
                --help
                    display command information`
            },
            options: ['-a', '--all', '--help'],
            help: 'whoami: whoami',
            whatis: 'Show developer name.'
        }
    }

/* END MANUAL ------------------------------------------------- */

    const pages = {
        versions: {
            title: 'The Old TV',
            description: 'Preview the available portfolios',
            href: 'versions/'
        }
    }

    const resources = { manual, sources }
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

/* UI DATA ---------------------------------------------------- */


	const get_dir = (dir = ui.dir) => directories[dir]

    const get_node = (path = ui.path.slice(), dir = 'portfolio', node = get_dir(dir), shift) => {
        if (!path.length)
            return node
        shift = path.shift()
        const res = node.hasOwnProperty(shift)
            ? get_node(path, dir, node[shift])
            : { shift }
        return res
    }

    const html = {
		div: () => document.createElement("div"),
		p: () => document.createElement("p"),
		span: () => document.createElement("span"),
		h1: () => document.createElement("h1"),
		a: () => document.createElement("a"),
		li: () => document.createElement("li"),
		txt: (text) => document.createTextNode(text)
	}

	// items{string|htmlElement}
	const list = ({ type, items }) => {
		const e = type === "ul"
			? document.createElement("ul")
			: document.createElement("ol")
		items.forEach(item => {
			const li = html.li()
			li.append(html.txt(item))
			e.append(li)
		})
		return e
	}

	const element = ({ type, content, classname, link }) => {
		const e = html[type]()
		if (classname)
			e.setAttribute("class", classname)
		if (content)
			if (Array.isArray(content))
				content.forEach(c => e.append(c))
			else if (typeof content === "string")
				e.append(html.txt(content))
			else
				e.append(content)
		return e
	}

    const add_line = (output = "") => {
		if (!output.length)
			ui.cns.append(document.createElement("br"))
		output = output.split("\n")
		output.forEach(line => {
			const p = element({ type: "p", content: line })
			ui.cns.append(p)
		})
	}

	const add_path = () => {
		const span = html.span()
		span.style.fontWeight = "bold"
		span.append(html.txt('Re-Portfolio SMKOU ~/'))
		const line = element({
			type: "p",
			classname: "bash",
			content: span
		})
		line.append(html.txt(ui.path.join("/")))
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

/* ERRORS ----------------------------------------------------- */

	const errors = {
		custom: function(term, message) {
			const text = `error: ${term}: ${message}`
			add_line(cns, text)
		},
		command: function(term) {
			const text = `bash: ${term}: command not found`
			add_line(text)
		},
		node: function(term, wrong) {
			const text = `bash: ${term}: ${wrong}: no such item or directory`
			add_line(text)
		},
		invalid_option: function(cns, term, wrong, manual) {
			const text = `bash: ${term}: ${wrong.join(', ')}: invalid option
			${term}: usage: ${manual[term].help}`
			add_line(text)
		},
		unknown_option: function(cns, term, wrong) {
			const text = `${term}: unknown option -- ${wrong.map(err => {
				err = err.split('-')
				return err[err.length - 1]
			}).join(', ')}
			Try '${term} --help' for more information.`
			add_line(text)
		}
	}

/* HELPERS ---------------------------------------------------- */

    const init_no_input = (args, command) => {
        const { flags, values } = filter_input_type(args)
        if (values.length)
            return errors.invalid_option(command, values)
        const { included, not_included } = filter(manual[command].options, flags)
        if (not_included.length)
            return errors.unknown_option(command, not_included)
        return included
    }

    const input_no_flags = (args, command) => {
		const { flags, values } = filter_ipt(args)
		if (flags.length) {
			const { included, not_included } = filter(manual[command].options, flags)
			if (not_included.length)
				return errors.invalid_option(command, not_included)
			if (included.length)
				return help([command])
		}
		return included
	}

/* CMD -------------------------------------------------------- */

	const help = (args) => {
		const { flags, values } = filter_ipt(args)
		const wrong = []
		for (const val of values)
			if (!manual.hasOwnProperty(val))
				wrong.push(val)
			if (wrong.length)
				return errors.invalid_option('help', wrong)
			const { included, not_included } = filter(manual.help.options, flags)
			if (not_included.length)
				return errors.unknown_option('help', not_included)

			if (includes(included, '-o', '--open-aside') && !ui.aside.state)
				ui.aside.tog.click()
			else if (included.includes('--help'))
				return help(['help'])

			if (!values.length) {
				add_line(Object.keys(manual).join(' '))
				return true
			}
			add_lines(`${manual[values[0]].help}\n${manual[values[0]].whatis}`)
	} // status: help:

	const dict = {
		directory: "",
		file: "",
	}
    
    const cmd = {
        cd: (args) => {
            if (!args.length) {
                ui.path = []
                ui.dir = 'portfolio'
                return true
            }

            const { flags, values } = filter_ipt(args)
            if (flags.length) {
                const { included, not_included } = filter(manual.cd.options, flags)
                if (not_included.length)
                    return errors.invalid_option('cd', not_included)
                if (included.length)
                    return help(['cd'])
            }

            let directory = 'portfolio'
            let path = ui.path.slice()
            let node = get_node()
            if (values.length) {
                if (values.length > 1) {
					[directory, path] = values
				}
                else {
                    const ipt = values[0]
                    if (Object.keys(directories).includes(ipt)) {
						directory = values[0]
					}
                    else {
                        let subs = values[0].split('/')
                        while (subs[0] === '..') {
                            subs.shift()
                            if (path.length) {
								path.pop()
							}
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
        }, // status: cd: [x]
        cls: (args) => {
            if (args.length) {
                const included = init_no_input(args, 'cls')
                if (!included)
					return;
                return help(['cls'])
            }
            ui.cns.innerHTML = ''
            ui.aside.tog.click()
        }, // status: cls: change functionality
        clear: (args) => {
            if (args.length) {
                const included = init_no_input(args, 'clear')
                if (!included)
					return;
                return help(['clear'])
            }
            ui.cns.innerHTML = ''
        }, // status: clear: [x]
        dir: (args) => { }, // status: dir:
        echo: (args) => { }, // status: echo:
        find: (args) => { }, // status: find:
		help,
        hostname: (args) => {
            if (args.length) {
                const included = init_no_input(args, 'hostname')
                if (!included) return;
                return help(['hostname'])
            }
            add_line(ui.host)
        }, // status: hostname:
        ls: (args) => {
            const addr = manual.ls

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
        }, // status: ls:
        lynx: (args) => { },
        man: (args) => {
            const addr = manual.man
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

            const page = manual[values[0]].page

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
        }, // status: lynx:
        more: (args) => { }, // status: more:
        msg: (args) => {
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
                        present.linkedin = `${media.linkedin.href}${opt.linkedin()}/`
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
        }, // status: msg:
        pwd: (args) => {
            let path = ui.path.slice()
            if (args.length) {
                const included = init_no_input(args, 'pwd')
                if (!included) return;

                if (included.includes('--help'))
                    return help(['pwd'])
                else if (includes(included, '-r', '--root')) { path = `${ui.dir}:/${path.join('/')}` }
            }
            else { path = path.join('/') }

            if (path === '') { add_line('/') }
            else { add_line(path) }
        }, // status: pwd:
        stat: (args) => { }, // status: stat:
        tree: (args) => { }, // status: tree:
		whatcanido: (args) => {}, // status: whatcanido:
        whatis: (args) => {
            const { flags, values } = filter_input_type(args)
            if (!values.length)
                return custom_error('whatis', 'command required')
            if (values.length > 1)
                return custom_error('whatis', 'only 1 arg')

            const command = values[0]
            if (!Object.keys(manual).includes(command))
                return command_error(command)
            const { included, not_included } = filter(manual.whatis.options, flags)
            if (not_included.length)
                return unknown_option_error('whatis', not_included)

            if (!included.length) {
                add_line(manual[command].whatis)
                return true
            }

            const page = manual[command].page
            if (included.includes('--help'))
                return help(['whatis'])
            else if (includes(included, '-n', '--name-only')) { add_line(page.name) }
            else if (includes(included, '-s', '--synopsis-only')) { add_lines(page.synopsis.join('\n')) }
            else if (includes(included, '-d', '--description-only')) { add_lines(page.description) }
            else if (includes(included, '-m', '--manual')) {
                const data = `${page.name}\n${page.synopsis.join('\n')}\n${page.description}`
                add_lines(data)
            }
        }, // status: whatis:
        whoami: (args) => {
            if (args.length) {
                const included = init_no_input(args, 'whoami')
                if (!included) return;
                if (included.includes('--help'))
                    return help(['whoami'])
                else if (includes(included, '-a', '--all')) { add_line('Stella Marie: Sm Kou, Sm Joker, Kou.d Blue') }
            }
            else { add_line('Stella Marie') }
        } // status: whoami:
    }

    const exec = input => {
        const [command, ...ipt] = input.split(' ')
        if (cmd.hasOwnProperty(command)) {
			cmd[command](ipt)
		}
        else {
			errors.command(command)
		}
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
