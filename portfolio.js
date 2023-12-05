const portfolio = {
    type: 'dir',
    versions: versions,
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
            now: 'Requires redesign and reassessment of core idea for implementation'
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
            q: 'What does each status mean?',
            a: [
                'For every project, whether in a team or on my own, and whether the project is a feature, app or api, there are four tasks to do before I will label it as complete: code, test, review, and deploy.',
                'Code refers to programming and implementation of specs or fulfillment of tasks. This often includes unit testing and ui testing (LT Browser). If there are explicit tasks to run tests, such as for integration or user testing, then test is separate from code. Review usually pertains to a code review, refactoring and rewrites. After the review, which on a team project would result in a merged pull request, the last step is deployment. Once deployed, a project is considered complete.',
                'I frequently revisit old projects and update them, and so I tend to keep notes on them. To see these details on their current status, specify <now> after the <descript> command. Even if a project is labeled as complete, it may be ongoing or due for a revision.'
            ]
        },
        'q2': {
            type: 'q',
            q: 'Why is the year of some projects -1?',
            a: [
                'Rather than list a future year as I do not know when I will get to work on a project, I list the year as -1. However, you may notice the status and the year do not match on some projects, particularly my old ones coming from academics. If I have not worked on a project before, meaning I did not at least reach the task of testing on it, then I do not consider it as having worked on it at all yet, no matter that I have designs and nodes. But if I did work on it, the project will have the last year it was updated or worked on.'
            ]
        }
    }
}