<script setup>
import { computed } from 'vue'

//Props
const props = defineProps({
  className: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
    default: 'Enviado...'
  },
  isDisabled: {
    type: Boolean,
    default: false
  }
})

//Emits
const emit = defineEmits(['emitEvent'])

//Computed
const calculateClass = computed(() => {
  return ['eit-btn', `${props.className}`]
})

//Methods
const emitEvent = () => {
  emit('emitEvent')
}
</script>

<template>
  <button
    @click="emitEvent"
    :class="calculateClass"
    class="d-flex align-items-center justify-content-center"
    :disabled="props.isDisabled"
  >
    <template v-if="props.loading">
      <div class="spinner-border spinner-border-sm me-1"></div>
      {{ props.loadingText }}
    </template>
    <template v-if="!props.loading">
      <template v-if="props.icon">
        <font-awesome-icon :icon="props.icon" class="me-1" />
      </template>
      {{ text }}
    </template>
  </button>
</template>

