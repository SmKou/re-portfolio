/* projects
    'odin-challenge': {
        title: 'Odin Challenge',
        description: 'Complete foundations and full-stack javascript paths in given time limit',
        keywords: ['html', 'css', 'javascript', 'vanilla js', 'node.js'],
        year: 2025,
        href: { source: sources.odin },
        status: false,
        comment: `Self-designated challenge: 7 courses in 1 month`
    },
    'notation-calculator': {
        title: 'Notation Calculator',
        description: 'Calculator web app using (reverse) polish and standard notation with memory and collapsible visualization',
        keywords: ['html', 'css', 'javascript', 'vanilla js', 'responsive design', 'canvas'],
        year: 2024,
        href: {
            source: sources.smkou,
            ref: ['https://leetcode.ca/2016-04-28-150-Evaluate-Reverse-Polish-Notation/', 'https://math.stackexchange.com/questions/1811628/converting-from-standard-to-functional-polish-and-reverse-polish-notation']
        },
        status: false,
        comment: `Features:
        - Switch notation mode
        - View visualization
        - Use of memory`
    },
    'travel-scrapbook': {
        title: 'Travel Scrapbook',
        description: 'Travelogue web app for creating and viewing scrapbooks',
        keywords: ['html', 'css', 'javascript', 'vanilla js'],
        year: 2025,
        status: false,
        comment: `Features:
        - Upload images to use
        - Add images, text and maps to pages
        - Alternative page templates eg. freeform vs form-provided
        - Designate order of focus
        - User accounts: images and scrapbooks
        
        Requires app and server`
    },
    'cattery': {
        title: 'Angels of Siberia',
        description: 'Cattery website',
        keywords: ['html', 'css', 'javascript', 'vanilla js', 'sql', 'node.js', 'api', 'responsive design'],
        year: 2025,
        href: {
            source: sources.smkou,
            ref: ['http://www.angelofsiberia.com']
        },
        status: false,
        comment: `Requires frontend for display and personal backend for owner
        - CMS: Wordpress, Wix`
    },
    'nudibranch': {
        title: 'Nudibranch Pages',
        description: 'Element and page design based on nudibranchs',
        keywords: ['html', 'css', 'javascript', 'vanilla js'],
        year: 2023,
        href: {
            source: sources.smkou,
            inspect: ['https://github.com/SmKou/nudibranch']
        },
        status: false,
        comment: `Template page
        Switch mechanism: css docs
        
        Nudibranchs = sea slugs`
    },
    '[wwjd]': {
        title: '[What Would Jesus Do?]',
        description: 'Rock game',
        keywords: ['html', 'css', 'javascript', 'vanilla js', 'canvas'],
        year: 2025,
        href: { source: sources.smkou },
        status: false,
        comment: `Zero-player game?

        Protect a rock from external forces that would crack, break or shrink it
        - water
        - snow
        - fire / magma`
    },
    '[farting-mario]': {
        title: '[Farting Mario]',
        description: 'Mario-parody game',
        keywords: ['godot', 'c#'],
        year: 2025,
        href: { source: sources.smkou },
        status: false
    },
    '[hernia]': {
        title: '[Hernia]',
        description: 'Something to do with the word and concept of hernia',
        keywords: [],
        year: 2026,
        href: { source: sources.smkou },
        status: false,
        comment: `Hernia 1 2 3 4 - "sounds like a series"
        "1 and 2 were great, but after 3, it just went downhill from there."`
    }
*/


const manual = {
    cal: {
        page: {
            name: 'cal - calendar',
            synopsis: [ 
                'cal', 
                'cal DATE',
                'cal FREQUENCY',
                'cal DATE FREQUENCY'
            ],
            description: `Show calendar information.
            Default date is today's.
            Specify a date or frequency for viewing events from calendar information.

            Frequency can be daily, weekly, and monthly.
            
            --help
                display command information of cal`
        },
        options: {
            flags: {
                '-g': 'addGoals',
                '--goals': 'addGoals',
                '-e': 'addEvents',
                '--events': 'addEvents'
            },
            addGoals: (freq, addSched, weekday, sched) => {
                if (freq)
                    addSched(freq, 'goals')
                else 
                    for (const f of ['daily', 'weekly', 'monthly'])
                        addSched(f, 'goals')

                if (weekday !== 0) return true

                /* Special case */
                const keys = Object.keys(sched)
                const goal = sched[keys.filter(key => sched[key].freq === 'monthly' && sched[key].type === 'goals')[0]]
                if (weekday === 0) 
                    for (const key of keys) {
                        const event = sched[key]
                        if (event.n < goal.n || (event.n + event.d > goal.n && event.n + event.d < goal.n + goal.d))
                            delete sched[key]
                    }
            },
            addEvents: (date, options, events, add) => {
                const d = date.toLocaleDateString(undefined, options)
                if (!events.hasOwnProperty(d)) return false

                const f = events[d]
                for (const e of Object.keys(f))
                    add(f[e], e)
            }
        },
        help: `cal: cal <[date]|[frequency]>
        Show calendar information.`
    },
    cd: {
        page: {
            name: 'cd - change directory',
            synopsis: [ 'cd ../PATH', 'cd PATH' ],
            description: `Add to and remove from current path, navigating portfolio categories.
            Root category is portfolio. Categories in portfolio include versions (portfolio), projects, experiences, education, sources, art and calendar.
            
            Category equates to directory.
            Item equates to file.
            
            --help
                display command information of cd`
        },
        help: `cd: cd [..][<path>]
        Change working category.`
    },
    cls: {
        page: {
            name: 'cls - clear screen',
            synopsis: [ 'cls' ],
            description: `Clear the terminal. Collapse aside, thus not showing commands list and introduction.
                
            --help
                display command information of cls`
        },
        help: `cls: cls
        Clear the terminal and interface.`
    },
    clear: {
        page: {
            name: 'clear',
            synopsis: [ 'clear' ],
            description: `Clear the terminal.
                
            --help
                display command information of clear`
        },
        help: `clear: clear
        Clear the terminal.`
    },
    date: {
        page: {
            name: 'date',
            synopsis: [ 
                'date', 
                'date FREQUENCY QUANTITY', 
                'date DATE FREQUENCY QUANTITY',
                'date DATE' 
            ],
            description: `Show date.
            Current date is today's date.
            Dates can be written with forward slashes or hyphens. Shown in format: W M/dd/YY

            Avoid using leading zeroes in your entered dates: 12/03/15
            
            Determine date in a given amount of time from a given date, or amount of time from today's date to a given date.

            -s, --short
                display result in short form: W Mon. dd, year

            -l, --long
                display result in long form: Weekday Month dd, year

            -h, --hyphen
                display result with hyphens if the result has multiple parts
                cannot be used with change of format
            
            --help
                display command information of date`
        },
        options: {
            flags: {
                '-s': 'formatShort',
                '--short': 'formatShort',
                '-l': 'formatLong',
                '--long': 'formatLong',
                '-h': 'formatHyphen',
                '--hyphen': 'formatHyphen'
            },
            formatShort: (options) => {
                options.weekday = 'short'
                options.month = 'short'
            },
            formatLong: (options) => {
                options.weekday = 'long'
                options.month = 'long'
                options.year = 'numeric'
            },
            // addWeek: (date, str) => {
            //     const week = Math.floor(date.getDate() / 7)
            //     const place = ['st', 'nd', 'rd', 'th', 'th']
            //     return `${week + 1}${place[week]} ${str}`
            // },
            formatHyphen: (date, str) => str.replace('/', '-')
        },
        help: `date: date <date> <freq qty>
        Show date or time to date.`
    },
    dir: {
        page: {
            name: 'dir - directory',
            synopsis: [ 'dir', 'dir CATEGORY' ],
            description: `Show contained categories and items of category.
            Root category is portfolio.
            Only works on categories, not on items and their properties.
            
            --help
                display command information for dir`
        },
        help: `dir: dir <category>
        Show contained categories and items.`
    },
    echo: {
        page: {
            name: 'echo',
            synopsis: [ 'echo ITEM_NAME', 'echo PATH ITEM_NAME' ],
            description: `Show messages regarding item, default is first message found in status.
            Messages may consist of status, comments, and developer remarks.

            -a, --all
                show all messages provided with item

            --help
                display command information of echo`
        },
        help: `echo: echo <path> <item_name>
        Show messages of item.`
    },
    find: {
        page: {
            name: 'find',
            synopsis: [ 'find ["string"]', 'find ["string"] CATEGORY' ],
            description: `Search a category, or categories, for a string appearing in item properties and their values.
            If the string consists of spaces, it will be split into individual terms and item properties and values will be tested against each individual term. In other words, search does not consist of equivalence.
            
            -p, --property-only
                search only item properties

            -v, --value-only
                search only item values
            
            --help
                display command information of find`
        },
        help: `find ["string"] <category>
        Search items for property name or value.`
    },
    help: {
        page: {
            name: 'help',
            synopsis: [ 'help', 'help COMMAND' ],
            description: `Display command information.
            If no command is specified, help will return a list of available commands.`
        },
        help: `help: help <command>
        Show command information.`
    },
    hostname: {
        page: {
            name: 'hostname',
            synopsis: [ 'hostname' ],
            description: `Display name of host.
            
            --help
                display command information of hostname`
        },
        help: `hostname: hostname
        Display name of host.`
    },
    ls: {
        page: {
            name: 'ls - list',
            synopsis: [ 'ls', 'ls PATH' ],
            description: `List categories and items of category.
            Root category is portfolio.
            Include a path to specify another category.
            May use on item to list properties.
            
            --help
                display command information of ls`
        },
        help: `ls: ls [..][<path>]
        List categories, items, and properties in current category or item.`
    },
    lynx: {
        page: {
            name: 'lynx',
            synopsis: [ 'lynx ITEM_NAME', 'lynx PATH ITEM_NAME' ],
            description: `Follow url contained in item. Opens a url to another host in another tab.

            Note: Lynx is a fully-featured www client for the linux terminal
            
            -m, --main
                list all recent urls associated with item

            -a, --all
                list all urls associated with item, include backups and iterations
                
            --help
                display command information of lynx`
        },
        help: `lynx: lynx <path> <item_name>
        Open item url.`
    },
    man: {
        page: {
            name: 'man - manual',
            synopsis: [ 'man', 'man COMMANDS' ],
            description: `Show manual pages of commands.
            List commands separated by spaces. Ensure correct spelling and that command names are only lowercase.

            -n, --name-only
                show only names from manual pages

            -s, --synopsis-only
                show only synopsis from menaul pages

            -d, --description-only
                show only description from manual pages
            
            --help
                display command information of man`
        },
        options: {
            flags: {
                '-n': 'showName',
                '--name-only': 'showName',
                '-s': 'showSynopsis',
                '--synopsis-only': 'showSynopsis',
                '-d': 'showDescription',
                '--description-only': 'showDescription'
            },
            show: (cmd) => {
                const page = manual[cmd].page
                return `${page.name}
                ${page.synopsis}
                ${page.description}`
            },
            showName: (cmd) => manual[cmd].page.name,
            showSynopsis: (cmd) => manual[cmd].page.synopsis,
            showDescription: (cmd) => manual[cmd].page.description
        },
        help: `man: man <command command...>
        Show manual page for command(s).`
    },
    more: {
        page: {
            name: 'more',
            synopsis: [ 'more', 'more ITEM' ],
            description: `Show contained information of current item.
            Use name of an item as-is.
            Cannot be used on categories.

            -m, --messages-included
                show item messages as well
            
            --help
                display command information of more`
        },
        help: `more: more
        Show contained information in item.`
    },
    msg: {
        page: {
            name: 'msg - message',
            synopsis: [ 'msg', 'msg PREFERENCE' ],
            description: `View contact to send a message to developer.
            Available preferences: linkedin, github.
            
            -l, --linkedin
                show only linkedin contact

            -g, --github
                show only github contact

            --help
                display command information of msg`
        },
        help: `msg: msg <preference>
        View contact information.`
    },
    pwd: {
        page: {
            name: 'pwd - print working directory',
            synopsis: [ 'pwd' ],
            description: `Prints current path to console.
            Path consists of categories and items.
            
            --help
                display command information of pwd`
        },
        help: `pwd: pwd
        Show path of current category or item.`
    },
    sort: {
        page: {
            name: 'sort',
            synopsis: [ 'sort', 'sort CATEGORY' ],
            description: `Sort items in category.
            Default order is ascending alphabetical order according to the name of items.

            -d, --descending
                sort in descending order

            -y, --year
                sort by year if items contain a year property

            -s, --status
                sort by status and then name if items contain a status
            
            --help
                display command information of sort`
        },
        help: `sort: sort
        Sort items in category in results from another command.
        Valid commands: dir, ls`
    },
    stat: {
        page: {
            name: 'stat',
            synopsis: [ 'stat', 'stat ITEM' ],
            description: `Show details of an item, consisting of category, status, and year.

            -c, --category-only
                show only category of item

            -s, --status-only
                show only status of item

            -y, --year-only
                show only year of item if item has a year
            
            --help
                display command information of stat`
        },
        help: `stat: stat <item_name>
        Show details of item.`
    },
    tree: {
        page: {
            name: 'tree',
            synopsis: [ 'tree', 'tree CATEGORY' ],
            description: `Prints a folder structural representation of categories and items.
            Root category is portfolio. Can only use on categories.
            
            -ai, --attributes-included
                show item properties

            --help
                display command information of tree`
        },
        help: `tree: tree <category>
        Show path structure of category.`
    },
    whatis: {
        page: {
            name: 'whatis - what is',
            synopsis: [ 'whatis COMMAND' ],
            description: `Show command action, taken from command information used for help.

            Among options, name-only, synopsis-only, and description-only take precedence over the manual. Only the first option taking greatest precedence will be used.

            -m, --manual
                show manual page

            -n, --name-only
                show only names from manual page

            -s, --synopsis-only
                show only synopsis from menaul page

            -d, --description-only
                show only description from manual page
            
            --help
                display command information of whatis`
        },
        options: {
            flags: {
                '-m': 'showManual',
                '--manual': 'showManual',
                '-n': 'showName',
                '--name-only': 'showName',
                '-s': 'showSynopsis',
                '--synopsis-only': 'showSynopsis',
                '-d': 'showDescription',
                '--description-only': 'showDescription'
            },
            show: (cmd) => manual[cmd].help.split('\n')[1],
            showManual: (cmd) => manual[cmd].page,
            showName: (cmd) => manual[cmd].page.name,
            showSynopsis: (cmd) => manual[cmd].page.synopsis,
            showDescription: (cmd) => manual[cmd].page.description
        },
        help: `whatis: whatis [command]
        Show what a command does.`
    },
    whoami: {
        page: {
            name: 'whoami - who am i',
            synopsis: [ 'whoami' ],
            description: `Show the name of the developer.
            
            --help
                display command information of whoami`
        },
        help: `whoami: whoami
        Show the name of the developer.`
    }
}

/* cal:
const addr = resources.manual.cal

let date = new Date()
let freq = ''

const flags = []
const wrong_input = []
const wrong_options = []

while (args.length) {
    const arg = args.pop()
    if (arg.includes('-'))
        if (addr.options.flags.includes(arg) || arg === '--help')
            flags.push(arg)
        else
            wrong_options.push(arg)
    else if (['daily', 'weekly', 'monthly'].includes(arg))
        freq = arg
    else if (addr.helpers.is_valid_date(arg))
        date = new Date(arg)
    else
        wrong_input.push(arg)
}

if (wrong_input.length) return invalid_option_error('cal', wrong_input)
if (wrong_options.length) return unknown_option_error('cal', wrong_options)
if (flags.includes('--help')) return this.help(['cal'])

const sched = {}
const weekday = date.getDay()
const options = {
    weekday: 'narrow',
    day: 'numeric',
    month: 'numeric',
    year: '2-digit'
}

let weeks_diff = 1
if (date.getDate() > 1) {
    const [m,,y] = date.toLocaleDateString(undefined, options).split('/')
    const month_first = new Date(`${m}/1/${y}`)
    weeks_diff = Math.floor((data.getTime() - month_first.getTime()) / (1000 * 60 * 60 * 24) / 7) + 1
}

const add = (freq, type) => (e, key) => {
    const [time, dur] = e.time
    const [hour, half] = time.split(':')
    sched[time] = {
        n: parseInt(hour) * 2 + (parseInt(half) ? 1: 0),
        d: dur * 2,
        name: key.split('_'.join(' ')),
        freq, type,
        duration: `${dur} hour${dur !== 1 ? 's' : ''}`
    }
}

const add_sched = (freq, type) => {
    const f = calendar[freq][type]
    for (const key of Object.keys(f)) {
        const e = f[key]
        if (freq === 'daily'
        || (freq === 'weekly' && e.days[weekday])
        || (freq === 'monthly' && e.week === weeks_diff && e.days[weekday]))
            add(freq, type)(e, key)
    }
}

if (freq)
    add_sched(freq, 'routine')
else
    for (const f of ['daily', 'weekly', 'monthly'])
        add_sched(f, 'routine')

if (flags.length) {
    const opt = this.options
    if (includes(flags, '-g'))
        opt.add_goals(freq, add_sched, weekday, sched)
    else if (includes(flags, '-e'))
        opt.add_events(date, options, calendar.events, add(freq, 'events'))
}

const keys = Object.keys(sched).sort((a, b) => sched[a].n - sched[b].n)
add_lines(`${keys.map(key => `${sched[key].name} - ${key} for ${sched[key].duration}`).join('\n')}`)
*/

const cmd = {
    cal: function(args) {
        let date = new Date(), freq = '', flags = []
        const wrong = [], wrong_options = []
        const isValidDate = str => !isNaN(new Date(str))
        while (args.length) {
            const e = args.pop()
            if (e.includes('-'))
                if (Object.keys(manual.cal.options.flags).includes(e))
                    flags.push(e)
                else
                    wrong_options.push(e)
            else if (['daily', 'weekly', 'monthly'].includes(e))
                freq = e
            else if (isValidDate(e)) 
                date = new Date(e)
            else
                wrong.push(e)
        }

        if (wrong.length)
            return invalid_option('cal', wrong)
        if (wrong_options.length)
            return unknown_option('cal', wrong_options)
        if (flags.includes('--help'))
            return this.help(['cal'])
        
        const daySched = {}
        const weekday = date.getDay()
        const options = {
            weekday: undefined,
            day: 'numeric',
            month: 'numeric',
            year: '2-digit'
        }

        let weeksDiff = 1
        if (date.getDate() !== 1) {
            const [month,,year] = date
                .toLocaleDateString(undefined, options)
                .split('/')
            const firstOfMonth = new Date(`${month}/1/${year}`)
            weeksDiff = Math.floor((date.getTime() - firstOfMonth.getTime()) / (1000 * 60 * 60 * 24) / 7) + 1
        }

        const add = (freq, type) => (e, key) => {
            const [time, dur] = e.time
            const [hour, half] = time.split(':')
            daySched[time] = {
                n: parseInt(hour) * 2 + (parseInt(half) ? 1 : 0),
                d: dur * 2,
                name: key.split('_').join(' '),
                freq,
                type,
                duration: `${dur} hour${dur !== 1 ? 's' : ''}`
            }
        }

        const addSched = (freq, type) => {
            const f = calendar[freq][type]
            for (const key of Object.keys(f)) {
                const e = f[key]
                if (freq === 'daily' 
                || (freq === 'weekly' && e.days[weekday]) 
                || (freq === 'monthly' && e.week === weeksDiff && e.days === weekday)) 
                    add(freq, type)(e, key)
            }
        }

        if (freq) 
            addSched(freq, 'routine')
        else 
            for (const f of ['daily', 'weekly', 'monthly'])
                addSched(f, 'routine')

        if (flags.length) {
            const manual_opt = manual.cal.options
            if (includes(flags, '-g', '--goals')) 
                manual_opt[manual_opt.flags['-g']](freq, addSched, weekday, daySched)
            else if (includes(flags, '-e', '--events'))
                manual_opt[manual_opt.flags['-e']](date, options, calendar.events, add(freq, 'events'))
        }

        const keys = Object.keys(daySched).sort((a, b) => daySched[a].n - daySched[b].n)
        addLines(`${keys.map(key => `${daySched[key].name} -  ${key} for ${daySched[key].duration}`).join('\n')}`)
    },
    cd: function(args) {
        if (!args.length) {
            ui.path = []
            return true
        }

        if (args.includes('--help'))
            return this.help(['cd'])

        const flags = args.filter(arg => arg.includes('-'))
        if (flags.length)
            return invalid_option('cd', flags)

        let path = ui.path.slice(), subs = args[0].split('/')
        if (subs[0] == '..' && ui.path.length) {
            subs.shift()
            path.pop()
        }
        path = path.concat(subs)

        const node = getNode(path)
        if (node.shift) 
            return non_node('cd', node.shift)

        ui.path = path.concat(subs)
    },
    cls: function(args) {
        if (args.length) 
            if (args.includes('--help'))
                return this.help(['cls'])
            else
                return invalid_option('cls', args)

        ui.cns.innerHTML = ''
        ui.aside.tog.click()
    },
    clear: function(args) { 
        if (args.length)
            if (args.includes('--help'))
                return this.help(['clear'])
            else
                return invalid_option('clear', args)

        ui.cns.innerHTML = ''
    },
    date: function(args) {
        const options = {
            weekday: 'narrow',
            day: 'numeric',
            month: 'numeric',
            year: '2-digit'
        }

        if (!args.length) {
            addLine(date.toLocaleDateString(undefined, options))
            return true
        }

        if (args.includes('--help'))
            return this.help(['date'])

        const valid_flags = manual.date.options.flags
        const flags = [], wrong = []
        for (const arg of args)
            if (!valid_flags[arg])
                wrong.push(arg)
            else
                options.push(arg)
        
        if (wrong.length)
            return unknown_option('date', wrong)
        
        const manual_opt = manual.date.options
        const exceptions = { '-wd': false, '-h': false }
        for (const flag of flags) {
            if (['-wd', '--weekday'].includes(flag))
                exceptions['-wd'] = true
            else if (['-h', '--hyphen'].includes(flag))
                exceptions['-h'] = true
            else
                manual_opt[manual_opt.flags[flag]](options)
        }

        const date = new Date()
        let str = date.toLocaleDateString(undefined, options)
        for (const key of Object.keys(wd_h))
            if (wd_h[key])
                str = manual_opt[manual_opt.flags[key]]
        
        addLine(str)
    },
    dir: function(args) {
        let path = ui.path.slice()
        if (args.length)
            if (args.includes('--help'))
                return this.help(['dir'])
            else {

            }
    },
    echo: function(args) {},
    find: function(args) {},
    help: function(args) {
        if (!args.length) {
            const commands = Object.keys(manual)
            addLine(`Available commands: ${commands.join(', ')}`)
            return true
        }

        if (args.includes('--help'))
            return this.help(['help'])

        if (!manual.hasOwnProperty(args[0])) 
            return non_command(args[0])
        
        addLines(manual[args[0]].help)
    },
    hostname: function(args) {
        if (args.length)
            if (args.includes('--help'))
                return this.help(['hostname'])
            else 
                return invalid_option('hostname', args)

        addLine(ui.host)
    },
    ls: function(args) {
        let path = ui.path.slice()
        if (args.length)
            if (args.includes('--help'))
                return this.help(['ls'])
            else {
                let subs = args[0].split('/')
                if (subs[0] === '..') {
                    subs.shift()
                    path.pop()
                }
                path = path.concat(subs)
            }

        const node = getNode(path)
        if (node.shift) 
            return non_node('ls', node.shift)
        
        
    },
    lynx: function(args) {},
    man: function(args) {
        if (!args.length) {
            const pages = Object.keys(manual)
            addLine(`Available pages: ${pages.join(', ')}`)
            return true
        }

        const manual_opt = manual.man.options
        const commands = [], flags = []
        const wrong = [], wrong_options = []
        while (args.length) {
            const command = args.pop()
            if (manual.hasOwnProperty(command))
                commands.push(command)
            else if (command.includes('-'))
                if (manual_opt.flags.includes(command))
                    if (!flags.length)
                        flags.push(command)
                else
                    wrong_options.push(command)
            else
                wrong.push(command)
        }

        if (wrong.length) 
            return non_command(wrong.join(', '))
        if (wrong_options.length) 
            return unknown_option('man', wrong_options)

        const funcName = flags.length ? 
            manual_opt.flags[flags[0]]
            : 'show'
        const func = manual_opt[funcName]

        for (const command of commands)
            addLines(func(command))
    },
    more: function(args) {},
    msg: function(args) {},
    pwd: function(args) {
        if (args.length)
            if (args.includes('--help'))
                return this.help(['pwd'])
            else
                return invalid_option('pwd', args)

        addLine(`~/${ui.path.join('/')}`)
    },
    sort: function(args) {},
    stat: function(args) {},
    tree: function(args) {},
    whatis: function(args) {
        if (!args.length)
            return error('whatis', 'no command specified')
        
        if (args.includes('--help'))
            return this.help(['whatis'])
        
        const manual_opt = manual.whatis.options
        const flags = [], commands = []
        const wrong = [], wrong_options = []
        while (args.length) {
            const arg = args.pop()
            if (arg.includes('-'))
                if (Object.keys(manual_opt.flags).includes(arg))
                    if (['-m', '--manual'].includes(arg))
                        flags[0] = '-m'
                    else if (!flags[1])
                        flags[1] = arg
                else
                    wrong_options.push(arg)
            else if (manual[arg])
                commands.push(arg)
            else
                wrong.push(arg) 
        }

        if (wrong.length)
            return error('what is', `${wrong.join(', ')}: command not found`)
        if (wrong_options.length)
            return invalid_option('whatis', wrong_options)

        if (!flags.length) {
            const show = manual_opt.show
            for (const command of commands)
                addLine(`${command}: ${show(command)}`)
            return true
        }

        const funcName = flags[1] ? 
            manual_opt[flags[1]] 
            : manual_opt[flags[0]]
        const func = manual_opt[funcName]

        for (const command of commands)
            addLine(`${command}: ${func(command)}`)
    },
    whoami: function(args) {
        if (args.length)
            if (args.includes('--help'))
                return this.help(['whoami'])
            else
                return invalid_option('whoami', args)

        addLine('Developer: Stella Marie (Sm Kou)')
    }
}

/* cd:
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
                    return invalid_option_error('cd', not_included)

                if (included.length)
                    return this.help(['cd'])
            }

            let directory = 'portfolio'
            let path = ui.path.slice()
            let node = get_node()
            if (values.length)
                if (values.length > 1)
                    [directory, path] = values
                else {
                    const ipt = values[0]
                    if (Object.keys(directories).includes(ipt))
                        directory = values[i]
                    else {
                        let subs = values[i].split('/')
                        while (subs[0] === '..') {
                            subs.shift()
                            if (path.length)
                                path.pop()
                        }
                        
                        node = get_node(path.concat(subs))
                        if (node.shift)
                            return non_node('cd', node.shift)
        
                        path = path.concat(subs)
                    }
                }

            ui.dir = directory
            ui.path = path
*/