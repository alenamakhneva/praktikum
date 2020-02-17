//Класс, отвечающий за логику работы графиков со статистикой на странице аналитики.
//Конструктор класса получает объект, содержащий текущее состояние локального браузерного хранилища.

import {
    formatAnalyticsDate
} from '../../js/utils/date.js'

export default class Statistics {
    constructor(question, resultArray) {
        this._question = question
        this._results = resultArray
    }

    renderStats() {
        document.querySelector('.query__word').textContent = '"' + this._question + '"'
        document.querySelector('#week').textContent = this._results.totalResults

        const titles = []
        this._results.articles.forEach((item) => { //получить массив заголовков
        })

        let counter = 0
        titles.forEach((title) => {
            if (title.includes(this._question)) {
                counter++
            }
            return counter
        })
        document.querySelector('#headers').textContent = counter

        const dates = [] // отрисовать даты для диаграммы
        this._results.articles.forEach((item) => {
            dates.push(item.publishedAt)
        })

        let cutDates = []
        dates.reverse()
        dates.forEach((day) => {
            cutDates.push(day.substr(0, 10))
        })

        let occurrences = cutDates.reduce(function (obj, item) { //посчитать количество статей
            obj[item] = (obj[item] || 0) + 1;
            return obj;
        }, {});

        let mentions = []
        mentions = Object.values(occurrences)

        const filteredDates = cutDates.filter((item, index) => {
            return cutDates.indexOf(item) === index;
        })

        let formattedDates = []
        filteredDates.forEach((item) => {
            formattedDates.push(formatAnalyticsDate(item))
        })

        const column = document.querySelector('.chart__dates') //отрисовать диаграмму

        formattedDates.forEach((item) => {
            const chartDate = document.createElement('div')
            chartDate.classList.add('chart__date')

            const chartFigure = document.createElement('span')
            chartFigure.classList.add('chart__date-figure')
            chartFigure.textContent = item.date

            const chartDay = document.createElement('span')
            chartDay.classList.add('chart__date-day')
            chartDay.textContent = item.day

            chartDate.appendChild(chartFigure)
            chartDate.appendChild(chartDay)
            column.appendChild(chartDate)
        })

        const mentionsChart = document.querySelector('.chart__mentions')

        for (let k = 0; k < mentions.length; k++) {
            const bar = document.createElement('div')
            const number = document.createElement('span')
            number.classList.add('chart__mentions-number')
            number.textContent = mentions[k]

            bar.classList.add('chart__mentions-bar')
            number.style.width = `${mentions[k]}` + '%'

            bar.appendChild(number)
            mentionsChart.appendChild(bar)
        }
    }

}