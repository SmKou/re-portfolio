const manual = {
    cal: {
        page: {
            name: 'cal - calendar',
            synopsis: [ 
                'cal', 
                'cal DATE',
                'cal FREQUENCY',
            ],
            description: `Show calendar information.
            Default date is today's.
            Specify a date or frequency for viewing events from calendar information.

            Frequency can be daily, weekly, and monthly.
            
            --help
                display command information of cal`
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
            description: `Clear the terminal. Collapse aside and footer of interface, thus not showing commands list, introduction, and site copyright.
                
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
            synopsis: [ 'date', 'date OPTIONS', 'date' ],
            description: `Show date.
            Current date is today's date.
            Dates can be written as M/D/YY or M-D-YY. The default format uses forward slashes. To use a different ordering or format, specify with an option.

            Options consist of flags. There is no option for padding.

            -d, --day
                display day in month of date (default: numeric)

            -wd, --weekday
                display weekday of date (default: numeric)

            -w, --week
                display week in month of date (default: numeric)

            -y, --year
                display year of date (default: numeric)

            -s, --short
                display result in short form

            -l, --long
                display result in long form

            -n, --numeric
                display result in numeric form

            -h, --hyphen
                display result with hyphens if the result has multiple parts
            
            --help
                display command information of date`
        },
        help: `date: date
        Show current date.`
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
        List categories and items in current category.`
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

            -m, --manual
                show description from manual page
            
            --help
                display command information of whatis`
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

const sources = {
    fm: {
        title: 'Frontend Masters',
        href: { ref: ['https://frontendmasters.com'] },
        comment: `Intended Courses:
        - The Last Algorithms Course You'll Need
        - The Last Algorithms Course You'll Need pt. 2
        - Blazingly Fast Javascript
        - Vanilla JS: You Might Not Need a Framework
        - The Hard Parts of UI Development
        - Web UX Design for High Converting Websites
        - HTMX and Go
        - Cross-Platform Mobile Apps with Flutter
        - Build Progress Web Apps (PWAs) from Scratch
        - Practical Problem Solving with Algorithms
        ...
        
        Completed:`
    },
    odin: {
        title: 'The Odin Project',
        href: { ref: ['https://www.theodinproject.com'] },
        comment: `Personal goal (project challenge) - Complete courses in beginner's web development from The Odin Project
        1 month
        - Foundations
        - Full Stack Javascript`
    },
    fcc: {
        title: 'freeCodeCamp',
        href: { ref: ['https://www.freecodecamp.org/'] },
        comment: `Personal goal (project challenge) - Complete curriculum from freeCodeCamp
        4 months
        - 12 main courses in web development and python
        - 3 courses in developer interview job prep`
    },
    ztm: {
        title: 'Zero to Mastery',
        href: { ref: ['https://zerotomastery.io'] },
        comment: `Used for review of introduction to web devevlopment
        Projects - First Page, Live in the Wild, Android Journeys, RoboFriends, Face Brain Recognition (redesigned to SimpleBrain)`
    },
    epi: {
        title: 'Epicodus',
        href: { 
            ref: ['https://www.epicodus.com'],
            referral: ['https://www.linkedin.com/in/calvinwill/', 'https://www.linkedin.com/in/jasminemklein/']
        },
        comment: `Coding Bootcamp from May to Dec 2023
        Courses included Intro to Web development, Advanced JS and Node.js, C# for Full-stack web development, and React
        Projects - Programming Language suggester, Mr. Roboger Neighborhood, Pizza Parlor, Currency Exchanger, Super Galactic Age calculator, Dino Ipsum, Pierre Bakery, Madlibs clone, Hair Salon, Vendor Order Tracker, Sillystringz Factory, Pierre's Sweet and Savory Treats, Parks Lookup api, Coffee Beans
        Team projects - game (obsolete), Global Address Formatter
        Capstone - KataDSA app concept (obselete)`
    },
    edcc: {
        title: 'Edmonds College (formerly Edmonds Community College)',
        href: { ref: ['https://www.edmonds.edu'] },
        comment: `Associate's degree in Pre-engineering
        Introduction to Programming - Visual Basic and Java
        
        Program: Running Start
        - acquired associate's degree along with high school diploma
        - completed 110 credits
        
        Program: Partial IB (International Baccaleaurate)
        - Chinese and Math`
    },
    uw: {
        title: 'University of Washington',
        href: { ref: ['https://www.washington.edu'] },
        comment: `Alma mater
        Graduated 2014 with BS Informatics from Information School`
    },
    ischool: {
        title: 'iSchool (Information School)',
        href: { 
            ref: ['https://ischool.uw.edu/'],
            referral: ['https://www.linkedin.com/in/mike-eisenberg-10b1957/']
        },
        comment: `Bachelor's degree in Informatics
        Specialized in User experience design
        Projects - Husky Goals, Carmax, Booksie, Apollo-Artemis in LETO project management
        
        Note: Design projects resulted in design spec, portfolios, and Axure prototypes`
    },
    sjtu: {
        title: 'Shanghai Jiaotong University',
        href: { 
            ref: [
                'https://en.sjtu.edu.cn', 
                'https://www.linkedin.com/school/shanghai-jiao-tong-university/'
            ]   // Include backup links in arr
        },
        comment: `Alma mater
        Graduated 2020 with MA Design from School of Design
        Renamed to Design School (unconfirmed)`
    },
    sod: {
        title: 'School of Design',
        href: {
            ref: [ 'https://designschool.sjtu.edu.cn/en-us', '' ]   
            // Backuo unknown
        },
        comment: `Master's degree in Design
        Specialized in Interaction design
        Projects - KS Healthcare app, Little Red game, Storytelling in Design, Interaction Design course, Service Design course, Disney Imaginations Shanghai, Creative writing app
        
        Note: Design projects resulted in design spec, portfolios, and Java/Processing prototypes`
    },
    smkou: {
        title: 'Sm Kou',
        href: {
            ref: ['https://smkou.com'], 
            devlog: ['https://smkou.hashnode.dev']
        },  // Unique: devlog?
        comment: `Not updated
        Intended use: algorithms project (smkou), daily devlog (hashnode)`
    },
    signed: {
        title: 'SignedPic',
        href: {
            ref: ['https://signedpic.com'],
            linkedin: ['https://www.linkedin.com/company/signedpic/about/'],
            refferal: ['https://www.linkedin.com/in/leegrambush/']
        },
        comment: `Worked on react flow and d3 implementation for firm accounts to manage attorneys and clients`
    },
    ph: {
        title: 'Paper Hammer',
        href: { 
            ref: ['https://www.paper-hammer.com'],
            refferal: ['https://www.linkedin.com/in/edmarquand/']
        }
    }
}

const versions = [
    {
        title: 'The Profile',
        href: {
            view: ['v0/'],
            ref: ['https://www.kamranhughes.com/how-to-tailor-designs-using-the-big-5-personality-traits/']
        },
        description: 'Re-Portfolio 2015-2017 features a questionnaire that changes page content and layout based on user answers. It is divided into visual preferences, graphic and text preferences, answer sections and question preferences.',
        status: false,
        dev: `Add user questionnaire
        Add content:
        - chart or bar graph
        - progress bars
        - stock image, credit and source
        - bullet points
        - personal fact(s)
        - statement(s)
        - summary
        - analysis
        
        Basis of concept: User Interfaces with Big-5 Personality Traits ${this.href.ref}`
    },
    {
        title: 'The Magazine',
        href: {
            view: ['v1/'],
            inspiration: ['https://www.nytimes.com/section/magazine']
        },
        description: 'Re-Portfolio 2015-2022 features a magazine-layout of flash fiction, short stories, and series. The writing is reflective of my mental state at the time of writing. Taking them at face value is not suggested.',
        status: true,
        dev: `Add images for stories (use 640 optimized on clr, gen bw)
        Edit and redesign smjoker.com (slated)`
    },
    {
        title: 'The Design Index',
        href: { view: ['v2/'] },
        description: 'Re-Portfolio 2018-2021 features a book index layout. The index consists of concepts in html and css, which can be further sorted into tags, fonts, shapes, layouts, ui elements, programming, and resources.',
        status: true,
        dev: `Add content
        - tags
        - shapes
        - layouts
        - ui elements
        - programming ie. variables and expressions
        - resources
        
        Work out code interfaces for shapes, layouts and ui elements`
    },
    {
        title: 'The Slideshow of Slideshows',
        href: {
            view: ['v3/'],
            ref: ['https://codepen.io/dodozhang21/pen/kMoXZz']
        },
        description: 'Re-Portfolio 2020-2022 features four slideshows on portfolio, different page designs, and favorite shows.',
        status: false,
        dev: `Determine switch mechanism between slideshows
        Include back and home
        Add slideshows:
        - navigation
        - portfolio
        - favorite movies
        - favorite shows`
    },
    {
        title: 'The People in Pages',
        href: { view: ['v4/'] },
        description: 'Re-Portfolio 2021-2022 features page designs based on observations of people. When I see a combination of clothing that catches my attention, since I cannot draw or take a photograph, I turn their clothing combination into the layout for a webpage.',
        status: true
    },
    {
        title: 'Epicodus Resume',
        href: { view: ['v5/'] },
        description: 'Re-Portfolio 2023 features a resume and profile format, done for portfolio review as part of a bootcamp code review (Epicodus).',
        status: true
    }
]

const messages = {
    cnet: 'All C#/.Net projects are not likely to be completed.',
    cnet_dep: `Status: deprecated
    ${this.cnet}`,
    basic: `Status: complete
    No need to change or update.`,
    demo: `Only included for demonstration.`
}

const projects = {
    'husky-goals': {
        title: 'Husky Goals',
        description: 'Mobile app for keeping track of goals based on counter, timer, and checklists',
        keywords: ['axure rp','html','css','javascript', 'paper prototypes', 'wireframes', 'mockups', 'user research', 'user testing', 'user interviews', 'user stories', 'personas'],
        year: 2012,
        href: { source: sources.ischool },
        status: true,
        comment: `Course: Design Thinking
        Completed submission: Axure RP prototype and design spec`,
        dev: `Status: queued
        Prototype in vanilla js
        Redesign as responsive web app`
    },
    'carmax': {
        title: 'Carmax',
        description: 'Mobile app for setting up appointment for car viewing, include step-by-step form for entering preferences',
        keywords: ['axure rp', 'wireframes', 'mockups'],
        year: 2013,
        href: {
            source: sources.ischool,
            ref: ['https://www.carmax.com']
        },
        status: true,
        comment: `Course: Service Design
        Completed submission: Axure RP prototype, design spec and app presentation`,
        dev: `Status: deprecated
        Not likely to rework
        
        Research: car market and carmax situation
        - Carmax mobile app and website
        Redesign for Carmax corporate design`
    },
    'booksie': {
        title: 'Booksie Database Design',
        description: 'Database model for Booksie user content and services',
        keywords: ['sql', 'database models', 'mysql', 'flow diagrams'],
        year: 2013,
        href: {
            source: sources.ischool,
            ref: ['https://www.booksie.com']
        },
        status: true,
        comment: `Course: Database Models and Design
        Completed submission: database model and database with mock data`,
        dev: `Status: in-consideration
        Prefer system and service redesign
        - online writing community
        - publishing
        - blogging platforms
        
        Requires app, server and database`
    },
    'ijuum': {
        title: 'Ijuum',
        description: 'Text adventure with AI for NPCs',
        keywords: ['html', 'css', 'javascript', 'vanilla js', 'go', 'cli', 'desktop app'],
        year: 2013,
        href: { 
            source: sources.smkou,
            'ai ref': ['https://www.amazon.ca/Make-Your-Own-Neural-Network/dp/1530826608', 'https://www.manning.com/books/grokking-artificial-intelligence-algorithms', 'https://www.amazon.ca/AI-Games-Third-Ian-Millington/dp/0367670569'],
            'lang ref': ['https://interpreterbook.com']
        },
        status: false,
        comment: `Open-world
        Mix of procedural-generated and scripted characters
        Characters capable of conversation
        Compiles on language of ijuum`,
        dev: `Status: queued
        
        main loop
        - determine every character in player's area
        - loop character progressions
        - player interaction
        `
    },
    'leto': {
        title: 'The Leto Project',
        description: 'Resource and task management interface for teams, and AR app for conference/meetup recruitment using virtual badges',
        keywords: ['axure rp', 'adobe illustrator', 'adobe ux', 'java', 'android', 'ar', 'augmented reality', 'wireframes', 'mockups'],
        year: 2014,
        href: { source: sources.ischool },
        status: true,
        comment: `Capstone project (proof of concept)
        Completed submission: mock virtual badges, design spec, ar prototype`,
        dev: `Status: deprecated
        
        Research: project management options, team recruitment, and project pages
        - version control
        Perhaps abstract out concept to another project`
    },
    'ks-healthcare': {
        title: 'KS Healthcare',
        description: 'Mobile app for managing appointments, doctor notes, lab results, and mainly for navigation of Chinese hospitals',
        keywords: ['adobe illustrator', 'adobe ux', 'paper prototypes', 'mockups', 'wireframes', 'user interviews', 'field study', 'personas', 'user stories'],
        year: 2018,
        href: { source: sources.sod },
        status: true,
        comment: `Course: Design Thinking and Process
        Completed submission: design spec, research report and presentation`,
        dev: `Status: deprecated
        Requires further research, note updates since covid
        Concept does not apply to American context`
    },
    'little-red': {
        title: 'Little Red',
        description: 'Prototype for game adaptation of Little Red Riding Hood',
        keywords: ['java', 'processing', 'html', 'css', 'js', 'canvas', 'vanilla js'],
        year: 2018,
        href: { 
            source: sources.sod,
            author: ['https://www.mollybang.com/Pages/picture.html'],
            inspiration: ['https://www.amazon.com/Picture-This-How-Pictures-Work/dp/1452151997'],
            ref: ['https://inventwithpython.com/blog/2012/02/20/i-need-practice-programming-49-ideas-for-game-clones-to-code/'],
            inspect: ['https://github.com/SmKou/red-riding-hood']
        },
        status: true,
        comment: `Course: Interaction Design
        Completed prototype in java/processing
        - adaptation of Little Red Riding Hood
        - aesthetics inspired by "Picture This" (Molly Bang)`,
        dev: `Status: queued
        Adapt into different formats for series
        - learn how game format affects depiction and projection of story
        Remove references to physics and rendering
        Create app for easy deployment to gh-pages
        Homepage: Switch between versions (responsive ui)
        
        In-consideration:
        - Graphic adventure
        - Match 3
        - Dress-up / Runway
        - Platformer or side-scroller`
    },
    'ulore': {
        title: 'Creative Writing Editor',
        description: 'Browser-based document editor designed for creating writing',
        keywords: ['html', 'css', 'javascript', 'vanilla js'],
        year: 2018,
        href: { 
            source: sources.sod,
            ref: ['https://blog.reedsy.com/guide/author-websites/']
        },
        status: true,
        comment: `Course: User Experience Design
        Completed prototype in java/processing
        - document editor with file and notes management`,
        dev: `Status: queued
        Research:
        Blogging platforms - Write.as, Medium, Ghost, Wordpress
        Creative writing resources - Campfire Writing, LivingWriter
        
        Reanalyze purpose and intent -> redesign
        Consider: HTMX + Go`
    },
    'responsive-web': {
        title: 'Responsive Web Design',
        description: 'Showcase web app for projects in freeCodeCamp course',
        keywords: ['html','css','javascript', 'vanilla js'],
        year: 2021,
        href: { source: sources.fcc },
        status: false,
        comment: `Course: Responsive Web Design`,
        dev: `Redo based on course redesign
        - Survey Form
        - Tribute page
        - Technical Documentation page
        - Product Landing page
        - Personal Portfolio page
        
        Note to self: intermediate projects`
    },
    'freecodecamp-challenge': {
        title: 'freeCodeCamp Challenge',
        description: 'Complete freecodecamp main courses in given time limit',
        keywords: ['html', 'javascript', 'vanilla js', 'python', 'sql', 'node.js', 'express', 'chai', 'mongodb', 'mongoose', 'd3', 'bootstrap', 'css', 'jqery', 'sass', 'react', 'redux'],
        year: 2025,
        href: { source: sources.fcc },
        status: false,
        comment: `Original challenge: Complete main courses in 1 month
        - new courses added make this impossible
        - skip first course
        
        Revised to: Complete main courses in 3 months (or 1 course per week)`,
        dev: `Status: queued (personal goal)
        Requires 3 months available`
    },
    'first-page': {
        title: 'First Page',
        description: 'Scrolling single-page panels to demonstrate anchor links and form submission',
        keywords: ['html','css'],
        source: 'ztm',
        year: 2023,
        href: {
            source: sources.ztm,
            view: ['https://smkou.github.io/first-page/'],
            inspect: ['https://github.com/SmKou/first-page']
        },
        status: true,
        comment: `Course: Complete Web Developer in 2023`,
        dev: `${messages.basic}
        ${messages.demo}`
    },
    'live-in-the-wild': {
        title: 'Live in the Wild',
        description: 'Gallery grid using flexbox',
        keywords: ['html','css'],
        year: 2023,
        href: {
            source: sources.ztm,
            view: ['https://smkou.github.io/live-in-the-wild/'],
            inspect: ['https://github.com/SmKou/live-in-the-wild']
        },
        status: true,
        comment: `Course: Complete Web Developer in 2023`,
        dev: `${messages.basic}
        ${messages.demo}`
    },
    'android-journeys': {
        title: 'Android Journeys',
        description: 'JS slideshow of landscapes featuring css-made android in a pretend travelogue',
        keywords: ['html','css', 'javascript', 'vanilla js'],
        year: 2023, 
        href: {
            source: sources.ztm,
            view: ['https://smkou.github.io/android-journeys/'],
            inspect: ['https://github.com/SmKou/android-journeys']
        },
        status: true,
        comment: `Course: Complete Web Developer in 2023
        The original project was the css-only robot with the hover effect. In my implementation, the robot changes between black and white and its size based on the background image.`,
        dev: `${messages.basic}
        ${messages.demo}`
    },
    'robofriends': {
        title: 'RoboFriends',
        description: 'Grid of contact cards for robots with names and emails using api (class components), meant for understanding legacy react code',
        keywords: ['react','css'],
        year: 2023,
        href: {
            source: sources.ztm,
            view: ['https://smkou.github.io/robofriends/', 'https://smkou.github.io/robofriends-func/'],
            inspect: ['https://github.com/SmKou/robofriends', 'https://github.com/SmKou/robofriends-func']
        },
        status: true,
        comment: `Course: Complete Web Developer in 2023
        Two versions available: class-based react app and function-based react app`,
        dev: `Status: uibug
        Search bar text is too small and placeholder text has poor contrast with header, header text also needs to adjust size based on width`
    },
    'simplebrain': {
        title: 'SimpleBrain',
        description: 'React web app and express api for image submission with face detection and user accounts',
        keywords: ['react', 'api', 'express', 'node.js',  'knex.js', 'postgresql', 'sql', 'authentication', 'authorization', 'responsive design'],
        year: 2023,
        href: {
            source: sources.ztm,
            ref: ['https://github.com/aneagoie/face-recognition-brain', 'https://github.com/aneagoie/face-recognition-brain-api'],
            res: ['https://www.clarifai.com'],
            old: ['https://github.com/SmKou/bfrb', 'https://github.com/SmKou/bfrb-api']
        },
        status: false,
        comment: `Course: Complete Web Developer in 2023
        Adapted from Face Recognition Brain project from ZTM
        Uses Clarifai api for face detection
        App includes user ranking based on images submitted (mod: no. of faces x images)`,
        dev: `Status: queued
        Last 3 iterations in React`
    },
    'counting-calculator': {
        title: 'Counting Calculator',
        description: 'Based on demo project of react and redux toolkit, counting calculator adapted from counter',
        keywords: ['react','redux toolkit'],
        year: 2023,
        href: {
            source: ['https://redux-toolkit.js.org/tutorials/quick-start'],
            view: ['https://smkou.github.io/counting-calculator/', 'https://smkou.github.io/counting-calculator-2/'],
            inspect: ['https://github.com/SmKou/counting-calculator', 'https://github.com/SmKou/counting-calculator-2']
        },
        status: true,
        comment: `I changed the tutorial counter into a counting calculator, having once heard the comment that there are no calculators for counting for advancing through levels of arithmetic. Namely, this person's child is young and was learning to count, but their child's class was using regular calculators. That was the motivation behind creating this counting calculator.
        
        I have iterated this project twice now, so there are two versions available.`,
        dev: `New version: collapsible instructions, more responsive layout
        Perhaps only use vanilla js

        Idea: extend project to advance calculator format
        - counting (addition and subtraction)
        - arithmetic (incl. multiplication and division)
        - pemdas
        - intermediate arithmetic (exponentiation, roots and logarithms)`
    },
    'programming-language-suggester': {
        title: 'Programming Language Suggester',
        description: 'Programming language form for suggestions based on experience, motivation among other factors',
        keywords: ['html','javascript', 'vanilla js','css'],
        year: 2023,
        href: {
            source: sources.epi,
            view: ['https://smkou.github.io/programming-language-suggester/'],
            inspect: ['https://github.com/SmKou/programming-language-suggester']
        },
        status: true,
        comment: `Code reviewed`,
        dev: `${messages.basic}
        ${messages.demo}`
    },
    'mr-roboger-neighborhood': {
        title: "Mr. Roboger's Neighborhood",
        description: 'Generate number sequences with substitutions for every number containing 1, 2, and 3 similar to fizzbuzz, includes tests based on test-driven development accessible through browser console',
        keywords: ['html','javascript', 'vanilla js', 'css'],
        year: 2023,
        href: {
            source: sources.epi,
            view: ['https://smkou.github.io/mr-roboger-neighborhood/'],
            inspect: ['https://github.com/SmKou/mr-roboger-neighborhood']
        },
        status: true,
        comment: `Code reviewed`,
        dev: `${messages.basic}
        ${messages.demo}
        
        May split TDD framework away from project.`
    },
    'pizza-parlor': {
        title: 'Pizza Parlor',
        description: 'Order form and checkout for pizza, includes tests based on TDD principles accessible through browser console (2nd iteration)',
        keywords: ['html','css','javascript', 'vanilla js'],
        year: 2023,
        href: {
            source: sources.epi,
            view: ['https://smkou.github.io/pizza-parlor/'],
            inspect: ['https://github.com/SmKou/pizza-parlor']
        },
        status: true,
        comment: `Code reviewed`,
        dev: `${messages.basic}
        ${messages.demo}

        UI: Form always requires scrolling to fill-out
        
        May split TDD framework away from project (2nd itr).`
    },
    'currency-exchanger': {
        title: 'Currency Exchanger',
        description: 'Conversion form for amounts between currencies using ExchangeRate api',
        keywords: ['node.js','babel','eslint','webpack','jest'],
        year: 2023,
        href: {
            source: sources.epi,
            inspect: ['https://github.com/SmKou/currency-exchanger']
        },
        status: true,
        comment: `Code reviewed`,
        dev: `Submission required no deployment
        API requires an api key
        Consider: Netlify or render.com`
    },
    'super-galactic-age-calculator': {
        title: 'Super Galactic Age Calculator',
        description: 'Age calculator for humans and dogs on other planets, generated from my own node template, commit history reflects use red-green workflow',
        keywords: ['node.js','babel','eslint','webpack','jest'],
        year: 2023,
        href: {
            source: sources.epi,
            inspect: ['https://github.com/SmKou/super-galactic-age-calculator']
        },
        status: false,
        comment: `Code reviewed`,
        dev: `Status: queued
        Scaffold with vite (vanilla), framework not required
        Add ui: age calculator`
    },
    'dino-ipsum': {
        title: 'Dino Ipsum',
        description: 'Dinosaur name generator using dino ipsum, choose dinosaur name and get robot avatars',
        keywords: ['node.js','babel','eslint','webpack','jest'],
        year: 2023,
        href: {
            source: sources.epi,
            inspect: ['https://github.com/SmKou/dino-ipsum']
        },
        status: true,
        comment: `Pair programming project
        Uses XMLHttpRequest in Node.js
        Dino Ipsum does not require api key, use of node.js overcomplicates page`,
        dev: `Status: queued
        Redo in HTMX`
    },
    'pierre-bakery': {
        title: "Pierre's Bakery",
        description: "CLI app for placing an order",
        keywords: ['c#','cmd','.net 6'],
        year: 2023,
        href: { 
            source: sources.epi,
            inspect: ['https://github.com/SmKou/PierresBakery.Solution']
        },
        status: true,
        comment: `Code reviewed`,
        dev: `${messages.cnet_dep}`
    },
    'madlibs-clone': {
        title: 'Madlibs clone',
        description: 'CLI app for filling in, reading and creating ablibs on local machine',
        keywords: ['c#','cmd','.net 6'],
        year: 2023,
        href: {
            source: sources.epi,
            inspect: ['https://github.com/SmKou/Week9.Solutions']
        },
        status: true,
        comment: `Pair programming project (solo dev with supervision)`,
        dev: `Status: queued
        Migrate to either Node.js or Go for server
        
        ${messages.cnet}`
    },
    'hair-salon': {
        title: 'Hair Salon',
        description: 'MVC web app for managing stylists and clients in a one-to-one relationship',
        keywords: ['c#','.net 6','entity framework core','mysql','mvc','sql'],
        year: 2023,
        href: {
            source: sources.epi,
            inspect: ['https://github.com/SmKou/HairSalon.Solution']
        },
        status: true,
        comment: `Code reviewed`,
        dev: `${messages.cnet_dep}`
    },
    'vendor-order-tracker': {
        title: 'Vendor Order Tracker',
        description: 'MVC web app for tracking and managing vendor information and orders in one-to-many relationships',
        keywords: ['c#','.net 6', 'entity framework core','mysql','mvc','sql'],
        year: 2023,
        href: {
            source: sources.epi,
            inspect: ['https://github.com/SmKou/VendorOrderTracker.Solution']
        },
        status: true,
        comment: `Code reviewed`,
        dev: `${messages.cnet_dep}`
    },
    'sillystringz-factory': {
        title: 'Sillystringz Factory',
        description: 'MVC web app for tracking and managing many-to-many relationships between machines and engineers',
        keywords: ['c#','.net 6', 'entity framework core','mysql','mvc','sql'],
        year: 2023,
        href: {
            source: sources.epi,
            inspect: ['https://github.com/SmKou/SillystringzFactory.Solution']
        },
        status: true,
        comment: `Code reviewed
        Uses migrations for database setup`,
        dev: `${messages.cnet_dep}`
    },
    'pierres-sweet-and-savory-treats': {
        title: "Pierre's Sweet and Savory Treats",
        description: 'MVC web app for tracking and managing treats and their flavors in many-to-many relationships with ',
        keywords: ['c#', '.net 7', 'identity', 'entity framework core', 'mysql', 'sql', 'mvc', 'authentication', 'authorization'],
        year: 2023,
        href: {
            source: sources.epi,
            inspect: ['https://github.com/SmKou/PierresSweetSavoryTreats']
        },
        status: true,
        comment: `Code reviewed
        Create, update and delete only allowed with authentication and authorization`,
        dev: `${messages.cnet_dep}`
    },
    'parks-lookup': {
        title: "Parks Lookup api",
        description: 'API for looking up national and state parks with user authorization for crud on accounts, makes use of JWT authentication, versioning and pagination',
        keywords: ['c#', '.net 7', 'identity', 'entity framework core', 'mysql', 'sql', 'mvc', 'authentication', 'versioning', 'pagination', 'jwt', 'api'],
        year: 2023,
        href: {
            source: sources.epi,
            inspect: ['https://github.com/SmKou/ParksLookup.Solution']
        },
        status: true,
        comment: `Code reviewed`,
        dev: `${messages.cnet_dep}
        Use national park api and states' park apis for accurate information - actual use case `
    },
    'global-address-formatter': {
        title: 'Global Address Formatter',
        description: 'MVC web app and api for formatting addresses for international shipping and mail',
        keywords: ['c#', '.net 7', 'entity framework core', 'mysql', 'sql', 'javascript', 'vanilla js', 'restsharp', 'newtonsoft.json', 'css', 'html', 'chtml', 'mvc', 'api'],
        year: 2023,
        href: {
            source: sources.epi,
            inspect: ['https://github.com/SmKou/GlobalAddressFormatter.Solution']
        },
        status: true,
        comment: `Code reviewed
        Team project
        My role: Frontend web app & Debugging api`,
        dev: `${messages.cnet_dep}`
    },
    'power-planter': {
        title: 'Power Planter',
        description: 'Numbers game using functional programming principles',
        keywords: ['html', 'css', 'javascript', 'vanilla js', 'responsive design'],
        year: 2023,
        href: {
            source: sources.epi,
            inspect: ['https://github.com/SmKou/power-planter/']
        },
        status: false,
        comment: `Pair programming project (solo dev with supervision)`,
        dev: `Status: queued
        Re-scaffold with vite?
        Use app with subtree pushes to gh-pages`
    },
    'coffee-beans': {
        title: 'Coffee Beans',
        description: 'Inventory tracker for coffee beans seller, uses class and function components, prop types, and uuid',
        keywords: ['react', 'class components', 'function components', 'prop types', 'uuid'],
        year: 2023,
        href: {
            source: sources.epi,
            view: ['https://smkou.github.io/inventory-tracker/'],
            inspect: ['https://github.com/SmKou/inventory-tracker']
        },
        status: true,
        comment: `Code reviewed`,
        dev: `${messages.basic}`
    },
    'katadsa': {
        title: 'KataDSA',
        description: 'DSA-learning resource focused on theory and applications',
        keywords: ['godot', 'node.js', 'go', 'cli', 'web app', 'templates', 'vanilla js', 'javascript', 'html', 'css', 'java', 'processing'],
        year: 2023,
        href: {
            source: sources.epi,
            material: ['https://github.com/SmKou/algorithms'],
            inspect: ['https://github.com/SmKou/katadsa-spec'],
            ref: ['https://www.techinterviewhandbook.org/coding-interview-study-plan/', 'https://www.manning.com/books/grokking-algorithms', 'https://www.manning.com/books/advanced-algorithms-and-data-structures', 'https://nostarch.com/Dive-Into-Algorithms', 'https://www.amazon.com/Algorithms-Every-Programmer-Should-Know-ebook/dp/B09QKY6VP9', 'https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/'],
            docs: ['https://natureofcode.com', 'https://processing.org/reference']
        },
        status: false,
        comment: `Capstone project
        
        Template projects (koudblue): UI- and tests-provided app where developers add code for dsa, additional view for comparison of solutions' performance

        Game (Cubitt): Playing a scan and retrieval program, the player's mission is to locate and retrieve a missing cubitt in an infected sector and to identify the virus behind the infection, which manifests as a labyrinth and a humanoid cubitt. As the player guides Cubitt out of the infected sector by speaking to them in the cubitt programming language, the virus attempts to corrupt cubitt's memory and functions.

        Iterations: 2`,
        dev: `Status: queued
        
        Algorithms - DSA practice with LeetCode
        - NeetCode 150 (paused)
        - Coding Interview Study Plan`
    },
    'mahjong-cards': {
        title: 'Mahjong Cards',
        description: `Print & Play designs of mahjong cards`,
        year: 2024,
        href: { source: sources.smkou },
        status: true,
        comment: `Birthday present for nana
        Two versions: traditional and cat-themed
        Intended for Itch.io`,
        dev: `Status: queued

        Traditional
        - Clean up images for user printing
        
        Cat-themed "meowjong"
        - circles: yarn balls
        - sticks: wands or feathers
        - characters: lucky cat
        - flowers: [TBD]
        - seasons: [TBD]
        - honors: [TBD]`
    },
    'jordans-game': {
        title: "Jordan's Game",
        description: 'Pokemon-inspired monster collecting and battling game',
        keywords: ['godot', 'gdscript', 'affinity designer', 'html ', 'css', 'javascript', 'vanilla js'],
        year: 2023,
        href: {
            ref: ['https://github.com/SmKou/godot-rpg'],
            inspect: ['https://github.com/SmKou/jordans-game']
        },
        status: false,
        comment: `Birthday present for nephew
        Inspired by Pokemon Red
        Design decisions by nephew (old spec)
        Aesthetics style: Sm Kou`,
        dev: `MVP: First town with interactions, characters and scenes`
    },
    'tale-of-kibakhan': {
        title: 'Tale of Kibakhan',
        description: 'Text adventure with alternative and adaptive narratives',
        keywords: ['html', 'css', 'javascript', 'vanilla js'],
        year: 2024,
        href: {
            source: sources.smkou,
            view: ['https://smkou.github.io/tale-of-kibakhan/'],
            inspect: ['https://github.com/SmKou/tale-of-kibakhan']
        },
        status: false,
        comment: `Based on Dungeons & Dragons
        Two narratives: third-person (Seraph) and first-person (Kibakhan)`
    },
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
}

const experiences = {
    'frontend-intern': {
        title: 'Frontend Intern',
        description: 'React web app developmnt',
        keywords: ['react', 'verbal communication', 'git', 'problem-solving', 'interface design', 'listening', 'adaptability', 'creativity'],
        year: ['Nov 2023', 'Dec 2023'],
        href: { source: sources.signed },
        status: true,
        comment: `Remote
        Location: Seattle, WA, USA
        Referral: Lee Grambush`
    },
    'store-clerk': {
        title: 'Store Clerk',
        description: 'Part-time store clerk',
        keywords: ['empathy', 'verbal communication', 'listening', 'attention to detail', 'organization'],
        year: ['Aug 2021', 'Apr 2023'],
        href: { source: sources.ph },
        status: true,
        comment: `Seattle location, closed in Apr. 2024,
        Location: Seattle, WA, USA
        Referral: Ed Marquand, Suzanne Crimmins (no linkedin)`
    },
    'head-student-editor': {
        title: 'Head Student Editor',
        description: 'Lead team in translating, editing and proofreading course textbook on interaction design',
        keywords: ['listening', 'creativity', 'leadership', 'attention to detail', 'written communication', 'verbal communication', 'problem-solving', 'documentation', 'analytical reasoning'],
        year: ['Mar 2018', 'Aug 2019'],
        href: { source: sources.sjtu },
        status: true,
        comment: `Office in Minhang campus, SOD building
        Location: Shanghai, Shanghai, CN
        
        Conduct weekly meetings
        Manage translation and editing schedule
        Collect and synthesize weekly student feedback, drafts, edits, notes, and confirmations from professor
        Proofread and edit chapter drafts each week`
    },
    'teacher-assistant': {
        title: 'Teacher Assistant',
        description: `Assist professors and manage course schedule, materials and projects`,
        keywords: ['written communication','creativity','verbal communication','adaptability','adaptability','management','problem-solving','java','service design','interaction design'],
        year: ['Mar 2018', 'Jun 2019'],
        href: { source: sources.sod },
        status: true,
        comment: `Graduate courses in School of Design, SJTU
        Location: Shanghai, Shanghai, CN
        
        Develop and distribute course curriculumns
        Develop class presentations and tutorials
        Develop grading rubric
        Supervise class time and schedule
        Collect, grade and review assignments and projects`
    },
    'english-teacher': {
        title: 'Foreign English Teacher',
        description: `Teacher, trainer and supervisor of operations`,
        keywords: ['verbal communication','written communication','documentatation','time management','management','adaptability','creativity','analytical reasoning','critical thinking','problem-solving','teaching','training','business counseling','feedback','hiring decisions'],
        year: ['Aug 2015', 'Nov 2016'],
        href: {},
        status: true,
        comment: `EasyFun, Hampson, Side-by-Side English (simultaneous)
        Location: Guangzhou, Guangdong, CN
        
        Develop curriculums, course plans and class plans
        Review textbook series
        Assess student and teacher performance
        Client consultations
        Teach students 4-45 years old, 400 students per week
        Train teachers and teacher assistants
        Substitution
        Winter and summer camps
        Private tutoring`
    }
}

const education = {
    'web-dev': {
        title: 'Web Development Certificate',
        description: 'Development in html, css, javscript, Node.js, C# and .Net, and React',
        keywords: ['react', 'jest', 'babel', 'eslint', 'html', 'css', 'javscript', 'vanilla js', 'c#', '.net 6', '.net 7', 'api', 'node.js', 'tdd', 'red-green workflow', 'pair programming', 'code review', 'scrum', 'dev teams', 'mysql', 'sql', 'authentication', 'authorization', 'jwt', 'frontend', 'json'],
        year: 'Dec 2023',
        href: { source: sources.epi },
        status: true,
        comment: `Epicodus
        Location: Portland, OR, USA (remote)
        Referral: Calvin Will, Jasmine Klein`
    },
    'design': {
        title: 'MA Design',
        description: 'Design research, practices, processes and fields',
        keywords: ['java', 'processing', 'adobe illustrator', 'user research', 'user interviews', 'quantitative analysis', 'qualitative analysis', 'low-fidelity prototypes', 'high-fidelity prototypes', 'eye-trackers', 'field research', 'service design', 'design thinking', 'interaction design', 'chinese'],
        year: 'Mar 2020',
        href: { source: [sources.sjtu, sources.sod] },
        status: true,
        comment: `Shanghai Jiaotong University, School of Design
        Location: Shanghai, Shanghai, CN
        Specialized in Interaction design`
    },
    'informatics': {
        title: 'BS Informatics',
        description: `Information technology, applications, and principles`,
        keywords: ['java', 'mobile apps', 'web apps', 'responsive design', 'web design and development', 'database modeling', 'database design', 'sql', 'mysql', 'android', 'axure rp', 'adobe illustrator', 'visual design', 'user experience design', 'service design', 'design thinking', 'computer science', 'software entrepreneurship'],
        year: 'Jun 2014',
        href: { source: [sources.uw, sources.ischool] },
        status: true,
        comment: `University of Washington, Information School
        Location: Seattle, WA, USA
        Specialized in User Experience design
        Referral: Mike Eisenberg (dean emeritus)`
    },
    'pre-engineering': {
        title: 'AS Pre-Engineering',
        description: `Introduction to engineering sciences, including computer science`,
        keywords: ['visual basic', 'java'],
        year: 'Jun 2011',
        href: { source: sources.edcc },
        status: true,
        comment: `Edmonds Community College
        Location: Edmonds, WA, USA
        
        Program: Running Start
        - AS Pre-Engineering
        - IB Mathematics, Chinese`
    }
}

const calendar = {
    daily: {
        routine: {
            morning: { 
                time: ['8:00', 2], 
                status: false 
            },
            night: { 
                time: ['23:00', 1], 
                status: true 
            }
        },
        goals: {
            study: {
                time: 1,
                status: false,
                comment: ``
            },
            danish: { 
                time: 0.25, 
                status: false, 
                comment: `Duolingo
                Short Stories in Danish => Teach Yourself Danish` 
            },
            german: { 
                time: 0.25, 
                status: false, 
                comment: `Speakly
                Short Stories in German => Learn German for Beginners` 
            },
            exercise: {
                time: 0.5,
                status: false,
                comment: `Total: 10 min
                1 min per exercise
                10 s rest, 2 circuits
                - Lunges, squats, bridges, knee taps
                
                10-20 min: Jog in Place`
            }
        }
    },
    weekly: {
        routine: {
            therapy: { 
                days: 1, 
                time: ['10:30', 2], 
                status: true 
            },
            isg: { 
                days: 6, 
                time: ['13:00', 5.5], 
                status: true 
            }
        },
        goals: {
            dsa: {
                days: [0, 1, 1, 1, 0, 0, 0],
                time: 2,
                status: false
            },
            algorithms: {
                days: [1, 1, 1, 1, 1, 0, 0],
                time: 0.5,
                status: false,
                comment: `1. [] Grokking Algorithms
                2. [] Advanced Algorithms and Data Structures
                3. [] Dive into Algorithms
                4. [] 50 Algorithms Every Programmer Should Know
                5. [] Intro to Algorithms`
            },
            ai: {
                days: [1, 1, 1, 1, 1, 0, 0],
                time: 0.5,
                status: false,
                comment: `1. [] Make Your Own Neural Network
                2. [] Grokking AI Algorithms
                3. [] AI for Games`
            }
        }
    },
    monthly: {
        routine: {
            seattlejs: { 
                week: 2,
                days: 3,
                time: ['17:00', 2.5],
                status: true
            },
            code_katas: {
                week: 3,
                days: 2,
                time: ['17:00', 1.5],
                status: true
            },
            indies_social: {
                week: 3,
                days: 2,
                time: ['20:30', 2.5],
                status: true
            }
        },
        goals: {
            frye_art: {
                weeK: 1,
                days: 0,
                time: 1,
                status: false
            },
            wing_luke: {
                week: 2,
                days: 0,
                time: 1.5,
                status: false
            },
            henry_art: {
                week: 3,
                days: 0,
                time: 2.5,
                status: false
            },
            nordic: {
                week: 4,
                days: 0,
                time: 4,
                status: false
            }
        }
    },
    events: {
        '4/4/24': {
            act: { time: ['19:30', 3.5] }
        },
        '3/22/24': {
            act: { time: ['19:30', 1.5] }
        },
        '3/8/24': {
            act: { time: ['19:00', 1.5] }
        },
        '2/9/24': {
            act: { time: ['19:30', 1.5] }
        },
        '2/6/24': {
            city_light: { time: ['13:30', 0.5] },
            gov: { time: ['14:30', 1.5] }
        }
    },
    projects: {
        '1/28/24': [ 'Re-Portfolio', "Jordan's Game" ],
        '1/21/24': [ 'Re-Portfolio' ]
    }
}

const categories = ['versions', 'projects', 'experiences', 'education']
const resources = { manual, calendar, sources }
const pages = {
    art: {
        title: 'Artworks',
        description: 'A slideshow of image mosaics formed from personal drawings',
        href: { view: ['art/'] },
        comment: `I cannot meditate in the traditional sense due in part to my C-PTSD, so drawing acts as a sort of substitute. Rather than clarity and relaxation, drawing provides insight and allows for a nuance of expression when words fail as they often do for me when it comes to self-perception and sensation.`
    },
    calendar: {
        title: 'My Calendar',
        description: 'A demo of a calendar app showing a personal schedule',
        href: { view: ['my-calendar/'] },
        comment: `The design of the week layout has always annoyed me in apps, requiring a landscape view when a portrait view should still work, so for the calendar app, I made sure there was a portrait layout and an intermediate layout when the width is not long enough for the traditional week view.`
    },
    versions: {
        title: 'The Old TV',
        description: 'Preview the available portfolios',
        href: { view: ['versions/'] }
    }
}

const portfolio = { versions, projects, experiences, education }