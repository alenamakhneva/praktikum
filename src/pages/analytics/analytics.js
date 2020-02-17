import './analytics.css';

import Statistics from '../../js/components/Statistics.js'
import DataStorage from '../../js/modules/DataStorage';

const dataStorage = new DataStorage()
const query = dataStorage.extractQuery()
const newsArray = dataStorage.extractResults()
const stats = new Statistics(query, newsArray)

window.onload = function () {
    stats.renderStats()
}