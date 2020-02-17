//Класс DataStorage предоставляет интерфейс для работы с локальным хранилищем браузера.

export default class DataStorage {
    constructor(articles, container) {
        this.articles = articles
        this.conteiner = container
    }

    addResults(articles) { //добавить в локальное хранилище
        localStorage.setItem('articles', JSON.stringify(articles))
    }

    extractResults(articles) { //извлечь из локального хранилища
        return JSON.parse(localStorage.getItem('articles'))
    }

    addQuery(input) {
        localStorage.setItem('query', input)
    }

    extractQuery(query) {
        return localStorage.getItem('query')
    }

    clear() { // очистить хранилище
        localStorage.clear()
    }

}