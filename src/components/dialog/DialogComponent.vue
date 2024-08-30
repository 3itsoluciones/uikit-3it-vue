<script setup>
	import { ref } from 'vue'

  //Components
  import ButtonComponent from '@/components/button/ButtonComponent.vue'
  import LoadingComponent from '@/components/loading/LoadingComponent.vue'

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
  const handleSubmit = () => {
    emit("emitSubmit")
  }

  defineExpose({showDialog, closeDialog})

</script>

<template>

  <dialog
     ref="dialog"
     class="eit-dialog"
     :class="props.className"
    >

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
      <div class="eit-dialog__body">
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
            className="eit-btn--primary" 
            text="Guardar"
            loadingText="Guardando..."
            :loading="loadingSubmit"
            @emitEvent="handleSubmit"
            :isDisabled="disabledSubmit"
          />
        </template>
      </div>
    </template>

  </dialog>
</template>

<style lang="scss">

  .eit-dialog {
    display: none;
    flex-direction: column;
    width: 500px;
    padding: 20px;
    overflow: visible;
    border: 1px solid lch(from var(--eit-color-border-focus) l c h / 0.5);
    @extend .eit-border--round-x3;
    @extend .eit-bg--color;
    opacity: 0;
    transform-origin: center;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transform: scale(0.95);

    &__body {
      position: relative;
      flex: 1;
      overflow-y: auto;
      @extend .eit-scroll--custom;
    }

    &__close {
      @extend .eit-font__size--x6;
      @extend .eit-color--text-soft;
      border: none;
      background-color: transparent;
    }
    &--top {
      margin-top: 50px;
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