import './index.css';
import SearchInput from '../../js/components/SearchInput.js';
import NewsCard from '../../js/components/NewsCard.js'
import NewsCardList from '../../js/components/NewsCardList.js'
import DataStorage from '../../js/modules/DataStorage.js'
import NewsApi from '../../js/modules/NewsApi.js'

import {
    newsGrid,
    BASE_URL,
    API_KEY,
} from '../../js/constants/constants.js'


const api = new NewsApi({
    BASE_URL,
    headers: {
        authorization: API_KEY,
    }
});


const searchInput = new SearchInput(api);

const storage = new DataStorage(searchInput)

const newsCard = new NewsCard();

const newsCardList = new NewsCardList(newsGrid, newsCard, storage);


export {
    storage,
    newsCard,
    newsCardList

}