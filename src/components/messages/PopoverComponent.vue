<script setup>
import { ref, computed } from 'vue'

//Props
const props = defineProps({
  type: {
    type: String,
    required: true,
    default: 'info',
  },
  data: {
    type: Object,
    required: true,
  },
  position: {
    type: String,
    default: 'bottom',
  },
  visible: {
    type: String,
    default: '5000',
  },
})

//VARIABLES
const popover = ref(null)

//Computed
const configPopover = computed(() => {
  return {
    [props.position]: props.position,
  }
})

/**Methods**/

//Handles
const handleShowPopover = () => {
  popover.value.showPopover()
}
const handleClosePopover = () => {
  popover.value.hidePopover()
}
defineExpose({ handleShowPopover, handleClosePopover })
</script>
<template>
  <div ref="popover" class="eit-popover__container" :class="configPopover" popover="manual">
    <div class="eit-popover box-shadow" :class="`eit-popover--${props.data.type}`">
      <div class="d-flex">
        <div class="flex-shrink-0 eit-popover__left">
          <span
            v-if="props.type === 'success'"
            key="success"
            class="eit-popover__icon eit-font__size--x7"
          >
            <font-awesome-icon icon="fa-solid fa-circle-check" />
          </span>
          <span
            v-if="props.type === 'error'"
            key="error"
            class="eit-popover__icon eit-font__size--x7"
          >
            <font-awesome-icon icon="fa-solid fa-circle-xmark" />
          </span>
          <span
            v-if="props.type === 'warning'"
            key="warning"
            class="eit-popover__icon eit-font__size--x7"
          >
            <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
          </span>
          <span
            v-if="props.type === 'info'"
            key="info"
            class="eit-popover__icon eit-font__size--x7"
          >
            <font-awesome-icon icon="fa-solid fa-circle-info" />
          </span>
        </div>
        <div class="flex-grow-1 ms-3">
          <div class="d-flex">
            <div class="flex-grow-1 me-3">
              <p class="eit-popover__title">
                <template v-if="props.data.code">
                  {{ props.data.code }}
                </template>
                {{ props.data.title }}
              </p>
              <p class="eit-popover__text">{{ props.data.message }}</p>
            </div>
            <div class="flex-shrink-0">
              <a
                @click="handleClosePopover()"
                href="javascript:"
                class="eit-popover__close"
              >
                <font-awesome-icon icon="fa-solid fa-xmark" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.eit-popover__container {
  position: fixed;
  padding: 1rem;
  right: 0;
  z-index: 2000;
  @include transition('opacity 0.3s ease-in-out');
  @include border-round(10px);
  @extend .eit-bg--color;
  @media (max-width: 767px) {
  width: 100%;
  }
  &.top {
    top: 0;
  }
  &.bottom {
    bottom: 0;
  }
  &.show {
    opacity: 1;
    visibility: visible;
  }
  &.hide {
    opacity: 0;
  }
  &.hidden {
    visibility: hidden;
  }
}

.eit-popover {
  width: 400px;
  padding: 15px;
  border: 1px solid;
  @include border-round(10px);
  @media (max-width: 767px) {
    width: 100%;
  }
  &__left {
    width: 25px;
  }
  &__close {
    @extend .eit-color--text;
  }
  &__title,
  &__text {
    margin-bottom: 0;
  }
  &__title {
    @extend .eit-font--primary;
    @extend .eit-font__size--x3;
  }
  &__text {
    @extend .eit-font--primary;
    @extend .eit-font__size--x1;
  }
  &__close {
    @include transition('color 0.2s ease-in-out');
    &:hover {
      @extend .eit-color--text;
    }
  }
  &--success {
    & {
      border-color: lch(from var(--eit-color-green) l c h / 0.2);
      background-color: lch(from var(--eit-color-green) l c h / 0.2);
    }
    .eit-popover__title,
    .eit-popover__icon {
      @extend .eit-color--green;
    }
    .eit-popover__text {
      @extend .eit-color--text;
    }
  }
  &--error {
    & {
      border-color: lch(from var(--eit-color-red) l c h / 0.2);
      background-color: lch(from var(--eit-color-red) l c h / 0.2);
    }
    .eit-popover__title,
    .eit-popover__icon {
      @extend .eit-color--red;
    }
    .eit-popover__text {
      @extend .eit-color--text;
    }
  }
  &--warning {
    & {
      border-color: lch(from var(--eit-color-yellow) l c h / 0.2);
      background-color: lch(from var(--eit-color-yellow) l c h / 0.2);
    }
    .eit-popover__title,
    .eit-popover__icon {
      @extend .eit-color--yellow;
    }
    .eit-popover__text {
      @extend .eit-color--text;
    }
  }
  &--info {
    & {
      border-color: lch(from var(--eit-color-blue) l c h / 0.2);
      background-color: lch(from var(--eit-color-blue) l c h / 0.2);
    }
    .eit-popover__title,
    .eit-popover__icon {
      @extend .eit-color--blue;
    }
    .eit-popover__text {
      @extend .eit-color--text;
    }
  }
}
</style>
