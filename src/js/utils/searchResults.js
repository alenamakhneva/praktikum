import {
    storage,
    newsCardList
} from '../../pages/index/index.js';

//import NewsCardList from "../components/NewsCardList.js";

import {
    ERROR_MESSAGES,
    newsGrid,
    preloader,
    noresults,
    noresultsText,
    noresultsTitle
} from '../constants/constants.js'

function renderLoading(isLoading) { //запустить прелоадер
    if (isLoading) {
        preloader.classList.remove('preloader_hidden');
    } else {
        preloader.classList.add('preloader_hidden');
    }
}

function handleResult(articles) {
    storage.addResults(articles)
    return newsCardList.render()
}


function handleError() { //показать ошибку запроса
    renderLoading(false)
    noresults.classList.remove('noresults_hidden');
    noresultsTitle.innerText = ''
    noresultsText.innerText = ERROR_MESSAGES.query;
}

function handleNoresults() { //показать ошибку, когда ничего не найдено
    renderLoading(false)
    noresults.classList.remove('noresults_hidden');
}

export {
    handleResult,
    renderLoading,
    handleError,
    handleNoresults
}