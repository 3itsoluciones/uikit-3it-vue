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
    <img 
      :style="`width:${props.size}px`" 
      src="/img/loading.svg"
    >
  </div>
</template>

<style lang="scss">

  .eit-loading {
    @extend .eit-flex--center;
  }

</style>