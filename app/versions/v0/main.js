const carousel = {
	min: 1,
	max: 28,
	curr: 1,
	dur: 1000,
	interval_id: "",
	hover: false,
	view: document.querySelector(".profile-img img"),
	url: (n) => {
		if (Number(n) < 10)
			n = "0" + n
		return `img/${n}-min.png`
	}
}

const launch_carousel = () => {
	const generate = () => {
		const r = Math.floor(Math.random() * (carousel.max - carousel.min) + carousel.min)
		if (r === carousel.curr)
			return generate()
		carousel.curr = r
		return carousel.curr
	}

	carousel.interval_id = setInterval(() => {
		if (carousel.hover) {
			clearInterval(carousel.interval_id)
			return;
		}
		carousel.view.src = carousel.url(generate())
	}, carousel.dur)
}

const advance_carousel = () => {
	carousel.curr++
	if (carousel.curr > carousel.max)
		carousel.curr = 1
	carousel.view.src = carousel.url(carousel.curr)
}


carousel.view.addEventListener("pointerover", () => carousel.hover = true)
carousel.view.addEventListener("pointerleave", () => {
	carousel.hover = false
	launch_carousel()
})



window.onload = setTimer(launch_carousel, carousel.dur)

const status = {
	goal: "Complete re-portfolio by Sep. 17",
	project: "re-portfolio",
	challenge: "",
	occupation: "",
	volunteer: ["SeattleJS", "Seattle Indies"],
	hobby: ["writing", "chinese study"]
} /* ------------------------------------------------------- STATUS */

const create_status = (name, txt) => {
	const container = document.createElement("div")
	container.class = "status"
	const label = document.createElement("span")
	label.append(document.createTextNode(name))
	container.append(label)
	const feature = document.createElement("span")
	feature.append(document.createTextNode(txt))
	container.append(feature)
	return container
}

const insert_status = () => {
	const headings = document.querySelectorAll(".details-heading.status")
	headings.forEach(heading => {
		const info = heading
			.classList[0]
			.split("-")
		for (const name of info) {
			const item = create_status(
				item,
				status[name]
			)
			heading.after(item)
		}
	})
}
insert_status()

const recents = [
	[]
] /* ------------------------------------------------------ RECENTS */

const create_recent = (txt, link) => {
	const container = document.createElement("div")
	container.class = "recents"
	const feature = document.createElement("span")
	feature.append(document.createTextNode(txt))
	container.append(feature)
	const go_to = document.createElement("span")
	const url = document.createElement("a")
	url.href = link
	url.target = "_blank"
	url.append(document.createTextNode("Go"))
	go_to.append(url)
	container.append(go_to)
	return container
}

const insert_recents = () => {
	const container = document.querySelector(".recents-bar .details-container")
	for (const [txt, link] of recents) {
		const item = create_recent(txt, link)
		container.append(item)
	}
}
insert_recents()
