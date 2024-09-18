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
