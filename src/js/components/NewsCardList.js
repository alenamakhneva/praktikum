import {
    noresults,
    noresultsText,
    grid,
    newsGrid
} from '../constants/constants.js'


import {
    storage,
    newsCard,
    newsCardList
} from '../../pages/index/index.js'

import {
    formatNewsDate
} from '../utils/date.js'


export default class NewsCardList { //Класс списка карточек новостей
    constructor(container, newsArray, storage, newscard) {
        this._container = container
        this._card = newscard
        this._cards = newsArray
        this._storage = storage;
        this._button = document.querySelector('.news-grid__button')
    }

    _addCard(urlToImage, publishedAt, title, description, url, source) { // добавление карточек в список
        const cardItem = newsCard.create(urlToImage, publishedAt, title, description, url, source);
        return cardItem
    }

    render(articles) { // отрисовка карточек при загрузке страницы
        grid.classList.add('news-grid_hidden') //скрыть блок результатов перед отрисовкой нового запроса

        const initialArticles = this._storage.extractResults(articles) //взять массив из локалсторидж 

        let x = 0

        initialArticles.articles.slice(x, x + 3).forEach(({
            urlToImage,
            publishedAt,
            title,
            description,
            url,
            source
        }) => {

            const date = formatNewsDate(publishedAt)

            const cardItem = this._addCard(urlToImage, date, title, description, url, source)
            newsGrid.appendChild(cardItem)
        });

        grid.classList.remove('news-grid_hidden');
        this._button.addEventListener('click', function (event) {
            event.preventDefault();
            x = x + 3;
            if (x <= initialArticles.articles.length) {
                initialArticles.articles.slice(x, x + 3).forEach(({
                    urlToImage,
                    publishedAt,
                    title,
                    description,
                    url,
                    source
                }) => {
                    const date = formatNewsDate(publishedAt)
                    const cardItem = newsCardList._addCard(urlToImage, date, title, description, url, source)
                    newsGrid.appendChild(cardItem)
                });
            } else {
                event.target.classList.add('news-grid__button_hidden')
            }
        });
    }

}