import sources from "./sources"

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
        keywords: ['axure rp', 'html', 'css', 'javascript', 'paper prototypes', 'wireframes', 'mockups', 'user research', 'user testing', 'user interviews', 'user stories', 'personas'],
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
            programming_ideas: '',
            book: '',
            author: ''
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
    'first-page': {
        title: 'First Page',
        description: 'Scrolling single-page panels to demonstrate anchor links and form submission',
        keywords: ['html', 'css'],
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
        keywords: ['html', 'css'],
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
        keywords: ['html', 'css', 'javascript', 'vanilla js'],
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
        keywords: ['react', 'css'],
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
        keywords: ['react', 'api', 'express', 'node.js', 'knex.js', 'postgresql', 'sql', 'authentication', 'authorization', 'responsive design'],
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
        keywords: ['react', 'redux toolkit'],
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
        keywords: ['html', 'javascript', 'vanilla js', 'css'],
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
        keywords: ['html', 'javascript', 'vanilla js', 'css'],
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
        keywords: ['html', 'css', 'javascript', 'vanilla js'],
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
        keywords: ['node.js', 'babel', 'eslint', 'webpack', 'jest'],
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
        keywords: ['node.js', 'babel', 'eslint', 'webpack', 'jest'],
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
        keywords: ['node.js', 'babel', 'eslint', 'webpack', 'jest'],
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
        keywords: ['c#', 'cmd', '.net 6'],
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
        keywords: ['c#', 'cmd', '.net 6'],
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
        keywords: ['c#', '.net 6', 'entity framework core', 'mysql', 'mvc', 'sql'],
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
        keywords: ['c#', '.net 6', 'entity framework core', 'mysql', 'mvc', 'sql'],
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
        keywords: ['c#', '.net 6', 'entity framework core', 'mysql', 'mvc', 'sql'],
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

export default projects
