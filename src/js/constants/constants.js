import {
    getCurrentDate,
    getPastDate
} from '../utils/date.js';
const ERROR_MESSAGES = {
    input: 'Нужно ввести ключевое слово',
    query: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',

}
const BASE_URL = 'https://newsapi.org/v2/everything?';
const API_KEY = '9ea4a6f9cf254623bf90db790d66394c';
const grid = document.querySelector('.news-grid')
const newsGrid = document.querySelector('.news-grid__container')
const errorElement = document.querySelector('.search__input-error')
const preloader = document.querySelector('.preloader')
const noresults = document.querySelector('.noresults')
const noresultsTitle = document.querySelector('.noresults__title')
const noresultsText = document.querySelector('.noresults__text')
const query = document.querySelector('.search__input');
const dateTo = getCurrentDate();
const dateFrom = getPastDate();


export {
    ERROR_MESSAGES,
    BASE_URL,
    API_KEY,
    grid,
    newsGrid,
    errorElement,
    preloader,
    noresults,
    noresultsText,
    noresultsTitle,
    query,
    dateTo,
    dateFrom
}