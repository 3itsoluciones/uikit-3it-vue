<script setup>
const props = defineProps({
  size: {
    type: String,
    required: false,
    default: '100'
  }
})
</script>

<template>
  <div class="p-3 eit-loading">
    <img :style="`width:${props.size}px`" src="@/assets/img/loading.svg" />
  </div>
</template>

<style lang="scss">
  @use '@/assets/scss/core' as *;

  .eit-loading {
    @extend .eit-flex--center;
  }
  
  </style>
