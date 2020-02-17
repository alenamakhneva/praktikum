//class CommitCardList
//Класс списка карточек коммитов на странице« О проекте».

import {
    dataStorage,
    commitCard
} from '../../pages/about/about.js'

import {
    formatNewsDate
} from '../../js/utils/date.js'

import {
    slides
} from '../../js/constants/constants.js'

export default class CommitCardList {
    constructor(container, commits, dataStorage, commitCard) {
        this._container = container
        this._card = commitCard
        this._commits = commits
        this._storage = dataStorage
    }

    _addCommitCard(commit) { // добавление карточек в список
        const cardItem = commitCard.create(commit);
        return cardItem
    }

    render(commits, date) { // отрисовка карточек при загрузке страницы

        const response = this._storage.extractCommits(commits)

        let commitsArr = []
        response.forEach((item) => {
            commitsArr.push(item.commit)
        })

        let x = 0
        commitsArr.forEach((item) => {
            const date = formatNewsDate(item.committer.date)
            const cardItem = this._addCommitCard(item, date)
            slides.appendChild(cardItem)
        });
    }

}