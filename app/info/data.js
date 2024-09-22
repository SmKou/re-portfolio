const edu = {
	"web-dev": {
		title: "Web Development Certificate",
		keywords: ['react', 'jest', 'babel', 'eslint', 'html', 'css', 'javascript / js', 'c#', '.net 6', '.net 7', 'api', 'node.js', 'test-driven development / tdd', 'red-green workflow', 'pair programming', 'code reviews', 'scrum', 'dev teams', 'mysql', 'sql', 'authentication', 'authorization', 'jwt', 'frontend', 'json', 'processing', 'remote'],
		start: "2023-5",
		end: "2023-12",
		ref: ["epi"],
		location: "Portland, OR, USA (remote)"
	},
	"design": {
		title: "MA Design (HCI Design)",
		keywords: ['java', 'processing', 'adobe illustrator', 'user research', 'user interviews', 'quantitative analysis', 'qualitative analysis', 'low-fidelity prototypes', 'high-fidelity prototypes', 'eye-trackers', 'field research', 'service design', 'design thinking', 'interaction design', 'chinese'],
		start: "2017-9",
		end: "2020-3",
		ref: ["sjtu", "sod"],
		location: "Shanghai, Shanghai, CN"
	},
	"informatics": {
		title: "BS Informatics",
		keywords: ['java', 'mobile apps', 'web apps', 'responsive design', 'web design and development', 'database modeling', 'database design', 'sql', 'mysql', 'android', 'axure rp', 'adobe illustrator', 'visual design', 'user experience design', 'service design', 'design thinking', 'computer science', 'software entrepreneurship'],
		start: "2011-9",
		end: "2014-6",
		ref: ["uw", "ischool"],
		location: "Seattle, WA, USA"
	},
	"pre-engr": {
		title: "AS Pre-engineering",
		keywords: ['physics', 'calculus', 'macro economics', 'visual basic / vb', 'java', 'desktop', 'software development'],
		start: "2009-9",
		end: "2011-6",
		ref: ["edcc"],
		location: "Edmonds, WA, USA"
	}
}

const exp = {
	"frontend-intern": {
		title: "Frontend Intern",
		keywords: ['react', 'verbal communication', 'git', 'problem-solving', 'interface design', 'listening', 'adaptability', 'standup', 'creativity', 'react', 'd3', 'remote'],
		start: "2023-11",
		end: "2023-12",
		ref: ["signed"],
		location: "Seattle, WA, USA",
		type: ['full-time', 'remote', 'internship'],
		responsibility: [
			"Implement tree visualization for dashboard (D3)",
			"Implement firm account's user management: UI functionality"
		]
	},
	"store-clerk": {
		title: "Store Clerk",
		keywords: ["empathy", "verbal communication", "listening", "attention to detail", "organization", "customer service", "cashier"],
		start: "2021-8",
		end: "2023-4",
		ref: ["ph"],
		location: "Seattle, WA, USA",
		responsibility: [
			"Address customer questions, concerns and inquiries",
			"Promote online store, services, Tieton publishing and tourism",
			"Organize displays and inventory",
			"Issue orders, gift cards and refunds",
			"Audit"
		]
	},
	"head-student-editor": {
		title: "Head Student Editor",
		keywords: ['listening', 'creativity', 'leadership', 'time management', 'attention to detail', 'written communication', 'verbal communication', 'problem-solving', 'documentation', 'analytical reasoning', 'planning meetings', 'design expertise'],
		start: "2018-3",
		end: "2019-8",
		ref: ["sjtu", "sod"],
		location: "Shanghai, Shanghai, CN",
		responsibility: [
			"Conduct weekly meetings with team and author",
			"Manage translation and editing schedule",
			"Collect, synthesize, and manage student feedback, drafts, edits and revisions, notes, and confirmations from professor throughout each week",
			"Proofread and edit chapter drafts each week",
			"Review sources and credits for oiginal content",
			"Review and revise translations"
		]
	},
	"teacher-assistant": {
		title: "Teacher Assistant",
		keywords: ['written communication', 'creativity', 'verbal communication', 'adaptability', 'time management', 'problem-solving', 'java', 'processing', 'service design', 'interaction design', 'course planning', 'tutorials', 'presentations'],
		start: "2018-3",
		end: "2019-6",
		ref: ["sjtu", "sod"],
		location: "Shanghai, Shanghai, CN",
		responsibility: [
			"Develop and distribute course plans and curriculum",
			"Create and present class presentations and tutorials",
			"Develop grading rubric for assignments and projects",
			"Develop sample projects",
			"Supervise class time, schedule and activities",
			"Collect, grade and review assignments and projects",
			"Clarify differences between Chinese and Western design methodologies",
			"Tutor students during office hours",
			"Clarify differences between Interaction design and User Experience design methodologies",
			"Synthesize materials and source books for exercises and class activities"
		]
	},
	"head-english-teacher": {
		title: "(Head) Foreign English Teacher",
		keywords: ['verbal communication', 'written communication', 'documentation', 'time management', 'learning center management', 'adaptability', 'creativity', 'analytical reasoning', 'critical thinking', 'problem-solving', 'teaching', 'training', 'business counseling', 'feedback', 'hiring decisions', 'performance reviews'],
		start: "2015-8",
		end: "2016-11",
		location: "Guangzhou, Guangdong, CN",
		ref: ["Easyfun", "Hampson", "Side-by-Side English"],
		responsibility: [
			"Develop curriculums, course plans, and class plans in 3-7 days upon request",
			"Read and review 3 textbook series per week, and prepare course plans based on each series",
			"Assess student and teacher performance",
			"Test incoming students and suggest teachers based on compatibility, needs and availability",
			"Client consultations",
			"Train (informal) and manage service reps",
			"Teach 400 students per week, ages 4-45",
			"Same-day substitution",
			"Teach and manage winter and summer camps",
			"Private tutoring",
			"Demo classes with potential students"
		]
	}
}

const messages = {
	cnet: [
		"Status: deprecated",
		"All C#/.Net projects are not likely to be completed, or deployed."
	],
	basic: [
		"Status: complete",
		"Basic projects do not require maintenance, such as changes or updates."
	],
	demo: [ "Included for demonstration purposes." ],
	redesign: [ "To be redesigned and developed." ]
}

const projects = {
	"husky": {
		title: "Husky Goals App",
		keywords: ['axure rp','html','css','javascript / js', 'paper prototypes', 'wireframes', 'mockups', 'user research', 'user testing', 'user interviews', 'user stories', 'personas', 'design process', 'agile methods'],
		year: ['2012', '2015', '2019', '2021'],
		ref: ["ischool"],
		messages: [basic, redesign],
		comment: [
			"Course: Design Thinking",
			"Final submission: Axure RP prototype, Design spec"
		]
	},
	"carmax": {
		title: "Carmax App Design",
		keywords: ['axure rp', 'wireframes', 'mockups', 'preesntation', 'teamwork', 'user research', 'business analysis'],
		year: "2013",
		ref: ["ischool", { carmax: "https://www.carmax.com" }],
		comment: [
			"Course: Service Design",
			"Final submission: Axure RP prototype, Design spec, Presentation"
		],
		reflect: [
			"If I were to redesign this app, Carmax has since changed their website and provides a mobile app. Being the objective is a service-oriented design, rather than go on hunches and a few impressions, I would need a sense of Carmax's placement in the present market. The data I would like to collect would consist of market research and analysis, scraping carmax reviews and related service-oriented forums, surveys for car buyers (past, present, considering and future), field research of employees and customers, an understanding of business practices, flexibility, and liabilities. I want this much data to identify degrees of resistance and inefficiency throughout the services Carmax offers, and from there, determine what to focus on and what changes at what degree to make per area of focus. Of course, to do it well, services and their features should be addressed one-by-one. If I have the resources, then I would allocate projects based on priority and expertise."
		]
	},
	"booksie": {
		title: "Booksie Database Model and Management",
		keywords: ['sql', 'database models', 'mysql', 'flow diagrams', 'relational databases', 'acid principles'],
		year: "2013",
		ref: ["ischool", { booksie: "https://www.booksie.com" }],
		comment: [
			"Course: Database Models and Design [2-part course]",
			"Final submission: Database model, Seeded database",
			"Another project, creative writing platform, can serve as a backend if I were to redesign the booksie website and database, so this project is complete. Refer ULore."
		]
	},
	"ijuum": {
		title: "Ijuum",
		keywords: ['html', 'css', 'javascript / js', 'cli', 'desktop', 'writing', 'fiction', 'text adventrue', 'hypertext fiction', 'interface design', 'world-building', 'conlang', 'data mockups', 'js prototype'],
		year: ["2013", "continuous"],
		ref: ["smjoker", "smkou"],
		inspect: [
			"https://github.com/SmKou/ijuum"
		],
		comment: [
			"Alternative title: Art and Execution",
			"Type: Novel / Text adventure",
			"Final product: smjoker.com/art-and-execution"
		],
		reflect: [
			"The content for this project has been developed, written and drawn since 2013. This project is like a hypertext novel, except that the player can switch between timelines of the characters, as well as use text commands to search and navigate the story. If a reader-player learns the language within the story's world, they can access more context and graphical content. So far, these interactions are speculative, not yet prototyped. There will likely be four interfaces to this project: language simulator, timeline writer, reader-player terminal, extra views organizer."
		]
	},
	"leto": {
		title: "The Leto Project",
		keywords: ['axure rp', 'adobe illustrator', 'adobe ux', 'java', 'android', 'augmented reality / ar', 'wireframes', 'mockups', 'high-fidelity prototype', 'low-fidelity prototype', 'domain research', 'teamwork', 'design', 'design process', 'presentation'],
		year: "2014",
		ref: ["ischool"],
		comment: [
			"Capstone project",
			"Type: Proof of concept",
			"Final submission: Android prototype, Mock virtual badges, Team recruitment and Project pages"
		],
		reflect: [
			"The idea for this project definitely needed more rigid scope management. We were not able to focus or decide upon any one feature, or service, meaning we ended up clashing between design and development a lot. In academics and volunteer work, I often try to abstain from assuming leadership, but more often than not, this has meant poor quality, confusion, lack of clarification and common understanding, less working documentation and little to no appropriate (flexible) scheduling for the team.",
			"While I don't know the tools or templates people use for management, I know how to see, listen and organize people. Initially, I will plan according to the project, its requirements and objectives, but I work with my team and each member to improve the plan to work for them, so they can perform well and our milestones can be met. I clarify every step for myself and my teammates as needed and when needed. Since my time in informatics, I've understood that it really is about keeping it simple. The idea can be complicated, but the approach, schedule and teamwork should be simple and straightforward. So if there was one thing I would have changed, it's not the project idea; I would change the plan and enforce some management."
		]
	},
	"ks-health": {
		title: "KS Healthcare",
		keywords: ['mobile app', 'adobe illustrator', 'adobe ux', 'paper prototypes', 'mockups', 'wireframes', 'user interviews', 'field study', 'personas', 'user stories'],
		year: "2018",
		ref: ["sjtu", "sod"],
		comment: [
			"Course: Design Thinking and Process",
			"Final submission: Design spec, Research report, Presentation"
		]
	},
	"little-red": {
		title: "Little Red",
		keywords: ['java', 'processing', 'html', 'css', 'javascript / js', 'canvas'],
		year: ["2018", "2021", "2024"],
		ref: [
			"sod",
			{ book: "https://www.amazon.com/Picture-This-How-Pictures-Work/dp/1452151997" },
			{ author: "https://www.mollybang.com/Pages/picture.html" }
		],
		inspect: {
			js: "https://github.com/SmKou/red-riding-hood"
		}
	}
}

export const display = (type, container = document.createDocumentFragment()) => {
	switch (type) {
		case "edu":
			for (const inst of Object.keys(edu)) {
				const title = document.createElement("h2")
				title.appendChild(document.createTextNode(edu[inst].title))
				container.appendChild(title)
			}
			return { status: true, content: container }
		case "exp":
			return { status: true, content: container }
		case "pro":
			return { status: true, content: container }
		case "man":
			return { status: true, content: container }
		case "src":
			return { status: true, content: container }
		default:
			return { status: false, msg: `Cannot refer ${type}` }
	}
}

export default {
	edu,
	exp,
	pro,
	man,
	src
}
