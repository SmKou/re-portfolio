export const flatten = (arr, flat = []) => {
	if (!arr.length)
		return flat
	arr.forEach(e => {
		if (Array.isArray(e))
			flat.concat(flatten(e, flat))
		else
			flat.push(e)
	})
	return flat
}

export const includes = (arr, ...terms) => {
	terms = flatten(terms)
	let included = false, idx = -1
	while (++idx < terms.length && !included)
		if (arr.includes(terms[idx]))
			included = true
	return included
}

export const filter = (arr, terms) => {
	const included = [], not_included = []
	terms.forEach(term => {
		if (!arr.includes(term))
			not_included.push(term)
		else
			included.push(term)
	})
	return { included, not_included }
}

export const filter_ipt = (args) => {
	const flags = [], values = []
	while (args.length) {
		const arg = args.pop()
		if (arg.includes('-'))
			flags.push(arg)
		else
			values.push(arg.toLowerCase())
	}
	return { flags, values }
}
