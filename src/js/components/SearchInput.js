// Конструктор класса принимает колбэк - функцию, исполняемую при сабмите формы поиска.
// В колбэк-функции описывается взаимодействие с API, списком карточек и локальным браузерным 
// хранилищем.Полученные от NewsAPI данные должны приводить к обновлению хранилища, а список карточек 
// отображать полученные данные на странице.Кроме этого у класса SearchInput должны быть методы 
// для валидации формы поиска и методы, управляющие работой кнопки сабмита.

import {
    ERROR_MESSAGES,
    errorElement,
    grid,
    newsGrid,
    noresults,
} from "../constants/constants";

import {
    handleResult,
    renderLoading,
    handleError,
    handleNoresults
} from '../utils/searchResults.js'
import {
    storage
} from "../../pages/index";

export default class SearchInput {
    constructor(newsApi, container) {
        this._container = container
        this._input = document.querySelector('.search__input');
        this._form = document.querySelector('.search__form');
        this._button = document.querySelector('.search__button');
        this._api = newsApi;
        this._handleResult = handleResult
        this._renderLoading = renderLoading
        this._handleError = handleError
        this._handleNoresults = handleNoresults
        this._noresults = noresults
        this._form.addEventListener('submit', this._handleSubmit.bind(this));
        this._form.addEventListener('keyup', this._validateInput.bind(this));
    }
    _validateInput() {
        let errors = 0
        for (let x = 0; x < this._input.value.length; x++) {
            if (this._input.value.length <= 1) {
                errorElement.textContent = ERROR_MESSAGES.input
                errorElement.classList.remove('search__input-error_hidden')
                errors++
                continue
            }
            if (errors === 0) {
                errorElement.classList.add('search__input_error-hidden')
                errorElement.textContent = ''
                this._enableForm()
            }
        }
    }

    _disableForm() {
        this._button.setAttribute('disabled', true);
        this._input.setAttribute('disabled', true);
    }

    _enableForm() {
        this._button.removeAttribute('disabled');
        this._input.removeAttribute('disabled');
    }

    _handleSubmit(event) { //В колбэк-функции описывается взаимодействие с API, 
        //списком карточек и локальным браузерным хранилищем.
        event.preventDefault()
        storage.clear();
        newsGrid.innerText = ''
        grid.classList.add('news-grid_hidden')
        if (!this._input.value) {
            errorElement.textContent = ERROR_MESSAGES.input
            errorElement.classList.remove('search__input-error_hidden')
        }
        if (this._input.value.length > 1) {
            this._renderLoading(true);
            this._noresults.classList.add('noresults_hidden');
            storage.addQuery(this._input.value)
            this._api.getNews()
                .then(articles => {
                    if (articles.totalResults === 0) {
                        this._handleNoresults()
                    }
                    if (articles.totalResults !== 0) {
                        this._renderLoading(false)
                        this._handleResult(articles)
                    }
                })
                .catch(err => {
                    console.log(err)
                    this._handleError(err);
                })
                .finally(this._enableForm.bind(this))
        }
    }

}