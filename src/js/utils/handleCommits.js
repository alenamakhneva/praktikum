import {
    dataStorage,
    commitCardList
} from '../../pages/about/about.js'

function handleCommits(commits) {
    dataStorage.addCommits(commits)
    return commitCardList.render()
}

export {
    handleCommits
}