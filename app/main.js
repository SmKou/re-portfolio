const manual = {
	// name: <key> - <whatis>
	cd: {
		synopsis: [
			'cd PATH',
			'cd DIRECTORY',
			'cd DIRECTORY PATH'
		],
		description: `The cd utility changes the working directory of the current execution environment. For re-portfolio, the execution environment means this present webpage, not an actual terminal or shell. This utility can also be used to change the root directory.

		To view the current directory, refer to: ls

		Root: portfolio
		Requires DIRECTORY to change root.

		--help
			display command information`,
		options: ['--help'],
		help: 'cd: cd <directory> [path]',
		whatis: 'change the working directory'
	},
	clear: {
		synopsis: ['clear'],
		description: `The clear utility clears the terminal's view and its scrollback buffer, if any. The scrollback buffer consists of the current session's history of input and output. For re-portfolio, clear can be extended to include the history of past commands for the session and for the webpage, if any.

		-a, --all
			clear terminal view, scrollback buffer, and commands history

		-h, --history
			include history of session and webpage, if applicable

		-x	prevent clear from attempting to clear the scrollback buffer

		--help
			display command information`,
		options: [
			'-h', '--history',
			'-a', '--all',
			'-x',
			'--help'
		],
		help: 'clear: clear',
		whatis: 'clear the terminal view'
	},
	cmd: {
		synopsis: [
			'cmd',
			'cmd COMMAND'
		],
		description: `The cmd utility toggles the sidebar, where a user can see a list of available commands. On load, the page always renders with the sidebar open. This sidebar can be used for opening commands' manual pages.

		-c, --close
			close sidebar if open

		-mc, --manual-close
			show manual page of command and close sidebar

		-mo, --manual-open
			show manual page of command and open sidebar

		-o, --open
			open sidebar if closed

		--help
			display command information`,
		options: [
			'-o', '--open',
			'-mo', '--manual-open',
			'-c', '--close',
			'-mc', '--manual-close',
			'--help'
		],
		help: 'cmd: cmd',
		whatis: 'toggle the commands sidebar'
	},
	curl: {},	// requests & responses
	echo: {
		synopsis: [
			'echo FILENAME',
			'echo PATH FILENAME'
		],
		description: ``,
		options: [],
		help: 'echo: echo <path> <filename>',
		whatis: 'display a line of text'
	},
	find: {},
	help: {},
	hostname: {},
	less: {},
	ls: {
		synopsis: [
			'ls',
			'ls PATH',
			'ls DIRECTORY',
			'ls DIRECTORY PATH'
		],
		description: `The ls utility lists infomation about files. If no directory or path is specified, this utility will use the current directory by default. Sort entries alphabetically if none specified.

		Root: portfolio
		Requires DIRECTORY to change root.

		-C	list entries by columns

		-d, --directories-only
			show only contained directories

		-dir
			uses the format of the dir utility, also known as -C option

		-f, --files-only
			show only contained files

		-P include subdirectories and files expressed as paths

		-r, --root-directories
			list root directories

		--help
			display command information`,
		options: [
			'-C',
			'-d', '--directories-only',
			'-dir',
			'-f', '--files-only',
			'-P',
			'-r', '--root-directories',
			'--help'
		],
		help: 'ls: ls <dir> <path>',
		whatis: 'list directory contents'
	},
	lynx: {},	// browser navigation
	man: {},
	more: {},	// CHECK
	msg: {},
	pwd: {},
	stat: {},
	tree: {},
	whatcanido: {},
	whatis: {},
	wget: {},	// download files
	whoami: {}
}

// man:name = <command> - <whatis>
