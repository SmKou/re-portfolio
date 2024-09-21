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

export const display = (type, ctn = document.createDocumentFragment()) => {
	switch (type) {
		case "edu":
			for (const inst of Object.keys(edu)) {

			}
			return { status: true, content: ctn }
		case "exp":
			return { status: true, content: ctn }
		case "pro":
			return { status: true, content: ctn }
		case "man":
			return { status: true, content: ctn }
		case "src":
			return { status: true, content: ctn }
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
