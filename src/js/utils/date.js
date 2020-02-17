import {
    storage
} from '../modules/DataStorage.js'

function getCurrentDate() { //текущая дата
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
}

function getPastDate() { //дата на неделю раньше 
    const today = new Date();
    today.setDate(today.getDate() - 7);
    new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
}

function formatNewsDate(publishedAt) {
    const date = new Date(publishedAt)
    return date.toLocaleString('ru', {
        day: 'numeric',
        month: 'long'
    }) + ', ' + date.getFullYear()
}

function formatAnalyticsDate(publishedAt) {
    const chartDate = new Date(publishedAt)
    const date = chartDate.toLocaleString('ru', {
        day: 'numeric',
    }) + ', '
    const day = chartDate.toLocaleString('ru', {
        weekday: 'short'
    })
    return {
        date,
        day
    }
}

export {
    getCurrentDate,
    getPastDate,
    formatNewsDate,
    formatAnalyticsDate
};