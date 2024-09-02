<script setup>
import { ref, computed } from 'vue'

//Props
const props = defineProps({
  type: {
    type: String,
    required: true,
    default: 'info'
  },
  data: {
    type: Object,
    required: true
  },
  position: {
    type: String,
    default: 'bottom'
  },
  visible: {
    type: String,
    default: '5000'
  }
})

//VARIABLES
const show = ref(false)
const hidden = ref('hidden')
const delay = ref('')

//Computed
const configToast = computed(() => {
  return {
    show: show.value,
    hide: !show.value,
    [props.position]: props.position,
    hidden: hidden.value
  }
})

/**Methods**/

//Handles
const handleShowToast = () => {
  clearTimeout(delay.value)
  show.value = true
  hidden.value = ''
  delay.value = setTimeout(() => {
    show.value = false
    setTimeout(() => (hidden.value = 'hidden'), '300')
  }, props.visible)
}
const handleCloseToast = () => {
  show.value = false
  setTimeout(() => (hidden.value = 'hidden'), '300')
  clearTimeout(delay.value)
}
defineExpose({ handleShowToast, handleCloseToast })
</script>
<template>
  <div class="eit-toast__container" :class="configToast">
    <div class="eit-toast box-shadow" :class="`eit-toast--${props.data.type}`">
      <div class="d-flex">
        <div class="flex-shrink-0 eit-toast__left">
          <span
            v-if="props.type === 'success'"
            key="success"
            class="eit-toast__icon eit-font__size--x7"
          >
            <font-awesome-icon icon="fa-solid fa-circle-check" />
          </span>
          <span
            v-if="props.type === 'error'"
            key="error"
            class="eit-toast__icon eit-font__size--x7"
          >
            <font-awesome-icon icon="fa-solid fa-circle-xmark" />
          </span>
          <span
            v-if="props.type === 'warning'"
            key="warning"
            class="eit-toast__icon eit-font__size--x7"
          >
            <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
          </span>
          <span
            v-if="props.type === 'info'"
            key="info"
            class="eit-toast__icon eit-font__size--x7"
          >
            <font-awesome-icon icon="fa-solid fa-circle-info" />
          </span>
        </div>
        <div class="flex-grow-1 ms-3">
          <div class="d-flex">
            <div class="flex-grow-1 me-3">
              <p class="eit-toast__title">
                <template v-if="props.data.code">
                  {{ props.data.code }}
                </template>
                {{ props.data.title }}
              </p>
              <p class="eit-toast__text">{{ props.data.message }}</p>
            </div>
            <div class="flex-shrink-0">
              <a
                @click="handleCloseToast()"
                href="javascript:"
                class="eit-toast__close"
              >
                <font-awesome-icon icon="fa-solid fa-xmark" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>