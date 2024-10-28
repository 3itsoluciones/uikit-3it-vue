<script setup>
import { computed } from 'vue'

//Props
const props = defineProps({
  className: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  iconClass: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
    default: 'Enviado...'
  },
  isDisabled: {
    type: Boolean,
    default: false
  }
})

//Emits
const emit = defineEmits(['emitEvent'])

//Computed
const calculateClass = computed(() => {
  return ['eit-btn', `${props.className}`]
})

//Methods
const emitEvent = (event) => {
  emit("emitEvent", event)
}
</script>

<template>
  <button
    @click="emitEvent($event)"
    :class="calculateClass"
    class="d-flex align-items-center justify-content-center gap-1"
    :disabled="props.isDisabled"
  >
    <template v-if="props.loading">
      <div class="spinner-border spinner-border-sm me-1"></div>
      {{ props.loadingText }}
    </template>
    <template v-if="!props.loading">
      <template v-if="props.icon">
        <font-awesome-icon :icon="props.icon" :class="iconClass"/>
      </template>
      {{ text }}
    </template>
  </button>
</template>

<style lang="scss">
  @use '@/assets/scss/core' as *;

.eit-btn {
  height: 48px;
  padding: 0 15px;
  font-weight: 700;
  border: 1px solid transparent;
  @extend .eit-flex--center;
  @extend .eit-font__size--x2;
  @include border-round(3px);
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  //Corporate
  &--primary {
    @extend .eit-bg--primary;
    &.active,
    &:not(:disabled):hover,
    &:not(:disabled):focus,
    &:not(:disabled):active {
      border-color: lch(from var(--eit-color-primary) calc(l - 5) c h);
      background-color: lch(from var(--eit-color-primary) calc(l - 5) c h);
    }
  }
  &--secondary {
    @extend .eit-bg--secondary;
    &.active,
    &:not(:disabled):hover,
    &:not(:disabled):focus,
    &:not(:disabled):active {
      border-color: lch(from var(--eit-color-secondary) calc(l - 5) c h);
      background-color: lch(from var(--eit-color-secondary) calc(l - 5) c h);
    }
  }
  &--tertiary {
    @extend .eit-bg--tertiary;
    &.active,
    &:not(:disabled):hover,
    &:not(:disabled):focus,
    &:not(:disabled):active {
      border-color: lch(from var(--eit-color-tertiary) calc(l - 5) c h);
      background-color: lch(from var(--eit-color-tertiary) calc(l - 5) c h);
    }
  }
  &--primary,
  &--secondary,
  &--tertiary,
  &--green,
  &--blue,
  &--yellow,
  &--red {
    color: var(--eit-color-white);
    @extend .eit-opacity--80;
    text-shadow: 0 0 5px lch(from var(--eit-color-black) l c h / 0.2);
  }
  &--green {
    @extend .eit-bg--green;
    &.active,
    &:not(:disabled):hover,
    &:not(:disabled):focus,
    &:not(:disabled):active {
      border-color: lch(from var(--eit-color-green) calc(l - 5) c h);
      background-color: lch(from var(--eit-color-green) calc(l - 5) c h);
    }
  }
  &--blue {
    @extend .eit-bg--blue;
    &.active,
    &:not(:disabled):hover,
    &:not(:disabled):focus,
    &:not(:disabled):active {
      border-color: lch(from var(--eit-color-blue) calc(l - 5) c h);
      background-color: lch(from var(--eit-color-blue) calc(l - 5) c h);
    }
  }
  &--yellow {
    @extend .eit-bg--yellow;
    &.active,
    &:not(:disabled):hover,
    &:not(:disabled):focus,
    &:not(:disabled):active {
      border-color: lch(from var(--eit-color-yellow) calc(l - 5) c h);
      background-color: lch(from var(--eit-color-yellow) calc(l - 5) c h);
    }
  }
  &--red {
    @extend .eit-bg--red;
    &.active,
    &:not(:disabled):hover,
    &:not(:disabled):focus,
    &:not(:disabled):active {
      border-color: lch(from var(--eit-color-red) calc(l - 5) c h);
      background-color: lch(from var(--eit-color-red) calc(l - 5) c h);
    }
  }
  &--gray {
    @extend .eit-color--text-soft;
    @extend .eit-bg--color-mute;
    @include transition('color 0.2s ease-in');
    &.active,
    &:not(:disabled):hover,
    &:not(:disabled):focus,
    &:not(:disabled):active {
      background-color: lch(from var(--eit-color-bg-mute) calc(l - 2) c h);
    }
  }
  &-outline {
    &--primary,
    &--secondary,
    &--tertiary,
    &--green,
    &--blue,
    &--yellow,
    &--red {
      background-color: transparent;
      @extend .eit-opacity--80;
      @include transition('all 0.2s ease-in');
      &.active,
      &:not(:disabled):hover,
      &:not(:disabled):focus,
      &:not(:disabled):active {
        color: var(--eit-color-white);
      }
    }
    &--gray {
      @extend .eit-color--text-soft;
      border-color: var(--eit-color-border);
      background-color: transparent;
      @include transition('background-color 0.2s ease-in, color 0.2s ease-in');
      &.active,
      &:not(:disabled):hover,
      &:not(:disabled):focus,
      &:not(:disabled):active {
        border-color: var(--eit-color-border-focus);
        @extend .eit-bg--color-mute;
      }
    }
    //Corporate
    &--primary {
      color: lch(from var(--eit-color-primary) calc(l + 10) c h);
      border-color: var(--eit-color-primary);
      &.active,
      &:not(:disabled):hover,
      &:not(:disabled):focus,
      &:not(:disabled):active {
        background-color: var(--eit-color-primary);
      }
    }
    &--secondary {
      @extend .eit-color--secondary;
      border-color: var(--eit-color-secondary);
      &.active,
      &:not(:disabled):hover,
      &:not(:disabled):focus,
      &:not(:disabled):active {
        background-color: var(--eit-color-secondary);
      }
    }
    &--tertiary {
      color: lch(from var(--eit-color-tertiary) calc(l - 10) c h);
      border-color: var(--eit-color-tertiary);
      &.active,
      &:not(:disabled):hover,
      &:not(:disabled):focus,
      &:not(:disabled):active {
        background-color: var(--eit-color-tertiary);
      }
    }
    //Others
    &--green {
      @extend .eit-color--green;
      border-color: lch(from var(--eit-color-green) l c h / 0.4);
      &.active,
      &:not(:disabled):hover,
      &:not(:disabled):focus,
      &:not(:disabled):active {
        border-color: var(--eit-color-green);
        @extend .eit-bg--green;
      }
    }
    &--yellow {
      @extend .eit-color--yellow;
      border-color: lch(from var(--eit-color-yellow) l c h / 0.4);
      &.active,
      &:not(:disabled):hover,
      &:not(:disabled):focus,
      &:not(:disabled):active {
        border-color: var(--eit-color-yellow);
        @extend .eit-bg--yellow;
      }
    }
    &--red {
      @extend .eit-color--red;
      border-color: lch(from var(--eit-color-red) l c h / 0.4);
      &.active,
      &:not(:disabled):hover,
      &:not(:disabled):focus,
      &:not(:disabled):active {
        border-color: var(--eit-color-red);
        @extend .eit-bg--red;
      }
    }
    &--blue {
      @extend .eit-color--blue;
      border-color: lch(from var(--eit-color-blue) l c h / 0.4);
      &.active,
      &:not(:disabled):hover,
      &:not(:disabled):focus,
      &:not(:disabled):active {
        border-color: var(--eit-color-blue);
        @extend .eit-bg--blue;
      }
    }
  }
  &--indicator {
    position: absolute;
    right: 8px;
    top: 8px;
    display: inline-flex;
    height: 10px;
    width: 10px;
    @include border-round(50%);
  }
  &--small {
    height: 35px;
  }
  &--square {
    width: 48px;
  }
  &--square-small {
    height: 35px;
    width: 35px;
  }
  &--120 {
    min-width: 120px;
  }
}
</style>
