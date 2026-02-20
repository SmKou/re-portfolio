import { create, text } from "./fn"

const sources = {
	edcc: {
		title: 'Edmonds College (formerly Edmonds Community College)',
		href: 'https://www.edmonds.edu',
		credits: [
			{
				name: "Running Start",
				credit: "Completed 110+ credits in two years and graduated with both High school diploma and Associate's degree in Pre-engineering"
			},
			{
				name: "IB (International Baccaleaurate)",
				credit: "Partial IB in Chinese and Math, Jr. year"
			}
		]
	},
	epi: {
		title: 'Epicodus',
		href: 'https://www.epicodus.com',
		ref: {
			calvin_will: 'https://www.linkedin.com/in/calvinwill/',
			jasmine_klein: 'https://www.linkedin.com/in/jasminemklein/'
		},
		courses: [
			'HTML & CSS',
			'JavaScript',
			'C# & .NET',
			'Intermediate JavaScript & React'
		],
		projects: [
			{
				title: "Programming Language Suggester",
				github: "",
				smkou: ""
			},
			{
				title: "Mr. Roboger Neightborhood"
			},
			{
				title: "Pizza Parlor"
			},
			{
				title: "Currency Exchanger"
			},
			{
				title: "Super Galactic Age calculator"
			},
			{
				title: "Dino Ipsum",
				status: false
			},
			{
				title: "Pierre Bakery"
			},
			{
				title: "Madlibs clone"
			},
			{
				title: "Hair Salon"
			},
			{
				title: "Vendor Order Tracker"
			},
			{
				title: "Sillystringz Factory"
			},
			{
				title: "Pierre's Sweet and Savory Treats"
			},
			{
				title: "Parks Lookup api"
			},
			{
				title: "Coffee Beans"
			},
			{
				title: "Global Address Formatter",
				type: ['team']
			},
			{
				title: "",
				former_title: ["(game)"],
				type: ['team']
			}
		]
	},
	ph: {
		title: 'Paper Hammer',
		href: 'https://www.paper-hammer.com',
		ref: {
			ed_marquand: 'https://www.linkedin.com/in/edmarquand/'
		}
	},
	signed: {
		title: 'SignedPic',
		href: 'https://signedpic.com',
		ref: {
			lee_grambush: 'https://www.linkedin.com/in/leegrambush/'
		},
		credits: [{
			name: "internship",
			credit: "Implemented d3 in react flow for firm accounts to manage attorneys and clients"
		}]
	},
	sjtu: {
		title: 'Shanghai Jiaotong University',
		href: 'https://en.sjtu.edu.cn',
		alt: ['https://www.linkedin.com/school/shanghai-jiao-tong-university/'],
		school: {
			title: 'School of Design',
			href: 'https://designschool.sjtu.edu.cn/en-us',
		},
		credit: [{
			name: "Design",
			credit: "Master's of Art in Design, specialized in Human-Computer Interaction (HCI) design",
		}],
		projects: [
			{
				title: "KS Healthcare"
			},
			{
				title: "Little Red"
			},
			{
				title: "Storytelling in Design"
			},
			{
				title: "Interaction Design course"
			},
			{
				title: "Service Design course"
			},
			{
				title: "Disney Imaginations Shanghai competition"
			},
			{
				title: "",
				former_title: ["Creative writing app"]
			}
		],
	},
	smkou: {
		title: 'Sm Kou',
		href: 'https://smkou.com',
		alt: ['https://smkou.hashnode.dev']
	},
	uw: {
		title: 'University of Washington',
		href: 'https://www.washington.edu',
		school: {
			title: 'iSchool (Information School)',
			href: 'https://ischool.uw.edu/'
		},
		ref: {
			mike_eisenberg: 'https://www.linkedin.com/in/mike-eisenberg-10b1957/'
		},
		credits: [
			{
				name: "Informatics",
				credit: "Bachelor's of Science in Informatics, specialized in User Experience design"
			}
		],
		projects: [
			{
				title: "Husky Goals"
			},
			{
				title: "Carmax"
			},
			{
				title: "Booksie"
			},
			{
				title: "Graphic design portfolio (Adobe)"
			},
			{
				title: "LETO project management"
			}
		]
	},
	ztm: {
		title: 'Zero to Mastery',
		href: 'https://zerotomastery.io',
		courses: [],
		projects: [
			{
				title: "First Page"
			},
			{
				title: "Live in the Wild"
			},
			{
				title: "Android Journeys"
			},
			{
				title: "RoboFriends"
			},
			{
				title: "",
				former_title: [
					"SimpleBrain",
					"Face Brain Recognition"
				]
			}
		]
	},
}

const add_url = (url, txt) => `<a href="${url}" target="_blank">${txt}</a>`

const add_alternatives = (alts) => ` (${alts.map((alt, idx) => add_url(alt, "alt-" + (idx + 1)).join(", ")})`

const add_source = (source) => {
	const { title, href } = source
	const source_url = add_url(href, title)
	const source_alts = Object.has(source, "alt")
		? add_alternatives(source.alt)
		: ""
	const school_url = Object.has(source, "school")
	? `<br>
		${add_url(source.school.href, source.school.title)}
		${Object.has(source.school, "alt")
			? add_alternatives(source.school.alt)
			: ""
		}`
		: ""
	return `<p>${source_url}${source_alts}${school_url}</p>`
}

export default {
	direct(key_or_title) {
		if (!key_or_title)
			return Object.keys(sources).map((key) => add_source(sources[key]))
		if (Object.has(sources, key_or_title))
			return add_source(sources[key_or_title])
		const source = Object.keys(sources).find((key) => sources[key].title == key_or_title)
		return add_source(source)
	}
}
