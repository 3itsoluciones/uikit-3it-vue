<script setup>
//Props
const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  },
  message: {
    type: String,
    required: true,
    default: ''
  },
  icon: {
    type: String,
    default: 'info'
  },
  iconClass: {
    type: String,
    default: ''
  },
  animation: {
    type: Object,
    default: () => ({ active: false, show: false })
  }
})
</script>

<template>
  <div
    :class="`eit-alert eit-alert--${props.type} ${props.animation.active ? 'eit-alert--animation' : 'eit-alert--default'} ${props.animation.show ? 'eit-alert--animation--show' : ''}`"
  >
    <div class="d-flex align-items-center">
      <div class="flex-shrink-0 d-flex align-items-center eit-alert__icon me-2">
        <font-awesome-icon :icon="props.icon" :class="iconClass" />
      </div>
      <div class="flex-grow-1 eit-alert__text" v-html="props.message"></div>
    </div>
  </div>
</template>