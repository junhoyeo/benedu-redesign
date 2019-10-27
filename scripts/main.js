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

let isWeatherComplete = false
const weatherTimeline = anime.timeline({
  direction: 'alternate',
  loop: false,
  begin: function(_) {
    isWeatherComplete = false
  },
  complete: function(_) {
    isWeatherComplete = true
  }
})

weatherTimeline.add({
  targets: '.weather-illust svg path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1400,
  delay: function(_, i) { return i * 120 },
  direction: 'alternate',
}).add({
  targets: '.weather-illust svg path.cloud',
  stroke: '#FFF',
  easing: 'linear',
  duration: 300,
})

weatherTimeline.play()

function onHoverWeather() {
  if (!isWeatherComplete)
    return
  weatherTimeline.restart()
}
