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

export default sources