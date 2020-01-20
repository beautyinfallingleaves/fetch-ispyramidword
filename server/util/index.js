const isPyramidWord = word => {
  const counts = {}

  for (let i = 0; i < word.length; i++) {
    const current = word[i]
    counts[current] = counts[current] ? counts[current] + 1 : 1
  }

  const countValues = Object.values(counts).sort()

  for (let j = 0; j < countValues.length; j++) {
    if (countValues[j] !== j + 1) return false
  }

  return true
}

module.exports = {isPyramidWord}
