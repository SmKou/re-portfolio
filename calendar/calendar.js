function init(calendar) {
    const cal = {
        daily: {
            routine: {},
            goals: {}
        },
        weekly: {
            routine: {},
            goals: {}
        },
        monthly: {
            routine: {},
            goals: {}
        },
        projects: {},
        events: {},
        tasks: {}
    }

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