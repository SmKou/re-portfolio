const ui = {
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

const cmd = {
    cal: function(args) {
        if (args.length && args.includes('--help')) {

        }
    },
    cd: function(args) {},
    cls: function(args) {},
    clear: function(args) {},
    date: function(args) {},
    dir: function(args) {},
    echo: function(args) {},
    find: function(args) {},
    help: function(args) {},
    hostname: function(args) {},
    ls: function(args) {},
    lynx: function(args) {},
    man: function(args) {},
    more: function(args) {},
    msg: function(args) {},
    pwd: function(args) {},
    sort: function(args) {},
    stat: function(args) {},
    tree: function(args) {},
    whatis: function(args) {},
    whoami: function(args) {}
}