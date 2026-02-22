import { defineStore } from 'pinia'

const baseLevelScore = 25

const levels = new Array(15)
  .fill(0)
  .map((_, i) => baseLevelScore * Math.pow(2, i))

console.log(levels)

export const useScoreStore = defineStore('score', {
  state: () => ({
    score: 0,
  }),
})
