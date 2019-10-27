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

const statsBarTimeline = anime.timeline({
  direction: 'alternate',
  delay: function(_, i) { return i * 120 },
  loop: false,
  easing: 'cubicBezier(.5, .05, .1, .3)'
})

statsBarTimeline.add({
  targets: '#bar-1',
  height: 320,
  transform: 'translate(768 490)',
  duration: 380,
  easing: 'easeInOutSine',
  // 171, 490
}).add({
  targets: '#bar-2',
  height: 218,
  transform: 'translate(875 550)',
  duration: 380,
  easing: 'easeInOutSine',
  // 316, 422
}, '-=220').add({
  targets: '#bar-3',
  height: 588,
  transform: 'translate(982 310)',
  duration: 380,
  easing: 'easeInOutSine',
  // 259 479
}, '-=220')
.add({
  targets: '#bar-4',
  height: 380,
  transform: 'translate(1089 410)',
  duration: 380,
  easing: 'easeInOutSine',
  // 375 363
}, '-=220')
.add({
  targets: '#bar-5',
  height: 300,
  transform: 'translate(1196 480)',
  duration: 380,
  easing: 'easeInOutSine',
}, '-=220')
.add({
  targets: '#bar-1',
  height: 371,
  transform: 'translate(768 490)',
  duration: 380,
  easing: 'easeInOutSine',
}, '-=300').add({
  targets: '#bar-3',
  height: 259,
  transform: 'translate(982 479)',
  duration: 380,
  easing: 'easeInOutSine',
}, '-=300').add({
  targets: '#bar-2',
  height: 316,
  transform: 'translate(875 422)',
  duration: 380,
  easing: 'easeInOutSine',
}, '-=300')
.add({
  targets: '#bar-4',
  height: 375,
  transform: 'translate(1089 363)',
  duration: 380,
  easing: 'easeInOutSine',
}, '-=300')
.add({
  targets: '#bar-5',
  height: 505,
  transform: 'translate(1196 233)',
  duration: 380,
  easing: 'easeInOutSine',
}, '-=180')

statsBarTimeline.play()

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
