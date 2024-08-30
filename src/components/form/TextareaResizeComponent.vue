<script setup>
	import { ref, watch, watchEffect, computed } from 'vue'

	//Props
	const props = defineProps({
    //Data
		input: {
			type: String,
			default: ''
		},
		//Composables
    validation: {
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
		maxLength: {
			type: String,
			default: '240'
		},
		placeHolder: {
			type: String,
			default: ''
		},
	})

	//Emits
	const emit = defineEmits(['emitValue'])

	//Variables
  const textarea = ref(null)
	const output = ref('')
	const valid = computed(() => props.validation && props.validation(output.value))

	/** Computed **/
	const controlInputError = computed(() => {
		return !valid.value && props.requiredField && props.error ? 'is-invalid' : ''
	})

  /** Methods **/
  const clean = () => {
    output.value = ''
  }

	//Watch
  watch(() => props.input, (value) => {
    if(value) output.value = value
  })
	watch(output, () => {
    textarea.value.style.height = '50px'
    textarea.value.style.height = `${textarea.value.scrollHeight}px`
    //Emit
    emit("emitValue", valid.value ? output.value : '')
	})
	watchEffect (() => {
		if(props.submitted) clean()
	})

	//Expose 
	defineExpose({clean})

</script>

<template>
	<textarea 
		ref="textarea"
		v-model.trim="output"
		:maxlength="maxLength"
		autocomplete="off"
		class="form-control eit-textarea eit-textarea-resize"
		:class="controlInputError"
		:placeholder="placeHolder"
	></textarea>
</template>