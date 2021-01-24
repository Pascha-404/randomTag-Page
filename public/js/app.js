const tagsContainer = document.querySelector('#tags');
const textarea = document.querySelector('#textarea');

//focus on page directly on textarea
textarea.focus();

function createTags(input) {
    // makes array + no whitespace + no empty arrays
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    //clears container for tags
    tagsContainer.innerHTML = '';

    // creats the span with each array value
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.textContent = tag;

        tagsContainer.append(tagEl)
    })
}

//times it goes through tags + how fast
function randomSelect() {
    const times = 25;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag)

        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100);
    }, 100);

    //clears interval after choosen 'times' and sets final highlight
    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag)
        }, 100);

    }, times * 100);
}

//picks a random tag
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}

//adds highlight class
function highlightTag(tag) {
    tag.classList.add('highlight');
}

//removes highlight class 
function unhighlightTag(tag) {
    tag.classList.remove('highlight');
}

// listens to keyup movement in textarea
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    //looks for 'Enter'-Key to start + clears textarea
    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10)

        //starts random selector function
        randomSelect()
    }
})