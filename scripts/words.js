const synth = window.speechSynthesis
const wordList = document.getElementById('word-list')
const words = [
  { en: 'weave', ko: '엮다, 짜다', level: 2 },
  { en: 'witty', ko: '재치 있는', level: 1 },
  { en: 'motive', ko: '동기', level: 2 },
  { en: 'prominent', ko: '현저한, 저명한', level: 3 },
  { en: 'archaeology', ko: '고고학', level: 2 },
];

(function renderWords() {
  words.forEach(word => {
    const wordItem = document.createElement('div')
    const stars = '☆'.repeat(5 - word.level) + '★'.repeat(word.level)

    wordItem.id = `word-${word.en}`
    wordItem.className = 'word-item'
    wordItem.onclick = () => onClickWord(word.en)
    wordItem.innerHTML = `
      <div class="word-background"></div>
      <div class="word-content">
        <span class="word-en">${word.en}</span>
        <div class="word-meta">
          <span class="word-ko">${word.ko}</span>
          <span class="word-level">${stars}</span>
        </div>
      </div>`
    wordList.appendChild(wordItem)
  })
})();

function onClickWord(word) {
  const wordElement = document.getElementById(`word-${word}`)
  if (!wordElement.className.includes('selected')) {
    wordElement.className += ' selected'
  } else {
    wordElement.className = 'word-item'
  }

  const utter = new SpeechSynthesisUtterance(word);
  utter.lang = 'en-US'
  synth.speak(utter)
}
