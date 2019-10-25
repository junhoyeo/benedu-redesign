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
const confetti = new ConfettiGenerator(confettiSettings)
confetti.render()
