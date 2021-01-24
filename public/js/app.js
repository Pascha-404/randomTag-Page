const tagsContainer = document.querySelector('#tags');
const textarea = document.querySelector('#textarea');

//focus on page directly in textarea
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

// listens to keyup movement in textarea
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
})