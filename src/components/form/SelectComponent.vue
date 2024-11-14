<script setup>
import { ref, watch, computed, watchEffect } from 'vue'
import { createPopper } from '@popperjs/core'

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
	selectable: {
		type: Function,
    default: null
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
const placement = ref('bottom')
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

/** Methods **/
const handleSelectable = (option) => {
	return props.selectable ? props.selectable(option) : (option) => option.includes(option)
}

//Watch
watch(() => props.selected, (value) => {
  if (value) output.value = value
},{ immediate: true })

watch(() => output.value, (value) => { 
	if(value) emit('emitValue', valid.value ? output.value : null)
	else emit('emitValue', null)
}, { immediate: true })

watchEffect(() => {
  if (props.submitted) clean()
})

const clean = () => {
  output.value = props.multiple ? [] : null
}

const withPopper = (dropdownList, component, { width }) => {
	dropdownList.style.width = width
	const popper = createPopper(component.$refs.toggle, dropdownList, {
		placement: placement.value,
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, -1],
				},
			},
			{
				name: 'toggleClass',
				enabled: true,
				phase: 'write',
				fn({ state }) {
					component.$el.classList.toggle(
						'drop-up',
						state.placement === 'top'
					)
				},
			},
		],
	})
	return () => popper.destroy()
}

//Expose
defineExpose({ clean })
</script>

<template>
  <v-select
		:calculate-position="withPopper"
    :options="filterOptions"
    v-model="output"
    :label="labelCustom"
    :multiple="multiple"
    :placeholder="placeHolder"
    class="eit-select-component"
    :class="controlSelectError"
    :clearable="clearable"
    :disabled="props.isDisabled"
		:selectable="handleSelectable"
  >
    <template #no-options> No hay más resultados. </template>
  </v-select>
</template>

<style lang="scss">
  @use '@/assets/scss/core' as *;

	.eit-select-component {
		.vs__search::placeholder,
		.vs__dropdown-toggle,
		.vs__dropdown-menu {
			transition-property: none;
			@extend .eit-color--text-soft;
			@extend .eit-bg--color;
			.vs__dropdown-option--highlight {
				background-color: var(--eit-color-secondary);
			}
		}
		.vs__dropdown-toggle {
			transition-property: none;
			min-height: 48px;
			@extend .eit-border--all;
			@extend .eit-border--color;
			.vs__selected-options {
				flex-wrap: nowrap;
				align-items: center;
				width: 85%;
				.vs__selected {
					@extend .eit-color--text;
					line-clamp: 1;
					-webkit-line-clamp: 2;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}
			}
			.vs__actions {
				padding-right: 10px;
			}
		}
		.vs__clear, 
		.vs__open-indicator {
			@extend .eit-color--text-soft;
		}
		&.vs--disabled {
			.vs__dropdown-toggle,
			.vs__search::placeholder {
				@extend .eit-bg--color-soft;
			}
			.vs__clear, 
			.vs__open-indicator {
				@extend .eit-color--text-soft;
			}
		}
		&.form-error {
			.vs__dropdown-toggle {
				@extend .eit-border--all;
				@extend .eit-border--red;
			}
		}
		&.is-invalid {
			.vs__dropdown-toggle {
				@extend .eit-border--all;
				border-color: lch(from var(--eit-color-red) l c h / .5);
				&:focus {
					@extend .eit-box-shadow--none;
				}
			}
		}
		&.vs--searching {
			.vs__dropdown-toggle {
				.vs__selected-options {
					.vs__selected {
						display: none!important;
					}
				}
			}
		}
		&.vs--multiple {
			.vs__dropdown-toggle {
				@extend .eit-box-shadow--inset;
				.vs__selected-options {
					flex-wrap: wrap;
					.vs__selected {
						display: flex;
						align-items: center;
						transition-property: none;
						@extend .eit-color--text;
						@extend .eit-border--color;
						@extend .eit-bg--color-soft;
						height: 38px;
						.vs__deselect {
							padding: 5px 5px 5px 10px;
							svg {
								@extend .eit-color--blue;
							}
						}
					}
				}
			}
			.vs__dropdown-menu {
				.vs__dropdown-option--disabled {
					@extend .eit-opacity--disabled;
					@extend .eit-color--text-soft;
					@extend .eit-bg--color-mute;
				}
			}
		}
	}

	.vs__dropdown-menu {
		@extend .eit-bg--color;
		@extend .eit-border--left;
		@extend .eit-border--right;
		@extend .eit-border--bottom;
		@extend .eit-border--color;
		@extend .eit-color--text;
		.vs__dropdown-option {
			min-height: 35px;
			line-height: 35px;
		}
		.vs__dropdown-option--highlight {
			background-color: var(--eit-color-secondary);
		}
	}
	.vs__dropdown-menu {
		.vs__dropdown-option--highlight {
			background-color: var(--eit-color-secondary);
		}
	}


	.v-select.drop-up.vs--open .vs__dropdown-toggle {
		border-radius: 0 0 4px 4px;
		border-top-color: transparent;
		border-bottom-color: rgba(60, 60, 60, 0.26);
	}

	[data-popper-placement='top'] {
		border-radius: 4px 4px 0 0;
		border-top-style: solid;
		border-bottom-style: none;
		box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.15);
	}

</style>
