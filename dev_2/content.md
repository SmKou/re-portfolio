# Home: Terminal

Portfolio navigation

Includes education, experience, projects, and resumes

## Manual

[x] cd

    page

        name: cd - change directory

        synopsis: cd PATH, cd DIRECTORY, cd DIRECTORY PATH

        description: Change working path.

            Root: portfolio

            Requires DIRECTORY to change root

            --help

                display command information

    options: --help

    help: cd: cd [path]

    whatis: Change working path.

[]  cls

    Clear interface: terminal + aside
    
    May also be used to toggle view of the aside.

    -o, --open: show command list only

    -c, --close: hide command list only

    --help

[x] clear

    Clear the terminal

    --help

[]  dir

    dir, dir DIRECTORY

    Show contained subdirectories and files.

    Root: portfolio

    Requires DIRECTORY to change root.

    -f, --files-only: show only contained files

    --help

[]  echo

    echo FILENAME, echo PATH FILENAME

    Show file messages (status, comment, developer remarks)

    Default: show only status

    -a, --all: show all message provided in file

    -c, --comment-only: show only comments

    -d, --dev-only: show only dev remarks

    --help

[]  find

    find ["string"], find ["string"] DIRECTORY

    Search a directory for a string appearing in file properties and data.
    
    Search does not consist of equivalence:
    
    If the string consists of spaces, it will be split into individual terms and file properties and data will be tested against each individual term. 

    Root: portfolio
    
    DIRECTORY = root | subdirectory
                
    -p, --property-only: search only file properties

    -v, --value-only: search only file data
    
    --help

[]  help

    help, help COMMAND

    Display command information.
    
    No command: view list of available commands.

    -o, --open-aside: show aside with commands list

    --help

    The help flag can be used on any command, but will ignore all other input when used. Even if the other input is valid, --help takes precedence after error checking.

[]  hostname

    Display name of host.

    --help

[]  ls

    ls, ls PATH, ls DIRECTORY, ls DIRECTORY PATH

    List directories and files.
    
    Root: portfolio.
    
    Default path: current working path
    
    Requires DIRECTORY to change root.
    
    --help

[]  lynx

    lynx FILENAME, lynx PATH FILENAME, lynx FILENAME LINK_NAME, lynx PATH FILENAME LINK_NAME

    Follow file url
    
    Opens url to another host in another tab.
    
    Displays list of urls if file has more than one

    Note: Lynx is a fully-featured www client for the linux terminal
    
    -m, --main-only: list all recent urls associated with file

    -a, --all: list all urls associated with file, include backups and iterations
        
    --help

[]  man

    man COMMAND

    Show manual page for command.
    
    -n, --name-only: show only names from manual pages

    -s, --synopsis-only: show only synopsis from menaul pages

    -d, --description-only: show only description from manual pages
    
    --help

[]  more

    more, more FILE, more PATH FILE

    Show file data.
    
    -m, --messages-included: include file messages
    
    --help

[]  msg

    View contact to send a message to developer.
    
    Available preferences: linkedin, github.
    
    -l, --linkedin: show only linkedin contact

    -g, --github: show only github contact

    --help

[]  pwd

    Prints path of working directory.

    -r, --root: show root directory
    
    --help

[]  stat

    stat, stat FILE

    Show file properties.
    
    -d, --data-included: include file data

    -m, --messages-included: include file messages
    
    --help

[]  tree

    tree, tree DIRECTORY

    Prints structural representation.
    
    Root: portfolio
    
    Requires DIRECTORY to change root
    
    -f, --files-included: include files

    --help

[]  whatcanido

    Show terminal commands available for the current directory or file

	--help

[]  whatis

    whatis COMMAND, whatis WORD

    Show command action.
    
    May be used to lookup definitions of terms used in this manual.

    -m, --manual: show manual page

    -n, --name-only: show only names from manual page

    -s, --synopsis-only: show only synopsis from menaul page

    -d, --description-only: show only description from manual page

    -v, --vocab: show definition of term
    
    --help

[]  whoami

    Show the name of the developer.

    -a, --all: show all aliases
    
    --help

## Data

pages = { versions: { 
    title: The Old TV,
    description: Preview the available portfolios,
    href: versions/
}}

resources = { manual, sources }

media = {
    linkedin: {
        title: LinkedIn,
        href: https://www.linkedin.com/in/
    },
    github: {
        title: Github,
        href: https://github.com/
    }
}

portfolio = { versions, experience, education, projects }

directories = { portfolio, resources, pages }

```js
const ui = {
    dir: 'portfolio',
    path: [],
    host: `${/^localhost:\d+/.test(window.location.host) ? 'http://' : 'https://'}${window.location.host}`,
    cns: document.querySelector('article section'),
    ipt: document.querySelector('article input'),
    aside: {
        e: document.querySelector('aside'),
        state: true,
        tog: document.getElementById('toggle-aside'),
        ctt: document.getElementById('aside-content')
    }
}
const user_input = { vals: [], i: -1 }
```

**Data functions**
- get_dir: retrieve directory (use name)
- get_node: retrieve ref to node down dir-file tree
- html (create element)
- [unused] list
- element: create an element with attributes and content
- add_line: add text to terminal
- add_path: add active path to terminal / update

**Errors**
- custom: term: message
- command
- node: no such item or directory
- invalid_option: wrong use of command
- unknown_option: not a flag for command

**Helpers**
- init_no_input: command funcs not requiring any input
- init_no_flags [?]
- import filter
- import filter_ipt