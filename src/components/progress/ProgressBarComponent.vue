<script setup>
const props = defineProps({
  percentage: {
    type: Number,
    default: 50
  },
  type: {
    type: String,
    default: 'primary'
  }
})
</script>

<template>
  <div class="eit-progress eit-progress--30">
    <div
      class="eit-progress__bar"
      :class="`eit-progress__bar--${props.type}`"
      :style="`width: ${props.percentage}%`"
    >
      {{ props.percentage }}%
    </div>
    <div
      class="eit-progress__bar eit-progress__bar--transparent"
      :style="`width: ${100 - props.percentage}%`"
    >
      {{ 100 - props.percentage }}%
    </div>
  </div>
</template>
