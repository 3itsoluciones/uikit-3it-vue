<script setup>
import { ref, watch, watchEffect, computed } from 'vue'

//Props
const props = defineProps({
  inputType: {
    type: String,
    default: 'text'
  },
  //Data
  input: {
    type: [String, Number],
    default: ''
  },
  //Composables
  validation: {
    type: Function,
    default: null
  },
  keyPress: {
    type: Function,
    default: null
  },
  inputMask: {
    type: Function,
    default: null
  },
  //Configuration
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
  floatLeft: {
    type: Boolean,
    default: false
  },
  floatRight: {
    type: Boolean,
    default: false
  },
  floatLabel: {
    type: String,
    default: ''
  },
  placeHolder: {
    type: String,
    default: ''
  },
  maxLength: {
    type: [String, Number],
    default: '50'
  },
  isDisabled: {
    type: Boolean,
    default: false
  }
})

//Emits
const emit = defineEmits(['emitValue', 'emitPressEnter'])

//Variables
const output = ref('')
const valid = computed(() =>
  props.validation ? props.validation(output.value) : true
)

/** Computed **/
const controlInputError = computed(() => {
  return !valid.value && props.requiredField && props.error ? 'is-invalid' : ''
})
const controlPlaceholder = computed(() => {
  return props.floatLabel ? '' : props.placeHolder
})
const controlInputFloat = computed(() => {
  return [
    props.floatLabel || props.floatLeft || props.floatRight
      ? 'eit-input__display'
      : '',
    props.floatLeft ? 'eit-input__display__float-left' : '',
    props.floatRight ? 'eit-input__display__float-right' : ''
  ]
})

/** Methods **/

const handlePressEnter = () => {
  emit('emitPressEnter')
}
const clean = () => {
  output.value = ''
}

// Watch
watch(() => props.input, (value) => {
  if(value) output.value = value
})
watch(output, () => {
  //Emit
  emit('emitValue', valid.value ? output.value : '')
})

watchEffect(() => {
  if (props.inputMask) output.value = props.inputMask(output.value)
  if (props.submitted) clean()
  console.log("SUBMITED", props.submitted)
})

//Expose
defineExpose({ clean })
</script>

<template>
  <div :class="controlInputFloat">
    <input
      autocomplete="off"
      class="form-control eit-input"
      :class="controlInputError"
      :type="inputType"
      v-model.trim="output"
      :maxlength="props.maxLength"
      @keypress="props.keyPress && props.keyPress($event)"
      :placeholder="controlPlaceholder"
      @keyup.enter="handlePressEnter"
    />
    <template v-if="props.floatLabel">
      <label class="eit-label-float">
        {{ props.floatLabel }}
      </label>
    </template>
    <template v-if="props.floatLeft">
      <span
        class="eit-input__display__icon eit-input__display__float-left--icon"
      >
        <slot name="float-left"></slot>
      </span>
    </template>
    <template v-if="props.floatRight">
      <span
        class="eit-input__display__icon eit-input__display__float-right--icon"
      >
        <slot name="float-right"></slot>
      </span>
    </template>
  </div>
</template>

<style lang="scss"></style>
