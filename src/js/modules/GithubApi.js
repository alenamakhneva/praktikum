//class GithubApi
//Класс, аналогичный NewsApi, но отвечает за взаимодействие с Github. 
//Вместо метода getNews у этого класса метод getCommits

// Методы getNews и getCommits возвращают промис, содержат в себе обработку ответа
// сервера и обязательный блок сatch, бросающий ошибку дальше с помощью Promise.reject или
// throw.Также классы NewsApi, GithubApi и DataStorage не должны взаимодействовать с DOM 
// напрямую из своих методов.
import {
    URL
}
from '../../js/constants/constants.js'
import {
    handleCommits
}
from '../../js/utils/handleCommits.js'

export default class GithubApi {

    constructor(options) {
        this._url = URL
    }

    getCommits() {
        return fetch(this._url)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(res.status);
            })
            .then(commits => handleCommits(commits))
            .catch((err) => {
                console.log(err);
            })
    }
}