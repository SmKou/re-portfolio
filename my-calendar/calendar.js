const calendar = {
    daily: {
        'morning-prep': {
            title: "Morning Prep",
            iterations: [
                {
                    fst_date: '1-25-24',
                    last_date: '',
                    days: ['8:30', 1.5, 0],
                    notes: `Exercise: 15 min run-in-place
                    Shower`
                }
            ]
        },
        'evening-prep': {
            title: "Evening Prep",
            iterations: [
                {
                    fst_date: '1-25-24',
                    last_date: '',
                    days: ['22:30', 1, 0],
                    notes: `MTh 10:30 Wet hair
                    15 min hot oil
                    11:00 Shower
                    - wash out oil
                    - face mask done by ~11:30
                    
                    ~10:45 Shower
                    11:15 Face mask`
                }
            ]
        },
        'night-project': {
            title: "Night Project",
            iterations: [
                {
                    fst_date: '1-25-24',
                    last_date: '',
                    days: ['23:30', 0.5, 0],
                    notes: `Jordan's Game or DSA reading`
                }
            ]
        }
    },
    weekly: {
        'therapist': {
            title: "Therapist Appt",
            iterations: [
                {
                    fst_date: '1-29-24',
                    last_date: '',
                    days: [
                        ['10:30', 2],
                        0, 0, 0, 0, 0, 0
                    ]
                }
            ]
        },
        'dsa-practice': {
            title: "DSA Study and Practice",
            iterations: [
                {
                    fst_date: '1-25-24',
                    last_date: '',
                    days: [
                        0, 0, 0,
                        ['15:00', 2],
                        0, 0,
                        ['15:00', 2]
                    ]
                }
            ]
        },
        'dsa-practice-sam': {
            title: "DSA Practice: Sam",
            iterations: [
                {
                    fst_date: '1-21-24',
                    last_date: '',
                    days: [
                        ['13:00', 2],
                        ['17:00', 2],
                        0, 0, 0, 0,
                        ['12:30', 2]
                    ]
                }
            ]
        },
        'dsa-practice-shanay': {
            title: "DSA Practice: Shanay",
            iterations: [
                {
                    fst_date: '1-24-24',
                    last_date: '',
                    days: [
                        ['15:00', 2],
                        ['15:00', 2],
                        ['15:00', 2],
                        0, 0, 0, 0
                    ]
                }
            ]
        },
        'isg': {
            title: "ISG",
            iterations: [
                {
                    fst_date: '1-27-24',
                    last_date: '',
                    days: [
                        0, 0, 0, 0, 0,
                        ['13:00', 5.5],
                        0
                    ]
                }
            ]
        }
    },
    events: {
        '2-6-24': [
            {
                title: "Pay electric bill",
                days: ['14:30', 1.5],
                notes: `Complete Function Report and Work Report (required documentation)
                List of medications
                List of physicians`
            }
        ],
        '1-26-24': [
            {
                title: "Family Visit",
                days: ['15:00', 5.5]
            },
            {
                title: "Doctor's Appt",
                days: ['12:45', 0.5],
                notes: `general check-up
                - Jaw clicking
                - Thyroid and vitamin D
                - Running in place
                `
            }
        ]
    },
    projects: {
        '1-29-24': [
            "SignedPic",
            "Re-Portfolio",
            "Jordan's Game"
        ],
        '1-22-24': [
            "Re-Portfolio"
        ]
    }
}

const ui = {
    week: [],
    day: '',
    event: '',
    daily: Object.keys(calendar.daily),
    weekly: Object.keys(calendar.weekly),
    events: [],
    projects: ''
}

const gete = eAddr => document.querySelector(eAddr)
const getea = eAddr => document.querySelectorAll(eAddr)

const ms2d = ms => ms / (1000 * 60 * 60 * 24)
const d2ms = d => d * (1000 * 60 * 60 * 12)

const options = { weekday: 'short', year: undefined, month: 'numeric', day: 'numeric' }

const dateString = (date, set, opt = {...options, ...set}) => date.toLocaleDateString(undefined, opt)

const sizeDays = (len, layout = gete('body').clientWidth > 1050) => {
    if (layout) {
        const height = 2.4 * len
        gete('.week-projects').style.height = `${height}rem`
        getea('section:not(.week-projects)').forEach(e => e.style.height = `calc(100% - ${height}rem)`)
        getea('section .half-hours').forEach(e => e.style.height = `calc(100% - ${height}rem)`)
    } else {
        getea('section:not(.week-projects)').forEach(e => e.style.height = `100%`)
        getea('section .half-hours').forEach(e => e.style.height = `100%`)
    }
}

const loadCalendar = () => {
    const today = Date.now()

    for (const date of Object.keys(calendar.projects)) {
        const days = Math.floor(ms2d(today - new Date(date).getTime()) / 7)
        if (days === 0)
            ui.projects = date
    }
    
    ui.week[0] = new Date(ui.projects)
    gete('.mon-date').innerHTML = dateString(ui.week[0])
    ui.week[1] = new Date(today + d2ms(6))
    gete('.sun-date').innerHTML = dateString(ui.week[1])

    const projects = calendar.projects[ui.projects]
    sizeDays(projects.length)
    for (const proj of projects) {
        const button = document.createElement('button')
        button.append(document.createTextNode(proj))
        gete('.week-projects').append(button)
    }

    const days = getea('section .date')
    for (let i = 0; i < 7; ++i)
        days[i].innerHTML = dateString(new Date(ui.week[0].getTime() + d2ms(i) * 2), { weekday: undefined })
    
    const hours = getea('section .half-hours')
    for (let i = 0; i < 7; ++i)
        for (let j = 0; j < 31; ++j) {
            const button = document.createElement('button')
            button.innerHTML = `8:30<br>
            Do sth`
            hours[i].append(button)
        }
    
    gete('section:nth-of-type(4)  .half-hours button:nth-of-type(20)').classList.add('daily')
    gete('section:nth-of-type(2)  .half-hours button:nth-of-type(10)').classList.add('weekly')
    gete('section:nth-of-type(6)  .half-hours button:nth-of-type(13)').classList.add('outing')
}
loadCalendar()

const loadDay = () => {}

const loadEvent = () => {}

window.onresize = () => {
    sizeDays(calendar.projects[ui.projects].length)
}