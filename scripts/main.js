const confettiSettings = {
  target: 'stats-canvas',
  max: 30,
  size: 3.5,
  animate: true,
  props: ['square'],
  colors: [
    [255, 201, 0],
    [230, 61, 135],
    [0, 199, 228],
    [253, 214, 126]
  ],
  clock: 40,
  rotate: false,
  width: 1400,
}

const confettiCanvas = document.getElementById('stats-canvas')
confettiCanvas.style.opacity = 0.1

const confetti = new ConfettiGenerator(confettiSettings)
confetti.render()

let confettiOpacity = 0.1
const confettiIntervalID = setInterval(function () {
  confettiCanvas.style.opacity = confettiOpacity
  confettiOpacity += 0.07
}, 100);

setTimeout(function () {
  clearInterval(confettiIntervalID)
}, 1400);

const countScore = new CountUp('countup-score', 0, 1068, 0, 1.5)
countScore.start()

const countRank = new CountUp('countup-rank', 0, 56, 0, 1.5)
countRank.start()
