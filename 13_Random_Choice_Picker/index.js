// alert('Hello World')
const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

// create span tags
const createTags = (input) => {
  // get user input and turn it into an array of trimed text
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim())

  // clear out current tags
  tagsEl.innerHTML = ''

  //   create a list of tags based on current array of text
  tags.forEach((tag) => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

const highlightTag = (tag) => {
  tag.classList.add('highlight')
}
const unHighlightTag = (tag) => {
  tag.classList.remove('highlight')
}

// pick a random element from an array
const pickRandomTag = () => {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

const randomSelect = () => {
  const times = 30
  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    highlightTag(randomTag)

    setTimeout(() => {
      unHighlightTag(randomTag)
    }, 100)
  }, 100)

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()

      highlightTag(randomTag)
    }, 100)
  }, times * 100)
}

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)

    if (e.target.value !== '') {
      randomSelect()
    }
  }
})
