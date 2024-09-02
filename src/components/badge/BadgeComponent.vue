<script setup>
//Props
const props = defineProps({
  className: {
    type: String,
    required: true
  },
  text: {
    type: [String, Number],
    required: true,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <span :key="`badge-${props.text}`" :class="`eit-badge ${props.className}`">
    <template v-if="props.icon">
      <font-awesome-icon :icon="props.icon" class="me-1" />
    </template>
    <span v-html="props.text"></span>
  </span>
</template>