const manual = {
    cal: {
        name: '',
        synopsis: [],
        description: ``,
        help: ``
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
        name: '',
        synopsis: [],
        description: ``,
        help: ``
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
        description: ``,
        help: `find ["string"] <category>
        Search items for property name or value.`
    },
    help: {
        name: '',
        synopsis: [],
        description: ``,
        help: ``
    },
    hostname: {
        name: '',
        synopsis: [],
        description: ``,
        help: ``
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
        name: '',
        synopsis: [],
        description: ``,
        help: ``
    },
    more: {
        name: 'more',
        synopsis: [],
        description: ``,
        help: `more: more
        Show contained information in item.`
    },
    msg: {
        name: '',
        synopsis: [],
        description: ``,
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
        synopsis: [],
        description: ``,
        help: `sort: sort
        Sort items in category in results from another command.
        Valid commands: dir, ls`
    },
    stat: {
        name: 'stat',
        synopsis: [],
        description: ``,
        help: `stat: stat <item_name>
        Show details of item.`
    },
    time: {
        name: '',
        synopsis: [],
        description: ``,
        help: ``
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
        name: '',
        synopsis: [],
        description: ``,
        help: ``
    },
    whoami: {
        name: '',
        synopsis: [],
        description: ``,
        help: ``
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