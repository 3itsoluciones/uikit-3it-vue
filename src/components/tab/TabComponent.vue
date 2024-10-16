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
  <div class="d-flex flex-column">
    <slot :name="`tab-${tab}`"></slot>
  </div>
</template>

<style lang="scss">
.eit-tabs {
  display: inline-flex;
  list-style: none;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  &__item {
    &__link {
      height: 48px;
      padding: 0 15px;
      text-decoration: none;
      transition-property: none;
      @extend .eit-flex--center;
      @extend .eit-font__size--x2;
      @extend .eit-border--all;
      @extend .eit-color--text-soft;
      @extend .eit-bg--color;
      @extend .eit-border--color;
      @include border-round(3px);
      &:hover,
      &:focus {
        @extend .eit-color--primary;
        @extend .eit-border--primary;
      }
      &.active {
        @extend .eit-color--primary;
        @extend .eit-border--primary;
        border-color: lch(from var(--eit-color-primary) l c h / 0.5);
        background-color: lch(from var(--eit-color-primary) l c h / 0.05);
      }
    }
  }
  &__badge {
    @extend .eit-border--all;
    @extend .eit-bg--primary;
    @extend .eit-color--white;
    @extend .eit-font__size--x1;
    @extend .eit-border--round-x3;
    padding: 0 5px;
    display: block;
    margin-left: 5px;
  }
  &--small {
    .eit-tabs__item__link {
      height: 35px;
    }
  }
}
</style>
