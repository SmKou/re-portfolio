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

function init() {
    const versions = [
        { title: 'The Profile', present: true, completed: false },
        { title: 'The Magazine', present: true, completed: false },
        { title: 'The Design Index', present: true, completed: false },
        { title: 'The Show', present: false, completed: false },
        { title: 'The People in Pages', present: true, completed: true },
        { title: 'Epicodus Resume', present: true, completed: true }
    ]

    const ui = {
        version: 0,
        controls: {
            prev: document.getElementById('prev'),
            next: document.getElementById('next'),
            link: document.getElementById('link'),
            home: document.getElementById('home')
        },
        frame: document.getElementById('version-view'),
        message: document.querySelector('.message')
    }

    const path = () => `v${ui.version}/`

    ui.frame.setAttribute('src', path())

    const toggle_view = present => {
        if (present)
            ui.message.classList.remove('view')
        else
            ui.message.classList.add('view')

        ui.frame.src = present ? path() : ''
    }

    ui.controls.prev.addEventListener('click', () => {
        ui.version--
        if (ui.version < 0) ui.version = versions.length - 1
        toggle_view(versions[ui.version].present)
    })

    ui.controls.next.addEventListener('click', () => {
        ui.version++
        if (ui.version > versions.length - 1) ui.version = 0
        toggle_view(versions[ui.version].present)
    })

    const get_host = () => {
        const host = window.location.host
        const http = host === 'localhost:5173' ? 'http://' : 'https://'
        return http + host + '/'
    }

    ui.controls.link.addEventListener('click', () => {
        const href = `${get_host()}versions/${path()}`
        window.location.href = href
    })

    ui.controls.home.addEventListener('click', () => {
        const href = get_host()
        window.location.href = href
    })
}

init()

export default versions
