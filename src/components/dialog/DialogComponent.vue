<script setup>
	import { ref, onMounted } from 'vue'

  //Components
  import {
    ButtonComponent,
    LoadingComponent
  } from '@/components'

	//Props
	const props = defineProps({
    className: {
			type: String,
      default: ''
		},
    loading: {
			type: Boolean,
      default: false
		},
    loadingSubmit: {
			type: Boolean,
      default: false
		},
    btnSubmit: {
      type: Boolean,
      default: false
    },
    disabledSubmit: {
      type: Boolean,
      default: false
    },
    scrollable: {
			type: Boolean,
      default: false
		},
    btnSubmitConfig: {
      type: Object,
      default: () => ({
        text: 'Guardar',
        loadingText: 'Guardando...',
        className: 'eit-btn--primary'
      })
    }
	})

	//Emits
	const emit = defineEmits([
		'emitSubmit',
    'emitCloseDialog'
	])

  const dialog = ref(null)

  const showDialog = () => {
    dialog.value.showModal()
    dialog.value.classList.add('show')
  }
  const closeDialog = () => {
    dialog.value.close()
    dialog.value.classList.remove('show')
    emit("emitCloseDialog")
  }
  const handleKeyUp = (event) => {
    if(event.key === 'Escape') closeDialog()
  }
  const handleSubmit = () => {
    emit("emitSubmit")
  }

  onMounted(() => {
    document.addEventListener('keyup', handleKeyUp)
  })

  defineExpose({showDialog, closeDialog})

</script>

<template>

  <dialog
     ref="dialog"
     class="eit-dialog"
     :class="props.className"
     @keyup.esc="closeDialog"
    >
    <div class="eit-dialog__content">
      <template v-if="loading">
        <LoadingComponent size="70" />
      </template>
  
      <template v-if="!loading">
        <div class="d-flex justify-content-between align-items-center">
          <slot name="head"></slot>
          <button 
            @click="closeDialog"
            class="eit-dialog__close"
          >
            <font-awesome-icon :icon="['fas', 'xmark']" />
          </button>
        </div>
        <div :class="`eit-dialog__body ${scrollable ? 'eit-dialog__body--scroll' : ''}`">
          <slot name="content"></slot>
        </div>
        <div class="d-flex gap-2 justify-content-end mt-3">
          <ButtonComponent
            @click="closeDialog"
            className="eit-btn-outline--gray" 
            text="Volver"
          />
          <template v-if="props.btnSubmit">
            <ButtonComponent
              :className="props.btnSubmitConfig.className" 
              :text="props.btnSubmitConfig.text"
              :loadingText="props.btnSubmitConfig.loadingText"
              :loading="loadingSubmit"
              @emitEvent="handleSubmit"
              :isDisabled="disabledSubmit"
            />
          </template>
        </div>
      </template>
    </div>
    

  </dialog>
</template>

<style lang="scss">
  @use '@/assets/scss/core' as *;

  .eit-dialog {
    display: none;
    flex-direction: column;
    width: 500px;
    overflow: visible;
    border: 1px solid lch(from var(--eit-color-border-focus) l c h / 0.5);
    opacity: 0;
    transform-origin: center;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transform: scale(0.95);
    position: relative;
    background: none;
    border: 0;
    padding: 0;

    &__content {
      display: flex;
      flex-direction: column;
      padding: 20px;
      @extend .eit-border--round-x3;
      @extend .eit-bg--color;
    }

    &__body {
      flex: 1;
      &--scroll {
        overflow-y: auto;
        @extend .eit-scroll--custom;
      }
    }

    &__close {
      @extend .eit-font__size--x6;
      @extend .eit-color--text-soft;
      border: none;
      background-color: transparent;
    }
    &--top {
      margin-top: 25px;
      @media (min-width: 768px) {
        margin-top: 50px;
      }     
    }
    &--large {
      width: 800px;
    }
    &--small {
      width: 300px;
    }
    &--fullscreen {
      width: 100%;
      height: 100%;
    }
    &.show {
      display: flex;
      opacity: 1;
      transform: scale(1);
      &::backdrop {
        opacity: 1;
      }    
    }
    &::backdrop {
      background-color: lch(from var(--eit-color-black) l c h / 0.5);
      opacity: 0;
    }
  }

</style>