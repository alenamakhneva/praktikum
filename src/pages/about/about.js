import './about.css';
import '../../blocks/glide/glide.js';
import {
    URL,
    slides
} from '../../js/constants/constants.js'

import {
    handleCommits
} from '../../js/utils/handleCommits.js'

import GithubApi from '../../js/modules/GithubApi.js'
import DataStorage from '../../js/modules/DataStorage.js'
import CommitCardList from '../../js/components/CommitCardList.js'
import CommitCard from '../../js/components/CommitCard.js'

const dataStorage = new DataStorage()

const commitCard = new CommitCard()

const githubApi = new GithubApi(URL)

const commitCardList = new CommitCardList(slides, commitCard, dataStorage);

window.onload = function () {

    githubApi.getCommits()
        .then(commits => {
            if (commits) {
                handleCommits(commits)
            }
        })
        .catch(err => {
            console.log(err)
        })
}

export {
    dataStorage,
    commitCardList,
    commitCard
}