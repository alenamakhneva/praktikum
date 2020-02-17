export default class CommitCard {
    constructor(container, commit) {
        this._container = container
        this._commit = commit
    }

    create(commit, date) {
        const slide = document.createElement('li')
        const frame = document.createElement('div')
        const about = document.createElement('div')
        const commitDate = document.createElement('p')
        const img = document.createElement('img')
        const contacts = document.createElement('div')
        const name = document.createElement('h3')
        const link = document.createElement('a')
        const text = document.createElement('p')

        slide.classList.add('glide__slide')
        frame.classList.add('glide__slide-frame')
        about.classList.add('glide__slide-about')
        commitDate.classList.add('glide__slide-date')
        img.classList.add('glide__slide-image')
        contacts.classList.add('glide__slide-contacts')
        name.classList.add('glide__slide-name')
        link.classList.add('glide__slide-mail')
        text.classList.add('glide__slide-text')

        img.setAttribute('src', commit.author.avatar_url)
        link.setAttribute('href', 'mailto:' + commit.committer.email)

        commitDate.textContent = date
        name.textContent = commit.author.name
        text.textContent = commit.message
        link.textContent = commit.committer.email

        contacts.appendChild(link)
        contacts.appendChild(name)
        about.appendChild(contacts)
        about.appendChild(img)
        frame.appendChild(text)
        frame.appendChild(about)
        frame.appendChild(commitDate)
        slide.appendChild(frame)

        slide.addEventListener('click', function () {
            window.open(url, '_blank')
        })
        return slide
    }
}