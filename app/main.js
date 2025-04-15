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
                synopsis: [ 'cls' ],
                description: `Clear interface: terminal + aside
                Collapse aside, hiding command list and introduction.
                
                --help
                    display command information`
            },
            options: ['--help'],
            help: 'cls: cls',
            whatis: 'Clear the interface.'
        },
        clear: {
            page: {
                name: 'clear',
                synopsis: [ 'clear' ],
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
                synopsis: [ 'dir', 'dir DIRECTORY' ],
                description: `Show contained subdirectories and files.
                Root: portfolio
                
                Requires DIRECTORY to change root.

                -f, --files-only
                    show only contained files
                
                --help
                    display command information`
            },
            options: ['-f', '--files-only', '--help'],
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
            options: ['-a', '--all', '-c', '--comment-only', '-d', '--dev-only', '--help'],
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
                If the string consists of spaces, it will be split into individual terms and file properties and data will be tested against each individual term. 

                Root: portfolio
                DIRECTORY = root | subdirectory
                
                -p, --property-only
                    search only file properties
    
                -v, --value-only
                    search only file data
                
                --help
                    display command information`
            },
            options: ['-p', '--property-only', '-v', '--value-only', '--help'],
            help: 'find: find ["string"] <directory>',
            whatis: 'Search files for property name or value.'
        },
        help: {
            page: {
                name: 'help',
                synopsis: [ 'help', 'help COMMAND' ],
                description: `Display command information.
                No command: view list of available commands.

                -o, --open-aside
                    show aside with commands list

                --help
                    display command information

                The help flag can be used on any command, but will ignore all other input when used. Even if the other input is valid, --help takes precedence after error checking.`
            },
            options: ['-o', '--open-aside', '--help'],
            help: 'help: help <command>',
            whatis: 'Display command information.'
        },
        hostname: {
            page: {
                name: 'hostname',
                synopsis: [ 'hostname' ],
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
                synopsis: [ 'man COMMAND' ],
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
                synopsis: [ 'msg' ],
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
        print: {
            page: {
                name: 'print',
                synopsis: [ 'print' ],
                description: `View a pdf resume.

                -a, --all
                    show all experience
                
                -d, --download
                    download the pdf resume
                    
                --help
                    display command information`
            },
            options: ['-d', '--download', '-a', '--all', '--help'],
            help: 'print: print',
            whatis: 'View a pdf resume.'
        },
        pwd: {
            page: {
                name: 'pwd - print working directory',
                synopsis: [ 'pwd' ],
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
        whatis: {
            page: {
                name: 'whatis - what is',
                synopsis: [ 'whatis COMMAND' ],
                description: `Show command action.
    
                -m, --manual
                    show manual page
    
                -n, --name-only
                    show only names from manual page
    
                -s, --synopsis-only
                    show only synopsis from menaul page
    
                -d, --description-only
                    show only description from manual page
                
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
                synopsis: [ 'whoami' ],
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

    const sources = {
        fm: {
            title: 'Frontend Masters',
            href: 'https://frontendmasters.com',
            comment: `Learning path: Computer Science
            - data structures and algorithms
            - problem solving
            - web assembly (wasm)
            - functional programming
            
            Learning path: Professional (senior web dev)
            - html, css and js
            - react, next.js, and PWAs
            - web performance
            - typescript`
        },
        odin: {
            title: 'The Odin Project',
            href: 'https://www.theodinproject.com',
            comment: `Personal goal: Complete course
            - html, css and js
            - node.js
            - react`
        },
        fcc: {
            title: 'freeCodeCamp',
            href: 'https://www.freecodecamp.org/',
            comment: `Personal goal: Complete curriculum
            - frontend web dev
            - backend web dev
            - databases
            - python`
        },
        ztm: {
            title: 'Zero to Mastery',
            href: 'https://zerotomastery.io',
            comment: `Review of Intro to Web Development

            PROJECTS
            - First Page
            - Live in the Wild
            - Android Journeys
            - RoboFriends
            - Face Brain Recognition (redesign: SimpleBrain)`
        },
        epi: {
            title: 'Epicodus',
            href: 'https://www.epicodus.com',
            ref: {
                calvin_will: 'https://www.linkedin.com/in/calvinwill/',
                jasmine_klein: 'https://www.linkedin.com/in/jasminemklein/'
            },
            comment: `Coding Bootcamp: May - Dec 2023
            - html, css and js
            - node.js
            - C# (cli, .NET 6 and 7, databases and Identity Framework)
            - react (typescript)
            
            PROJECTS
            - Programming Language suggester
            - Mr. Roboger Neighborhood
            - Pizza Parlor
            - Currency Exchanger
            - Super Galactic Age calculator
            - Dino Ipsum
            - Pierre Bakery
            - Madlibs clone
            - Hair Salon
            - Vendor Order Tracker
            - Sillystringz Factory
            - Pierre's Sweet and Savory Treats
            - Parks Lookup api
            - Coffee Beans
            
            TEAM PROJECTS
            - game (obsolete)
            - Global Address Formatter`
        },
        edcc: {
            title: 'Edmonds College (formerly Edmonds Community College)',
            href: 'https://www.edmonds.edu',
            credit: `AS: Pre-engineering grad. 2011
            Introduction to Programming - Visual Basic and Java
            
            Program: Running Start
            - acquired associate's degree along with high school diploma
            - completed 110 credits
            
            Program: Partial IB (International Baccaleaurate)
            - Chinese and Math`
        },
        uw: {
            title: 'University of Washington',
            href: 'https://www.washington.edu',
            credit: `BS: Informatics grad. 2014
            iSchool
            Specialty: User experience design`
        },
        ischool: {
            title: 'iSchool (Information School)',
            href: 'https://ischool.uw.edu/',
            ref: {
                mike_eisenberg: 'https://www.linkedin.com/in/mike-eisenberg-10b1957/'
            },
            comment: `Program: Informatics
            - java programming and prototyping
            - axure rp
            - adobe suite
            - microsoft|google suite
            - sql and database modeling
            - html, css and js
            - software design and management
            - design thinking
            - user experience and service design
            
            PROJECTS
            - Husky Goals
            - Carmax
            - Booksie
            - Graphic design portfolio (Adobe)
            - Apollo-Artemis in LETO project management
            
            Note: Design projects resulted in design spec, portfolios, and Axure prototypes`
        },
        sjtu: {
            title: 'Shanghai Jiaotong University',
            href: [
                'https://en.sjtu.edu.cn',
                'https://www.linkedin.com/school/shanghai-jiao-tong-university/'
            ],
            credit: `MA: Design grad. 2020
            School of Design
            Specialty: HCI design`
        },
        sod: {
            title: 'School of Design',
            href: 'https://designschool.sjtu.edu.cn/en-us',
            comment: `Program: Design
            - design methods and research
            - design thinking
            - design: user experience, service, interaction
            - java/processing
            
            PROJECTS
            - KS Healthcare app
            - Little Red game
            - Storytelling in Design
            - Interaction Design course
            - Service Design course
            - Disney Imaginations Shanghai competition
            - Creative writing app
            
            Note: Design projects resulted in design spec, portfolios, and Java/Processing prototypes`
        },
        smkou: {
            title: 'Sm Kou',
            href: [
                'https://smkou.com',
                'https://smkou.hashnode.dev'
            ]
        },
        signed: {
            title: 'SignedPic',
            href: 'https://signedpic.com',
            ref: {
                lee_grambush: 'https://www.linkedin.com/in/leegrambush/'
            },
            comment: `Worked on react flow and d3 implementation for firm accounts to manage attorneys and clients`
        },
        ph: {
            title: 'Paper Hammer',
            href: 'https://www.paper-hammer.com',
            ref: {
                ed_marquand: 'https://www.linkedin.com/in/edmarquand/'
            }
        }
    }

/* ------------------------------------------------------------ RESOURCES */

    const versions = [
        {
            title: 'The Profile',
            href: 'v0/',
            ref: 'https://www.kamranhughes.com/how-to-tailor-designs-using-the-big-5-personality-traits/',
            description: 'Re-Portfolio 2015-2017 features a questionnaire that changes page content and layout based on user answers. It is divided into visual preferences, graphic and text preferences, answer sections and question preferences.',
            dev: `Add user questionnaire

            Content:
            - chart or bar graph
            - progress bars
            - stock image, credit and source
            - bullet points
            - personal fact(s)
            - statement(s)
            - summary
            - analysis
            
            Basis of concept: User Interfaces with Big-5 Personality Traits (refer: ref)`
        },
        {
            title: 'The Magazine',
            href: 'v1/',
            ref: 'https://www.nytimes.com/section/magazine',
            description: 'Re-Portfolio 2015-2022 features a magazine-layout of flash fiction, short stories, and series. Though the writing is reflective of mental state at time of writing, do not take them at face value. Assume impressionism.',
            dev: `Add images for stories (use 640 optimized on clr, gen bw)
            Edit and redesign smjoker.com (slated)`
        },
        {
            title: 'The Design Index',
            href: 'v2/',
            description: 'Re-Portfolio 2018-2021 features a book index layout. The index consists of concepts in html and css, which can be further sorted into tags, fonts, shapes, layouts, ui elements, programming, and resources.',
            dev: `Content:
            - tags
            - shapes
            - layouts
            - ui elements
            - programming ie. variables and expressions
            - resources
            
            Work out code interfaces for shapes, layouts and ui elements`
        },
        {
            title: 'The Show',
            href: 'v3/',
            ref: 'https://codepen.io/dodozhang21/pen/kMoXZz',
            description: 'Re-Portfolio 2020-2022 features four slideshows on portfolio, different page designs, and favorite shows.',
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
            href: 'v4/',
            description: 'Re-Portfolio 2021-2022 features page designs based on observations of people. When I see a combination of clothing that catches my attention, since I cannot draw or take a photograph, I turn their clothing combination into the layout for a webpage.'
        },
        {
            title: 'Epicodus Resume',
            href: 'v5/',
            description: 'Re-Portfolio 2023 features a resume and profile format, done for portfolio review as part of a bootcamp code review (Epicodus).'
        }
    ]

    const experience = {
        'frontend-intern': {
            title: 'Frontend Intern',
            description: 'React web app developmnt',
            keywords: ['react', 'verbal communication', 'git', 'problem-solving', 'interface design', 'listening', 'adaptability', 'creativity'],
            year: ['Nov 2023', 'Dec 2023'],
            ref: sources.signed,
            status: true,
            location: 'Seattle, WA, USA',
            responsibility: `Implement tree visualization for dashboard (d3)
            Dashboard page for managing firm account's users`,
            type: 'Remote'
        },
        'store-clerk': {
            title: 'Store Clerk',
            description: 'Part-time store clerk',
            keywords: ['empathy', 'verbal communication', 'listening', 'attention to detail', 'organization'],
            year: ['Aug 2021', 'Apr 2023'],
            ref: sources.ph,
            status: true,
            location: 'Seattle, WA, USA',
            responsibility: `Cashier
            Customer service
            Stock organization`,
            comment: `Seattle location, closed in Apr. 2024`
        },
        'head-student-editor': {
            title: 'Head Student Editor',
            description: 'Lead team in translating, editing and proofreading course textbook on interaction design',
            keywords: ['listening', 'creativity', 'leadership', 'attention to detail', 'written communication', 'verbal communication', 'problem-solving', 'documentation', 'analytical reasoning'],
            year: ['Mar 2018', 'Aug 2019'],
            ref: sources.sjtu,
            status: true,
            location: 'Shanghai, Shanghai, CN',
            responsibility: `Conduct weekly meetings
            Manage translation and editing schedule
            Collect and synthesize weekly student feedback, drafts, edits, notes, and confirmations from professor
            Proofread and edit chapter drafts each week`
        },
        'teacher-assistant': {
            title: 'Teacher Assistant',
            description: `Assist professors and manage course schedule, materials and projects`,
            keywords: ['written communication','creativity','verbal communication','adaptability','adaptability','management','problem-solving','java','service design','interaction design'],
            year: ['Mar 2018', 'Jun 2019'],
            ref: sources.sod,
            status: true,
            location: 'Shanghai, Shanghai, CN',
            responsibility: `Service design, Interaction design (School of Design, SJTU)
            Develop and distribute course curriculumns
            Develop class presentations and tutorials
            Develop grading rubric
            Supervise class time and schedule
            Collect, grade and review assignments and projects`
        },
        'head-english-teacher': {
            title: 'Foreign English (Head) Teacher',
            description: `Teacher, trainer and supervisor of operations`,
            keywords: ['verbal communication','written communication','documentatation','time management','management','adaptability','creativity','analytical reasoning','critical thinking','problem-solving','teaching','training','business counseling','feedback','hiring decisions'],
            year: ['Aug 2015', 'Nov 2016'],
            status: true,
            location: 'Guangzhou, Guangdong, CN',
            ref: ['EasyFun', 'Hampson', 'Side-by-Side English'],
            responsibility: `Develop curriculums, course plans and class plans
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
            ref: sources.epi,
            status: true,
            location: 'Portland, OR, USA (remote)'
        },
        'design': {
            title: 'MA Design',
            description: 'Design research, practices, processes and fields',
            keywords: ['java', 'processing', 'adobe illustrator', 'user research', 'user interviews', 'quantitative analysis', 'qualitative analysis', 'low-fidelity prototypes', 'high-fidelity prototypes', 'eye-trackers', 'field research', 'service design', 'design thinking', 'interaction design', 'chinese'],
            year: 'Mar 2020',
            ref: [sources.sjtu, sources.sod],
            status: true,
            location: 'Shanghai, Shanghai, CN'
        },
        'informatics': {
            title: 'BS Informatics',
            description: `Information technology, applications, and principles`,
            keywords: ['java', 'mobile apps', 'web apps', 'responsive design', 'web design and development', 'database modeling', 'database design', 'sql', 'mysql', 'android', 'axure rp', 'adobe illustrator', 'visual design', 'user experience design', 'service design', 'design thinking', 'computer science', 'software entrepreneurship'],
            year: 'Jun 2014',
            ref: [sources.uw, sources.ischool],
            status: true,
            location: 'Seattle, WA, USA'
        },
        'pre-engineering': {
            title: 'AS Pre-Engineering',
            description: `Introduction to engineering sciences, including computer science`,
            keywords: ['visual basic', 'java', 'desktop apps', 'forms'],
            year: 'Jun 2011',
            ref: sources.edcc,
            status: true,
            location: 'Edmonds, WA, USA'
        }
    }

    const messages = {
        cnet: `Status: deprecated
        All C#/.Net projects are not likely to be completed (deployed).`,
        basic: `Status: complete
        Does not require maintainence (changes or updates).`,
        demo: 'Included for demonstration purposes.'
    }

    const projects = {
        'husky-goals': {
            title: 'Husky Goals',
            description: 'Mobile app for keeping track of goals based on counter, timer, and checklists',
            keywords: ['axure rp','html','css','javascript', 'paper prototypes', 'wireframes', 'mockups', 'user research', 'user testing', 'user interviews', 'user stories', 'personas'],
            year: 2012,
            ref: { source: sources.ischool },
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: true,
                queued: true
            },
            comment: `Course: Design Thinking
            Completed submission: Axure RP prototype and design spec`
        },
        'carmax': {
            title: 'Carmax',
            description: 'Mobile app for setting up appointment for car viewing, include step-by-step form for entering preferences',
            keywords: ['axure rp', 'wireframes', 'mockups'],
            year: 2013,
            ref: { 
                source: sources.ischool, 
                carmax: 'https://www.carmax.com' 
            },
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: true,
                queued: false
            },
            comment: `Course: Service Design
            Completed submission: Axure RP prototype, design spec and app presentation`,
            dev: `Research: car market and carmax situation
            - Carmax mobile app and website
            Redesign for Carmax corporate design`
        },
        'booksie': {
            title: 'Booksie Database Design',
            description: 'Database model for Booksie user content and services',
            keywords: ['sql', 'database models', 'mysql', 'flow diagrams'],
            year: 2013,
            ref: {
                source: sources.ischool,
                booksie: 'https://www.booksie.com'
            },
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: true,
                queued: true
            },
            comment: `Course: Database Models and Design
            Completed submission: database model and database with mock data`,
            dev: `System and service redesign
            - online writing community
            - publishing
            - blogging platforms
            Requires app, server and database`
        },
        'ijuum': {
            title: 'Ijuum',
            description: 'Text adventure with AI for NPCs',
            keywords: ['html', 'css', 'javascript', 'vanilla js', 'golang', 'cli', 'desktop app'],
            year: 2013,
            ref: { source: sources.smkou },
            inspect: 'https://github.com/SmKou/ijuum',
            status: {
                completed_before: false,
                in_progress: true,
                redesign_due: false,
                queued: false
            },
            comment: `Alternative title: Art and Execution
            Type: Open-world
            Mix of procedural-generated and scripted characters, capable of conversation. Timeline navigation. Compiles on language of ijuum.`,
            dev: `Language construction
            Interpreters and Compilers
            Text adventure development`
        },
        'leto': {
            title: 'The Leto Project',
            description: 'Resource and task management interface for teams, and AR app for conference/meetup recruitment using virtual badges',
            keywords: ['axure rp', 'adobe illustrator', 'adobe ux', 'java', 'android', 'ar', 'augmented reality', 'wireframes', 'mockups'],
            year: 2014,
            ref: { source: sources.ischool },
            status: {
                completed_before: false,
                in_progress: false,
                redesign_due: true,
                queued: false
            },
            comment: `Capstone project (proof of concept)
            Completed submission: mock virtual badges, design spec, ar prototype`,
            dev: `Research: project management options, team recruitment, and project pages
            - version control
            - market: Obsidian, Notion, AnyType
            Perhaps abstract out concept to another project`
        },
        'ks-healthcare': {
            title: 'KS Healthcare',
            description: 'Mobile app for managing appointments, doctor notes, lab results, and mainly for navigation of Chinese hospitals',
            keywords: ['adobe illustrator', 'adobe ux', 'paper prototypes', 'mockups', 'wireframes', 'user interviews', 'field study', 'personas', 'user stories'],
            year: 2018,
            ref: { source: sources.sod },
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: false,
                queued: false
            },
            comment: `Course: Design Thinking and Process
            Completed submission: design spec, research report and presentation`,
            dev: `Requires further research, note updates since covid
            Concept does not apply to American context`
        },
        'little-red': {
            title: 'Little Red',
            description: 'Prototype for game adaptation of Little Red Riding Hood',
            keywords: ['java', 'processing', 'html', 'css', 'js', 'canvas', 'vanilla js'],
            year: 2018,
            ref: {
                source: sources.sod,
                programming_ideas: 'https://inventwithpython.com/blog/2012/02/20/i-need-practice-programming-49-ideas-for-game-clones-to-code/',
                book: 'https://www.amazon.com/Picture-This-How-Pictures-Work/dp/1452151997',
                author: 'https://www.mollybang.com/Pages/picture.html'
            },
            inspect: 'https://github.com/SmKou/red-riding-hood',
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: false,
                queued: true
            },
            comment: `Course: Interaction Design
            Completed prototype in java/processing
            - adaptation of Little Red Riding Hood
            - aesthetics inspired by "Picture This" (Molly Bang)`,
            dev: `Adapt into different formats for series
            - learn how game format affects depiction and projection of story
            Remove references to physics and rendering
            Create app for easy deployment to gh-pages
            Homepage: Switch between versions (responsive ui)
            
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
            ref: { 
                source: sources.sod,
                author_websites: 'https://blog.reedsy.com/guide/author-websites/'
            },
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: true,
                queued: true
            },
            comment: `Course: User Experience Design
            Completed prototype in java/processing
            - document editor with file and notes management`,
            dev: `Research:
            Blogging platforms - Write.as, Medium, Ghost, Wordpress
            Creative writing resources - Campfire Writing, LivingWriter
            Reanalyze purpose and intent -> redesign`
        },
        'responsive-web': {
            title: 'Responsive Web Design',
            description: 'Showcase web app for projects in freeCodeCamp course',
            keywords: ['html','css','javascript', 'vanilla js'],
            year: 2021,
            ref: { source: sources.fcc },
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: false,
                queued: true
            },
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
            ref: { source: sources.fcc },
            status: {
                completed_before: false,
                in_progress: false,
                redesign_due: false,
                queued: false,
            },
            comment: `Original challenge: Complete main courses in 1 month
            - new courses added makes this impossible
            - skip first course
            Revised to: Complete main courses in 3-4 months (or 1 course per week)`
        },
        'first-page': {
            title: 'First Page',
            description: 'Scrolling single-page panels to demonstrate anchor links and form submission',
            keywords: ['html','css'],
            source: 'ztm',
            year: 2023,
            ref: { source: sources.ztm },
            view: 'https://smkou.github.io/first-page/',
            inspect: 'https://github.com/SmKou/first-page',
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: false,
                queued: false
            },
            comment: `Course: Complete Web Developer in 2023`,
            dev: `${messages.basic}
            ${messages.demo}`
        },
        'live-in-the-wild': {
            title: 'Live in the Wild',
            description: 'Gallery grid using flexbox',
            keywords: ['html','css'],
            year: 2023,
            ref: { source: sources.ztm },
            view: 'https://smkou.github.io/live-in-the-wild/',
            inspect: 'https://github.com/SmKou/live-in-the-wild',
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: false,
                queued: false
            },
            comment: `Course: Complete Web Developer in 2023`,
            dev: `${messages.basic}
            ${messages.demo}`
        },
        'android-journeys': {
            title: 'Android Journeys',
            description: 'JS slideshow of landscapes featuring css-made android in a pretend travelogue',
            keywords: ['html','css', 'javascript', 'vanilla js'],
            year: 2023, 
            ref: { source: sources.ztm },
            view: 'https://smkou.github.io/android-journeys/',
            inspect: 'https://github.com/SmKou/android-journeys',
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: false,
                queued: false
            },
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
            href: { source: sources.ztm },
            view: [
                'https://smkou.github.io/robofriends/', 
                'https://smkou.github.io/robofriends-func/'
            ],
            inspect: [
                'https://github.com/SmKou/robofriends', 
                'https://github.com/SmKou/robofriends-func'
            ],
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: true,
                queued: false
            },
            comment: `Course: Complete Web Developer in 2023
            Two versions available: class-based react app and function-based react app`,
            dev: `Search bar text is too small and placeholder text has poor contrast with header, header text also needs to adjust size based on width`
        },
        'simplebrain': {
            title: 'SimpleBrain',
            description: 'React web app and express api for image submission with face detection and user accounts',
            keywords: ['react', 'api', 'express', 'node.js',  'knex.js', 'postgresql', 'sql', 'authentication', 'authorization', 'responsive design'],
            year: 2023,
            ref: {
                source: sources.ztm,
                clarifai: 'https://www.clarifai.com',
                project: [
                    'https://github.com/aneagoie/face-recognition-brain', 
                    'https://github.com/aneagoie/face-recognition-brain-api'
                ],
                old: [
                    'https://github.com/SmKou/bfrb', 
                    'https://github.com/SmKou/bfrb-api'
                ]
            },
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: true,
                queued: true
            },
            comment: `Course: Complete Web Developer in 2023
            Adapted from Face Recognition Brain project from ZTM
            Uses Clarifai api for face detection
            App includes user ranking based on images submitted (mod: no. of faces x images)
            Last 3 iterations in React`
        },
        'counting-calculator': {
            title: 'Counting Calculator',
            description: 'Based on demo project of react and redux toolkit, counting calculator adapted from counter',
            keywords: ['react','redux toolkit'],
            year: 2023,
            ref: {
                project: 'https://redux-toolkit.js.org/tutorials/quick-start'
            },
            view: [
                'https://smkou.github.io/counting-calculator/', 'https://smkou.github.io/counting-calculator-2/'
            ],
            inspect: [
                'https://github.com/SmKou/counting-calculator', 'https://github.com/SmKou/counting-calculator-2'
            ],
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: true,
                queued: true
            },
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
            ref: { source: sources.epi },
            view: 'https://smkou.github.io/programming-language-suggester/',
            inspect: 'https://github.com/SmKou/programming-language-suggester',
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: false,
                queued: false
            },
            comment: `Code reviewed`,
            dev: `${messages.basic}
            ${messages.demo}`
        },
        'mr-roboger-neighborhood': {
            title: "Mr. Roboger's Neighborhood",
            description: 'Generate number sequences with substitutions for every number containing 1, 2, and 3 similar to fizzbuzz, includes tests based on test-driven development accessible through browser console',
            keywords: ['html','javascript', 'vanilla js', 'css'],
            year: 2023,
            ref: { source: sources.epi },
            view: 'https://smkou.github.io/mr-roboger-neighborhood/',
            inspect: 'https://github.com/SmKou/mr-roboger-neighborhood',
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: false,
                queued: false
            },
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
            ref: { source: sources.epi },
            view: 'https://smkou.github.io/pizza-parlor/',
            inspect: 'https://github.com/SmKou/pizza-parlor',
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: true,
                queued: false
            },
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
            ref: { source: sources.epi },
            inspect: 'https://github.com/SmKou/currency-exchanger',
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: false,
                queued: true
            },
            comment: `Code reviewed`,
            dev: `Submission required no deployment
            API requires an api key`
        },
        'super-galactic-age-calculator': {
            title: 'Super Galactic Age Calculator',
            description: 'Age calculator for humans and dogs on other planets, generated from my own node template, commit history reflects use red-green workflow',
            keywords: ['node.js','babel','eslint','webpack','jest'],
            year: 2023,
            ref: { source: sources.epi },
            inspect: 'https://github.com/SmKou/super-galactic-age-calculator',
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: true,
                queued: true
            },
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
            ref: { source: sources.epi },
            inspect: 'https://github.com/SmKou/dino-ipsum',
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: true,
                queued: true
            },
            comment: `Pair programming project
            Uses XMLHttpRequest in Node.js
            Dino Ipsum does not require api key, use of node.js overcomplicates page`
        },
        'pierre-bakery': {
            title: "Pierre's Bakery",
            description: "CLI app for placing an order",
            keywords: ['c#','cmd','.net 6'],
            year: 2023,
            ref: { source: sources.epi },
            inspect: 'https://github.com/SmKou/PierresBakery.Solution',
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: false,
                queued: false
            },
            comment: `Code reviewed`,
            dev: messages.cnet
        },
        'madlibs-clone': {
            title: 'Madlibs clone',
            description: 'CLI app for filling in, reading and creating ablibs on local machine',
            keywords: ['c#','cmd','.net 6'],
            year: 2023,
            ref: { source: sources.epi },
            inspect: 'https://github.com/SmKou/Week9.Solutions',
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: true,
                queued: false
            },
            comment: `Pair programming project (solo dev with supervision)`,
            dev: messages.cnet
        },
        'hair-salon': {
            title: 'Hair Salon',
            description: 'MVC web app for managing stylists and clients in a one-to-one relationship',
            keywords: ['c#','.net 6','entity framework core','mysql','mvc','sql'],
            year: 2023,
            ref: { source: sources.epi },
            inspect: 'https://github.com/SmKou/HairSalon.Solution',
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: false,
                queued: false
            },
            comment: `Code reviewed`,
            dev: messages.cnet
        },
        'vendor-order-tracker': {
            title: 'Vendor Order Tracker',
            description: 'MVC web app for tracking and managing vendor information and orders in one-to-many relationships',
            keywords: ['c#','.net 6', 'entity framework core','mysql','mvc','sql'],
            year: 2023,
            ref: { source: sources.epi },
            inspect: 'https://github.com/SmKou/VendorOrderTracker.Solution',
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: false,
                queued: false
            },
            comment: `Code reviewed`,
            dev: messages.cnet
        },
        'sillystringz-factory': {
            title: 'Sillystringz Factory',
            description: 'MVC web app for tracking and managing many-to-many relationships between machines and engineers',
            keywords: ['c#','.net 6', 'entity framework core','mysql','mvc','sql'],
            year: 2023,
            ref: { source: sources.epi },
            inspect: 'https://github.com/SmKou/SillystringzFactory.Solution',
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: false,
                queued: false
            },
            comment: `Code reviewed
            Uses migrations for database setup`,
            dev: messages.cnet
        },
        'pierres-sweet-and-savory-treats': {
            title: "Pierre's Sweet and Savory Treats",
            description: 'MVC web app for tracking and managing treats and their flavors in many-to-many relationships with ',
            keywords: ['c#', '.net 7', 'identity', 'entity framework core', 'mysql', 'sql', 'mvc', 'authentication', 'authorization'],
            year: 2023,
            ref: { source: sources.epi },
            inspect: 'https://github.com/SmKou/PierresSweetSavoryTreats',
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: false,
                queued: false
            },
            comment: `Code reviewed
            Create, update and delete only allowed with authentication and authorization`,
            dev: messages.cnet
        },
        'parks-lookup': {
            title: "Parks Lookup api",
            description: 'API for looking up national and state parks with user authorization for crud on accounts, makes use of JWT authentication, versioning and pagination',
            keywords: ['c#', '.net 7', 'identity', 'entity framework core', 'mysql', 'sql', 'mvc', 'authentication', 'versioning', 'pagination', 'jwt', 'api'],
            year: 2023,
            ref: { source: sources.epi },
            inspect: 'https://github.com/SmKou/ParksLookup.Solution',
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: true,
                queued: true
            },
            comment: `Code reviewed`,
            dev: `${messages.cnet}
            Use national park api and states' park apis for accurate information - actual use case `
        },
        'global-address-formatter': {
            title: 'Global Address Formatter',
            description: 'MVC web app and api for formatting addresses for international shipping and mail',
            keywords: ['c#', '.net 7', 'entity framework core', 'mysql', 'sql', 'javascript', 'vanilla js', 'restsharp', 'newtonsoft.json', 'css', 'html', 'chtml', 'mvc', 'api'],
            year: 2023,
            ref: { source: sources.epi },
            inspect: 'https://github.com/SmKou/GlobalAddressFormatter.Solution',
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: true,
                queued: true
            },
            comment: `Code reviewed
            Team project
            My role: Frontend web app & Debugging api`,
            dev: messages.cnet
        },
        'power-planter': {
            title: 'Power Planter',
            description: 'Numbers game using functional programming principles',
            keywords: ['html', 'css', 'javascript', 'vanilla js', 'responsive design'],
            year: 2023,
            ref: { source: sources.epi },
            inspect: 'https://github.com/SmKou/power-planter/',
            status: {
                completed_before: false,
                in_progress: false,
                redesign_due: false,
                queued: true
            },
            comment: `Pair programming project (solo dev with supervision)`,
            dev: `Re-scaffold with vite?
            Use app with subtree pushes to gh-pages`
        },
        'coffee-beans': {
            title: 'Coffee Beans',
            description: 'Inventory tracker for coffee beans seller, uses class and function components, prop types, and uuid',
            keywords: ['react', 'class components', 'function components', 'prop types', 'uuid'],
            year: 2023,
            ref: { source: sources.epi },
            view: 'https://smkou.github.io/inventory-tracker/',
            inspect: 'https://github.com/SmKou/inventory-tracker',
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: false,
                queued: false
            },
            comment: `Code reviewed`,
            dev: messages.basic
        },
        'katadsa': {
            title: 'KataDSA',
            description: 'DSA-learning resource focused on theory and applications',
            keywords: ['godot', 'node.js', 'go', 'cli', 'web app', 'templates', 'vanilla js', 'javascript', 'html', 'css', 'java', 'processing'],
            year: 2023,
            ref: {
                source: sources.epi,
                material: 'https://github.com/SmKou/algorithms',
                study_plan: 'https://www.techinterviewhandbook.org/coding-interview-study-plan/',
                reading: [ 
                    'https://www.manning.com/books/grokking-algorithms', 
                    'https://www.manning.com/books/advanced-algorithms-and-data-structures', 
                    'https://nostarch.com/Dive-Into-Algorithms', 
                    'https://www.amazon.com/Algorithms-Every-Programmer-Should-Know-ebook/dp/B09QKY6VP9', 
                    'https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/'
                ]
            },
            inspect: 'https://github.com/SmKou/katadsa-spec',
            status: {
                completed_before: false,
                in_progress: false,
                redesign_due: false,
                queued: true
            },
            comment: `Capstone project
            
            Template projects (koudblue): UI- and tests-provided app where developers add code for dsa, additional view for comparison of solutions' performance
    
            Game (Cubitt): Playing a scan and retrieval program, the player's mission is to locate and retrieve a missing cubitt in an infected sector and to identify the virus behind the infection, which manifests as a labyrinth and a humanoid cubitt. As the player guides Cubitt out of the infected sector by speaking to them in the cubitt programming language, the virus attempts to corrupt cubitt's memory and functions.
    
            Iterations: 2`,
            dev: `Algorithms - DSA practice with LeetCode
            - NeetCode 150 (paused)
            - Coding Interview Study Plan
            - Learning path: Computer Science (Frontend Masters)`
        },
        'mahjong-cards': {
            title: 'Mahjong Cards',
            description: `Print & Play designs of mahjong cards`,
            year: 2024,
            ref: { source: sources.smkou },
            status: {
                completed_before: true,
                in_progress: false,
                redesign_due: true,
                queued: true
            },
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
            ref: { 
                learning: 'https://github.com/SmKou/godot-rpg' 
            },
            inspect: 'https://github.com/SmKou/jordans-game',
            status: {
                completed_before: false,
                in_progress: true,
                redesign_due: true,
                queued: false
            },
            comment: `Birthday present for nephew
            Inspired by Pokemon Red
            Design decisions by nephew (old spec)
            Aesthetics style: Sm Kou`,
            dev: `MVP: First town with interactions, characters and scenes`
        },
        'tale-of-ki': {
            title: 'Tales of Ki',
            description: 'Text adventure with alternative and adaptive narratives, featuring family of gremlins',
            keywords: ['html', 'css', 'javascript', 'vanilla js'],
            year: 2024,
            ref: { source: sources.smkou },
            view: [
                'https://smkou.github.io/tale-of-kibakhan/',
                'https://smkou.github.io/tale-of-ki/'
            ],
            inspect: [
                'https://github.com/SmKou/tale-of-kibakhan', 
                'https://github.com/SmKou/tale-of-ki'
            ],
            status: {
                completed_before: false,
                in_progress: false,
                redesign_due: false,
                queued: true
            },
            comment: `Based on Dungeons & Dragons
            Two narratives: third-person (Seraph) and first-person (Kibakhan)`
        }
    }

    const calendar = {
        daily: {
            routine: { morning: '8:00', night: '23:00' },
            goals: {
                walk: { time: { min: 1, max: 2 }},
                coding_challenge: {
                    title: "Coding Challenge",
                    time: 1,
                    source: [
                        {
                            title: "Coding Interview prep",
                            href: "https://www.freecodecamp.org/learn/coding-interview-prep"
                        },
                        {
                            title: "Exercism: Gleam track",
                            href: "https://exercism.org/tracks/gleam"
                        },
                        {
                            title: "Exercism: Go track",
                            href: "https://exercism.org/tracks/go"
                        },
                        {
                            title: "Coding Interview study plan",
                            href: "https://www.techinterviewhandbook.org/coding-interview-study-plan/"
                        }
                    ]
                },
                reading: {
                    title: "Reading",
                    time: 1,
                },
            }
        },
        weekly: {
            routine: {
                therapy: {
                    title: 'C-PTSD therapy',
                    time: ['10:30', 1.5],
                    days: [0, 1, 0, 0, 0, 0, 0]
                },
                isg: {
                    title: 'Indie Support Group',
                    time: ['13:00', 5.5],
                    days: [0, 0, 0, 0, 0, 0, 1]
                },
                computer_science: {
                    title: "Computer Science",
                    time: [['10:00', 3], ['13:00', 1]],
                    days: [1, 2, 1, 2, 1, 2, 0],
                    source: [
                        sources.fm,
                        {
                            title: "Computer Science roadmap",
                            href: "https://roadmap.sh/computer-science"
                        },
                        {
                            title: "Coding Interview study plan",
                            href: "https://www.techinterviewhandbook.org/coding-interview-study-plan/"
                        }
                    ]
                },
                web_development: {
                    title: "Web Development",
                    time: [['10:00', 3], ['13:00', 1]],
                    days: [2, 0, 2, 1, 2, 1, 1],
                    source: [
                        sources.fm,
                        {
                            title: "Backend Developer roadmap",
                            href: "https://roadmap.sh/backend"
                        }
                    ]
                }
            },
            goals: {
                museum_visit: {
                    title: 'Museum Visit',
                    time: ['9:00', 6],
                    days: [1, 0, 0, 0, 0, 0, 0],
                    week: [
                        'Frye Art Museum',
                        'Wing Luke Museum',
                        'Henry Art Gallery',
                        'National Nordic Museum'
                    ]
                }
            }
        },
        monthly: {
            routine: {
                seattlejs: {
                    title: 'Seattle JS',
                    time: ['17:00', 3],
                    days: [0, 0, 0, 1, 0, 0, 0],
                    week: 1
                },
                code_katas: {
                    title: 'Code Katas',
                    time: ['17:30', 2.5],
                    days: [0, 0, 1, 0, 0, 0, 0],
                    week: 2
                },
                seattle_indies_social: {
                    title: 'Seattle Indies Social',
                    time: ['20:30', 1.5],
                    days: [0, 0, 1, 0, 0, 0, 0],
                    week: 2
                }
            }
        },
        projects: ['Re-Portfolio', "Jordan's Game"],
        events: {
            '4/10/24': {
                location: 'The Collective',
                group: 'SeattleJS',
                time: ['15:30', 2.5]
            },
            '4/16/24': {
                location: ['AWS Skills Center', 'Stoup Brewery'],
                group: ['Seattle Hackers', 'Seattle Indies'],
                time: [['18:00', 2], ['20:30', 1.5]]
            }
        }
    }

    const pages = {
        versions: {
            title: 'The Old TV',
            description: 'Preview the available portfolios',
            href: 'versions/'
        }
    }

/* ---------------------------------------------------------------- PAGES */

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
        cd, cls, clear,
        dir,
        echo, 
        find, 
        help, hostname, 
        ls, lynx, 
        man, more, msg, 
        pwd,
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
