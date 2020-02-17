//class NewsApi
// Отвечает за взаимодействие с NewsAPI. У класса есть конструктор, принимающий опции и 
// единственный обязательный метод getNews.getNews возвращает список новостей на основе запроса.

// Методы getNews и getCommits возвращают промис, содержат в себе обработку ответа
// сервера и обязательный блок сatch, бросающий ошибку дальше с помощью Promise.reject или
// throw.Также классы NewsApi, GithubApi и DataStorage не должны взаимодействовать с DOM 
// напрямую из своих методов.
import {
    BASE_URL,
    API_KEY,
    query,
    dateTo,
    dateFrom
} from '../constants/constants.js'


export default class NewsApi {

    constructor(options) {
        this._baseUrl = BASE_URL
        this._apiKey = API_KEY
        this._dateTo = dateTo
        this._dateFrom = dateFrom
        this._query = query
    }

    getNews() {
        return fetch(`${this._baseUrl}q=${this._query.value}&from=${this._dateFrom}&to=${this._dateTo}&language=ru&sortBy=publishedAt&pageSize=100`, {
                headers: {
                    authorization: this._apiKey
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(err);
                /* отклоняем промис, чтобы перейти в блок catch, если сервер вернул ошибку */
            })
            .catch((err) => {
                console.log(err);
            })
    }
}