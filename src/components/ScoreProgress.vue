<script setup>
import { useScoreStore } from '@/stores/score'

const store = useScoreStore()
</script>

<template>
  <div class="progress">
    <h4 class="progress-level">
      <span>{{ store.currentScore }}/{{ store.level.value }}</span>
      <span>{{ store.level.level + 1 }}</span>
    </h4>
    <div class="progress-container">
      <div class="progress-value" style="width: 20%"></div>
    </div>
  </div>
</template>
