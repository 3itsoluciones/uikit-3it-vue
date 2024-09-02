<script setup>
import { ref, watch, computed, watchEffect } from 'vue'

//Props
const props = defineProps({
  //Data
  data: {
    type: Array,
    required: true,
    default() {
      return []
    }
  },
  selected: {
    type: [Array, Object],
    default() {
      return []
    }
  },
  //Composables
  validation: {
    type: Function,
    default: null
  },
  //Configuration
  multiple: {
    type: Boolean,
    default: false
  },
  labelCustom: {
    type: String,
    default: 'name'
  },
  clearable: {
    type: Boolean,
    default: false
  },
  requiredField: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  },
  submitted: {
    type: Boolean,
    default: false
  },
  //Others
  placeHolder: {
    type: String,
    default: ''
  },
  isDisabled: {
    type: Boolean,
    default: false
  }
})

//Emits
const emit = defineEmits(['emitValue'])

/** Variables **/
const output = ref(null)
const valid = computed(() =>
  props.validation ? props.validation(output.value) : true
)

/** Computed **/
const controlSelectError = computed(() => {
  return !valid.value && props.requiredField && props.error ? 'is-invalid' : ''
})
const filterForMultiple = () => {
  return Array.isArray(output.value)
    ? props.data.filter((d) => !output.value.some((o) => o.id === d.id))
    : props.data
}
const filterForSingle = () => {
  return output.value
    ? props.data.filter((d) => d.id !== output.value.id)
    : props.data
}
const filterOptions = computed(() => {
  return props.multiple ? filterForMultiple() : filterForSingle()
})

//Watch
watch(
  () => props.selected,
  (value) => {
    if (value) output.value = value
  },
  { immediate: true }
)

watch(output, () => {
  //Emit
  emit('emitValue', valid.value ? output.value : '')
})

watchEffect(() => {
  if (props.submitted) clean()
})

const clean = () => {
  output.value = props.multiple ? [] : null
}
//Expose
defineExpose({ clean })
</script>

<template>
  <v-select
    :options="filterOptions"
    v-model="output"
    :label="labelCustom"
    :multiple="multiple"
    :placeholder="placeHolder"
    class="eit-select-component"
    :class="controlSelectError"
    :clearable="clearable"
    :disabled="props.isDisabled"
  >
    <template #no-options> No hay más resultados. </template>
  </v-select>
</template>