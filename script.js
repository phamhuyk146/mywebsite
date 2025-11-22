const form = document.getElementById('textForm');
const textList = document.getElementById('textList');

// Load saved text from LocalStorage
let texts = JSON.parse(localStorage.getItem('texts')) || [];

function renderTexts() {
    textList.innerHTML = '';
    texts.forEach((t, index) => {
        const li = document.createElement('li');
        li.textContent = t;
        textList.appendChild(li);
    });
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const text = document.getElementById('userText').value.trim();
    if(text !== '') {
        texts.push(text);
        localStorage.setItem('texts', JSON.stringify(texts));
        renderTexts();
        form.reset();
    }
});

// Render initially
renderTexts();
