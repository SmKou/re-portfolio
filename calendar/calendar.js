/* Used by home/main.js: cal() */
function cal() {
    return {
        daily: {
            routine: { morning: '9:00', night: '22:00' },
            goals: {
                walk: { time: 1 },
                exercise: { 
                    time: 0.5,
                    comment: `1 min - 10s x2: lunges, squats, bridges, knee taps
                    10-20 min: jog
                    [optional]`
                },
                web_development: {
                    time: 1,
                    source: {
                        title: 'Frontend Masters',
                        href: 'https://frontendmasters.com'
                    },
                    comment: 'Computer Science'
                },
                dsa: {
                    time: 2,
                    source: {
                        title: 'Coding Interview study plan',
                        href: 'https://www.techinterviewhandbook.org/coding-interview-study-plan/'
                    },
                    comment: 'Week 1: Array, String, Hash Table, Recursion'
                }
            }
        },
        weekly: {
            routine: {
                therapy: { days: [0, 1, 0, 0, 0, 0, 0], time: ['10:30', 1.5] },
                isg: { days: [0, 0, 0, 0, 0, 0, 1], time: ['13:00', 5.5] }
            },
            goals: {
                algorithms: {
                    days: [1, 1, 0, 0, 1, 0, 0], time: 1,
                    comment: 'Make Your Own Neural Network'
                },
                golang: {
                    days: [1, 0, 1, 0, 0, 1, 0], time: 1,
                    comment: 'Basics of Go []'
                },
                nature_of_code: {
                    days: [1, 0, 0, 1, 0, 0, 1], time: 1,
                    comment: '0. Randomness',
                    source: {
                        title: 'Nature of Code',
                        href: 'https://natureofcode.com'
                    }
                }
            }
        },
        monthly: {
            routine: {
                seattlejs: { week: 2, days: [0, 0, 0, 1, 0, 0, 0], time: ['17:00', 2.5] },
                code_katas: { week: 3, days: [0, 0, 1, 0, 0, 0, 0], time: ['17:00', 1.5] },
                seattle_indies_social: { week: 3, days: [0, 0, 1, 0, 0, 0, 0], time: ['20:30', 2.5] }
            },
            goals: {
                frye_art: { week: 1, days: [1, 0, 0, 0, 0, 0, 0], time: ['10:30', 3] },
                wing_luke: { week: 2, days: [1, 0, 0, 0, 0, 0, 0], time: ['9:30', 3] },
                henry_art: { week: 3, days: [1, 0, 0, 0, 0, 0, 0], time: ['9:00', 4] },
                nordic: { week: 4, days: [1, 0, 0, 0, 0, 0, 0], time: ['9:00', 6] }
            }
        },
        events: {
            '4/4/24': { act: { time: ['19:30', 3.5], attended: false }},
            '3/22/24': { act: { time: ['19:30', 1.5], attended: false }},
            '3/8/24': { act: { time: ['19:00', 1.5], attended: false }},
            '2/21/24': { therapy: { time: ['10:30', 1.5], attended: false }},
            '2/9/24': { act: { time: ['19:30', 1.5], attended: true } },
            '2/6/24': {
                city_light: { time: ['13:30', 0.5], attended: true },
                gov: { time: ['14:30', 1.5], attended: true }
            }
        },
        projects: ['Re-Portfolio', "Jordan's Game"],
        record: {
            '2/21/24': {
                daily: {
                    routine: { morning: '8:20', night: false },
                    goals: {
                        exercise: { done: false },
                        web_development: {
                            target: 'Complete Intro to Computer Science',
                            done: false, completed: false
                        },
                        dsa: {
                            target: 'practice: arrays | strings',
                            done: false, completed: false
                        }
                    }
                },
                weekly: {
                    routine: '',
                    goals: {
                        nature_of_code: {
                            target: '0. Randomness',
                            done: false, completed: false
                        }
                    }
                },
                monthly: '',
                projects: {
                    "Re-Portfolio": [],
                    "Jordan's Game": []
                },
                tasks: {
                    'read: coding standards': { done: false, completed: false },
                    'read: coding patterns': { done: false, completed: false },
                    'godot rpg tutorial': { done: false, completed: false }
                }
            },
            '2/20/24': {
                daily: {
                    routine: { morning: '13:00', night: '23:00' },
                    goals: {
                        dsa: { 
                            target: 'read: Array, String, Hash Table, Recursion',
                            done: '12:56', completed: true
                        },
                        web_development: {
                            target: 'Complete Intro to Computer Science',
                            done: '14:11', completed: false
                        }
                    }
                },
                weekly: {
                    routine: '',
                    goals: {
                        golang: {
                            target: 'Basics of Go',
                            done: '15:17', completed: false
                        }
                    }
                },
                monthly: {
                    routine: {
                        code_katas: { done: true },
                        seattle_indies_social: { done: true }
                    },
                    goals: ''
                },
                projects: {
                    "Re-Portfolio": [],
                    "Jordan's Game": [
                        'read: gdscript'
                    ]
                },
                tasks: {
                    'read: coding standards': { done: false, completed: false },
                    'read: coding patterns': { done: false, completed: false },
                    'godot rpg tutorial': { done: false, completed: false }
                }
            },
            '2/19/24': {
                daily: {
                    routine: { morning: '12:30', night: false },
                    goals: {
                        dsa: { target: 'Array', done: '19:37', completed: false },
                        web_development: {
                            target: 'Complete Intro to Computer Science',
                            done: '21:16', completed: false
                        }
                    }
                },
                weekly: {
                    routine: {
                        therapy: { comment: 'rescheduled: holiday' }
                    },
                    goals: {
                        algorithms: {
                            target: 'Make Your Own Neural Network',
                            done: false, completed: false
                        }
                    }
                },
                monthly: '',
                projects: {
                    "Re-Portfolio": [
                        'setup cmd and cmd_options for terminal',
                        'move ui into main.js/init()',
                        'move calendar into calendar/main.js',
                        'prepare for rewrite: manual and cmd',
                        'add versions/main.js',
                        'change versions/main.js to use func instead of global vars',
                        'rearrange projects, education and experience in data()',
                        'setup data() and init()',
                        'data.js experiment: initialize and delete function'
                    ],
                    "Jordan's Game": [
                        'read: gdscript'
                    ]
                },
                tasks: {
                    'read: coding standards': { done: '12:41', completed: false },
                    'read: coding patterns': { done: false, completed: false },
                    're: career counselor': { done: true },
                    'godot rpg tutorial': { done: false, completed: false }
                }
            },
            '2/18/24': {
                daily: {
                    routine: { morning: '13:00', night: '23:30' },
                    goals: {
                        walk: { done: false, comment: 'rain' },
                        exercise: { done: false },
                        dsa: { target: 'Array', done: '21:03', completed: false },
                        web_development: {
                            target: 'Complete Intro to Computer Science',
                            done: '20:11', completed: false
                        }
                    }
                },
                weekly: {
                    routine: '',
                    goals: {
                        algorithms: {
                            target: 'Make Your Own Neural Network',
                            comment: 'extra tasks',
                            done: false, completed: false
                        },
                        golang: {
                            target: 'Basics of Go',
                            comment: 'extra tasks',
                            done: false, completed: false
                        },
                        nature_of_code: {
                            target: '0.Randomness',
                            comment: 'extra tasks',
                            done: false, completed: false
                        }
                    }
                },
                monthly: '',
                projects: {
                    "Re-Portfolio": [
                        'add functions: dir and ls'
                    ],
                    "Jordan's Game": [
                        'read: gdscript'
                    ]
                },
                tasks: {
                    'read: coding standards': { done: true, completed: false },
                    'read: design patterns': { done: false, completed: false }
                }
            }
        }
    }
}

function init_cal(calendar) {
    const week = {
        start: '',
        mondate: '',
        end: '',
        sundate: '',
        day: '',
        event: '',
        days: new Array(7)
    }
    
    const ui = {
        mondate: document.querySelector('.mon-date'),
        sundate: document.querySelector('.sun-date'),
        proj: document.querySelector('.week-projects'),
        days: document.querySelectorAll('section:not(.week-projects)'),
        dates: document.querySelectorAll('section .date'),
        hours: document.querySelectorAll('section .half-hours')
    }

    const DMS = 1000 * 60 * 60 * 24
    const ms2d = ms => ms / DMS
    const d2ms = d => d * DMS

    const options = code => ({
        weekday: parseInt(code[0]) ? 'short' : undefined,
        month: parseInt(code[1]) ? 'numeric' : undefined,
        day: parseInt(code[2]) ? 'numeric' : undefined,
        year: parseInt(code[3]) ? 'numeric' : undefined
    })

    const dateString = (date, code = '1110', opt = options(code)) => date.toLocaleDateString(undefined, opt)

    const uiWidth = () => document.querySelector('body').clientWidth > 1050

    const sizeDays = (len, layout = uiWidth()) => {
        if (layout) {
            const height = 2.4 * len
            ui.proj.style.height = `${height}rem`
            ui.days.forEach(e => e.style.height = `calc(100% - ${height}rem)`)
            ui.hours.forEach(e => e.style.height = `calc(100% - ${height}rem)`)
        } else {
            ui.days.forEach(e => e.style.height = `100%`)
            ui.hours.forEach(e => e.style.height = `100%`)
        }
    }

    const loadCalendar = () => {
        const today = Date.now()
        for (const date of Object.keys(calendar.projects)) {
            const days = Math.floor(ms2d(today - new Date(date).getTime()) / 7)
            if (days === 0)
                week.start = date
        }

        week.mondate = new Date(week.start)
        week.sundate = new Date(week.mondate.getTime() + d2ms(6))
        week.end = dateString(week.sundate, '0111')
        ui.mondate.innerHTML = dateString(week.mondate)
        ui.sundate.innerHTML = dateString(week.sundate)

        for (let i = 0; i < week.days.length; ++i)
            week.days[i] = {}

        for (const daily of Object.keys(calendar.daily)) 
            week.days.forEach(day => {
                const act = calendar.daily[daily]
                day[act.iterations[0].days[0]] = [act.iterations[0].days[1], act.title]
            })

        for (const weekly of Object.keys(calendar.weekly)) {
            const act = calendar.weekly[weekly]
            const days = act.iterations ? act.iterations[0].days : act.days
            if (days && days.length) 
                for (let i = 0; i < days.length; ++i)
                    if (days[i])
                    week.days[i][days[i][0]] = [days[i][1], act.title]
        }

        let firstDate = week.start.split('/')
            firstDate[1] = '1'
        const monthFirst = new Date(firstDate)
        for (const monthly of Object.keys(calendar.monthly)) {
            const days = calendar.monthly[monthly].days
            days.forEach(day => {
                const monthDate = new Date()
            })
        }
        /*  Note
            2nd Mon if 1st day is Mon => monthFirst + 7
            2nd Sun if 1st day is Mon => monthFirst + 13

            Find date of monthly event
            Determine if date is within current week
            If date is within current week: add to week.days
        */

        const projects = calendar.projects[week.start]
        sizeDays(projects.length)
        ui.proj.innerHTML = projects.reduce((acc, v, i) => acc += `<div class="${
            !i ? 'morning'
            : i === 1 ? 'afternoon'
            : 'night'
        }">${v}</div>`, '')

        for (let i = 0; i < ui.dates.length; ++i)
            ui.dates[i].innerHTML = dateString(new Date(week.mondate.getTime() + d2ms(i)), '0110')

        /*  Note
            Sort events per day in week.days
            Populate calendar
            -   If useMax: add intermediate hours (div)
                else: only populate with events (button => view event)
        */
        
        // const useMax = uiWidth()
        // const hoursByDay = new Array(ui.hours.length)
        // for (let i = 0; i < hoursByDay.length; ++i)
        //     hoursByDay[i] = []
        // for (let i = 0; i < 7; ++i) {
        //     for (const daily of ui.daily) {
        //         const addClass = daily.includes('morning') ? 'morning'
        //             : daily.includes('night') ? 'night'
        //             : daily.includes('evening') || daily.includes('afternoon') ? 'afternoon'
        //             : ''
        //         const time = calendar.daily[daily].iterations[0].days[0]
        //         const meridian = parseInt(time.split(':')[0]) < 12 ? 'am' : 'pm'

        //         const button = `<button class="daily ${daily} ${addClass}" onclick="loadEvent">${calendar.daily[daily].title}<br>${time} ${meridian}</button>`

        //     }
        // }
        // for (let j = 0; j < 31; ++j) {
        //     const button = document.createElement('button')
        //     button.innerHTML = `8:30<br>
        //     Do sth`
        //     hours[i].append(button)
        // }
    }
    // loadCalendar()

    // const loadDay = () => {}

    // const loadEvent = () => {}

    // window.onresize = () => {
    //     sizeDays(calendar.projects[ui.projects].length)
    // }

    return calendar
}

init_cal(cal())