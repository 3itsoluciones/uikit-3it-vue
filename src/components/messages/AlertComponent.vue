<script setup>
//Props
const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  },
  message: {
    type: String,
    required: true,
    default: ''
  },
  icon: {
    type: String,
    default: 'info'
  },
  iconClass: {
    type: String,
    default: ''
  },
  animation: {
    type: Object,
    default: () => ({ active: false, show: false })
  }
})
</script>

<template>
  <div
    :class="`eit-alert eit-alert--${props.type} ${props.animation.active ? 'eit-alert--animation' : 'eit-alert--default'} ${props.animation.show ? 'eit-alert--animation--show' : ''}`"
  >
    <div class="d-flex align-items-center">
      <div class="flex-shrink-0 d-flex align-items-center eit-alert__icon me-2">
        <font-awesome-icon :icon="props.icon" :class="iconClass" />
      </div>
      <div class="flex-grow-1 eit-alert__text" v-html="props.message"></div>
    </div>
  </div>
</template>

<style lang="scss">
  @use '@/assets/scss/core' as *;
  
  .eit-alert {
    line-height: 16px;
    display: flex;
    align-items: center;
    padding: 5px 10px 5px 5px;
    color: lch(from var(--eit-color-text) l c h / 0.8);
    @extend .eit-border--all;
    @extend .eit-font--primary;
    @extend .eit-font__size--x2;
    @include border-round(30px 3px 3px 30px);
    @include transition('all 0.2s ease');
    &__icon {
      height: 40px;
      width: 40px;
      @extend .eit-font__size--x3;
      @extend .eit-flex--center;
      @include border-round(50%);
    }
    &__text {
      @extend .eit-font__line-clamp--2;
      @media (max-width: 767px) {
        font-size: var(--eit-font-size-x1);
      }
    }

    &--normal {
      @extend .eit-border--color-focus;
      @extend .eit-bg--color-soft;
      i {
        @extend .eit-color--text-soft;
      }
    }
    &--primary {
      border-color: lch(from var(--eit-color-primary) l c h / 0.3);
      background-color: lch(from var(--eit-color-primary) l c h / 0.05);
      .eit-alert__icon {
        background-color: lch(from var(--eit-color-primary) l c h / 0.2);
        @extend .eit-color--primary;
      }
    }
    &--secondary {
      border-color: lch(from var(--eit-color-secondary) l c h / 0.3);
      background-color: lch(from var(--eit-color-secondary) l c h / 0.05);
      .eit-alert__icon {
        background-color: lch(from var(--eit-color-secondary) l c h / 0.2);
        @extend .eit-color--secondary;
      }
    }
    &--tertiary {
      border-color: lch(from var(--eit-color-tertiary) l c h / 0.3);
      background-color: lch(from var(--eit-color-tertiary) l c h / 0.05);
      .eit-alert__icon {
        background-color: lch(from var(--eit-color-tertiary) l c h / 0.2);
        @extend .eit-color--tertiary;
      }
    }
    &--success {
      border-color: lch(from var(--eit-color-green) l c h / 0.3);
      background-color: lch(from var(--eit-color-green) l c h / 0.05);
      .eit-alert__icon {
        background-color: lch(from var(--eit-color-green) l c h / 0.2);
        @extend .eit-color--green;
      }
    }
    &--warning {
      border-color: lch(from var(--eit-color-yellow) l c h / 0.3);
      background-color: lch(from var(--eit-color-yellow) l c h / 0.05);
      .eit-alert__icon {
        background-color: lch(from var(--eit-color-yellow) l c h / 0.2);
        @extend .eit-color--yellow;
      }
    }
    &--error {
      border-color: lch(from var(--eit-color-red) l c h / 0.2);
      background-color: lch(from var(--eit-color-red) l c h / 0.05);
      .eit-alert__icon {
        background-color: lch(from var(--eit-color-red) l c h / 0.2);
        @extend .eit-color--red;
      }
    }
    &--info {
      border-color: lch(from var(--eit-color-blue) l c h / 0.2);
      background-color: lch(from var(--eit-color-blue) l c h / 0.05);
      .eit-alert__icon {
        background-color: lch(from var(--eit-color-blue) l c h / 0.2);
        @extend .eit-color--blue;
      }
    }
    &--light {
      border-color: lch(from var(--eit-color-text) l c h / 0.2);
      background-color: lch(from var(--eit-color-text) l c h / 0.05);
      .eit-alert__icon {
        background-color: lch(from var(--eit-color-text) l c h / 0.2);
        @extend .eit-color--text-soft;
      }
    }
    &--animation {
      height: 0;
      overflow-y: hidden;
      opacity: 0;
      &--show {
        height: 50px;
        opacity: 1;
      }
    }
    &--defaul {
      min-height: 50px;
    }
  }
</style>
