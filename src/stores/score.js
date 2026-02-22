import { defineStore } from 'pinia'

const baseLevelScore = 25

const levels = new Array(15)
  .fill(0)
  .map((_, i) => baseLevelScore * Math.pow(2, i))

let sum = 0

const levelScores = levels.map((value) => {
  sum += value
  return sum
})

const computeLevelByScore = (score) => {
  for (let [index, value] of levelScores.entries()) {
    if (score <= value) {
      return {
        level: index,
        value: levels[index],
      }
    }
  }
}

export const useScoreStore = defineStore('score', {
  state: () => ({
    score: 0,
  }),
})
