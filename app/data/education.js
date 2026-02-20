const education = {
	'web-dev': {
		title: 'Web Development Certificate',
		description: 'Development in html, css, javscript, Node.js, C# and .Net, and React',
		keywords: [
			'api',
			'authentication',
			'authorization',
			'babel',
			'c#',
			'code review',
			'cli applications',
			'css',
			'dev teams',
			'frontend',
			'html',
			'Identity framework',
			'jest',
			'json',
			'jwt',
			'mysql',
			'.net 6',
			'.net 7',
			'node.js',
			'pair programming',
			'react',
			'red-green workflow',
			'scrum',
			'sql',
			'tdd',
			'web applications'
		],
		year: 2023,
		grad: '2023-12',
		ref: 'epi',
		location: 'Portland, OR, USA (remote)'
	},
	'design': {
		title: 'M.A. Design',
		description: 'Design research, practices, processes and fields',
		keywords: [
			'adobe illustrator',
			'chinese',
			'design thinking',
			'eye-trackers',
			'field research',
			'google suite',
			'high-fidelity prototypes',
			'interaction design',
			'java',
			'java/processing',
			'low-fidelity prototypes',
			'prototyping',
			'qualitative analysis',
			'quantitative analysis',
			'service design',
			'user interviews',
			'user research'
		],
		year: 2020,
		grad: '2020-3',
		ref: 'sjtu',
		location: 'Shanghai, Shanghai, CN'
	},
	'informatics': {
		title: 'B.S. Informatics',
		description: `Information technology, applications, and principles`,
		keywords: [
			'adaptive design',
			'adobe illustrator',
			'adobe suite',
			'adobe xp',
			'agile management',
			'agile practices',
			'android',
			'axure rp',
			'computer science',
			'database design',
			'database modeling',
			'design thinking',
			'google suite',
			'java',
			'microsoft suite',
			'mobile apps',
			'mysql',
			'sql',
			'responsive design',
			'scrum',
			'service design',
			'software entrepreneurship',
			'software project management',
			'user experience design',
			'visual design',
			'web apps',
			'web design and development'
		],
		year: 2014,
		grad: '2014-6',
		ref: 'uw',
		location: 'Seattle, WA, USA'
	},
	'pre-engineering': {
		title: 'A.S. Pre-Engineering',
		description: `Introduction to engineering sciences with a focus on computer science`,
		keywords: [
			'desktop applications',
			'forms',
			'java',
			'mvc',
			'software development',
			'visual basic',
		],
		year: 2011,
		grad: '2011-6',
		ref: 'edcc',
		location: 'Edmonds, WA, USA'
	}
}

const keys = Object.keys(education)

const add_edu_row = ({ title, description, year, location }) => `<tr>
	<th>${title}</th>
	<td>
		<span>${description}</span>
		<span>Grad. ${year}</span>
		<span>${location}</span>
	</td>
</tr>`

const get_edu = (key_or_title) => education[key_or_title]
	|| keys.find(key => education[key].title == key_or_title)

export default {
	source: (key_or_title) => get_edu(key_or_title).ref,
	details: (key_or_title) => {
		const table = document.createElement("table")
		const row = !key_or_title
			? keys.map(key => add_edu_row(education[key])).join("")
			: add_edu_row(get_edu(key_or_title))
		table.innerHTML = row
		return table
	}
}
