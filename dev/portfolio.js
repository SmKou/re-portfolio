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
            If no command is specified, help will return a list of available commands.
            
            --help
                display command information of help`
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
        href: { ref: ['https://www.epicodus.com'] },
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
        href: { ref: ['https://ischool.uw.edu/'] },
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
    'leto': {
        title: 'The Leto Project',
        description: 'Capstone project: resource and task management interface for teams, and AR app for conference/meetup recruitment using virtual badges',
        keywords: ['axure rp', 'adobe illustrator', 'adobe ux', 'java', 'android', 'ar', 'augmented reality', 'wireframes', 'mockups'],
        year: 2014,
        href: { source: sources.ischool },
        status: true,
        comment: `Proof of concept
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
            inspect: ['https://github.com/SmKou/red-riding-hood', '']
        },
        status: true,
        comment: `Course: Interaction Design
        Completed prototype in java/processing
        - adaptation of Little Red Riding Hood
        - aesthetics inspired by "Picture This" (Molly Bang)`,
        dev: `Adapt into different formats for series
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
        description: 'Complete freecodecamp main courses in limited time limit',
        keywords: ['html', 'javascript', 'vanilla js', 'python', 'sql', 'node', 'node.js', 'express', 'chai', 'mongodb', 'mongoose', 'd3', 'bootstrap', 'css', 'jqery', 'sass', 'react', 'redux'],
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
        keywords: ['react', 'api', 'express', 'node.js', 'node', 'knex.js', 'postgresql', 'sql', 'authentication', 'authorization', 'responsive design'],
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
        keywords: ['node', 'node.js','babel','eslint','webpack','jest'],
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
        keywords: ['node', 'node.js','babel','eslint','webpack','jest'],
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
        keywords: ['node', 'node.js','babel','eslint','webpack','jest'],
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


        source: 'epicodus',
        view: '',
        inspect: 'https://github.com/SmKou/ParksLookup.Solution',
        keywords: ['C#','.Net 7','Identity','Entity Framework Core','MySQL','API','JWT Authentication','Versioning','Pagination'],
        msg: {
            status: true,
            stage: 'code',
            dev: `This project does not make use of the national park api or the park apis for states, which would provide accurate information and thus an actual use case. If this project were to be completed, revise it to include utlization of the national and state park apis.
            
            ${messages.cnet}`
        }
    },
    'global-address-formatter': {
        source: 'epicodus',
        description: 'MVC web app and api for formatting addresses for international shipping and mail (team project), worked on web app and helped in debugging api',
        year: 2023,
        view: '',
        inspect: 'https://github.com/SmKou/GlobalAddressFormatter.Solution',
        keywords: ['C#','.Net 7','Entity Framework Core','MySQL','MVC','RestSharp','NewtonSoft.Json'],
        msg: {
            status: true,
            stage: 'review',
            dev: messages.cnet
        }
    },
    'coffee-beans': {
        source: 'epicodus',
        description: 'Inventory tracker for coffee beans seller, uses class and function components, prop types, and uuid',
        year: 2023,
        view: 'https://smkou.github.io/inventory-tracker/',
        inspect: 'https://github.com/SmKou/inventory-tracker',
        keywords: ['React'],
        msg: {
            status: true,
            stage: 'complete'
        }
    },
    
    
    'foundations': {
        source: 'odin',
        description: 'Showcase web app for projects in The Odin Project Foundations',
        year: -1,
        view: '',
        inspect: '',
        keywords: ['HTML','CSS','JavaScript'],
        status: 'code',
        now: [
            'Personal goal to complete 7 odin project courses in full stack javascript stack (one-month challenge)',
            'Foundations course, assemble projects for foundations'
        ]
    },
    
    'polish-notation-calculator': {
        source: 'personal',
        description: 'Calculator web app for performing calculations using polish notation, reverse polish notation, and standard notation with memory and accompanying visualization',
        year: -1,
        view: '',
        inspect: '',
        keywords: ['React','CSS','JS','responsive design'],
        status: 'code',
        now: [
            'May or may not use Redux Toolkit as the counting calculator did'
        ]
    },
    'travel-scrapbooking': {
        source: 'personal',
        description: 'Web app and api for creating book-like slideshow of travels, including images, captions and notes, as well as a map with points linked to pages',
        year: -1,
        view: '',
        inspect: '',
        keywords: ['JS','responsive design'],
        status: 'code',
        now: [
            'Design for concept, then select libraries if applicable, more interested in vanilla implementations'
        ]
    },
    'cattery': {
        source: 'http://www.angelofsiberia.com/',
        description: 'Design and development of web app based on Angel of Siberia website',
        year: -1,
        view: '',
        inspect: '',
        keywords: ['responsive design'],
        status: 'code'
    },
    'nudibranch': {
        source: 'personal',
        description: 'Showcase web app of design elements and styles based on nudibranch specimens',
        year: 2023,
        view: '',
        inspect: 'https://github.com/SmKou/nudibranch',
        keywords: ['HTML','JavaScript','CSS','responsive design','Vite'],
        status: 'code',
        now: [
            'Create sample template with js implementations for slug pages subject to change over time, each page meant to mostly be unique'
        ]
    },
    'katadsa': {
        source: 'epicodus',
        description: [
            'Capstone project',
            'Template projects for learning and practicing data structures and algorithms with provided UI and tests (mimic existing apps)',
            'Game with 2D-3D switching for using programming language to guide protagonist through data structures and out of labyrinth'
        ],
        year: 2023,
        view: '',
        material: ['https://github.com/SmKou/algorithms'],
        inspect: 'https://github.com/SmKou/katadsa-spec',
        keywords: [],
        status: 'content',
        now: [
            'Expected to be long-term project (1-2 years): golang game engine and studying data structures and algorithms',
            'Capstone project: Web app for managing projects based on url submission with project templates for completing projects to learn and practice data structures and algorithms, keywords: Next.js, Supabase, Vite, HTML, CSS, JavaScript, responsive design',
            'Use computer science fundamentals course from Epicodus to work on katadsa redesign and development (2nd iteration)'
        ]
    },
    'power-planter': {
        source: 'epicodus',
        description: 'Based on exercise, numbers game built using functional programming principles',
        year: 2023,
        view: '',
        inspect: 'https://github.com/SmKou/power-planter/tree/main',
        keywords: ['HTML','CSS','JavaScript','functional programming','responsive design','game'],
        status: 'code',
        now: [
            'Using project to learn functional programming more in-depth, requires more reading and practice'
        ]
    },
    'red-riding-hood': {
        source: 'sjtu',
        description: "Game adaptation of Red Riding Hood with aesthetics inspired by Molly Bang's Picture This, experimental for using multiple formats",
        year: 2023,
        view: '',
        inspect: 'https://github.com/SmKou/red-riding-hood',
        keywords: ['HTML','CSS','JS','Canvas','responsive design','game'],
        now: [
            "Next project after Jordan's Game",
            'Using project to practice how to adapt game story for different game formats, custom interfaces'
        ]
    },
    'algorithms': {
        source: 'personal',
        description: 'DSA practice with Leetcode (Neetcode 150) and reading for discerning problems and solutions',
        year: 2023,
        view: '',
        inspect: 'https://github.com/SmKou/algorithms',
        keywords: ['Node.js'],
        now: [
            'Two Pointers (review technique and problems)',
            'Arrays and Hashing (review: Cracking the Coding Interview)'
        ]
    },
    'jordans-game': {
        source: 'personal',
        description: 'RPG game inspired by Pokemon Red with design decisions by nephew and use of developing Sm Kou aesthetics',
        year: 2023,
        view: '',
        inspect: 'https://github.com/SmKou/jordans-game',
        keywords: ['Godot Engine', 'GDScript', 'Affinity Designer'],
        now: [
            'MVP: First town with interactions, characters and scenes'
        ]
    }
}

const portfolio = {
    categories: { versions, projects, experiences, education },
    pages: {
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
}