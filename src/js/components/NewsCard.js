//Класс карточки новости

export default class NewsCard {
    constructor(container, item) {
        this._item = item
        this.container = container
    }

    create(urlToImage, date, title, description, url, source) {
        const newsElem = document.createElement('div')
        const img = document.createElement('img')
        const newsDate = document.createElement('p')
        const name = document.createElement('h3')
        const text = document.createElement('p')
        const link = document.createElement('a')

        newsElem.classList.add('news-grid__card')
        img.classList.add('news-grid__card-image')
        newsDate.classList.add('news-grid__card-date')
        name.classList.add('news-grid__card-title', 'title')
        text.classList.add('news-grid__card-text')
        link.classList.add('news-grid__card-link')

        img.setAttribute('src', urlToImage)
        link.setAttribute('href', url)

        newsDate.textContent = date
        name.textContent = title
        text.textContent = description
        link.textContent = source.name

        newsElem.appendChild(img)
        newsElem.appendChild(newsDate)
        newsElem.appendChild(name)
        newsElem.appendChild(text)
        newsElem.appendChild(link)

        newsElem.addEventListener('click', function () {
            window.open(url, '_blank')
        })

        return newsElem
    }
}