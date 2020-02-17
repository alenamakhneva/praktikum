import './index.css';
import SearchInput from '../../js/components/SearchInput.js'; //форма отвечает только за то, что происходит с инпутом
//mport Api from '../../js/modules/Api.js';
import NewsCard from '../../js/components/NewsCard.js'
import NewsCardList from '../../js/components/NewsCardList.js'
import DataStorage from '../../js/modules/DataStorage.js'

import NewsApi from '../../js/modules/NewsApi.js'

import {
    newsGrid,
    BASE_URL,
    API_KEY,
    form
} from '../../js/constants/constants.js'


const api = new NewsApi({ // создали инстанс класса
    BASE_URL,
    headers: {
        authorization: API_KEY,
    }
});


const searchInput = new SearchInput(api);

const storage = new DataStorage(searchInput)

const newsCard = new NewsCard();

const newsCardList = new NewsCardList(newsGrid, newsCard, storage);

// window.addEventListener('unload', function () {
//     console.log('привет')
//     getStat()
// })

export {
    storage,
    newsCard,
    newsCardList

}