import sources from "./sources"

const education = {
	'frontend': [
		{
			title: 'Beginner learning path',
			description: 'Introduction to web development, JavaScript, and modern CSS layout techniques to have the skills to be a professional web developer.',
			keywords: ['html', 'css', 'javascript', 'web accessibility', 'chrome dev tools', 'linux', 'command line', 'vscode'],
			year: '2025',
			ref: sources.fm,
			status: false,
			location: 'remote'
		},
		{
			title: 'Professional learning path',
			description: 'Deep dive into JavaScript, the most popular framework React, web performance, CSS, deploying websites, TypeScript, and functional JavaScript to become a professional web developer.',
			keywords: ['javascript', 'typescript', 'react', 'vite', 'eslint', 'prettier', 'tanstack', 'spa routing', 'core web vitals', 'largest contentful paint (LCP)', 'cumulative layout shift (CLS)', 'responsive design', 'server', 'unit testing', 'integration testing', 'functional programming', 'redux', 'javascript patterns', 'react patterns', 'subgrid', 'container queries', 'responsive image', 'tailwind', 'next.js', 'pwa', 'frontend design'],
			year: '2025',
			ref: sources.fm,
			status: false,
			location: 'remote'
		},
		{
			title: 'Expert learning path',
			description: 'Learn mind-expanding techniques and emerging APIs to solve even the most complex challenges top-level engineers face.',
			keywords: ['performance', 'web security', 'http protocols', 'javascript', 'es6+', 'unit testing', 'continuous integration', 'accessibility testing', 'mocking', 'coding standards reinforcement', 'code scalability', 'webpack', 'cdn', 'javascript optimization', 'data binding', 'ui composition', 'templating', 'virtual dom', 'reconciliation', 'hooks', 'system design', 'dom apis', 'virtualization', 'state management', 'functional programming', 'state machines', 'statecharts', 'git', 'branching', 'conflict resolution', 'real-time', 'vanilla programming', 'service workers', 'enterprise architecture patterns', 'monorepos'],
			year: '2025',
			ref: sources.fm,
			status: false,
			location: 'remote'
		}
	],
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

export default education
