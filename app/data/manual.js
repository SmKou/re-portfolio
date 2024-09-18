const manual = {

}

export default manual

/*
 c onst* manual = {
 cal: {
 page: {
 name: 'cal - calendar',
 synopsis: [
 'cal',
 'cal DATE',
 'cal FREQUENCY',
 'cal DATE FREQUENCY'
 ],
 description: `Show calendar information.
 Default date: today
 Default frequency: all (daily, weekly, monthly)
 Specify a date and/or frequency for viewing events from calendar.

 --help
 display command information`
 },
 options: ['-g', '-e', '--help'],
 help: 'cal: cal <date> <frequency>',
 whatis: 'Show calendar information.'
 },
 cd: {
 page: {
 name: 'cd - change directory',
 synopsis: [
 'cd PATH',
 'cd DIRECTORY',
 'cd DIRECTORY PATH'
 ],
 description: `Change working path.
 Root: portfolio

 Requires DIRECTORY to change root.

 --help
 display command information`
 },
 options: ['--help'],
 help: 'cd: cd [path]',
 whatis: 'Change working path.'
 },
 cls: {
 page: {
 name: 'cls - clear screen',
 synopsis: [ 'cls' ],
 description: `Clear interface: terminal + aside
 Collapse aside, hiding command list and introduction.

 --help
 display command information`
 },
 options: ['--help'],
 help: 'cls: cls',
 whatis: 'Clear the interface.'
 },
 clear: {
 page: {
 name: 'clear',
 synopsis: [ 'clear' ],
 description: `Clear the terminal.

 --help
 display command information`
 },
 options: ['--help'],
 help: 'clear: clear',
 whatis: 'Clear the terminal.'
 },
 date: {
 page: {
 name: 'date',
 synopsis: [
 'date',
 'date FREQUENCY QUANTITY',
 'date DATE FREQUENCY QUANTITY',
 'date DATE'
 ],
 description: `Show date.
 Determine date in a given amount of time from a given date, or amount of time from today's date to a given date.
 Default date: today
 Default frequency: none (day | week | month | year)
 Default quantity: 0

 Dates can be written with forward slashes or hyphens. Shown in format: W M/dd/YY

 Avoid using leading zeroes in your entered dates, i.e. 12/03/15

 -s, --short
 display result in short form: W Mon. dd, year

 -l, --long
 display result in long form: Weekday Month dd, year

 -h, --hyphen
 display result with hyphens if the result has multiple parts
 cannot be used with change of format

 --help
 display command information`
 },
 options: ['-s', '--short', '-l', '--long', '-h', '--hyphen', '--help'],
 help: 'date: date <date> <freq qty>',
 whatis: 'Show date or time to date.'
 },
 dir: {
 page: {
 name: 'dir - directory',
 synopsis: [ 'dir', 'dir DIRECTORY' ],
 description: `Show contained subdirectories and files.
 Root: portfolio

 Requires DIRECTORY to change root.

 -f, --files-only
 show only contained files

 --help
 display command information`
 },
 options: ['-f', '--files-only', '--help'],
 help: 'dir: dir <directory>',
 whatis: 'Show contained directories and files.'
 },
 echo: {
 page: {
 name: 'echo',
 synopsis: [
 'echo FILENAME',
 'echo PATH FILENAME'
 ],
 description: `Show file messages (status, comment, developer remarks)
 Default: show only status

 -a, --all
 show all messages provided in file

 -c, --comment-only
 show only comments

 -d, --dev-only
 show only dev remarks

 --help
 display command information`
 },
 options: ['-a', '--all', '-c', '--comment-only', '-d', '--dev-only', '--help'],
 help: 'echo: echo <path> <filename>',
 whatis: 'Show file messages.'
 },
 find: {
 page: {
 name: 'find',
 synopsis: [
 'find ["string"]',
 'find ["string"] DIRECTORY'
 ],
 description: `Search a directory for a string appearing in file properties and data.
 Search does not consist of equivalence:
 If the string consists of spaces, it will be split into individual terms and file properties and data will be tested against each individual term.

 Root: portfolio
 DIRECTORY = root | subdirectory

 -p, --property-only
 search only file properties

 -v, --value-only
 search only file data

 --help
 display command information`
 },
 options: ['-p', '--property-only', '-v', '--value-only', '--help'],
 help: 'find: find ["string"] <directory>',
 whatis: 'Search files for property name or value.'
 },
 help: {
 page: {
 name: 'help',
 synopsis: [ 'help', 'help COMMAND' ],
 description: `Display command information.
 No command: view list of available commands.

 -o, --open-aside
 show aside with commands list

 --help
 display command information

 The help flag can be used on any command, but will ignore all other input when used. Even if the other input is valid, --help takes precedence after error checking.`
 },
 options: ['-o', '--open-aside', '--help'],
 help: 'help: help <command>',
 whatis: 'Display command information.'
 },
 hostname: {
 page: {
 name: 'hostname',
 synopsis: [ 'hostname' ],
 description: `Display name of host.

 --help
 display command information`
 },
 options: ['--help'],
 help: 'hostname: hostname',
 whatis: 'Display name of host.'
 },
 ls: {
 page: {
 name: 'ls - list',
 synopsis: [
 'ls',
 'ls PATH',
 'ls DIRECTORY',
 'ls DIRECTORY PATH'
 ],
 description: `List directories and files.
 Root: portfolio.
 Default path: current working path

 Requires DIRECTORY to change root.

 --help
 display command information`
 },
 options: ['--help'],
 help: 'ls: ls <dir> <path>',
 whatis: 'List directories and files.'
 },
 lynx: {
 page: {
 name: 'lynx',
 synopsis: [
 'lynx FILENAME',
 'lynx PATH FILENAME',
 'lynx FILENAME LINK_NAME',
 'lynx PATH FILENAME LINK_NAME'
 ],
 description: `Follow file url
 Opens url to another host in another tab.
 Displays list of urls if file has more than one

 Note: Lynx is a fully-featured www client for the linux terminal

 -m, --main-only
 list all recent urls associated with file

 -a, --all
 list all urls associated with file, include backups and iterations

 --help
 display command information`
 },
 options: ['-m', '--main-only', '-a', '--all', '--help'],
 help: 'lynx: lynx <path> <item_name> <link_name>',
 whatis: 'Open file url.'
 },
 man: {
 page: {
 name: 'man - manual',
 synopsis: [ 'man COMMAND' ],
 description: `Show manual page for command.

 -n, --name-only
 show only names from manual pages

 -s, --synopsis-only
 show only synopsis from menaul pages

 -d, --description-only
 show only description from manual pages

 --help
 display command information`
 },
 options: ['-n', '--name-only', '-s', '--synopsis-only', '-d', '--description-only', '--help'],
 help: 'man: man <command>',
 whatis: 'Show manual page for command.'
 },
 more: {
 page: {
 name: 'more',
 synopsis: [
 'more',
 'more FILE',
 'more PATH FILE'
 ],
 description: `Show file data.

 -m, --messages-included
 include file messages

 --help
 display command information`
 },
 options: ['-m', '--messages-included', '--help'],
 help: 'more: more <path> <filename>',
 whatis: 'Show file data.'
 },
 msg: {
 page: {
 name: 'msg - message',
 synopsis: [ 'msg' ],
 description: `View contact to send a message to developer.
 Available preferences: linkedin, github.

 -l, --linkedin
 show only linkedin contact

 -g, --github
 show only github contact

 --help
 display command information`
 },
 options: ['-l', '--linkedin', '-g', '--github', '--help'],
 help: 'msg: msg',
 whatis: 'View contact information.'
 },
 print: {
 page: {
 name: 'print',
 synopsis: [ 'print' ],
 description: `View a pdf resume.

 -a, --all
 show all experience

 -d, --download
 download the pdf resume

 --help
 display command information`
 },
 options: ['-d', '--download', '-a', '--all', '--help'],
 help: 'print: print',
 whatis: 'View a pdf resume.'
 },
 pwd: {
 page: {
 name: 'pwd - print working directory',
 synopsis: [ 'pwd' ],
 description: `Prints path of working directory.

 -r, --root
 show root directory

 --help
 display command information`
 },
 options: ['-r', '--root', '--help'],
 help: 'pwd: pwd',
 whatis: 'Print working directory.'
 },
 stat: {
 page: {
 name: 'stat',
 synopsis: [
 'stat',
 'stat FILE'
 ],
 description: `Show file properties.

 -d, --data-included
 include file data

 -m, --messages-included
 include file messages

 --help
 display command information`
 },
 options: ['-d', '--data-included', '-m', '--messages-included', '--help'],
 help: 'stat: stat <filename>',
 whatis: 'Show details of file.'
 },
 tree: {
 page: {
 name: 'tree',
 synopsis: [
 'tree',
 'tree DIRECTORY'
 ],
 description: `Prints structural representation.
 Root: portfolio

 Requires DIRECTORY to change root

 -f, --files-included
 include files

 --help
 display command information`
 },
 options: ['-f', '--files-included', '--help'],
 help: 'tree: tree <directory>',
 whatis: 'Show path structure.'
 },
 whatis: {
 page: {
 name: 'whatis - what is',
 synopsis: [ 'whatis COMMAND' ],
 description: `Show command action.

 -m, --manual
 show manual page

 -n, --name-only
 show only names from manual page

 -s, --synopsis-only
 show only synopsis from menaul page

 -d, --description-only
 show only description from manual page

 --help
 display command information`
 },
 options: ['-m', '--manual', '-n', '--name-only', '-s', '--synopsis-only', '-d', '--description-only', '--help'],
 help: 'whatis: whatis [command]',
 whatis: 'Show command action.'
 },
 whoami: {
 page: {
 name: 'whoami - who am i',
 synopsis: [ 'whoami' ],
 description: `Show the name of the developer.

 -a, --all
 show all aliases

 --help
 display command information`
 },
 options: ['-a', '--all', '--help'],
 help: 'whoami: whoami',
 whatis: 'Show developer name.'
 }
 }
*/
