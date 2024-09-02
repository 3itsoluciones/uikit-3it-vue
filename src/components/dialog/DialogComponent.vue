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
const emit = defineEmits(['emitSubmit', 'emitCloseDialog'])

const dialog = ref(null)

const showDialog = () => {
  dialog.value.showModal()
  dialog.value.classList.add('show')
}
const closeDialog = () => {
  dialog.value.close()
  dialog.value.classList.remove('show')
  emit('emitCloseDialog')
}
const handleSubmit = () => {
  emit('emitSubmit')
}

defineExpose({ showDialog, closeDialog })
</script>

<template>
  <dialog ref="dialog" class="eit-dialog" :class="props.className">
    <template v-if="loading">
      <LoadingComponent size="70" />
    </template>

    <template v-if="!loading">
      <div class="d-flex justify-content-between align-items-center">
        <slot name="head"></slot>
        <button @click="closeDialog" class="eit-dialog__close">
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