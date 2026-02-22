import { defineStore } from 'pinia'

const baseLevelScore = 25

const levels = new Array(15)
  .fill(0)
  .map((_, i) => baseLevelScore * Math.pow(2, i))

const levelScores = levels.map((_, level) => {
  let sum = 0

  for (let [index, value] of levels.entries()) {
    if (index >= level) {
      return sum + value
    }

    sum += value
  }

  return sum
})

console.log(levelScores)

export const useScoreStore = defineStore('score', {
  state: () => ({
    score: 0,
  }),
})
