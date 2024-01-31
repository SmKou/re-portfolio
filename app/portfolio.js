const manual = {
    cal: {
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
            display command information of cal`,
        help: `cal: cal <[date]|[frequency]>
        Show calendar information.`
    },
    cd: {
        name: 'cd - change directory',
        synopsis: [ 'cd ../PATH', 'cd PATH' ],
        description: `Add to and remove from current path, navigating portfolio categories.
        Root category is portfolio. Categories in portfolio include versions (portfolio), projects, experiences, education, sources, art and calendar.
        
        Category equates to directory.
        Item equates to file.
        
        --help
            display command information of cd`,
        help: `cd: cd [..][<path>]
        Change working category.`
    },
    cls: {
        name: 'cls - clear screen',
        synopsis: [ 'cls' ],
        description: `Clear the terminal. Collapse aside and footer of interface, thus not showing commands list, introduction, and site copyright.
            
        --help
            display command information of cls`,
        help: `cls: cls
        Clear the terminal and interface.`
    },
    clear: {
        name: 'clear',
        synopsis: [ 'clear' ],
        description: `Clear the terminal.
            
        --help
            display command information of clear`,
        help: `clear: clear
        Clear the terminal.`
    },
    date: {
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
            display command information of date`,
        help: `date: date
        Show current date.`
    },
    dir: {
        name: 'dir - directory',
        synopsis: [ 'dir', 'dir CATEGORY' ],
        description: `Show contained categories and items of category.
        Root category is portfolio.
        Only works on categories, not on items and their properties.
        
        --help
            display command information for dir`,
        help: `dir: dir <category>
        Show contained categories and items.`
    },
    echo: {
        name: 'echo',
        synopsis: [ 'echo ITEM_NAME', 'echo PATH ITEM_NAME' ],
        description: `Show messages regarding item, default is first message found in status.
        Messages may consist of status, comments, and developer remarks.

        -a, --all
            show all messages provided with item

        --help
            display command information of echo`,
        help: `echo: echo <path> <item_name>
        Show messages of item.`
    },
    find: {
        name: 'find',
        synopsis: [ 'find ["string"]', 'find ["string"] CATEGORY' ],
        description: `Search a category, or categories, for a string appearing in item properties and their values.
        If the string consists of spaces, it will be split into individual terms and item properties and values will be tested against each individual term. In other words, search does not consist of equivalence.
        
        -p, --property-only
            search only item properties

        -v, --value-only
            search only item values
        
        --help
            display command information of find`,
        help: `find ["string"] <category>
        Search items for property name or value.`
    },
    help: {
        name: 'help',
        synopsis: [ 'help', 'help COMMAND' ],
        description: `Display command information.
        If no command is specified, help will return a list of available commands.
        
        --help
            display command information of help`,
        help: `help: help <command>
        Show command information.`
    },
    hostname: {
        name: 'hostname',
        synopsis: [ 'hostname' ],
        description: `Display name of host.
        
        --help
            display command information of hostname`,
        help: `hostname: hostname
        Display name of host.`
    },
    ls: {
        name: 'ls - list',
        synopsis: [ 'ls', 'ls PATH' ],
        description: `List categories and items of category.
        Root category is portfolio.
        Include a path to specify another category.
        May use on item to list properties.
        
        --help
            display command information of ls`,
        help: `ls: ls [..][<path>]
        List categories and items in current category.`
    },
    lynx: {
        name: 'lynx',
        synopsis: [ 'lynx ITEM_NAME', 'lynx PATH ITEM_NAME' ],
        description: `Follow url contained in item. Opens a url to another host in another tab.

        Note: Lynx is a fully-featured www client for the linux terminal
        
        -a, --all
            list all urls associated with item
            
        --help
            display command information of lynx`,
        help: `lynx: lynx <path> <item_name>
        Open item url.`
    },
    man: {
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
            display command information of man`,
        help: ``
    },
    more: {
        name: 'more',
        synopsis: [ 'more', 'more ITEM' ],
        description: `Show contained information of current item.
        Use name of an item as-is.
        Cannot be used on categories.

        -m, --messages-included
            show item messages as well
        
        --help
            display command information of more`,
        help: `more: more
        Show contained information in item.`
    },
    msg: {
        name: 'msg - message',
        synopsis: [ 'msg', 'msg PREFERENCE' ],
        description: `View contact to send a message to developer.
        Available preferences: linkedin, github.
        
        -l, --linkedin
            show only linkedin contact

        -g, --github
            show only github contact

        --help
            display command information of msg`,
        help: ``
    },
    pwd: {
        name: 'pwd - print working directory',
        synopsis: [ 'pwd' ],
        description: `Prints current path to console.
        Path consists of categories and items.
        
        --help
            display command information of pwd`,
        help: `pwd: pwd
        Show path of current category or item.`
    },
    sort: {
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
            display command information of sort`,
        help: `sort: sort
        Sort items in category in results from another command.
        Valid commands: dir, ls`
    },
    stat: {
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
            display command information of stat`,
        help: `stat: stat <item_name>
        Show details of item.`
    },
    tree: {
        name: 'tree',
        synopsis: [ 'tree', 'tree CATEGORY' ],
        description: `Prints a folder structural representation of categories and items.
        Root category is portfolio. Can only use on categories.
        
        -ai, --attributes-included
            show item properties

        --help
            display command information of tree`,
        help: `tree: tree <category>
        Show path structure of category.`
    },
    whatis: {
        name: 'whatis - what is',
        synopsis: [ 'whatis COMMAND' ],
        description: `Show command action, taken from command information used for help.

        -m, --manual
            show description from manual page
        
        --help
            display command information of whatis`,
        help: `whatis: whatis [command]
        Show what a command does.`
    },
    whoami: {
        name: 'whoami - who am i',
        synopsis: [ 'whoami' ],
        description: `Show the name of the developer.
        
        --help
            display command information of whoami`,
        help: `whoami: whoami
        Show the name of the developer.`
    }
}

const sources = {
    'odin': {
        title: 'The Odin Project',
        href: ['https://www.theodinproject.com'],
        comment: `Personal goal (project challenge) - Complete courses in beginner's web development from The Odin Project
        1 month
        - Foundations
        - Full Stack Javascript`
    },
    'fcc': {
        title: 'freeCodeCamp',
        href: ['https://www.freecodecamp.org/'],
        comment: `Personal goal (project challenge) - Complete curriculum from freeCodeCamp
        4 months
        - 12 main courses in web development and python
        - 3 courses in developer interview job prep`
    },
    'ztm': {
        title: 'Zero to Mastery',
        href: ['https://zerotomastery.io'],
        comment: `Used for review of introduction to web devevlopment
        Projects - First Page, Live in the Wild, Android Journeys, RoboFriends, Face Brain Recognition (redesigned to SimpleBrain)`
    },
    'epicodus': {
        title: 'Epicodus',
        href: ['https://www.epicodus.com'],
        comment: `Coding Bootcamp from May to Dec 2023
        Courses included Intro to Web development, Advanced JS and Node.js, C# for Full-stack web development, and React
        Projects - Programming Language suggester, Mr. Roboger Neighborhood, Pizza Parlor, Currency Exchanger, Super Galactic Age calculator, Dino Ipsum, Pierre Bakery, Madlibs clone, Hair Salon, Vendor Order Tracker, Sillystringz Factory, Pierre's Sweet and Savory Treats, Parks Lookup api, Coffee Beans
        Team projects - game (obsolete), Global Address Formatter
        Capstone - KataDSA app concept (obselete)`
    },
    'edcc': {
        title: 'Edmonds College (formerly Edmonds Community College)',
        href: ['https://www.edmonds.edu'],
        comment: `Associate's degree in Pre-engineering
        Introduction to Programming - Visual Basic and Java
        
        Program: Running Start
        - acquired associate's degree along with high school diploma
        - completed 110 credits
        
        Program: Partial IB (International Baccaleaurate)
        - Chinese and Math`
    },
    'uw': {
        title: 'University of Washington',
        href: ['https://www.washington.edu'],
        comment: `Alma mater
        Graduated 2014 with BS Informatics from Information School`
    },
    'ischool': {
        title: 'iSchool (Information School)',
        href: ['https://ischool.uw.edu/'],
        comment: `Bachelor's degree in Informatics
        Specialized in User experience design
        Projects - Husky Goals, Carmax, Booksie, Apollo-Artemis in LETO project management
        
        Note: Design projects resulted in design spec, portfolios, and Axure prototypes`
    },
    'sjtu': {
        title: 'Shanghai Jiaotong University',
        href: ['https://en.sjtu.edu.cn', 'https://www.linkedin.com/school/shanghai-jiao-tong-university/'],
        comment: `Alma mater
        Graduated 2020 with MA Design from School of Design
        Renamed to Design School (unconfirmed)`
    },
    'sod': {
        title: 'School of Design',
        href: 'https://designschool.sjtu.edu.cn/en-us',
        comment: `Master's degree in Design
        Specialized in Interaction design
        Projects - KS Healthcare app, Little Red game, Storytelling in Design, Interaction Design course, Service Design course, Disney Imaginations Shanghai, Creative writing app
        
        Note: Design projects resulted in design spec, portfolios, and Java/Processing prototypes`
    },
    'personal': {
        title: 'Sm Kou',
        href: ['https://smkou.com', 'https://smkou.hashnode.dev'],
        comment: `Not updated
        Intended use: algorithms project (smkou), daily devlog (hashnode)`
    }
}