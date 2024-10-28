<script setup>
import { ref, watch, watchEffect } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

//Emits
const emit = defineEmits(['updatePaginator'])

//Variables
const input = ref(props.data.currentPage)

const nextPage = () => input.value++
const prevPage = () => input.value--
const handleChangePage = () => {
  if (input.value <= 0) input.value = 1
  if (input.value > props.data.finalPage) input.value = props.data.finalPage
}
const handleSelectInput = (event) => {
  event.target.select()
}

//Watch
watch(input, () => {
  if (input.value > 0 && input.value <= props.data.finalPage)
    emit('updatePaginator', input.value)
})

watchEffect(() => {
  if (props.data) input.value = props.data.currentPage
})
</script>
<template>
  <div class="eit-paginator gap-2">
    <button
      @click="prevPage"
      :disabled="data.currentPage === 1"
      class="eit-btn eit-btn--square eit-btn-outline--gray"
    >
      <font-awesome-icon icon="fa-solid fa-chevron-left" />
    </button>

    <input
      type="number"
      v-model.number="input"
      @input="handleChangePage"
      @keyup.enter="handleChangePage"
      @blur="handleChangePage"
      @focus="handleSelectInput"
      class="eit-input eit-paginator__input eit-font__size--x1 text-center"
      aria-label="Número de página"
    />
    <span class="eit-color--text eit-font__size--x1">
      de {{ data.finalPage }}
      <template v-if="data.finalPage === 1"> página </template>
      <template v-if="data.finalPage > 1"> páginas </template>
    </span>

    <button
      @click="nextPage"
      :disabled="data.currentPage === data.finalPage"
      class="eit-btn eit-btn--square eit-btn-outline--gray"
    >
      <font-awesome-icon icon="fa-solid fa-chevron-right" />
    </button>
  </div>
</template>

<style lang="scss">
  @use '@/assets/scss/core' as *;

  .eit-paginator {
    @extend .eit-flex--end;

    &__input {
      width: 60px;
      &[type='number']::-webkit-inner-spin-button,
      &[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
  
</style>
