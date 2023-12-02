const portfolio = {
    type: 'dir',
    versions: {
        type: 'vers',
        v0: {
            type: 'ver',
            title: 'Profile',
            href: 'versions/v0',
            description: 'Re-Portfolio 2015-2017 featuring block colors and styling, consists of portraits and personality',
            status: true
        },
        v1: {
            type: 'ver',
            title: 'Design Index',
            href: 'versions/v1',
            description: 'Re-Portfolio 2018-2019 featuring designer backgrounds using block styling, consists of css colors, shapes, and fonts',
            status: false
        },
        v2: {
            type: 'ver',
            title: 'Slideshow',
            href: 'versions/v2',
            description: 'Re-Portfolio 2020 featuring slideshow, consists of notes on identity',
            status: false
        },
        v3: {
            type: 'ver',
            title: 'Unique Page Slideshow',
            href: 'versions/v3',
            description: 'Re-Portfolio 2021-2022 featuring slideshow with magazine, newspaper, documentation designs, consists of introduction, profile, projects, and resources',
            status: false
        },
        v4: {
            type: 'ver',
            title: 'Epicodus',
            href: 'versions/v4',
            description: 'Re-Portfolio 2023 featuring resume and profile',
            status: true
        }
    },
    projects: {
        type: 'dir',
        'first-page': {
            type: 'proj',
            source: 'ztm',
            description: 'Scrolling single-page panels to demonstrate anchor links and form submission',
            year: 2023,
            view: 'https://smkou.github.io/first-page/',
            inspect: 'https://github.com/SmKou/first-page',
            keywords: ['HTML','CSS'],
            status: 'complete'
        },
        'live-in-the-wild': {
            type: 'proj',
            source: 'ztm',
            description: 'Gallery grid using flexbox',
            year: 2023,
            view: 'https://smkou.github.io/live-in-the-wild/',
            inspect: 'https://github.com/SmKou/live-in-the-wild',
            keywords: ['HTML','CSS'],
            status: 'complete'
        },
        'android-journeys': {
            type: 'proj',
            source: 'ztm',
            description: 'JS slideshow of landscapes featuring css-made android in a pretend travelogue',
            year: 2023, 
            view: 'https://smkou.github.io/android-journeys/',
            inspect: 'https://github.com/SmKou/android-journeys',
            keywords: ['HTML','CSS'],
            status: 'complete'
        },
        'counting-calculator': {
            type: 'proj',
            source: 'demo',
            description: 'Based on demo project of react and redux toolkit, counting calculator adapts the counter',
            year: 2023,
            view: 'https://smkou.github.io/counting-calculator/',
            inspect: 'https://github.com/SmKou/counting-calculator',
            keywords: ['React','redux toolkit','demo'],
            status: 'complete'
        },
        'counting-calculator-2': {
            type: 'proj',
            source: 'demo',
            description: 'Improvement of the original counting calculator with instructions and a different color scheme',
            year: 2023,
            view: 'https://smkou.github.io/counting-calculator-2/',
            inspect: 'https://github.com/SmKou/counting-calculator-2',
            keywords: ['React','redux toolkit','demo'],
            status: 'complete'
        },
        'robofriends': {
            type: 'proj',
            source: 'ztm',
            description: 'Grid of contact cards for robots with names and emails using api (class components), meant for understanding legacy react code',
            year: 2023,
            view: 'https://smkou.github.io/robofriends/',
            inspect: 'https://github.com/SmKou/robofriends',
            keywords: ['React','CSS'],
            status: 'uibug'
        },
        'robofriends-func': {
            type: 'proj',
            source: 'ztm',
            description: 'Robofriends using function components',
            year: 2023,
            view: 'https://smkou.github.io/robofriends-func/',
            inspect: 'https://github.com/SmKou/robofriends-func',
            keywords: ['React','CSS'],
            status: 'uibug'
        },
        'programming-language-suggester': {
            type: 'proj',
            source: 'epicodus',
            description: 'Programming language form for suggestions based on experience, motivation among other factors',
            year: 2023,
            view: 'https://smkou.github.io/programming-language-suggester/',
            inspect: 'https://github.com/SmKou/programming-language-suggester',
            keywords: ['HTML','JavaScript','CSS'],
            status: 'complete'
        },
        'mr-roboger-neighborhood': {
            type: 'proj',
            source: 'epicodus',
            description: 'Generate number sequences with substitutions for every number containing 1, 2, and 3 similar to fizzbuzz, includes tests based on test-driven development accessible through browser console',
            year: 2023,
            view: 'https://smkou.github.io/mr-roboger-neighborhood/',
            inspect: 'https://github.com/SmKou/mr-roboger-neighborhood',
            keywords: ['HTML','JavaScript','CSS'],
            status: 'complete'
        },
        'pizza-parlor': {
            type: 'proj',
            source: 'epicodus',
            description: 'Order form and checkout for pizza, includes tests based on TDD principles accessible through browser console (2nd iteration)',
            year: 2023,
            view: 'https://smkou.github.io/pizza-parlor/',
            inspect: 'https://github.com/SmKou/pizza-parlor',
            keywords: ['HTML','CSS','JavaScript'],
            status: 'complete'
        },
        'currency-exchanger': {
            type: 'proj',
            source: 'epicodus',
            description: 'Conversion form for amounts between currencies using ExchangeRate api',
            year: 2023,
            view: '',
            inspect: 'https://github.com/SmKou/currency-exchanger',
            keywords: ['Node.js','Babel','ESLint','Webpack','Jest'],
            status: 'deploy'
        },
        'super-galactic-age-calculator': {
            type: 'proj',
            source: 'epicodus',
            description: 'Age calculator for humans and dogs on other planets, generated from my own node template, commit history reflects use red-green workflow',
            year: 2023,
            view: '',
            inspect: 'https://github.com/SmKou/super-galactic-age-calculator',
            keywords: ['Node.js','Babel','ESLint','Webpack','Jest'],
            status: 'code',
            current: 'Add ui then deploy'
        },
        'dino-ipsum': {
            type: 'proj',
            source: 'epicodus',
            year: 2023,
            description: 'Dinosaur name generator using dino ipsum, choose dinosaur name and get robot avatars, pair project, uses XMLHttpRequest in node.js',
            view: '',
            inspect: 'https://github.com/SmKou/dino-ipsum',
            keywords: ['Node.js','Babel','ESLint','Webpack','Jest'],
            status: 'review'
        },
        'pierre-bakery': {
            type: 'proj',
            source: 'epicodus',
            description: "CLI for placing an order to an imaginary bakery: Pierre's Bakery",
            year: 2023,
            view: '',
            inspect: 'https://github.com/SmKou/PierresBakery.Solution',
            keywords: ['C#','cmd','.Net 6'],
            status: 'deploy',
            now: { message: 'cnet' }
        },
        'madlibs-clone': {
            type: 'proj',
            source: 'epicodus',
            description: 'CLI app for filling in, reading and creating ablibs on local machine',
            year: 2023,
            view: '',
            inspect: 'https://github.com/SmKou/Week9.Solutions',
            keywords: ['C#','cmd','.Net 6'],
            status: 'review',
            now: 'Requires partial deployment, otherwise migrate to new project (not likely)'
        },
        'hair-salon': {
            type: 'proj',
            source: 'epicodus',
            description: 'MVC web app for managing stylists and clients in a one-to-one relationship',
            year: 2023,
            view: '',
            inspect: 'https://github.com/SmKou/HairSalon.Solution',
            keywords: ['C#','.Net 6','Entity Framework Core','MySQL','MVC','SQL'],
            status: 'deploy',
            now: { message: 'cnet' }
        },
        'vendor-order-tracker': {
            type: 'proj',
            source: 'epicodus',
            description: 'MVC web app for tracking and managing vendor information and orders in one-to-many relationships',
            year: 2023,
            view: '',
            inspect: 'https://github.com/SmKou/VendorOrderTracker.Solution',
            keywords: ['C#','.Net 6', 'Entity Framework Core','MySQL','MVC','SQL'],
            status: 'deploy',
            now: { message: 'cnet' }
        },
        'sillystringz-factory': {
            type: 'proj',
            source: 'epicodus',
            description: 'MVC web app for tracking and managing many-to-many relationships between machines and engineers licensed to fix them, uses migrations for database setup',
            year: 2023,
            view: '',
            inspect: 'https://github.com/SmKou/SillystringzFactory.Solution',
            keywords: ['C#','.Net 6', 'Entity Framework Core','MySQL','MVC','SQL'],
            status: 'deploy',
            now: { message: 'cnet' }
        },
        'pierres-sweet-and-savory-treats': {
            type: 'proj',
            source: 'epicodus',
            description: 'MVC web app for tracking and managing treats and their flavors in many-to-many relationships with create, update and delete only allowed with authentication and authorization',
            year: 2023,
            view: '',
            inspect: 'https://github.com/SmKou/PierresSweetSavoryTreats',
            keywords: ['C#','.Net 7','Identity','Entity Framework Core','MySQL','MVC','Authentication','Authorization'],
            status: 'deploy',
            now: { message: 'cnet' }
        },
        'parks-lookup': {
            type: 'proj',
            source: 'epicodus',
            description: 'API for looking up national and state parks with user authorization for crud on accounts, makes use of JWT authentication, versioning and pagination',
            year: 2023,
            view: '',
            inspect: 'https://github.com/SmKou/ParksLookup.Solution',
            keywords: ['C#','.Net 7','Identity','Entity Framework Core','MySQL','API','JWT Authentication','Versioning','Pagination'],
            status: 'code',
            now: {
                message: 'cnet',
                additional: 'This project does not make use of the national park api or the park apis for states, which would provide accurate information and thus an actual use case. If this project were to be completed, revise it to include utlization of the national and state park apis.'
            }
        },
        'global-address-formatter': {
            type: 'proj',
            source: 'epicodus',
            description: 'MVC web app and api for formatting addresses for international shipping and mail (team project), worked on web app and helped in debugging api',
            year: 2023,
            view: '',
            inspect: 'https://github.com/SmKou/GlobalAddressFormatter.Solution',
            keywords: ['C#','.Net 7','Entity Framework Core','MySQL','MVC','RestSharp','NewtonSoft.Json'],
            status: 'review',
            now: { message: 'cnet' }
        },
        'coffee-beans': {
            type: 'proj',
            source: 'epicodus',
            description: 'Inventory tracker for coffee beans seller, uses class and function components, prop types, and uuid',
            year: 2023,
            view: 'https://smkou.github.io/inventory-tracker/',
            inspect: 'https://github.com/SmKou/inventory-tracker',
            keywords: ['React'],
            status: 'complete'
        },
        'husky-goals': {
            type: 'proj',
            source: 'uw',
            description: 'Mobile app for keeping track of goals based on counter, timer, and checklists',
            year: 2012,
            view: '',
            inspect: '',
            keywords: ['Axure RP','HTML','CSS','JavaScript'],
            status: 'code',
            now: 'Requires redesign as responsive web app (possibly pwa), planned to use this project as a base project for trying out different frameworks given the age and my familiarity with this project'
        },
        'carmax': {
            type: 'proj',
            source: 'uw',
            description: 'Mobile app for setting up appointment for car viewing, include step-by-step form for entering preferences',
            year: 2013,
            view: '',
            inspect: '',
            keywords: ['Axure RP'],
            status: 'code',
            now: 'Requires redesign to incorporate Carmax corporate redesign and the release of their mobile app and website'
        },
        'booksie': {
            type: 'proj',
            source: 'uw',
            description: 'Database model for Booksie user content and services',
            year: 2013,
            view: '',
            inspect: '',
            keywords: ['SQL','Database modeling'],
            status: 'code',
            now: 'Reassess services and content for system redesign, meant to deviate from Booksie brand and ux, then develop responsive web app, api and database'
        },
        'apollo': {
            type: 'proj',
            source: 'uw',
            description: 'Project management capstone project: resource and task management interface for teams',
            year: 2014,
            view: '',
            inspect: '',
            keywords: ['Axure RP','Adobe Illustrator','Adobe UX','Java','capstone'],
            status: 'code',
            now: 'Requires redesign and reassessment of core idea for implementation'
        },
        'artemis': {
            type: 'proj',
            source: 'uw',
            description: 'Project management capstone project: virtual badges with AR app for conferences and meetups',
            year: 2014,
            view: '',
            inspect: '',
            keywords: ['Java','AR','Adobe Illustrator','capstone'],
            status: 'code',
            now: 'Requires redesign and reassessment of core idea for implementation, use '
        },
        'responsive-web': {
            type: 'proj',
            source: 'fcc',
            description: 'Showcase web app for projects in freeCodeCamp Responsive Web Design',
            year: 2023,
            view: '',
            inspect: '',
            keywords: ['HTML','CSS','JavaScript'],
            status: 'code',
            now: 'New course (legacy course removed), assemble projects for responsive web design, personal goal to complete all 14 freecodecamp courses (one-month challenge)'
        },
        'foundations': {
            type: 'proj',
            source: 'odin',
            description: 'Showcase web app for projects in The Odin Project Foundations',
            year: -1,
            view: '',
            inspect: '',
            keywords: ['HTML','CSS','JavaScript'],
            status: 'code',
            now: 'Foundations course, assemble projects for foundations, personal goal to complete 7 odin project courses in full stack javascript stack (one-month challenge)'
        },
        'simplebrain': {
            type: 'proj',
            source: 'ztm',
            description: 'Adapted from Face Brain Recognition project: react web app and express api for image submission with Clarifai face detection and ranking of users with accounts',
            year: -1,
            view: '',
            inspect: '',
            keywords: ['React','Knex.js','PostgreSQL','SQL','Express','Authentication','Authorization','responsive design','to-do'],
            status: 'code',
            now: 'Redo with change in concept, Clarifai face detection used with age and gender for ranking and stats on user submissions (3rd iteration)'
        },
        'polish-notation-calculator': {
            type: 'proj',
            source: 'personal',
            description: 'Calculator web app for performing calculations using polish notation, reverse polish notation, and standard notation with memory and accompanying visualization',
            year: -1,
            view: '',
            inspect: '',
            keywords: ['React','CSS','JS','responsive design'],
            status: 'code',
            now: 'May or may not use Redux Toolkit as the counting calculator did'
        },
        'travel-scrapbooking': {
            type: 'proj',
            source: 'personal',
            description: 'Web app and api for creating book-like slideshow of travels, including images, captions and notes, as well as a map with points linked to pages',
            year: -1,
            view: '',
            inspect: '',
            keywords: ['JS','responsive design'],
            status: 'code',
            now: 'Design for concept, then select libraries if applicable, more interested in vanilla implementations'
        },
        'cattery': {
            type: 'proj',
            source: 'http://www.angelofsiberia.com/',
            description: 'Design and development of web app based on Angel of Siberia website',
            year: -1,
            view: '',
            inspect: '',
            keywords: ['responsive design'],
            status: ''
        },
        'nudibranch': {
            type: 'proj',
            source: 'personal',
            description: 'Showcase web app of design elements and styles based on nudibranch specimens',
            year: 2023,
            view: '',
            inspect: 'https://github.com/SmKou/nudibranch',
            keywords: ['HTML','JavaScript','CSS','responsive design','Vite'],
            status: 'code',
            now: 'Create sample template with js implementations for slug pages subject to change over time, each page meant to mostly be unique'
        },
        'katadsa': {
            type: 'proj',
            source: 'epicodus',
            description: 'Capstone project: Web app for managing projects based on url submission with project templates for completing projects to learn and practice data structures and algorithms',
            year: 2023,
            view: '',
            inspect: '',
            keywords: ['Next.js','Supabase','Vite','HTML','CSS','JavaScript','responsive design'],
            status: 'code',
            now: 'Use computer science fundamentals course from Epicodus to work on katadsa redesign and development (2nd iteration)'
        },
        'power-planter': {
            type: 'proj',
            source: 'epicodus',
            description: 'Based on exercise, numbers game built using functional programming principles',
            year: 2023,
            view: '',
            inspect: 'https://github.com/SmKou/power-planter/tree/main',
            keywords: ['HTML','CSS','JavaScript','functional programming','responsive design','game'],
            status: 'code',
            now: 'Using project to learn functional programming more in-depth, requires more reading and practice'
        },
        'red-riding-hood': {
            type: 'proj',
            source: 'sjtu',
            description: "Game adaptation of Red Riding Hood with aesthetics inspired by Molly Bang's Picture This, experimental for using multiple formats",
            year: 2023,
            view: '',
            inspect: 'https://github.com/SmKou/red-riding-hood',
            keywords: ['HTML','CSS','JS','Canvas','responsive design','game'],
            now: 'Using project to practicing how to adapt game story for different game formats, custom interfaces'
        }
    },
    experience: {
        type: 'dir',
        'frontend-intern': {
            type: 'exp',
            employer: 'SignedPic',
            location: 'Seattle, WA, USA',
            start: 2023-11,
            end: 2024-1,
            skills: ['React','verbal communication','git','problem-solving','listening','adaptability','creativity']
        },
        'store-clerk': {
            type: 'exp',
            employer: 'Paper Hammer',
            location: 'Seattle, WA, USA',
            start: 2021-8,
            end: 2023-4,
            skills: ['empathy','verbal communication','listening','attention to detail']
        },
        'head-student-editor': {
            type: 'exp',
            exployer: 'SJTU School of Design',
            location: 'Shanghai, Shanghai, CN',
            start: 2018-3,
            end: 2019-8,
            skills: ['listening','creativity','leadership','attention to detail','written communication','verbal communication','problem-solving','documentation','analytical reasoning']
        },
        'teacher-assistant': {
            type: 'exp',
            employer: 'SJTU School of Design',
            location: 'Shanghai, Shanghai, CN',
            start: 2018-9,
            end: 2019-12,
            skills: ['written communication','creativity','verbal communication','adaptability','adaptability','management','problem-solving','java']
        },
        'english-teacher': {
            type: 'exp',
            employer: [
                'EasyFun',
                'Hampson',
                'Side-by-Side English'
            ],
            location: 'Guangzhou, Guangdong, CN',
            start: 2015-8,
            end: 2016-11,
            skills: ['verbal communication','written communication','documentatation','time management','management','adaptability','creativity','analytical reasoning','critical thinking','problem-solving','teaching','training']
        }
    },
    education: {
        type: 'dir',
        'pre-engineering': {
            type: 'edu',
            degree: 'Associate of Science',
            major: 'Pre-engineering',
            institution: 'Edmonds Community College',
            location: 'Edmonds, WA, USA',
            graduation: 2011-6
        },
        'informatics': {
            type: 'edu',
            degree: 'Bachelor of Science',
            major: 'Informatics',
            track: 'user experience design',
            institution: 'University of Washington',
            school: 'Information School',
            location: 'Seattle, WA, USA',
            graduation: 2014-6
        },
        'design': {
            type: 'edu',
            degree: 'Master of Arts',
            major: 'Design',
            track: 'interaction design',
            institution: 'Shanghai Jiaotong University',
            school: 'Design School',
            location: 'Shanghai, Shanghai, CN',
            graduation: 2020-3
        },
        'web-dev': {
            type: 'edu',
            degree: 'Certificate',
            major: 'Web development',
            track: 'C#/.Net and React',
            location: 'Portland, OR, USA (remote)',
            graduation: 2023-12
        }
    },
    sources: {
        type: 'src',
        'odin': {
            title: 'The Odin Project',
            href: 'https://www.theodinproject.com'
        },
        'fcc': {
            title: 'freeCodeCamp',
            href: 'https://www.freecodecamp.org/'
        },
        'ztm': {
            title: 'Zero to Mastery',
            href: 'https://zerotomastery.io'
        },
        'epicodus': {
            title: 'Epicodus',
            href: 'https://www.epicodus.com'
        },
        'uw': {
            title: 'University of Washington iSchool',
            href: 'https://ischool.uw.edu/'
        },
        'sjtu': {
            title: 'Shanghai Jiaotong University School of Design',
            href: 'https://designschool.sjtu.edu.cn/en-us',
            backup: 'https://www.linkedin.com/school/shanghai-jiao-tong-university/'
        },
        'personal': {
            title: 'Sm Kou',
            href: 'https://smkou.hashnode.dev'
        }
    },
    questions: {
        type: 'qna',
        'q1': {
            type: 'q',
            q: 'Why are levels and difficulty not indicated?',
            a: [
                'I always have the urge to label projects and prototypes by a level and difficulty, but a personal project can never match the requirements of an enterprise project in part because an individual, single team or small business could not afford the services and hardware needed for fulfilling the requirements. There is also no need to complicate smaller or simpler projects, yet this seems to be customary due to a notion of how things should be done or what is easier.', 
                'Often, what is considered easier is actually abstracted, it is not structurally nor conceptually easier, and should custom modifications be desired or particular issues occur, increasing degrees of abstraction means more points of potential error. Even if the proportion remains relatively the same as levels of abstraction are added, the number still grows as each level of abstraction adds more points to consider and keep track of. Not to mention with adoption of the abstraction being the entry point for many web developers, this usually means to them that the simplest or easiest is the same point as where they started.',
                'But what matters to a business, first and foremost, is time of delivery and for that, a developer using what they are familiar with is going to be the best. As in most things, we do not go by what is actually best or the most of a factor like effectiveness, efficiency, sustainable or so, business and economics are measured by time, money and resources, availability, demand and window of opportunity. When it comes to development, the pitfall of the developer mentality is innovation, modern approaches and security, and growth. However, just as the factors of business are not relevant with the efficacy of a system, the drive and comfort of developers is not relevant with the structural complexity and integrity of the system they are responsible for.',
                'I can rant on and on, but this is a broad-sweeping oversimplification of the situation, which is ironic, and rather than professional experience, my notions are based on observation and assessment of the psychology of individuals and groups I have seen, heard, interacted with and read about. And because my notions are derived from the observable psychology, as with any simplification to the point of reductionism, everything is in part an exception, given circumstances, perspective and perception. So back to point: to account for levels of abstraction implemented in the tools and frameworks used in web development, labeling something as beginner requires a spectrum of assessment based on as many factors as technologies involved and the levels of abstraction inherently included.'
            ]
        },
        'q2': {
            type: 'q',
            q: 'What does each status mean?',
            a: [
                'For every project, whether in a team or on my own, and whether the project is a feature, app or api, there are four tasks to do before I will label it as complete: code, test, review, and deploy.',
                'Code refers to programming and implementation of specs or fulfillment of tasks. This often includes unit testing and ui testing (LT Browser). If there are explicit tasks to run tests, such as for integration or user testing, then test is separate from code. ',
                'I frequently revisit old projects and update them, and so I tend to keep notes on them. To see these details on their current status, specify <now> after the <descript> command. Even if a project is labeled as complete, it may be ongoing or due for a revision.'
            ]
        },
        'q3': {
            type: 'q',
            q: 'Why is the year of some projects -1?',
            a: [
                'Rather than list a future year as I do not know when I will get to work on a project, I list the year as -1. However, you may notice the status and the year do not match on some projects, particularly my old ones coming from academics. If I have not worked on a project before, meaning I did not at least reach the task of review on it, then I do not consider it as having worked on it at all yet, no matter that I have designs and nodes. But if I did work on it, the project will have the last year it was updated or worked on.'
            ]
        }
    }
}