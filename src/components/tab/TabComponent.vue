<script setup>
import { ref } from 'vue'

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
  className: {
    type: String,
    default: ''
  }
})

/** Computed **/
const controlNumber = (number) => {
  return number < 99 ? number : '+99'
}

/** Variables **/
const tab = ref(0)

/** Methods **/
const handleActiveTab = (index) => {
  tab.value = index
}
</script>

<template>
  <div class="d-flex justify-content-between align-items-center">
    <ul :class="`eit-tabs ${props.className}`">
      <li v-for="(item, index) in data" :key="index" class="eit-tabs__item">
        <a
          href="javascript:"
          @click="handleActiveTab(index)"
          class="eit-tabs__item__link"
          :class="tab === index ? 'active' : ''"
        >
          {{ item.name }}
          <template v-if="item.number">
            <span class="eit-tabs__badge">
              {{ controlNumber(item.number) }}
            </span>
          </template>
        </a>
      </li>
    </ul>
    <slot name="dropdown"></slot>
  </div>
  <div class="row">
    <div class="col-12">
      <slot :name="`tab-${tab}`"></slot>
    </div>
  </div>
</template>